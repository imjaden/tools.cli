// lock-screen-plugin@1.4.js
// v1.4(2026-09-09): 成套主题色系统
//   - 锁屏界面散落的硬编码颜色统一抽取为 CSS 变量（背景渐变 / 强调色 / 文字 / 错误 /
//     PIN 边框 / 键盘按钮 / 诗词面板标题渐变 等），保证视觉成套
//   - 内置 4 套预设主题：
//       violet-star   紫蓝星辰（默认）
//       midnight-blue  深蓝夜空
//       forest-green   墨绿
//       sunset-amber   暖橙
//   - 新增配置项：
//       config.defaultTheme   默认主题名（字符串），未匹配回退 violet-star
//       config.themes         自定义主题（对象），形如 { 'my-theme': { label:'我的', vars: {'--lock-accent':'#fff', ...} } }
//       config.themeSwitcher  { enabled: true } 控制是否渲染锁屏界面主题下拉
//       config.onThemeChange  主题切换回调 (name) => {}
//   - 持久化：切换后写入 localStorage.lockScreenTheme，优先级
//       localStorage.lockScreenTheme > config.defaultTheme > 'violet-star'
//   - 主题下拉位于锁屏界面左上角（避开右上角诗词面板），z-index:130
// v1.3(2026-09-08): 今日诗词悬浮面板能力
//   config.poetryPanel = { enabled: true, defaultOpen: true }
//     - 右上角 fixed 悬浮面板，展示完整诗词（todayInfo.poemParagraphs 全部段落）
//     - 标题栏可点击折叠/展开，defaultOpen 控制初始态（默认展开）
//     - z-index:140，高于锁屏遮罩 z-50：锁屏时也悬浮可见，位于右上角不遮挡居中 PIN 键盘
//   config.todayInfo（null 时面板不渲染）：
//   {
//     dateLine: '丙午年（马）七月十七 · 白露',
//     poemTitle: '月夜忆舍弟', poemAuthor: '杜甫',
//     poemParagraphs: ['戍鼓断人行...', '露从今夜白...', ...]  // 完整诗词段落
//   }
// v1.1: 基础锁屏（PIN=mmddHH、自动锁定、键盘输入、本地存储解锁状态）
class LockScreen {
  // 内置预设主题（id -> 中文标签）；CSS 变量块在 addStyles() 注入
  static THEME_PRESETS = {
    'violet-star':   { label: '紫蓝星辰' },
    'midnight-blue': { label: '深蓝夜空' },
    'forest-green':  { label: '墨绿' },
    'sunset-amber':  { label: '暖橙' }
  };

  constructor(options = {}) {
    // 默认配置
    this.config = {
      lockDuration: 30 * 60 * 1000, // 30分钟自动锁定
      pinLength: 6, // PIN码长度
      containerId: 'lock-screen-container',
      title: '请输入PIN码',
      todayInfo: null, // 今日信息（农历/节气/推荐诗词），null 不渲染
      poetryPanel: { enabled: true, defaultOpen: true }, // 右上角悬浮诗词面板
      defaultTheme: 'violet-star', // 默认主题名
      themes: null, // 自定义主题（对象），覆盖/扩展预设
      themeSwitcher: { enabled: true }, // 锁屏界面主题下拉开关
      onLock: null,  // 锁定回调函数
      onUnlock: null, // 解锁回调函数
      onThemeChange: null, // 主题切换回调 (name) => {}
      ...options
    };

    this.currentPin = [];
    this.lockTimer = null;
    this.isLocked = false;

    // 合并主题清单（预设 + config.themes 自定义）
    this.themes = Object.assign(
      {},
      LockScreen.THEME_PRESETS,
      this.config.themes || {}
    );

    // 初始化
    this.init();
  }

  // 初始化锁屏功能
  init() {
    // 创建锁屏DOM
    this.createLockScreenDOM();

    // 创建右上角今日诗词悬浮面板
    this.createPoetryPanelDOM();

    // 获取DOM元素
    this.lockScreen = document.getElementById(this.config.containerId);
    this.pinInputs = document.getElementById('pin-inputs');
    this.errorMessage = document.getElementById('lock-error-message');
    this.deleteBtn = document.getElementById('pin-delete-btn');
    this.timestampEl = document.getElementById('lock-timestamp');

    // 绑定事件
    this.bindEvents();

    // 应用初始主题（localStorage > config.defaultTheme > violet-star）
    this.applyTheme(this.getInitialTheme(), false);

    // 渲染主题切换下拉
    this.renderThemeSwitcher();

    // 初始化时间戳
    this.updateTimestamp();
    setInterval(() => this.updateTimestamp(), 1000);

    // 检查是否需要锁定
    this.checkLockStatus();
  }

  // 计算初始主题（localStorage > config.defaultTheme > violet-star，未匹配回退）
  getInitialTheme() {
    const stored = localStorage.getItem('lockScreenTheme');
    if (stored && this.themes[stored]) return stored;
    const def = this.config.defaultTheme;
    if (def && this.themes[def]) return def;
    return 'violet-star';
  }

  // 应用主题：设置 data-lock-theme 属性 + 持久化（可选）+ 同步下拉 + 回调
  applyTheme(name, persist = true) {
    // 未知主题回退默认
    if (!this.themes[name]) name = 'violet-star';
    this.activeTheme = name;
    document.documentElement.setAttribute('data-lock-theme', name);
    if (persist) localStorage.setItem('lockScreenTheme', name);
    // 同步下拉选中态
    const sel = document.getElementById('lock-theme-select');
    if (sel) sel.value = name;
    // 回调
    if (typeof this.config.onThemeChange === 'function') {
      this.config.onThemeChange(name);
    }
  }

  // 渲染锁屏界面主题下拉（themeSwitcher.enabled !== false 且 themes>1 时渲染）
  renderThemeSwitcher() {
    const sw = this.config.themeSwitcher || {};
    if (sw.enabled === false) return;
    if (Object.keys(this.themes).length < 2) return;
    if (document.getElementById('lock-theme-switcher')) return;

    const wrap = document.createElement('div');
    wrap.id = 'lock-theme-switcher';
    wrap.style.cssText = 'position:absolute;top:20px;left:20px;z-index:130;display:flex;align-items:center;gap:6px;background:rgba(255,255,255,0.10);padding:6px 10px;border-radius:8px;backdrop-filter:blur(6px);';
    const icon = document.createElement('span');
    icon.textContent = '🎨';
    icon.style.cssText = 'font-size:12px;';
    const sel = document.createElement('select');
    sel.id = 'lock-theme-select';
    sel.style.cssText = 'background:rgba(255,255,255,0.15);color:var(--lock-text);border:1px solid var(--lock-pin-border);border-radius:6px;padding:4px 8px;font-size:12px;outline:none;cursor:pointer;';
    Object.keys(this.themes).forEach(id => {
      const opt = document.createElement('option');
      opt.value = id;
      opt.textContent = this.themes[id].label || id;
      sel.appendChild(opt);
    });
    sel.value = this.activeTheme;
    sel.addEventListener('change', () => this.applyTheme(sel.value));
    wrap.appendChild(icon);
    wrap.appendChild(sel);
    this.lockScreen.appendChild(wrap);
  }

  // 构建右上角悬浮诗词面板 HTML（poetryPanel.enabled 且有 todayInfo 时返回，否则空串）
  buildPoetryPanelHTML() {
    const panel = this.config.poetryPanel || {};
    if (!panel.enabled) return '';
    const info = this.config.todayInfo;
    if (!info) return '';

    // 完整诗词段落：优先 poemParagraphs，退回 poemLine 单联
    const paragraphs = (info.poemParagraphs && info.poemParagraphs.length)
      ? info.poemParagraphs
      : (info.poemLine ? [info.poemLine] : []);
    const poemHead = (info.poemTitle || info.poemAuthor)
      ? `<div style="text-align:center;margin-bottom:10px;">` +
        (info.poemTitle ? `<span style="font-weight:700;font-size:16px;color:var(--lock-panel-text);">《${info.poemTitle}》</span>` : '') +
        (info.poemAuthor ? `<span style="color:var(--lock-panel-muted);margin-left:8px;font-size:13px;">${info.poemAuthor}</span>` : '') +
        `</div>` : '';
    const paras = paragraphs.map(p =>
      `<p style="margin:6px 0;line-height:1.9;color:var(--lock-panel-text);font-family:'STSong','SimSun',serif;text-align:center;">${p}</p>`
    ).join('');
    if (!poemHead && !paras) return '';

    const dateLine = info.dateLine
      ? `<span style="opacity:.85;font-weight:400;font-size:12px;margin-left:6px;">${info.dateLine}</span>` : '';

    return `
      <div id="lock-poetry-panel" style="position:fixed;top:20px;right:20px;z-index:140;width:340px;max-width:calc(100vw - 40px);max-height:70vh;display:flex;flex-direction:column;background:#ffffff;border-radius:12px;box-shadow:0 10px 40px rgba(0,0,0,0.15);overflow:hidden;">
        <div id="lock-poetry-panel-head" style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;cursor:pointer;background:var(--lock-panel-header-gradient);color:#ffffff;font-weight:600;font-size:14px;user-select:none;">
          <span>📜 今日诗词${dateLine}</span>
          <span id="lock-poetry-toggle" style="font-size:12px;line-height:1;margin-left:8px;">▾</span>
        </div>
        <div id="lock-poetry-panel-body" style="padding:14px 16px;overflow:auto;">
          ${poemHead}
          ${paras}
        </div>
      </div>
    `;
  }

  // 创建右上角悬浮诗词面板
  createPoetryPanelDOM() {
    if (document.getElementById('lock-poetry-panel')) return;
    const html = this.buildPoetryPanelHTML();
    if (!html) return;
    document.body.insertAdjacentHTML('beforeend', html);

    const head = document.getElementById('lock-poetry-panel-head');
    const body = document.getElementById('lock-poetry-panel-body');
    const toggle = document.getElementById('lock-poetry-toggle');
    const panel = this.config.poetryPanel || {};

    const applyOpen = (open) => {
      body.style.display = open ? 'block' : 'none';
      toggle.textContent = open ? '▾' : '▸';
    };
    // 初始态：defaultOpen !== false 即展开
    applyOpen(panel.defaultOpen !== false);
    head.addEventListener('click', () => {
      applyOpen(body.style.display === 'none');
    });
  }

  // 创建锁屏所需的DOM元素
  createLockScreenDOM() {
    // 检查元素是否已存在
    if (document.getElementById(this.config.containerId)) return;

    const lockScreenHTML = `
      <div id="${this.config.containerId}" class="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 hidden">
        <div class="text-center mb-10">
          <i class="fa fa-lock text-primary text-4xl mb-4"></i>
          <h2 class="text-2xl font-bold lock-title">${this.config.title}</h2>
          <p class="mt-2" id="lock-timestamp"></p>
        </div>

        <!-- PIN码输入框 -->
        <div class="flex justify-center gap-3 mb-10" id="pin-inputs">
          ${Array(this.config.pinLength).fill().map(() =>
            `<input type="text" maxlength="1" class="pin-input" readonly>`
          ).join('')}
        </div>

        <!-- 数字键盘 -->
        <div class="grid grid-cols-3 gap-4">
          <button class="keypad-btn" data-number="1">1</button>
          <button class="keypad-btn" data-number="2">2</button>
          <button class="keypad-btn" data-number="3">3</button>
          <button class="keypad-btn" data-number="4">4</button>
          <button class="keypad-btn" data-number="5">5</button>
          <button class="keypad-btn" data-number="6">6</button>
          <button class="keypad-btn" data-number="7">7</button>
          <button class="keypad-btn" data-number="8">8</button>
          <button class="keypad-btn" data-number="9">9</button>
          <button class="keypad-btn opacity-0" disabled></button>
          <button class="keypad-btn" data-number="0">0</button>
          <button class="keypad-btn" id="pin-delete-btn">
            <i class="fa fa-backspace text-xl"></i>
          </button>
        </div>

        <div class="mt-8 text-sm hidden" id="lock-error-message">
          PIN码错误，请重试
        </div>
      </div>
    `;

    // 添加到body
    document.body.insertAdjacentHTML('beforeend', lockScreenHTML);

    // 添加必要的样式
    this.addStyles();
  }

  // 添加所需的CSS样式（主题色统一由 CSS 变量承载）
  addStyles() {
    const style = document.createElement('style');
    // 自定义主题变量块
    const customBlocks = this.config.themes
      ? Object.entries(this.config.themes).map(([id, t]) =>
          `[data-lock-theme="${id}"]{${Object.entries(t.vars || {}).map(([k, v]) => `${k}:${v}`).join(';')}}`
        ).join('')
      : '';

    style.textContent = `
      /* ===== 主题变量：默认（=violet-star） ===== */
      :root,
      [data-lock-theme="violet-star"] {
        --lock-bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        --lock-accent: #a78bfa;
        --lock-text: #ffffff;
        --lock-text-muted: rgba(255,255,255,0.72);
        --lock-error: #ef4444;
        --lock-pin-border: rgba(255,255,255,0.22);
        --lock-pin-filled-bg: rgba(167,139,250,0.18);
        --lock-keypad-bg: rgba(255,255,255,0.10);
        --lock-keypad-hover: rgba(255,255,255,0.20);
        --lock-keypad-text: #ffffff;
        --lock-panel-header-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        --lock-panel-text: #2c3e50;
        --lock-panel-muted: #7f8c8d;
      }
      [data-lock-theme="midnight-blue"] {
        --lock-bg-gradient: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        --lock-accent: #667eea;
        --lock-pin-filled-bg: rgba(102,126,234,0.18);
        --lock-panel-header-gradient: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%);
      }
      [data-lock-theme="forest-green"] {
        --lock-bg-gradient: linear-gradient(135deg, #0b3d2e 0%, #145a32 50%, #1e6b3e 100%);
        --lock-accent: #3fb985;
        --lock-pin-filled-bg: rgba(63,185,133,0.18);
        --lock-panel-header-gradient: linear-gradient(135deg, #0b3d2e 0%, #1e6b3e 100%);
      }
      [data-lock-theme="sunset-amber"] {
        --lock-bg-gradient: linear-gradient(135deg, #3d1f0e 0%, #8a3c1a 50%, #d97706 100%);
        --lock-accent: #fbbf24;
        --lock-pin-filled-bg: rgba(251,191,36,0.18);
        --lock-panel-header-gradient: linear-gradient(135deg, #3d1f0e 0%, #d97706 100%);
      }
      ${customBlocks}

      /* ===== 锁屏容器（ID 选择器覆盖宿主页 Tailwind bg-* 类） ===== */
      #lock-screen-container {
        background: var(--lock-bg-gradient);
        color: var(--lock-text);
      }
      .lock-title { color: var(--lock-text); }
      #lock-timestamp { color: var(--lock-text-muted); }
      #lock-error-message { color: var(--lock-error); }

      .pin-input {
        width: 3rem;
        height: 3rem;
        border-radius: 0.5rem;
        border: 2px solid var(--lock-pin-border);
        background: transparent;
        color: var(--lock-text);
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        outline: none;
        transition: all 0.3s;
      }
      .pin-input-filled {
        border-color: var(--lock-accent);
        background-color: var(--lock-pin-filled-bg);
      }
      .pin-input-error {
        border-color: var(--lock-error) !important;
        animation: lock-shake 0.3s;
      }
      @keyframes lock-shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
      }
      .keypad-btn {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        font-weight: medium;
        background-color: var(--lock-keypad-bg);
        color: var(--lock-keypad-text);
        border: none;
        cursor: pointer;
        transition: all 0.3s;
      }
      .keypad-btn:hover {
        background-color: var(--lock-keypad-hover);
      }
      .text-primary {
        color: var(--lock-accent);
      }
      .hidden {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  // 绑定事件处理程序
  bindEvents() {
    // 数字键盘事件
    document.querySelectorAll('.keypad-btn[data-number]').forEach(btn => {
      btn.addEventListener('click', () => this.handleNumberInput(btn.dataset.number));
    });

    // 删除按钮事件
    this.deleteBtn.addEventListener('click', () => this.handleDelete());

    // 键盘事件支持
    document.addEventListener('keydown', (e) => {
      // 只有锁屏界面显示时才响应键盘输入
      if (!this.lockScreen.classList.contains('hidden')) {
        // 数字键
        if (/^\d$/.test(e.key)) {
          e.preventDefault();
          this.handleNumberInput(e.key);
        }
        // 删除键
        else if (e.key === 'Backspace' || e.key === 'Delete') {
          e.preventDefault();
          this.handleDelete();
        }
        // 回车键
        else if (e.key === 'Enter' && this.currentPin.length === this.config.pinLength) {
          e.preventDefault();
          this.checkPin();
        }
      }
    });
  }

  // 处理数字输入
  handleNumberInput(number) {
    if (this.currentPin.length < this.config.pinLength) {
      this.currentPin.push(number);
      this.updatePinInputs();
    }

    if (this.currentPin.length === this.config.pinLength) {
      this.checkPin();
    }
  }

  // 处理删除
  handleDelete() {
    if (this.currentPin.length > 0) {
      this.currentPin.pop();
      this.updatePinInputs();
      this.errorMessage.classList.add('hidden');
    }
  }

  // 更新PIN输入框显示
  updatePinInputs() {
    const inputs = this.pinInputs.querySelectorAll('input');
    inputs.forEach((input, index) => {
      input.value = this.currentPin[index] || '';
      if (this.currentPin[index]) {
        input.classList.add('pin-input-filled');
      } else {
        input.classList.remove('pin-input-filled');
      }
    });
  }

  // 更新时间戳
  updateTimestamp() {
    const now = new Date();
    this.timestampEl.textContent = now.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).replace(/\//g, '/').replace(',', '');
  }

  // 检查PIN码是否正确
  checkPin() {
    // 获取当前日期的mmddHH作为正确PIN码
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const correctPin = month + day + hour;

    const enteredPin = this.currentPin.join('');

    if (enteredPin === correctPin) {
      // 解锁成功
      this.unlock();
    } else {
      // 解锁失败
      this.errorMessage.classList.remove('hidden');

      // 震动效果
      const inputs = this.pinInputs.querySelectorAll('input');
      inputs.forEach(input => {
        input.classList.add('pin-input-error');
        setTimeout(() => input.classList.remove('pin-input-error'), 500);
      });

      // 清空输入
      setTimeout(() => {
        this.currentPin = [];
        this.updatePinInputs();
      }, 1000);
    }
  }

  // 锁定屏幕，新增回调函数参数
  lock(callback) {
    this.lockScreen.classList.remove('hidden');
    this.currentPin = [];
    this.updatePinInputs();
    this.isLocked = true;
    this.clearLockTimer();

    // 执行回调函数 - 优先使用方法参数，其次使用配置中的回调
    const lockCallback = callback || this.config.onLock;
    if (typeof lockCallback === 'function') {
      lockCallback();
    }
  }

  // 解锁屏幕，新增回调函数参数
  unlock(callback) {
    this.lockScreen.classList.add('hidden');
    this.errorMessage.classList.add('hidden');
    this.currentPin = [];
    this.updatePinInputs();
    this.isLocked = false;

    // 记录解锁时间
    localStorage.setItem('lastUnlockTime', Date.now().toString());

    // 启动锁定定时器
    this.startLockTimer();

    // 执行回调函数 - 优先使用方法参数，其次使用配置中的回调
    const unlockCallback = callback || this.config.onUnlock;
    if (typeof unlockCallback === 'function') {
      unlockCallback();
    }
  }

  // 检查锁定状态
  checkLockStatus() {
    const lastUnlockTime = localStorage.getItem('lastUnlockTime');
    if (lastUnlockTime && (Date.now() - parseInt(lastUnlockTime) < this.config.lockDuration)) {
      // 未过期，保持解锁状态
      this.unlock();
    } else {
      // 已过期，锁定屏幕
      this.lock();
    }
  }

  // 启动锁定定时器
  startLockTimer() {
    this.clearLockTimer();
    this.lockTimer = setTimeout(() => {
      this.lock();
    }, this.config.lockDuration);
  }

  // 清除锁定定时器
  clearLockTimer() {
    if (this.lockTimer) {
      clearTimeout(this.lockTimer);
      this.lockTimer = null;
    }
  }

  // 获取当前锁定状态
  getIsLocked() {
    return this.isLocked;
  }

  // 获取当前主题名
  getTheme() {
    return this.activeTheme;
  }
}

// 自动初始化锁屏功能
document.addEventListener('DOMContentLoaded', () => {
  // 检查是否已经初始化过
  if (!window.lockScreenInstance) {
    window.lockScreenInstance = new LockScreen();
  }
});
