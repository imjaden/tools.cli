        // PMP ITTO 数据
        const pmpData = {
            process_groups: [
                { id: "initiating", name: "启动过程组" },
                { id: "planning", name: "规划过程组" },
                { id: "executing", name: "执行过程组" },
                { id: "monitoring_controlling", name: "监控过程组" },
                { id: "closing", name: "收尾过程组" }
            ],
            tools_techniques: [
                {
                    id: "expert_judgment",
                    name: "专家判断",
                    definition: "基于某应用领域、知识领域、学科和行业等的专业知识而做出的，关于当前活动的合理判断",
                    characteristics: ["利用专家的经验和知识", "适用于项目的各个阶段", "可通过多种方式获取，如个人咨询、专家会议等"],
                    used_in: ["develop_project_charter", "develop_project_management_plan", "direct_and_manage_project_work", "manage_project_knowledge", "monitor_and_control_project_work", "perform_integrated_change_control", "close_project_or_phase", "plan_scope_management", "collect_requirements", "define_scope", "plan_schedule_management", "sequence_activities", "estimate_activity_durations", "develop_schedule", "plan_cost_management", "estimate_costs", "determine_budget", "plan_quality_management", "manage_quality", "control_quality", "plan_resource_management", "estimate_activity_resources", "acquire_resources", "develop_team", "manage_team", "plan_communications_management", "manage_communications", "monitor_communications", "plan_risk_management", "identify_risks", "perform_qualitative_risk_analysis", "perform_quantitative_risk_analysis", "plan_risk_responses", "implement_risk_responses", "monitor_risks", "plan_procurement_management", "conduct_procurements", "control_procurements", "close_procurements", "plan_stakeholder_engagement", "manage_stakeholder_engagement", "monitor_stakeholder_engagement"]
                },
                {
                    id: "data_collection",
                    name: "数据收集",
                    definition: "用于收集项目相关数据的技术，以支持决策制定和分析",
                    characteristics: ["获取客观、准确的数据", "可用于项目的各个阶段", "包括多种具体技术，如头脑风暴、访谈、问卷调查等"],
                    used_in: ["develop_project_charter", "develop_project_management_plan", "collect_requirements", "identify_risks", "plan_risk_responses", "plan_procurement_management"]
                },
                {
                    id: "interpersonal_and_team_skills",
                    name: "人际关系与团队技能",
                    definition: "用于有效地与项目团队成员和相关方互动的技能",
                    characteristics: ["包括沟通、领导力、团队建设等技能", "对项目成功至关重要", "可用于项目的各个阶段"],
                    used_in: ["develop_project_charter", "develop_project_management_plan", "manage_project_knowledge", "collect_requirements", "define_scope", "control_scope", "develop_team", "manage_team", "manage_communications", "manage_stakeholder_engagement"]
                },
                {
                    id: "meetings",
                    name: "会议",
                    definition: "项目团队成员和相关方聚集在一起讨论项目相关事项的正式或非正式活动",
                    characteristics: ["可用于项目的各个阶段", "包括规划会议、状态会议、回顾会议等", "需要有效管理以确保高效"]
                },
                {
                    id: "project_management_information_system",
                    name: "项目管理信息系统",
                    definition: "由用于收集、整合和传播项目管理过程成果的工具和技术组成的信息系统",
                    characteristics: ["支持项目管理的各个方面", "包括计划工具、进度管理工具、成本管理工具等", "可提高项目管理的效率和有效性"],
                    used_in: ["direct_and_manage_project_work", "develop_schedule"]
                },
                {
                    id: "knowledge_management",
                    name: "知识管理",
                    definition: "用于共享组织知识和经验的过程和工具",
                    characteristics: ["促进知识的创建、获取、存储和共享", "有助于避免重复错误", "支持组织学习和持续改进"],
                    used_in: ["manage_project_knowledge"]
                },
                {
                    id: "information_management",
                    name: "信息管理",
                    definition: "用于收集、存储和分发项目信息的过程和工具",
                    characteristics: ["确保信息的及时、准确传递", "支持决策制定", "包括文档管理、报告系统等"],
                    used_in: ["manage_project_knowledge"]
                },
                {
                    id: "data_analysis",
                    name: "数据分析",
                    definition: "用于分析项目数据以支持决策制定的技术",
                    characteristics: ["包括多种具体技术，如备选方案分析、成本效益分析等", "基于客观数据进行决策", "可用于项目的各个阶段"],
                    used_in: ["monitor_and_control_project_work", "perform_integrated_change_control", "close_project_or_phase", "plan_scope_management", "define_scope", "control_scope", "estimate_activity_durations", "develop_schedule", "control_schedule", "estimate_costs", "control_costs", "plan_quality_management", "manage_quality", "control_quality", "plan_resource_management", "estimate_activity_resources", "identify_risks", "perform_qualitative_risk_analysis", "perform_quantitative_risk_analysis", "plan_risk_responses", "monitor_risks", "conduct_procurements", "control_procurements", "close_procurements"]
                },
                {
                    id: "decision_making",
                    name: "决策技术",
                    definition: "用于在多个备选方案中做出选择的技术",
                    characteristics: ["包括多种具体技术，如投票、多标准决策分析等", "基于客观标准进行决策", "可用于项目的各个阶段"],
                    used_in: ["monitor_and_control_project_work", "perform_integrated_change_control", "collect_requirements", "validate_scope"]
                },
                {
                    id: "change_control_tools",
                    name: "变更控制工具",
                    definition: "用于管理项目变更的工具和技术",
                    characteristics: ["支持变更请求的提交、审查、批准和跟踪", "确保变更的一致性和可追溯性", "包括变更控制委员会(CCB)、变更日志等"],
                    used_in: ["perform_integrated_change_control"]
                },
                {
                    id: "data_representation",
                    name: "数据表现",
                    definition: "用于以可视化方式展示项目数据的技术",
                    characteristics: ["包括多种具体技术，如流程图、思维导图等", "使复杂数据更易于理解", "可用于项目的各个阶段"],
                    used_in: ["collect_requirements", "identify_risks", "perform_qualitative_risk_analysis", "plan_communications_management", "plan_stakeholder_engagement"]
                },
                {
                    id: "system_interaction_diagrams",
                    name: "系统交互图",
                    definition: "展示系统组件之间交互关系的图表",
                    characteristics: ["可视化系统组件之间的关系", "有助于理解系统的复杂性", "可用于需求分析和系统设计"],
                    used_in: ["collect_requirements"]
                },
                {
                    id: "prototypes",
                    name: "原型法",
                    definition: "通过创建模型来测试和验证概念的技术",
                    characteristics: ["允许相关方在早期阶段提供反馈", "减少误解和错误", "可用于产品设计和需求验证"],
                    used_in: ["collect_requirements"]
                },
                {
                    id: "decomposition",
                    name: "分解",
                    definition: "将项目可交付成果和项目工作分解为较小、更易于管理的组件的技术",
                    characteristics: ["用于创建工作分解结构(WBS)和活动清单", "提高项目管理的可操作性", "是规划过程的重要工具"],
                    used_in: ["create_wbs", "define_activities"]
                },
                {
                    id: "rolling_wave_planning",
                    name: "滚动式规划",
                    definition: "一种迭代的规划技术，对近期要完成的工作进行详细规划，对远期工作进行粗略规划",
                    characteristics: ["适用于不确定性较高的项目", "平衡了规划的详细程度和灵活性", "是敏捷方法的重要组成部分"],
                    used_in: ["create_wbs", "define_activities"]
                },
                {
                    id: "inspection",
                    name: "检查",
                    definition: "通过观察、测量或测试来验证可交付成果是否符合要求的技术",
                    characteristics: ["用于确认范围和控制质量", "提供客观的验证证据", "可在项目的各个阶段使用"],
                    used_in: ["validate_scope", "control_quality"]
                },
                {
                    id: "precedence_diagramming_method",
                    name: "紧前关系绘图法",
                    definition: "一种用于构建项目进度网络图的技术，使用节点表示活动，使用箭线表示活动之间的逻辑关系",
                    characteristics: ["是最常用的进度网络绘图方法", "支持四种依赖关系：完成-开始(FS)、开始-开始(SS)、完成-完成(FF)、开始-完成(SF)", "易于理解和使用"],
                    used_in: ["sequence_activities"]
                },
                {
                    id: "dependency_determination",
                    name: "确定依赖关系",
                    definition: "识别和记录项目活动之间逻辑关系的过程",
                    characteristics: ["包括强制性依赖关系、选择性依赖关系、外部依赖关系和内部依赖关系", "对项目进度有重要影响", "是排列活动顺序的基础"],
                    used_in: ["sequence_activities"]
                },
                {
                    id: "leads_and_lags",
                    name: "提前量与滞后量",
                    definition: "用于调整活动之间时间关系的技术",
                    characteristics: ["提前量是指允许后续活动提前开始", "滞后量是指要求后续活动延迟开始", "可用于优化项目进度"],
                    used_in: ["sequence_activities", "develop_schedule", "control_schedule"]
                },
                {
                    id: "analogous_estimating",
                    name: "类比估算",
                    definition: "使用类似项目的历史数据来估算当前项目参数的技术",
                    characteristics: ["快速、成本低", "准确性取决于历史数据的相似性", "适用于早期阶段的估算"],
                    used_in: ["estimate_activity_durations", "estimate_costs"]
                },
                {
                    id: "parametric_estimating",
                    name: "参数估算",
                    definition: "使用历史数据和统计关系来估算项目参数的技术",
                    characteristics: ["基于数学模型", "准确性较高", "适用于有大量历史数据的情况"],
                    used_in: ["estimate_activity_durations", "estimate_costs"]
                },
                {
                    id: "three_point_estimating",
                    name: "三点估算",
                    definition: "使用最乐观、最可能和最悲观三种估算值来计算期望值的技术",
                    characteristics: ["考虑了不确定性和风险", "提供了更准确的估算", "适用于复杂或不确定的活动"],
                    used_in: ["estimate_activity_durations", "estimate_costs", "estimate_activity_resources"]
                },
                {
                    id: "bottom_up_estimating",
                    name: "自下而上估算",
                    definition: "通过汇总较低层次组件的估算来估算项目参数的技术",
                    characteristics: ["准确性较高", "成本和时间消耗较大", "适用于详细规划阶段"],
                    used_in: ["estimate_activity_durations", "estimate_costs", "estimate_activity_resources"]
                },
                {
                    id: "schedule_network_analysis",
                    name: "进度网络分析",
                    definition: "使用多种技术来分析项目进度网络，以确定项目的关键路径和进度计划",
                    characteristics: ["包括关键路径法、资源优化等技术", "是制定进度计划的核心技术", "可用于分析进度风险"],
                    used_in: ["develop_schedule"]
                },
                {
                    id: "critical_path_method",
                    name: "关键路径法",
                    definition: "一种用于确定项目关键路径和总浮动时间的技术",
                    characteristics: ["识别项目中最长的活动序列", "确定项目的最短可能工期", "是进度管理的重要工具"],
                    used_in: ["develop_schedule", "control_schedule"]
                },
                {
                    id: "resource_optimization",
                    name: "资源优化",
                    definition: "调整活动开始和完成日期以平衡资源需求与资源可用性的技术",
                    characteristics: ["包括资源平衡和资源平滑", "可能会改变项目的关键路径", "是进度管理的重要工具"],
                    used_in: ["develop_schedule", "control_schedule"]
                },
                {
                    id: "schedule_compression",
                    name: "进度压缩",
                    definition: "在不减少项目范围的情况下缩短项目工期的技术",
                    characteristics: ["包括赶工和快速跟进", "可能会增加项目风险和成本", "适用于需要缩短工期的情况"],
                    used_in: ["develop_schedule", "control_schedule"]
                },
                {
                    id: "agile_release_planning",
                    name: "敏捷发布规划",
                    definition: "一种用于在敏捷项目中规划产品发布的技术",
                    characteristics: ["基于产品待办事项和迭代计划", "灵活适应变化", "是敏捷方法的重要组成部分"],
                    used_in: ["develop_schedule"]
                },
                {
                    id: "cost_aggregation",
                    name: "成本汇总",
                    definition: "将较低层次的成本估算汇总到较高层次的技术",
                    characteristics: ["用于制定项目预算", "基于工作分解结构(WBS)", "是成本管理的重要工具"],
                    used_in: ["determine_budget"]
                },
                {
                    id: "historical_information_review",
                    name: "历史信息审查",
                    definition: "分析类似项目的历史数据以获取洞察和经验教训的技术",
                    characteristics: ["提供有价值的参考信息", "有助于避免重复错误", "可用于项目的各个阶段"],
                    used_in: ["determine_budget"]
                },
                {
                    id: "funding_limit_reconciliation",
                    name: "资金限制平衡",
                    definition: "调整项目进度计划以适应资金限制的技术",
                    characteristics: ["确保项目资金的合理使用", "可能会影响项目进度", "是成本管理的重要工具"],
                    used_in: ["determine_budget"]
                },
                {
                    id: "quality_management_and_control_tools",
                    name: "质量管理和控制工具",
                    definition: "用于规划、执行和控制项目质量的工具和技术",
                    characteristics: ["包括因果图、控制图、直方图等", "支持质量改进活动", "是质量管理的重要组成部分"],
                    used_in: ["plan_quality_management", "manage_quality", "control_quality"]
                },
                {
                    id: "quality_improvement_methods",
                    name: "质量改进方法",
                    definition: "用于提高项目质量的技术和方法",
                    characteristics: ["包括持续改进、六西格玛等", "关注过程改进", "是质量管理的重要组成部分"],
                    used_in: ["manage_quality"]
                },
                {
                    id: "testing_product_evaluations",
                    name: "测试/产品评估",
                    definition: "用于验证产品是否符合要求的技术",
                    characteristics: ["包括各种测试方法，如单元测试、集成测试等", "确保产品质量", "是质量控制的重要工具"],
                    used_in: ["control_quality"]
                },
                {
                    id: "audits",
                    name: "审计",
                    definition: "对项目过程、活动或结果进行独立评估的技术",
                    characteristics: ["确保项目符合组织政策和标准", "识别改进机会", "可用于项目的各个阶段"],
                    used_in: ["manage_quality", "control_procurements"]
                },
                {
                    id: "team_building_activities",
                    name: "团队建设活动",
                    definition: "用于提高团队凝聚力和绩效的活动",
                    characteristics: ["包括团队培训、团队建设游戏等", "促进团队成员之间的信任和合作", "是团队管理的重要工具"],
                    used_in: ["develop_team"]
                },
                {
                    id: "training",
                    name: "培训",
                    definition: "提高团队成员知识和技能的技术",
                    characteristics: ["包括正式培训和非正式培训", "提高团队能力", "是团队管理的重要工具"],
                    used_in: ["develop_team"]
                },
                {
                    id: "recognition_and_rewards",
                    name: "认可与奖励",
                    definition: "表彰和奖励团队成员贡献的技术",
                    characteristics: ["提高团队士气和动力", "促进积极的团队文化", "是团队管理的重要工具"],
                    used_in: ["develop_team"]
                },
                {
                    id: "conflict_management",
                    name: "冲突管理",
                    definition: "识别和解决团队成员之间冲突的技术",
                    characteristics: ["包括多种冲突解决策略，如合作、妥协等", "维护团队和谐", "是团队管理的重要工具"],
                    used_in: ["manage_team"]
                },
                {
                    id: "negotiation",
                    name: "谈判",
                    definition: "通过讨论和协商达成一致的技术",
                    characteristics: ["可用于资源获取、合同管理等", "需要良好的沟通和说服能力", "是项目管理的重要技能"],
                    used_in: ["acquire_resources", "conduct_procurements"]
                },
                {
                    id: "communication_models",
                    name: "沟通模型",
                    definition: "描述信息如何在发送者和接收者之间传递的框架",
                    characteristics: ["帮助理解沟通过程", "识别沟通障碍", "是沟通管理的重要工具"],
                    used_in: ["plan_communications_management"]
                },
                {
                    id: "communication_methods",
                    name: "沟通方法",
                    definition: "用于传递项目信息的技术",
                    characteristics: ["包括书面沟通、口头沟通、非正式沟通等", "根据信息的性质和接收者的需求选择合适的方法", "是沟通管理的重要工具"],
                    used_in: ["plan_communications_management"]
                },
                {
                    id: "communication_technology",
                    name: "沟通技术",
                    definition: "用于传递项目信息的工具和系统",
                    characteristics: ["包括电子邮件、视频会议、项目管理软件等", "影响沟通的效率和效果", "是沟通管理的重要工具"],
                    used_in: ["plan_communications_management"]
                },
                {
                    id: "stakeholder_engagement_assessment_matrix",
                    name: "相关方参与度评估矩阵",
                    definition: "用于评估相关方当前参与度与期望参与度之间差距的工具",
                    characteristics: ["帮助识别需要重点管理的相关方", "制定有针对性的相关方参与策略", "是相关方管理的重要工具"],
                    used_in: ["plan_stakeholder_engagement", "monitor_stakeholder_engagement"]
                },
                {
                    id: "risk_probability_and_impact_assessment",
                    name: "风险概率和影响评估",
                    definition: "评估风险发生的概率和影响程度的技术",
                    characteristics: ["是定性风险分析的核心技术", "帮助确定风险的优先级", "是风险管理的重要工具"],
                    used_in: ["perform_qualitative_risk_analysis"]
                },
                {
                    id: "risk_data_quality_assessment",
                    name: "风险数据质量评估",
                    definition: "评估风险数据的准确性、可靠性和完整性的技术",
                    characteristics: ["确保风险分析基于高质量的数据", "识别数据不足的领域", "是风险管理的重要工具"],
                    used_in: ["perform_qualitative_risk_analysis"]
                },
                {
                    id: "risk_categorization",
                    name: "风险分类",
                    definition: "将风险按共同特征分组的技术",
                    characteristics: ["帮助识别风险的模式和趋势", "便于风险的管理和监控", "是风险管理的重要工具"],
                    used_in: ["perform_qualitative_risk_analysis"]
                },
                {
                    id: "risk_urgency_assessment",
                    name: "风险紧迫性评估",
                    definition: "评估风险需要采取应对措施的紧急程度的技术",
                    characteristics: ["帮助确定风险应对的优先级", "考虑风险的时间因素", "是风险管理的重要工具"],
                    used_in: ["perform_qualitative_risk_analysis"]
                },
                {
                    id: "expected_monetary_value_analysis",
                    name: "预期货币价值分析",
                    definition: "一种用于评估风险对项目目标影响的定量分析技术",
                    characteristics: ["基于概率和影响的乘积", "可用于决策树分析", "是定量风险分析的重要工具"],
                    used_in: ["perform_quantitative_risk_analysis"]
                },
                {
                    id: "sensitivity_analysis",
                    name: "敏感性分析",
                    definition: "分析单个风险因素对项目目标影响程度的技术",
                    characteristics: ["识别对项目影响最大的风险", "帮助确定风险应对的优先级", "是定量风险分析的重要工具"],
                    used_in: ["perform_quantitative_risk_analysis"]
                },
                {
                    id: "decision_tree_analysis",
                    name: "决策树分析",
                    definition: "一种用于评估不同决策方案的可能后果的技术",
                    characteristics: ["基于预期货币价值分析", "考虑决策的不确定性", "是定量风险分析的重要工具"],
                    used_in: ["perform_quantitative_risk_analysis"]
                },
                {
                    id: "monte_carlo_simulation",
                    name: "蒙特卡洛模拟",
                    definition: "一种通过多次随机抽样来模拟项目风险的定量分析技术",
                    characteristics: ["提供项目结果的概率分布", "考虑多种风险因素的综合影响", "是定量风险分析的重要工具"],
                    used_in: ["perform_quantitative_risk_analysis"]
                },
                {
                    id: "strategies_for_negative_risks_threats",
                    name: "威胁应对策略",
                    definition: "用于应对项目威胁(负面风险)的策略",
                    characteristics: ["包括规避、转移、减轻、接受", "根据风险的性质和优先级选择合适的策略", "是风险应对规划的重要工具"],
                    used_in: ["plan_risk_responses"]
                },
                {
                    id: "strategies_for_positive_risks_opportunities",
                    name: "机会应对策略",
                    definition: "用于应对项目机会(正面风险)的策略",
                    characteristics: ["包括开拓、提高、分享、接受", "根据机会的性质和优先级选择合适的策略", "是风险应对规划的重要工具"],
                    used_in: ["plan_risk_responses"]
                },
                {
                    id: "contingent_response_strategies",
                    name: "应急应对策略",
                    definition: "在特定触发条件发生时才实施的风险应对策略",
                    characteristics: ["为风险事件做准备", "减少风险应对的成本和影响", "是风险应对规划的重要工具"],
                    used_in: ["plan_risk_responses"]
                },
                {
                    id: "procurement_negotiation",
                    name: "采购谈判",
                    definition: "在采购过程中与供应商讨论和达成一致的技术",
                    characteristics: ["涉及价格、质量、交付时间等条款", "需要良好的谈判技巧", "是采购管理的重要工具"],
                    used_in: ["conduct_procurements"]
                },
                {
                    id: "bidder_conferences",
                    name: "投标人会议",
                    definition: "在提交投标书之前，与潜在供应商举行的会议，以澄清采购要求",
                    characteristics: ["确保所有潜在供应商获得相同的信息", "减少误解和疑问", "是采购管理的重要工具"],
                    used_in: ["conduct_procurements"]
                },
                {
                    id: "proposal_evaluation_techniques",
                    name: "建议书评估技术",
                    definition: "用于评估供应商提交的建议书的技术",
                    characteristics: ["基于预定义的评估标准", "确保公平、客观的评估", "是采购管理的重要工具"],
                    used_in: ["conduct_procurements"]
                },
                {
                    id: "claims_administration",
                    name: "索赔管理",
                    definition: "处理和解决采购合同中的索赔和争议的技术",
                    characteristics: ["遵循合同条款和争议解决程序", "尽量通过协商解决争议", "是采购管理的重要工具"],
                    used_in: ["control_procurements"]
                }
            ],

            knowledge_areas: [
                {
                    "id": "integration",
                    "name": "整合管理",
                    "processes": [
                        {
                            "id": "develop_project_charter",
                            "name": "制定项目章程",
                            "process_group": "initiating",
                            "inputs": ["商业文件", "协议", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据收集", "人际关系与团队技能", "会议"],
                            "outputs": ["项目章程", "假设日志"],
                            "description": "制定项目章程是编写一份正式批准项目并授权项目经理在项目活动中使用组织资源的文件的过程。",
                            "function": "正式启动项目，确定项目的边界和高级别范围，授权项目经理开始工作。"
                        },
                        {
                            "id": "develop_project_management_plan",
                            "name": "制定项目管理计划",
                            "process_group": "planning",
                            "inputs": ["项目章程", "其他过程的输出", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据收集", "人际关系与团队技能", "会议"],
                            "outputs": ["项目管理计划"],
                            "description": "制定项目管理计划是定义、准备和协调所有子计划，并将它们整合为一份综合项目管理计划的过程。",
                            "function": "确定项目的执行、监控和收尾方式，为项目提供全面的管理框架。"
                        },
                        {
                            "id": "direct_and_manage_project_work",
                            "name": "指导与管理项目工作",
                            "process_group": "executing",
                            "inputs": ["项目管理计划", "批准的变更请求", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "项目管理信息系统", "会议"],
                            "outputs": ["可交付成果", "工作绩效数据", "问题日志", "变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "指导与管理项目工作是为实现项目目标而领导和执行项目管理计划中定义的工作，并实施已批准变更的过程。",
                            "function": "执行项目工作，产生可交付成果，收集绩效数据，管理变更。"
                        },
                        {
                            "id": "manage_project_knowledge",
                            "name": "管理项目知识",
                            "process_group": "executing",
                            "inputs": ["项目管理计划", "项目文件", "可交付成果", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "知识管理", "信息管理", "人际关系与团队技能"],
                            "outputs": ["经验教训登记册", "项目管理计划更新", "项目文件更新"],
                            "description": "管理项目知识是使用现有知识并生成新知识，以实现项目目标，并且帮助组织学习的过程。",
                            "function": "确保项目团队和相关方共享知识，避免重复错误，促进组织学习。"
                        },
                        {
                            "id": "monitor_and_control_project_work",
                            "name": "监控项目工作",
                            "process_group": "monitoring_controlling",
                            "inputs": ["项目管理计划", "项目文件", "工作绩效信息", "协议", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据分析", "决策技术", "会议"],
                            "outputs": ["工作绩效报告", "变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "监控项目工作是跟踪、审查和报告整体项目进展，以实现项目管理计划中确定的绩效目标的过程。",
                            "function": "比较实际绩效与计划绩效，发现偏差，生成绩效报告，提出变更请求。"
                        },
                        {
                            "id": "perform_integrated_change_control",
                            "name": "实施整体变更控制",
                            "process_group": "monitoring_controlling",
                            "inputs": ["项目管理计划", "项目文件", "工作绩效报告", "变更请求", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "变更控制工具", "数据分析", "决策技术", "会议"],
                            "outputs": ["批准的变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "审查所有变更请求，批准变更，并管理对可交付成果、组织过程资产、项目文件和项目管理计划的变更的过程。",
                            "function": "确保所有变更都经过评估、批准和管理，维持项目的完整性和一致性。1记录、2评估、3提交CCB、4更新、5通知。"
                        },
                        {
                            "id": "close_project_or_phase",
                            "name": "结束项目或阶段",
                            "process_group": "closing",
                            "inputs": ["项目章程", "项目管理计划", "项目文件", "验收的可交付成果", "商业文件", "协议", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据分析", "会议"],
                            "outputs": ["最终产品、服务或成果移交", "最终报告", "组织过程资产更新"],
                            "description": "结束项目或阶段是终结项目、阶段或合同的所有活动的过程。",
                            "function": "正式关闭项目或阶段，完成所有收尾工作，移交可交付成果，更新组织过程资产。"
                        }
                    ]
                },
                {
                    "id": "scope",
                    "name": "范围管理",
                    "processes": [
                        {
                            "id": "plan_scope_management",
                            "name": "规划范围管理",
                            "process_group": "planning",
                            "inputs": ["项目章程", "项目管理计划", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据分析", "会议"],
                            "outputs": ["范围管理计划", "需求管理计划"],
                            "description": "规划范围管理是为记录如何定义、确认和控制项目范围及产品范围，而创建范围管理计划的过程。",
                            "function": "建立范围管理的框架，明确如何收集、定义和控制范围。"
                        },
                        {
                            "id": "collect_requirements",
                            "name": "收集需求",
                            "process_group": "planning",
                            "inputs": ["项目章程", "项目管理计划", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据收集", "数据表现", "决策技术", "人际关系与团队技能", "系统交互图", "原型法"],
                            "outputs": ["需求文件", "需求跟踪矩阵"],
                            "description": "收集需求是为实现项目目标而确定、记录并管理相关方的需要和要求的过程。",
                            "function": "明确项目应该做什么，为范围定义提供基础。"
                        },
                        {
                            "id": "define_scope",
                            "name": "定义范围",
                            "process_group": "planning",
                            "inputs": ["项目章程", "项目管理计划", "需求文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据分析", "决策技术", "人际关系与团队技能"],
                            "outputs": ["项目范围说明书", "项目文件更新"],
                            "description": "定义范围是制定项目和产品详细描述的过程。",
                            "function": "明确项目的边界和可交付成果，为范围基准提供基础。"
                        },
                        {
                            "id": "create_wbs",
                            "name": "创建WBS",
                            "process_group": "planning",
                            "inputs": ["项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "分解", "滚动式规划"],
                            "outputs": ["范围基准", "项目文件更新"],
                            "description": "创建工作分解结构是把项目可交付成果和项目工作分解为较小的、更易于管理的组件的过程。",
                            "function": "将项目范围分解为可管理的工作包，便于进度安排和资源分配。"
                        },
                        {
                            "id": "validate_scope",
                            "name": "确认范围",
                            "process_group": "monitoring_controlling",
                            "inputs": ["项目管理计划", "项目文件", "核实的可交付成果", "工作绩效数据"],
                            "tools_techniques": ["检查", "决策技术", "会议"],
                            "outputs": ["验收的可交付成果", "工作绩效信息", "变更请求", "项目文件更新"],
                            "description": "确认范围是正式验收已完成的项目可交付成果的过程。",
                            "function": "确保可交付成果符合相关方的期望，获得正式验收。"
                        },
                        {
                            "id": "control_scope",
                            "name": "控制范围",
                            "process_group": "monitoring_controlling",
                            "inputs": ["项目管理计划", "项目文件", "工作绩效数据", "组织过程资产"],
                            "tools_techniques": ["数据分析", "决策技术", "人际关系与团队技能", "会议"],
                            "outputs": ["工作绩效信息", "变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "控制范围是监督项目和产品的范围状态，管理范围基准变更的过程。",
                            "function": "确保范围变更得到适当的评估和管理，防止范围蔓延。"
                        }
                    ]
                },
                {
                    "id": "schedule",
                    "name": "进度管理",
                    "processes": [
                        {
                            "id": "plan_schedule_management",
                            "name": "规划进度管理",
                            "process_group": "planning",
                            "inputs": ["项目章程", "项目管理计划", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据分析", "会议"],
                            "outputs": ["进度管理计划"],
                            "description": "规划进度管理是为规划、编制、管理、执行和控制项目进度而制定政策、程序和文档的过程。",
                            "function": "建立进度管理的框架，明确如何制定、管理和控制项目进度。"
                        },
                        {
                            "id": "define_activities",
                            "name": "定义活动",
                            "process_group": "planning",
                            "inputs": ["项目管理计划", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "分解", "滚动式规划", "会议"],
                            "outputs": ["活动清单", "活动属性", "里程碑清单"],
                            "description": "定义活动是识别和记录为完成项目可交付成果而需采取的具体行动的过程。",
                            "function": "将项目工作分解为具体的活动，为进度规划提供基础。"
                        },
                        {
                            "id": "sequence_activities",
                            "name": "排列活动顺序",
                            "process_group": "planning",
                            "inputs": ["项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "紧前关系绘图法", "确定依赖关系", "提前量与滞后量"],
                            "outputs": ["项目进度网络图", "项目文件更新"],
                            "description": "排列活动顺序是识别和记录项目活动之间的依赖关系的过程。",
                            "function": "确定活动之间的逻辑关系，建立项目进度网络图。"
                        },
                        {
                            "id": "estimate_activity_durations",
                            "name": "估算活动持续时间",
                            "process_group": "planning",
                            "inputs": ["项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "类比估算", "参数估算", "三点估算", "自下而上估算", "数据分析", "决策技术", "会议"],
                            "outputs": ["持续时间估算", "估算依据", "项目文件更新"],
                            "description": "估算活动持续时间是根据资源估算的结果，估算完成单项活动所需工作时段数的过程。",
                            "function": "确定完成每个活动所需的时间，为制定进度计划提供基础。"
                        },
                        {
                            "id": "develop_schedule",
                            "name": "制定进度计划",
                            "process_group": "planning",
                            "inputs": ["项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据分析", "进度网络分析", "关键路径法", "资源优化", "提前量与滞后量", "进度压缩", "项目管理信息系统", "敏捷发布规划"],
                            "outputs": ["进度基准", "项目进度计划", "进度数据", "项目日历", "变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "制定进度计划是分析活动顺序、持续时间、资源需求和进度约束，创建项目进度模型的过程。",
                            "function": "生成项目进度计划和进度基准，指导项目的时间管理。"
                        },
                        {
                            "id": "control_schedule",
                            "name": "控制进度",
                            "process_group": "monitoring_controlling",
                            "inputs": ["项目管理计划", "项目文件", "工作绩效数据", "组织过程资产"],
                            "tools_techniques": ["数据分析", "关键路径法", "资源优化", "提前量与滞后量", "进度压缩", "项目管理信息系统", "敏捷发布规划"],
                            "outputs": ["工作绩效信息", "变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "控制进度是监督项目状态，更新项目进度和管理进度基准变更的过程。",
                            "function": "确保项目进度与计划一致，必要时采取纠正措施。"
                        }
                    ]
                },
                {
                    "id": "cost",
                    "name": "成本管理",
                    "processes": [
                        {
                            "id": "plan_cost_management",
                            "name": "规划成本管理",
                            "process_group": "planning",
                            "inputs": ["项目章程", "项目管理计划", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据分析", "会议"],
                            "outputs": ["成本管理计划"],
                            "description": "规划成本管理是确定如何估算、预算、管理、监督和控制项目成本的过程。",
                            "function": "建立成本管理的框架，明确如何进行成本估算、预算和控制。"
                        },
                        {
                            "id": "estimate_costs",
                            "name": "估算成本",
                            "process_group": "planning",
                            "inputs": ["项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "类比估算", "参数估算", "三点估算", "自下而上估算", "数据分析", "项目管理信息系统", "决策技术"],
                            "outputs": ["成本估算", "估算依据", "项目文件更新"],
                            "description": "估算成本是对完成项目活动所需资金进行近似估算的过程。",
                            "function": "确定完成项目所需的总成本，为制定预算提供基础。"
                        },
                        {
                            "id": "determine_budget",
                            "name": "制定预算",
                            "process_group": "planning",
                            "inputs": ["项目管理计划", "项目文件", "协议", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "成本汇总", "数据分析", "历史信息审核", "资金限制平衡", "融资"],
                            "outputs": ["成本基准", "项目资金需求", "项目文件更新"],
                            "description": "制定预算是汇总所有单个活动或工作包的估算成本，建立一个经批准的成本基准的过程。",
                            "function": "生成成本基准和项目资金需求，指导项目的成本控制。"
                        },
                        {
                            "id": "control_costs",
                            "name": "控制成本",
                            "process_group": "monitoring_controlling",
                            "inputs": ["项目管理计划", "项目文件", "工作绩效数据", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据分析", "项目管理信息系统", "完工尚需绩效指数"],
                            "outputs": ["工作绩效信息", "成本预测", "变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "控制成本是监督项目状态，更新项目成本和管理成本基准变更的过程。",
                            "function": "确保项目成本与计划一致，必要时采取纠正措施。"
                        }
                    ]
                },
                {
                    "id": "quality",
                    "name": "质量管理",
                    "processes": [
                        {
                            "id": "plan_quality_management",
                            "name": "规划质量管理",
                            "process_group": "planning",
                            "inputs": ["项目章程", "项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据收集", "数据分析", "决策技术", "数据表现", "测试与检查规划", "会议"],
                            "outputs": ["质量管理计划", "质量测量指标", "项目管理计划更新", "项目文件更新"],
                            "description": "规划质量管理是识别项目及其可交付成果的质量要求和标准，并书面描述项目将如何证明符合质量要求的过程。",
                            "function": "建立质量管理的框架，明确质量标准和质量控制方法。"
                        },
                        {
                            "id": "manage_quality",
                            "name": "管理质量",
                            "process_group": "executing",
                            "inputs": ["项目管理计划", "项目文件", "批准的变更请求", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据收集", "数据分析", "决策技术", "数据表现", "审计", "面向X的设计", "问题解决"],
                            "outputs": ["质量报告", "测试与评估文件", "变更请求", "项目管理计划更新", "项目文件更新", "组织过程资产更新"],
                            "description": "管理质量是把组织的质量政策用于项目，并将质量管理计划转化为可执行的质量活动的过程。",
                            "function": "确保项目过程和可交付成果符合质量要求，持续改进质量过程。"
                        },
                        {
                            "id": "control_quality",
                            "name": "控制质量",
                            "process_group": "monitoring_controlling",
                            "inputs": ["项目管理计划", "项目文件", "批准的变更请求", "可交付成果", "工作绩效数据", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据收集", "数据分析", "检查", "测试/产品评估", "数据表现", "会议"],
                            "outputs": ["质量控制测量结果", "核实的可交付成果", "工作绩效信息", "变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "控制质量是为了评估绩效，确保项目输出完整、正确，并满足客户期望，而监督和记录质量管理活动执行结果的过程。",
                            "function": "验证可交付成果是否符合质量要求，识别质量问题并采取纠正措施。"
                        }
                    ]
                },
                {
                    "id": "resources",
                    "name": "资源管理",
                    "processes": [
                        {
                            "id": "plan_resource_management",
                            "name": "规划资源管理",
                            "process_group": "planning",
                            "inputs": ["项目章程", "项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据收集", "组织结构图和职位描述", "团队技能评估", "会议"],
                            "outputs": ["资源管理计划", "团队章程", "项目文件更新"],
                            "description": "规划资源管理是定义如何估算、获取、管理和利用团队以及实物资源的过程。",
                            "function": "建立资源管理的框架，明确如何规划、获取和管理项目资源。"
                        },
                        {
                            "id": "estimate_activity_resources",
                            "name": "估算活动资源",
                            "process_group": "planning",
                            "inputs": ["项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "自下而上估算", "类比估算", "参数估算", "数据分析", "项目管理信息系统", "会议"],
                            "outputs": ["资源需求", "估算依据", "资源分解结构", "项目文件更新"],
                            "description": "估算活动资源是估算执行项目所需的团队资源，以及材料、设备和用品的类型和数量的过程。",
                            "function": "确定完成项目活动所需的资源类型和数量，为获取资源提供基础。"
                        },
                        {
                            "id": "acquire_resources",
                            "name": "获取资源",
                            "process_group": "executing",
                            "inputs": ["项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["决策技术", "人际关系与团队技能", "预分配", "虚拟团队"],
                            "outputs": ["实物资源分配单", "项目团队派工单", "资源日历", "变更请求", "项目管理计划更新", "项目文件更新", "事业环境因素更新", "组织过程资产更新"],
                            "description": "获取资源是获取项目所需的团队成员、设施、设备、材料、用品和其他资源的过程。",
                            "function": "为项目配备所需的人力资源和实物资源，确保项目能够按计划执行。"
                        },
                        {
                            "id": "develop_team",
                            "name": "建设团队",
                            "process_group": "executing",
                            "inputs": ["项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["集中办公", "虚拟团队", "沟通技术", "人际关系与团队技能", "认可与奖励", "培训", "个人和团队评估", "会议"],
                            "outputs": ["团队绩效评估", "变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "建设团队是提高工作能力，促进团队成员互动，改善团队整体氛围，以提高项目绩效的过程。",
                            "function": "提升团队成员的技能和能力，增强团队凝聚力，提高团队绩效。"
                        },
                        {
                            "id": "manage_team",
                            "name": "管理团队",
                            "process_group": "executing",
                            "inputs": ["项目管理计划", "项目文件", "工作绩效报告", "团队绩效评估", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["人际关系与团队技能", "冲突管理", "决策技术", "数据分析"],
                            "outputs": ["变更请求", "项目管理计划更新", "项目文件更新", "事业环境因素更新", "组织过程资产更新"],
                            "description": "管理团队是跟踪团队成员工作表现，提供反馈，解决问题并管理 团队变更，以优化项目绩效的过程。",
                            "function": "影响团队行为，管理冲突 ， 解决问 题。(不好->好)"
                        },
                        {
                            "id": "control_resources",
                            "name": "控制资源",
                            "process_group": "monitoring_controlling",
                            "inputs": ["项目管理计划", "项目文件", "工作绩效数据", "协议", "组织过程资产"],
                            "tools_techniques": ["数据分析", "问题解决", "人际关系与团队技能", "项目管理信息系统"],
                            "outputs": ["工作绩效信息", "变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "控制资源是确保按计划为项目分配实物资源，以及根据资源使用计划监督资源实际使用情况，并采取必要纠正措施的过程。",
                            "function": "确保资源得到有效利用，及时解决资源使用问题，确保项目顺利进行。"
                        }
                    ]
                },
                {
                    "id": "communications",
                    "name": "沟通管理",
                    "processes": [
                        {
                            "id": "plan_communications_management",
                            "name": "规划沟通管理",
                            "process_group": "planning",
                            "inputs": ["项目章程", "项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "沟通需求分析", "沟通技术", "沟通模型", "沟通方法", "人际关系与团队技能"],
                            "outputs": ["沟通管理计划", "项目管理计划更新", "项目文件更新"],
                            "description": "规划沟通管理是基于每个相关方或相关方群体的信息需求、可用的组织资产，以及具体项目的需求，为项目沟通活动制定恰当的方法和计划的过程。",
                            "function": "建立沟通管理的框架，明确如何与相关方进行有效沟通，确保信息的及时传递和共享。"
                        },
                        {
                            "id": "manage_communications",
                            "name": "管理沟通",
                            "process_group": "executing",
                            "inputs": ["项目管理计划", "项目文件", "工作绩效报告", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["沟通技术", "沟通方法", "沟通技能", "项目管理信息系统", "项目报告", "人际关系与团队技能"],
                            "outputs": ["项目沟通", "项目管理计划更新", "项目文件更新", "组织过程资产更新"],
                            "description": "管理沟通是确保项目信息及时且恰当地收集、生成、发布、存储、检索、管理、监督和最终处置的过程。",
                            "function": "执行沟通管理计划，确保相关方能够及时获得所需的信息，促进项目的顺利进行。"
                        },
                        {
                            "id": "monitor_communications",
                            "name": "监督沟通",
                            "process_group": "monitoring_controlling",
                            "inputs": ["项目管理计划", "项目文件", "工作绩效数据", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "项目管理信息系统", "数据分析", "人际关系与团队技能"],
                            "outputs": ["工作绩效信息", "变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "监督沟通是确保满足项目及其相关方的信息需求的过程。",
                            "function": "评估沟通效果，确保沟通管理计划的有效执行，必要时采取纠正措施。"
                        }
                    ]
                },
                {
                    "id": "risk",
                    "name": "风险管理",
                    "processes": [
                        {
                            "id": "plan_risk_management",
                            "name": "规划风险管理",
                            "process_group": "planning",
                            "inputs": ["项目章程", "项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据分析", "会议"],
                            "outputs": ["风险管理计划"],
                            "description": "规划风险管理是定义如何实施项目风险管理活动的过程。",
                            "function": "建立风险管理的框架，明确如何识别、分析、应对和监控项目风险。"
                        },
                        {
                            "id": "identify_risks",
                            "name": "识别风险",
                            "process_group": "planning",
                            "inputs": ["项目管理计划", "项目文件", "协议", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据收集", "数据分析", "人际关系与团队技能", "提示清单", "会议"],
                            "outputs": ["风险登记册", "风险报告", "项目文件更新"],
                            "description": "识别风险是识别单个项目风险以及整体项目风险的来源，并记录风险特征的过程。",
                            "function": "识别可能影响项目目标的风险，为风险分析和应对提供基础。"
                        },
                        {
                            "id": "perform_qualitative_risk_analysis",
                            "name": "实施定性风险分析",
                            "process_group": "planning",
                            "inputs": ["项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据收集", "数据分析", "人际关系与团队技能", "风险分类", "数据表现"],
                            "outputs": ["项目文件更新"],
                            "description": "实施定性风险分析是通过评估单个项目风险的概率和影响以及其他特征，对风险进行优先级排序，从而为后续分析或行动提供基础的过程。",
                            "function": "对已识别的风险进行优先级排序，确定需要重点关注的风险。"
                        },
                        {
                            "id": "perform_quantitative_risk_analysis",
                            "name": "实施定量风险分析",
                            "process_group": "planning",
                            "inputs": ["项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据收集", "数据分析", "人际关系与团队技能", "模拟", "敏感性分析", "决策树分析", "影响图"],
                            "outputs": ["项目文件更新"],
                            "description": "实施定量风险分析是就已识别的单个项目风险和不确定性的其他来源对项目整体目标的综合影响进行定量分析的过程。",
                            "function": "对高优先级风险进行量化分析，评估其对项目目标的潜在影响。"
                        },
                        {
                            "id": "plan_risk_responses",
                            "name": "规划风险应对",
                            "process_group": "planning",
                            "inputs": ["项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据分析", "决策技术"],
                            "outputs": ["变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "规划风险应对是为处理整体项目风险敞口，以及应对单个项目风险，而制定可选方案、选择应对策略并商定应对行动的过程。",
                            "function": "制定风险应对策略和计划，降低风险对项目目标的负面影响，提高项目成功的可能性。"
                        },
                        {
                            "id": "implement_risk_responses",
                            "name": "实施风险应对",
                            "process_group": "executing",
                            "inputs": ["项目管理计划", "项目文件", "批准的变更请求", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "人际关系与团队技能", "项目管理信息系统"],
                            "outputs": ["变更请求", "项目文件更新", "事业环境因素更新", "组织过程资产更新"],
                            "description": "实施风险应对是执行商定的风险应对计划的过程。",
                            "function": "执行风险应对策略，落实风险应对措施，降低风险对项目的影响。"
                        },
                        {
                            "id": "monitor_risks",
                            "name": "监督风险",
                            "process_group": "monitoring_controlling",
                            "inputs": ["项目管理计划", "项目文件", "工作绩效数据", "工作绩效报告", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["数据分析", "审计", "会议"],
                            "outputs": ["工作绩效信息", "变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "监督风险是在整个项目期间，监督商定的风险应对计划的实施、跟踪已识别风险、识别和分析新风险，以及评估风险管理有效性的过程。",
                            "function": "监控风险的变化，评估风险应对措施的有效性，及时调整风险管理计划。"
                        }
                    ]
                },
                {
                    "id": "procurement",
                    "name": "采购管理",
                    "processes": [
                        {
                            "id": "plan_procurement_management",
                            "name": "规划采购管理",
                            "process_group": "planning",
                            "inputs": ["项目章程", "项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据收集", "数据分析", "供方选择分析", "会议"],
                            "outputs": ["采购管理计划", "采购策略", "招标文件", "采购工作说明书", "供方选择标准", "自制或外购决策", "独立成本估算", "变更请求", "项目文件更新"],
                            "description": "规划采购管理是记录项目采购决策、明确采购方法及识别潜在卖方的过程。",
                            "function": "确定项目的采购需求和策略，建立采购管理的框架，明确如何获取外部资源。"
                        },
                        {
                            "id": "conduct_procurements",
                            "name": "实施采购",
                            "process_group": "executing",
                            "inputs": ["项目管理计划", "项目文件", "采购文档", "卖方建议书", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "广告", "投标人会议", "数据分析", "人际关系与团队技能", "供方选择分析"],
                            "outputs": ["选定的卖方", "协议", "变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "实施采购是获取卖方应答、选择卖方并授予合同的过程。",
                            "function": "执行采购活动，选择合适的卖方，签订采购合同，获取外部资源。"
                        },
                        {
                            "id": "control_procurements",
                            "name": "控制采购",
                            "process_group": "monitoring_controlling",
                            "inputs": ["项目管理计划", "项目文件", "协议", "批准的变更请求", "工作绩效数据", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "索赔管理", "数据分析", "检查", "审计"],
                            "outputs": ["关闭的采购", "工作绩效信息", "采购文档更新", "变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "控制采购是管理采购关系、监督合同绩效、实施必要的变更和纠偏，以及关闭合同的过程。",
                            "function": "确保采购合同的有效执行，监督卖方的绩效，管理采购变更，确保项目获得符合要求的外部资源。"
                        }
                    ]
                },
                {
                    "id": "stakeholder",
                    "name": "相关方管理",
                    "processes": [
                        {
                            "id": "identify_stakeholders",
                            "name": "识别相关方",
                            "process_group": "initiating",
                            "inputs": ["项目章程", "项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据收集", "数据分析", "数据表现", "会议"],
                            "outputs": ["相关方登记册", "变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "识别相关方是定期识别项目相关方，分析和记录他们的利益、参与度、相互依赖性、影响力和对项目成功的潜在影响的过程。",
                            "function": "识别所有可能影响项目或受项目影响的相关方，为相关方管理提供基础。"
                        },
                        {
                            "id": "plan_stakeholder_engagement",
                            "name": "规划相关方参与",
                            "process_group": "planning",
                            "inputs": ["项目章程", "项目管理计划", "项目文件", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "数据收集", "数据分析", "数据表现", "会议"],
                            "outputs": ["相关方参与计划", "项目管理计划更新", "项目文件更新"],
                            "description": "规划相关方参与是根据相关方的需求、期望、利益和对项目的潜在影响，制定项目相关方参与项目的方法的过程。",
                            "function": "制定相关方参与计划，明确如何与相关方进行有效互动，管理他们的期望和参与度。"
                        },
                        {
                            "id": "manage_stakeholder_engagement",
                            "name": "管理相关方参与",
                            "process_group": "executing",
                            "inputs": ["项目管理计划", "项目文件", "变更日志", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["专家判断", "沟通技能", "人际关系与团队技能", "基本规则", "会议"],
                            "outputs": ["问题日志", "变更请求", "项目管理计划更新", "项目文件更新", "组织过程资产更新"],
                            "description": "管理相关方参与是与相关方进行沟通和协作，以满足其需求与期望，处理问题，并促进相关方合理参与项目活动的过程。",
                            "function": "执行相关方参与计划，与相关方进行有效沟通和互动，管理他们的期望，解决问题，确保相关方的积极参与。"
                        },
                        {
                            "id": "monitor_stakeholder_engagement",
                            "name": "监督相关方参与",
                            "process_group": "monitoring_controlling",
                            "inputs": ["项目管理计划", "项目文件", "工作绩效数据", "事业环境因素", "组织过程资产"],
                            "tools_techniques": ["数据分析", "决策技术", "数据表现", "沟通技能", "人际关系与团队技能"],
                            "outputs": ["工作绩效信息", "变更请求", "项目管理计划更新", "项目文件更新"],
                            "description": "监督相关方参与是监督项目相关方关系，并通过修订参与策略和计划来引导相关方合理参与项目的过程。",
                            "function": "评估相关方参与的效果，确保相关方参与计划的有效执行，必要时调整参与策略和计划。"
                        }
                    ]
                }
            ],
            formulas: [
                {
                    "id": "ev_cpi",
                    "name": "成本绩效指数",
                    "formula": "CPI = EV / AC",
                    "description": "衡量项目成本效率的指标",
                    "knowledge_area": "成本管理"
                },
                {
                    "id": "ev_spi",
                    "name": "进度绩效指数",
                    "formula": "SPI = EV / PV",
                    "description": "衡量项目进度效率的指标",
                    "knowledge_area": "成本管理"
                },
                {
                    "id": "ev_ev",
                    "name": "挣值",
                    "formula": "EV = % 完成 × BAC",
                    "description": "已完成工作的预算价值",
                    "knowledge_area": "成本管理"
                },
                {
                    "id": "ev_ac",
                    "name": "实际成本",
                    "formula": "AC = 已完成工作的实际支出",
                    "description": "已完成工作的实际花费",
                    "knowledge_area": "成本管理"
                },
                {
                    "id": "ev_pv",
                    "name": "计划价值",
                    "formula": "PV = 计划完成工作的预算价值",
                    "description": "按计划应完成工作的预算价值",
                    "knowledge_area": "成本管理"
                },
                {
                    "id": "forecast_etc",
                    "name": "完工尚需估算",
                    "formula": "ETC = (BAC - EV) / CPI",
                    "description": "完成剩余工作所需的估算成本",
                    "knowledge_area": "成本管理"
                },
                {
                    "id": "forecast_etc_atypical",
                    "name": "完工尚需估算（非典型偏差）",
                    "formula": "ETC = BAC - EV",
                    "description": "假设未来工作将按预算执行的完工尚需估算",
                    "knowledge_area": "成本管理"
                },
                {
                    "id": "forecast_eac",
                    "name": "完工估算",
                    "formula": "EAC = AC + ETC",
                    "description": "完成项目所需的总估算成本",
                    "knowledge_area": "成本管理"
                },
                {
                    "id": "forecast_tcpi",
                    "name": "完工尚需绩效指数",
                    "formula": "TCPI = (BAC - EV) / (BAC - AC)",
                    "description": "为了在完工预算内完成项目，剩余工作必须达到的成本绩效指数",
                    "knowledge_area": "成本管理"
                },
                {
                    "id": "forecast_tcpi_bac_infeasible",
                    "name": "完工尚需绩效指数（BAC不可行）",
                    "formula": "TCPI = (BAC - EV) / (EAC - AC)",
                    "description": "基于完工估算的完工尚需绩效指数",
                    "knowledge_area": "成本管理"
                },
                {
                    "id": "schedule_fv",
                    "name": "浮动时间",
                    "formula": "总浮动时间 = 最晚开始时间 - 最早开始时间",
                    "description": "活动可以延误的时间，而不会影响项目完工日期",
                    "knowledge_area": "进度管理"
                },
                {
                    "id": "schedule_ls",
                    "name": "最晚开始时间",
                    "formula": "LS = LF - 持续时间",
                    "description": "活动可以开始的最晚时间，而不会延误项目完工日期",
                    "knowledge_area": "进度管理"
                },
                {
                    "id": "schedule_es",
                    "name": "最早开始时间",
                    "formula": "ES = 所有紧前活动的最早完成时间的最大值",
                    "description": "活动可以开始的最早时间",
                    "knowledge_area": "进度管理"
                },
                {
                    "id": "schedule_lf",
                    "name": "最晚完成时间",
                    "formula": "LF = 所有紧后活动的最晚开始时间的最小值",
                    "description": "活动必须完成的最晚时间，而不会延误项目完工日期",
                    "knowledge_area": "进度管理"
                },
                {
                    "id": "schedule_ef",
                    "name": "最早完成时间",
                    "formula": "EF = ES + 持续时间",
                    "description": "活动可以完成的最早时间",
                    "knowledge_area": "进度管理"
                },
                {
                    "id": "communication_channels",
                    "name": "沟通渠道数",
                    "formula": "N × (N - 1) / 2",
                    "description": "计算项目中沟通渠道的数量，N为相关方数量",
                    "knowledge_area": "沟通管理"
                },
                {
                    "id": "quality_cpk",
                    "name": "过程能力指数",
                    "formula": "CPK = min[(USL - μ) / (3σ), (μ - LSL) / (3σ)]",
                    "description": "衡量过程满足规范限的能力",
                    "knowledge_area": "质量管理"
                },
                {
                    "id": "risk_expected_monetary_value",
                    "name": "预期货币价值",
                    "formula": "EMV = 概率 × 影响",
                    "description": "用于风险定量分析，计算风险的预期货币影响",
                    "knowledge_area": "风险管理"
                },
                {
                    "id": "three_point_estimation",
                    "name": "三点估算",
                    "formula": "(乐观时间 + 4×最可能时间 + 悲观时间) / 6",
                    "description": "基于最乐观、最可能和最悲观的估算值计算期望时间",
                    "knowledge_area": "进度管理"
                }
            ]
        };
