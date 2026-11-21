# tools.cli.jaden.tech

本仓是 **构建产物仓**，页面内容由私有源码仓 `script-miner` 的 `pages-manager` 生成后整体覆盖。
直接在本仓改页面**会在下次构建时被覆盖**；要改内容请改源码仓的源页或 `data/pages-manifest.yaml`。

- 线上站点：https://tools.cli.jaden.tech/
- 构建器：`python3 projects/pages-manager/pages-manager.py build` → `publish --push`（源码仓内）
- 手工只碰：`CNAME` / `.nojekyll` / 本 `README.md`（其余文件都是产物）
- 回滚：`git revert <site@build 提交>` 后 push，GitHub Pages 自动重建

## 页面（11）

| 规范址 | 名称 | 分组 | 形态 | 说明 |
|:--|:--|:--|:--:|:--|
| `/train-map.html` | 高铁线路图 | 出行 | D | 高铁车次全程线路图：途经站点、购票区间高亮、时刻表与座位信息，数据来自 Supabase 只读表。 |
| `/pmp-itto.html` | PMP ITTO 知识图谱 | 学习 | B | PMP 十大知识领域 × 五大过程组 × 49 子过程的 ITTO 关系图谱，备考速查。 |
| `/english-translator.html` | 英语句型翻译助手 | 学习 | A | 英语句型与时态转换对照工具，覆盖常见语法的正误示例。 |
| `/brand-colors.html` | 品牌配色体系 | 设计 | A | 品牌色板与配色组合速查，含色值、对比度与使用场景建议。 |
| `/moments-cover.html` | 朋友圈封面生成器 | 设计 | A | 生成微信朋友圈封面图（1080×1800），可导出为 PNG 直接使用。 |
| `/daily-poetry.html` | 每日诗歌 | 生活 | B | 每日一首诗：原文、注释与赏析，随构建快照发布。 |
| `/git-cloner.html` | Git 仓库克隆器 | 开发 | D | 本地仓库克隆台账：列表、筛选、统计与 AI 摘要入口，支持 ?range=all 全量视图。 |
| `/web2md.html` | 微信文章转 Markdown | 开发 | D | 微信文章转 Markdown 的本地台账：已处理清单、标签与关联计数、分栏原文预览。 |
| `/lock-screen.html` | 锁屏小组件示例 | 系统 | C | iOS 锁屏小组件（Scriptable）效果示例：时钟、天气与今日诗歌同屏演示。 |
| `/status.html` | 站点状态 | 关于 | A | 工具页面可访问性与更新时效状态页：逐页探测、构建链健康、近 15 天按日条带与 90·30 天聚合可用率、事件与维护窗口。 |
| `/site-docs.html` | 站点说明 | 关于 | A | 本站定位、页面清单、URL 规范、发布流程与公开面纪律，随构建快照发布。 |

> 本文件由构建器生成（`_site_readme`），不要手工改；改文案请改源码仓。
