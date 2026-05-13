import type { WordEntry } from "@/types/vocabulary-types";

export const CI_CD_WORD_ENTRIES = [
  {
    "id": "w0411",
    "no": 411,
    "topicId": "ci-cd",
    "word": "DevOps",
    "phonetic": "/ˈdevɒps/",
    "englishDefinition": "Practices combining development and operations",
    "chineseDefinition": "开发运维",
    "exampleSentences": [
      "The trainer introduced \"DevOps\" while preparing a release pipeline and described it as practices combining development and operations."
    ]
  },
  {
    "id": "w0412",
    "no": 412,
    "topicId": "ci-cd",
    "word": "CI",
    "phonetic": "/ˌsiː ˈaɪ/",
    "englishDefinition": "Continuous Integration — automatically testing code changes",
    "chineseDefinition": "持续集成",
    "exampleSentences": [
      "A practice task about investigating a failed build asked students to use \"CI\" for continuous Integration — automatically testing code changes."
    ]
  },
  {
    "id": "w0413",
    "no": 413,
    "topicId": "ci-cd",
    "word": "CD",
    "phonetic": "/ˌsiː ˈdiː/",
    "englishDefinition": "Continuous Delivery/Deployment — automatically releasing code",
    "chineseDefinition": "持续交付/部署",
    "exampleSentences": [
      "The team clarified \"CD\" while automating code checks, saying that it means continuous Delivery/Deployment — automatically releasing code."
    ]
  },
  {
    "id": "w0414",
    "no": 414,
    "topicId": "ci-cd",
    "word": "pipeline",
    "phonetic": "/ˈpaɪplaɪn/",
    "englishDefinition": "A series of automated steps for building and deploying",
    "chineseDefinition": "流水线",
    "exampleSentences": [
      "In an example about deploying to staging, \"pipeline\" referred to a series of automated steps for building and deploying."
    ]
  },
  {
    "id": "w0415",
    "no": 415,
    "topicId": "ci-cd",
    "word": "build",
    "phonetic": "/bɪld/",
    "englishDefinition": "To compile and package source code",
    "chineseDefinition": "构建",
    "exampleSentences": [
      "The glossary entry about reviewing a delivery workflow explained \"build\" as to compile and package source code."
    ]
  },
  {
    "id": "w0416",
    "no": 416,
    "topicId": "ci-cd",
    "word": "deploy",
    "phonetic": "/dɪˈplɔɪ/",
    "englishDefinition": "To release software to a target environment",
    "chineseDefinition": "部署",
    "exampleSentences": [
      "While promoting a build to production, a senior engineer used \"deploy\" to talk about to release software to a target environment."
    ]
  },
  {
    "id": "w0417",
    "no": 417,
    "topicId": "ci-cd",
    "word": "release",
    "phonetic": "/rɪˈliːs/",
    "englishDefinition": "A version of software made available to users",
    "chineseDefinition": "发布",
    "exampleSentences": [
      "The training card about recovering from an incident showed \"release\" with this meaning: a version of software made available to users."
    ]
  },
  {
    "id": "w0418",
    "no": 418,
    "topicId": "ci-cd",
    "word": "artifact",
    "phonetic": "/ˈɑːrtɪfækt/",
    "englishDefinition": "A file produced during the build process",
    "chineseDefinition": "构建产物",
    "exampleSentences": [
      "During a discussion about running checks after a commit, \"artifact\" was the term used for a file produced during the build process."
    ]
  },
  {
    "id": "w0419",
    "no": 419,
    "topicId": "ci-cd",
    "word": "container",
    "phonetic": "/kənˈteɪnər/",
    "englishDefinition": "A lightweight virtualized environment for running applications",
    "chineseDefinition": "容器",
    "exampleSentences": [
      "While configuring a deployment job, the team used \"container\" to explain that it means a lightweight virtualized environment for running applications."
    ]
  },
  {
    "id": "w0420",
    "no": 420,
    "topicId": "ci-cd",
    "word": "Docker",
    "phonetic": "/ˈdɒkər/",
    "englishDefinition": "A platform for building and running containers",
    "chineseDefinition": "Docker容器平台",
    "exampleSentences": [
      "In the notes about shipping a hotfix, \"Docker\" was defined as a platform for building and running containers."
    ]
  },
  {
    "id": "w0421",
    "no": 421,
    "topicId": "ci-cd",
    "word": "image",
    "phonetic": "/ˈɪmɪdʒ/",
    "englishDefinition": "A read-only template for creating containers",
    "chineseDefinition": "镜像",
    "exampleSentences": [
      "The lesson used \"image\" while preparing a release pipeline to show that it means a read-only template for creating containers."
    ]
  },
  {
    "id": "w0422",
    "no": 422,
    "topicId": "ci-cd",
    "word": "Dockerfile",
    "phonetic": "/ˈdɒkərfaɪl/",
    "englishDefinition": "A script defining how to build a Docker image",
    "chineseDefinition": "Dockerfile配置",
    "exampleSentences": [
      "When investigating a failed build, the reviewer asked the team to define \"Dockerfile\" as a script defining how to build a Docker image."
    ]
  },
  {
    "id": "w0423",
    "no": 423,
    "topicId": "ci-cd",
    "word": "registry",
    "phonetic": "/ˈredʒɪstri/",
    "englishDefinition": "A storage system for container images",
    "chineseDefinition": "镜像仓库",
    "exampleSentences": [
      "The example about automating code checks used \"registry\" because it means a storage system for container images."
    ]
  },
  {
    "id": "w0424",
    "no": 424,
    "topicId": "ci-cd",
    "word": "Kubernetes",
    "phonetic": "/kuːbərˈnetiːz/",
    "englishDefinition": "A container orchestration platform",
    "chineseDefinition": "Kubernetes容器编排",
    "exampleSentences": [
      "While deploying to staging, the instructor connected \"Kubernetes\" with the idea that it means a container orchestration platform."
    ]
  },
  {
    "id": "w0425",
    "no": 425,
    "topicId": "ci-cd",
    "word": "pod",
    "phonetic": "/pɒd/",
    "englishDefinition": "The smallest deployable unit in Kubernetes",
    "chineseDefinition": "Pod容器组",
    "exampleSentences": [
      "The project discussion about reviewing a delivery workflow included \"pod\" as the term for the smallest deployable unit in Kubernetes."
    ]
  },
  {
    "id": "w0426",
    "no": 426,
    "topicId": "ci-cd",
    "word": "cluster",
    "phonetic": "/ˈklʌstər/",
    "englishDefinition": "A group of machines working together",
    "chineseDefinition": "集群",
    "exampleSentences": [
      "A teammate wrote \"cluster\" in the checklist about promoting a build to production and noted that it means a group of machines working together."
    ]
  },
  {
    "id": "w0427",
    "no": 427,
    "topicId": "ci-cd",
    "word": "node",
    "phonetic": "/noʊd/",
    "englishDefinition": "A single machine in a cluster",
    "chineseDefinition": "节点",
    "exampleSentences": [
      "While recovering from an incident, \"node\" helped the learner remember this meaning: a single machine in a cluster."
    ]
  },
  {
    "id": "w0428",
    "no": 428,
    "topicId": "ci-cd",
    "word": "namespace",
    "phonetic": "/ˈneɪmspeɪs/",
    "englishDefinition": "A virtual cluster within Kubernetes",
    "chineseDefinition": "命名空间",
    "exampleSentences": [
      "The documentation about running checks after a commit used \"namespace\" to describe a virtual cluster within Kubernetes."
    ]
  },
  {
    "id": "w0429",
    "no": 429,
    "topicId": "ci-cd",
    "word": "ingress",
    "phonetic": "/ˈɪnɡres/",
    "englishDefinition": "An entry point for external traffic into a cluster",
    "chineseDefinition": "入口",
    "exampleSentences": [
      "In a review about configuring a deployment job, \"ingress\" came up as the best term for an entry point for external traffic into a cluster."
    ]
  },
  {
    "id": "w0430",
    "no": 430,
    "topicId": "ci-cd",
    "word": "service mesh",
    "phonetic": "/ˈsɜːrvɪs meʃ/",
    "englishDefinition": "Infrastructure managing service-to-service communication",
    "chineseDefinition": "服务网格",
    "exampleSentences": [
      "The trainer introduced \"service mesh\" while shipping a hotfix and described it as infrastructure managing service-to-service communication."
    ]
  },
  {
    "id": "w0431",
    "no": 431,
    "topicId": "ci-cd",
    "word": "helm",
    "phonetic": "/helm/",
    "englishDefinition": "A package manager for Kubernetes",
    "chineseDefinition": "Helm包管理器",
    "exampleSentences": [
      "The team clarified \"helm\" while preparing a release pipeline, saying that it means a package manager for Kubernetes."
    ]
  },
  {
    "id": "w0432",
    "no": 432,
    "topicId": "ci-cd",
    "word": "terraform",
    "phonetic": "/ˈterəfɔːrm/",
    "englishDefinition": "An infrastructure as code tool",
    "chineseDefinition": "Terraform基础设施工具",
    "exampleSentences": [
      "In an example about investigating a failed build, \"terraform\" referred to an infrastructure as code tool."
    ]
  },
  {
    "id": "w0433",
    "no": 433,
    "topicId": "ci-cd",
    "word": "infrastructure as code",
    "phonetic": "/ˈɪnfrəstrʌktʃər æz koʊd/",
    "englishDefinition": "Managing infrastructure through configuration files",
    "chineseDefinition": "基础设施即代码",
    "exampleSentences": [
      "The glossary entry about automating code checks explained \"infrastructure as code\" as managing infrastructure through configuration files."
    ]
  },
  {
    "id": "w0434",
    "no": 434,
    "topicId": "ci-cd",
    "word": "provisioning",
    "phonetic": "/prəˈvɪʒənɪŋ/",
    "englishDefinition": "Setting up and configuring infrastructure resources",
    "chineseDefinition": "资源配置",
    "exampleSentences": [
      "While deploying to staging, a senior engineer used \"provisioning\" to talk about setting up and configuring infrastructure resources."
    ]
  },
  {
    "id": "w0435",
    "no": 435,
    "topicId": "ci-cd",
    "word": "orchestration",
    "phonetic": "/ˌɔːrkɪˈstreɪʃn/",
    "englishDefinition": "Automating the management of containers and services",
    "chineseDefinition": "编排",
    "exampleSentences": [
      "The training card about reviewing a delivery workflow showed \"orchestration\" with this meaning: automating the management of containers and services."
    ]
  },
  {
    "id": "w0436",
    "no": 436,
    "topicId": "ci-cd",
    "word": "configuration",
    "phonetic": "/kənˌfɪɡjəˈreɪʃn/",
    "englishDefinition": "Settings that control how software behaves",
    "chineseDefinition": "配置",
    "exampleSentences": [
      "During a discussion about promoting a build to production, \"configuration\" was the term used for settings that control how software behaves."
    ]
  },
  {
    "id": "w0437",
    "no": 437,
    "topicId": "ci-cd",
    "word": "environment variable",
    "phonetic": "/ɪnˈvaɪrənmənt ˈverɪəbl/",
    "englishDefinition": "A dynamic value set in the operating environment",
    "chineseDefinition": "环境变量",
    "exampleSentences": [
      "While recovering from an incident, the team used \"environment variable\" to explain that it means a dynamic value set in the operating environment."
    ]
  },
  {
    "id": "w0438",
    "no": 438,
    "topicId": "ci-cd",
    "word": "secret",
    "phonetic": "/ˈsiːkrɪt/",
    "englishDefinition": "Sensitive configuration data like passwords or API keys",
    "chineseDefinition": "密钥/敏感信息",
    "exampleSentences": [
      "In the notes about running checks after a commit, \"secret\" was defined as sensitive configuration data like passwords or API keys."
    ]
  },
  {
    "id": "w0439",
    "no": 439,
    "topicId": "ci-cd",
    "word": "vault",
    "phonetic": "/vɔːlt/",
    "englishDefinition": "A tool for securely storing and accessing secrets",
    "chineseDefinition": "密钥管理库",
    "exampleSentences": [
      "A developer pointed to \"vault\" while configuring a deployment job and explained that it means a tool for securely storing and accessing secrets."
    ]
  },
  {
    "id": "w0440",
    "no": 440,
    "topicId": "ci-cd",
    "word": "blue-green deployment",
    "phonetic": "/bluː ɡriːn dɪˈplɔɪmənt/",
    "englishDefinition": "Running two identical environments and switching traffic",
    "chineseDefinition": "蓝绿部署",
    "exampleSentences": [
      "The lesson used \"blue-green deployment\" while shipping a hotfix to show that it means running two identical environments and switching traffic."
    ]
  },
  {
    "id": "w0441",
    "no": 441,
    "topicId": "ci-cd",
    "word": "canary deployment",
    "phonetic": "/kəˈneri dɪˈplɔɪmənt/",
    "englishDefinition": "Gradually rolling out changes to a subset of users",
    "chineseDefinition": "金丝雀部署",
    "exampleSentences": [
      "The example about preparing a release pipeline used \"canary deployment\" because it means gradually rolling out changes to a subset of users."
    ]
  },
  {
    "id": "w0442",
    "no": 442,
    "topicId": "ci-cd",
    "word": "rolling update",
    "phonetic": "/ˈroʊlɪŋ ˈʌpdeɪt/",
    "englishDefinition": "Incrementally updating instances one at a time",
    "chineseDefinition": "滚动更新",
    "exampleSentences": [
      "While investigating a failed build, the instructor connected \"rolling update\" with the idea that it means incrementally updating instances one at a time."
    ]
  },
  {
    "id": "w0443",
    "no": 443,
    "topicId": "ci-cd",
    "word": "rollback",
    "phonetic": "/ˈroʊlbæk/",
    "englishDefinition": "Reverting to a previous version after a failed deployment",
    "chineseDefinition": "回滚",
    "exampleSentences": [
      "The project discussion about automating code checks included \"rollback\" as the term for reverting to a previous version after a failed deployment."
    ]
  },
  {
    "id": "w0444",
    "no": 444,
    "topicId": "ci-cd",
    "word": "downtime",
    "phonetic": "/ˈdaʊntaɪm/",
    "englishDefinition": "A period when a system is unavailable",
    "chineseDefinition": "停机时间",
    "exampleSentences": [
      "A teammate wrote \"downtime\" in the checklist about deploying to staging and noted that it means a period when a system is unavailable."
    ]
  },
  {
    "id": "w0445",
    "no": 445,
    "topicId": "ci-cd",
    "word": "uptime",
    "phonetic": "/ˈʌptaɪm/",
    "englishDefinition": "The time a system has been continuously operational",
    "chineseDefinition": "正常运行时间",
    "exampleSentences": [
      "While reviewing a delivery workflow, \"uptime\" helped the learner remember this meaning: the time a system has been continuously operational."
    ]
  },
  {
    "id": "w0446",
    "no": 446,
    "topicId": "ci-cd",
    "word": "SLA",
    "phonetic": "/ˌes el ˈeɪ/",
    "englishDefinition": "Service Level Agreement defining service expectations",
    "chineseDefinition": "服务等级协议",
    "exampleSentences": [
      "The documentation about promoting a build to production used \"SLA\" to describe service Level Agreement defining service expectations."
    ]
  },
  {
    "id": "w0447",
    "no": 447,
    "topicId": "ci-cd",
    "word": "SLO",
    "phonetic": "/ˌes el ˈoʊ/",
    "englishDefinition": "Service Level Objective — a target for service quality",
    "chineseDefinition": "服务等级目标",
    "exampleSentences": [
      "In a review about recovering from an incident, \"SLO\" came up as the best term for service Level Objective — a target for service quality."
    ]
  },
  {
    "id": "w0448",
    "no": 448,
    "topicId": "ci-cd",
    "word": "SLI",
    "phonetic": "/ˌes el ˈaɪ/",
    "englishDefinition": "Service Level Indicator — a metric measuring service quality",
    "chineseDefinition": "服务等级指标",
    "exampleSentences": [
      "The trainer introduced \"SLI\" while running checks after a commit and described it as service Level Indicator — a metric measuring service quality."
    ]
  },
  {
    "id": "w0449",
    "no": 449,
    "topicId": "ci-cd",
    "word": "observability",
    "phonetic": "/əbˌzɜːrvəˈbɪlɪti/",
    "englishDefinition": "The ability to understand a system's state from its outputs",
    "chineseDefinition": "可观测性",
    "exampleSentences": [
      "A practice task about configuring a deployment job asked students to use \"observability\" for the ability to understand a system's state from its outputs."
    ]
  },
  {
    "id": "w0450",
    "no": 450,
    "topicId": "ci-cd",
    "word": "tracing",
    "phonetic": "/ˈtreɪsɪŋ/",
    "englishDefinition": "Tracking requests across distributed services",
    "chineseDefinition": "链路追踪",
    "exampleSentences": [
      "The team clarified \"tracing\" while shipping a hotfix, saying that it means tracking requests across distributed services."
    ]
  },
  {
    "id": "w0451",
    "no": 451,
    "topicId": "ci-cd",
    "word": "metrics",
    "phonetic": "/ˈmetrɪks/",
    "englishDefinition": "Quantitative measures of system performance",
    "chineseDefinition": "指标",
    "exampleSentences": [
      "The glossary entry about preparing a release pipeline explained \"metrics\" as quantitative measures of system performance."
    ]
  },
  {
    "id": "w0452",
    "no": 452,
    "topicId": "ci-cd",
    "word": "alerting",
    "phonetic": "/əˈlɜːrtɪŋ/",
    "englishDefinition": "Notifying teams when metrics exceed thresholds",
    "chineseDefinition": "告警",
    "exampleSentences": [
      "While investigating a failed build, a senior engineer used \"alerting\" to talk about notifying teams when metrics exceed thresholds."
    ]
  },
  {
    "id": "w0453",
    "no": 453,
    "topicId": "ci-cd",
    "word": "dashboard",
    "phonetic": "/ˈdæʃbɔːrd/",
    "englishDefinition": "A visual display of key metrics and data",
    "chineseDefinition": "仪表盘",
    "exampleSentences": [
      "The training card about automating code checks showed \"dashboard\" with this meaning: a visual display of key metrics and data."
    ]
  },
  {
    "id": "w0454",
    "no": 454,
    "topicId": "ci-cd",
    "word": "log aggregation",
    "phonetic": "/lɒɡ ˌæɡrɪˈɡeɪʃn/",
    "englishDefinition": "Collecting and centralizing logs from multiple sources",
    "chineseDefinition": "日志聚合",
    "exampleSentences": [
      "During a discussion about deploying to staging, \"log aggregation\" was the term used for collecting and centralizing logs from multiple sources."
    ]
  },
  {
    "id": "w0455",
    "no": 455,
    "topicId": "ci-cd",
    "word": "daemon",
    "phonetic": "/ˈdiːmən/",
    "englishDefinition": "A background process running continuously",
    "chineseDefinition": "守护进程",
    "exampleSentences": [
      "While reviewing a delivery workflow, the team used \"daemon\" to explain that it means a background process running continuously."
    ]
  },
  {
    "id": "w0456",
    "no": 456,
    "topicId": "ci-cd",
    "word": "cron job",
    "phonetic": "/krɒn dʒɒb/",
    "englishDefinition": "A scheduled task that runs at specified times",
    "chineseDefinition": "定时任务",
    "exampleSentences": [
      "In the notes about promoting a build to production, \"cron job\" was defined as a scheduled task that runs at specified times."
    ]
  },
  {
    "id": "w0457",
    "no": 457,
    "topicId": "ci-cd",
    "word": "script",
    "phonetic": "/skrɪpt/",
    "englishDefinition": "A program written for automating tasks",
    "chineseDefinition": "脚本",
    "exampleSentences": [
      "A developer pointed to \"script\" while recovering from an incident and explained that it means a program written for automating tasks."
    ]
  },
  {
    "id": "w0458",
    "no": 458,
    "topicId": "ci-cd",
    "word": "shell",
    "phonetic": "/ʃel/",
    "englishDefinition": "A command-line interface for interacting with the OS",
    "chineseDefinition": "命令行终端",
    "exampleSentences": [
      "The lesson used \"shell\" while running checks after a commit to show that it means a command-line interface for interacting with the OS."
    ]
  },
  {
    "id": "w0459",
    "no": 459,
    "topicId": "ci-cd",
    "word": "bash",
    "phonetic": "/bæʃ/",
    "englishDefinition": "A popular Unix shell and scripting language",
    "chineseDefinition": "Bash终端",
    "exampleSentences": [
      "When configuring a deployment job, the reviewer asked the team to define \"bash\" as a popular Unix shell and scripting language."
    ]
  },
  {
    "id": "w0460",
    "no": 460,
    "topicId": "ci-cd",
    "word": "SSH",
    "phonetic": "/ˌes es ˈeɪtʃ/",
    "englishDefinition": "Secure Shell for remote server access",
    "chineseDefinition": "SSH远程连接",
    "exampleSentences": [
      "The example about shipping a hotfix used \"SSH\" because it means secure Shell for remote server access."
    ]
  },
  {
    "id": "w0461",
    "no": 461,
    "topicId": "ci-cd",
    "word": "YAML",
    "phonetic": "/ˈjæml/",
    "englishDefinition": "A human-readable data serialization format",
    "chineseDefinition": "YAML格式",
    "exampleSentences": [
      "The project discussion about preparing a release pipeline included \"YAML\" as the term for a human-readable data serialization format."
    ]
  },
  {
    "id": "w0462",
    "no": 462,
    "topicId": "ci-cd",
    "word": "JSON",
    "phonetic": "/ˈdʒeɪsɒn/",
    "englishDefinition": "JavaScript Object Notation for data interchange",
    "chineseDefinition": "JSON格式",
    "exampleSentences": [
      "A teammate wrote \"JSON\" in the checklist about investigating a failed build and noted that it means javaScript Object Notation for data interchange."
    ]
  },
  {
    "id": "w0463",
    "no": 463,
    "topicId": "ci-cd",
    "word": "XML",
    "phonetic": "/ˌeks em ˈel/",
    "englishDefinition": "Extensible Markup Language for structured data",
    "chineseDefinition": "XML格式",
    "exampleSentences": [
      "While automating code checks, \"XML\" helped the learner remember this meaning: extensible Markup Language for structured data."
    ]
  },
  {
    "id": "w0464",
    "no": 464,
    "topicId": "ci-cd",
    "word": "lint",
    "phonetic": "/lɪnt/",
    "englishDefinition": "To analyze code for potential errors and style issues",
    "chineseDefinition": "代码检查",
    "exampleSentences": [
      "The documentation about deploying to staging used \"lint\" to describe to analyze code for potential errors and style issues."
    ]
  },
  {
    "id": "w0465",
    "no": 465,
    "topicId": "ci-cd",
    "word": "hook",
    "phonetic": "/hʊk/",
    "englishDefinition": "A script triggered at a specific point in a workflow",
    "chineseDefinition": "钩子",
    "exampleSentences": [
      "In a review about reviewing a delivery workflow, \"hook\" came up as the best term for a script triggered at a specific point in a workflow."
    ]
  },
  {
    "id": "w0466",
    "no": 466,
    "topicId": "ci-cd",
    "word": "pre-commit",
    "phonetic": "/priː kəˈmɪt/",
    "englishDefinition": "A hook that runs before a git commit is finalized",
    "chineseDefinition": "提交前钩子",
    "exampleSentences": [
      "The trainer introduced \"pre-commit\" while promoting a build to production and described it as a hook that runs before a git commit is finalized."
    ]
  },
  {
    "id": "w0467",
    "no": 467,
    "topicId": "ci-cd",
    "word": "staging",
    "phonetic": "/ˈsteɪdʒɪŋ/",
    "englishDefinition": "An environment that mirrors production for testing",
    "chineseDefinition": "预发布环境",
    "exampleSentences": [
      "A practice task about recovering from an incident asked students to use \"staging\" for an environment that mirrors production for testing."
    ]
  },
  {
    "id": "w0468",
    "no": 468,
    "topicId": "ci-cd",
    "word": "production",
    "phonetic": "/prəˈdʌkʃn/",
    "englishDefinition": "The live environment serving real users",
    "chineseDefinition": "生产环境",
    "exampleSentences": [
      "The team clarified \"production\" while running checks after a commit, saying that it means the live environment serving real users."
    ]
  },
  {
    "id": "w0469",
    "no": 469,
    "topicId": "ci-cd",
    "word": "development",
    "phonetic": "/dɪˈveləpmənt/",
    "englishDefinition": "The environment used for active coding",
    "chineseDefinition": "开发环境",
    "exampleSentences": [
      "In an example about configuring a deployment job, \"development\" referred to the environment used for active coding."
    ]
  },
  {
    "id": "w0470",
    "no": 470,
    "topicId": "ci-cd",
    "word": "sandbox",
    "phonetic": "/ˈsændbɒks/",
    "englishDefinition": "An isolated environment for safe experimentation",
    "chineseDefinition": "沙箱环境",
    "exampleSentences": [
      "The glossary entry about shipping a hotfix explained \"sandbox\" as an isolated environment for safe experimentation."
    ]
  },
  {
    "id": "w0471",
    "no": 471,
    "topicId": "ci-cd",
    "word": "feature flag",
    "phonetic": "/ˈfiːtʃər flæɡ/",
    "englishDefinition": "A toggle to enable or disable features without deployment",
    "chineseDefinition": "功能开关",
    "exampleSentences": [
      "The training card about preparing a release pipeline showed \"feature flag\" with this meaning: a toggle to enable or disable features without deployment."
    ]
  },
  {
    "id": "w0472",
    "no": 472,
    "topicId": "ci-cd",
    "word": "hotfix",
    "phonetic": "/ˈhɒtfɪks/",
    "englishDefinition": "An urgent fix applied directly to production",
    "chineseDefinition": "热修复",
    "exampleSentences": [
      "During a discussion about investigating a failed build, \"hotfix\" was the term used for an urgent fix applied directly to production."
    ]
  },
  {
    "id": "w0473",
    "no": 473,
    "topicId": "ci-cd",
    "word": "patch",
    "phonetic": "/pætʃ/",
    "englishDefinition": "A small update fixing specific issues",
    "chineseDefinition": "补丁",
    "exampleSentences": [
      "While automating code checks, the team used \"patch\" to explain that it means a small update fixing specific issues."
    ]
  },
  {
    "id": "w0474",
    "no": 474,
    "topicId": "ci-cd",
    "word": "version",
    "phonetic": "/ˈvɜːrʒn/",
    "englishDefinition": "A specific release of software identified by a number",
    "chineseDefinition": "版本",
    "exampleSentences": [
      "In the notes about deploying to staging, \"version\" was defined as a specific release of software identified by a number."
    ]
  },
  {
    "id": "w0475",
    "no": 475,
    "topicId": "ci-cd",
    "word": "semantic versioning",
    "phonetic": "/sɪˈmæntɪk ˈvɜːrʒnɪŋ/",
    "englishDefinition": "A versioning scheme using MAJOR.MINOR.PATCH",
    "chineseDefinition": "语义化版本",
    "exampleSentences": [
      "A developer pointed to \"semantic versioning\" while reviewing a delivery workflow and explained that it means a versioning scheme using MAJOR.MINOR.PATCH."
    ]
  },
  {
    "id": "w0476",
    "no": 476,
    "topicId": "ci-cd",
    "word": "changelog",
    "phonetic": "/ˈtʃeɪndʒlɒɡ/",
    "englishDefinition": "A record of notable changes between versions",
    "chineseDefinition": "变更日志",
    "exampleSentences": [
      "The lesson used \"changelog\" while promoting a build to production to show that it means a record of notable changes between versions."
    ]
  },
  {
    "id": "w0477",
    "no": 477,
    "topicId": "ci-cd",
    "word": "tag",
    "phonetic": "/tæɡ/",
    "englishDefinition": "A label marking a specific point in version history",
    "chineseDefinition": "标签",
    "exampleSentences": [
      "When recovering from an incident, the reviewer asked the team to define \"tag\" as a label marking a specific point in version history."
    ]
  },
  {
    "id": "w0478",
    "no": 478,
    "topicId": "ci-cd",
    "word": "branch",
    "phonetic": "/bræntʃ/",
    "englishDefinition": "An independent line of development in version control",
    "chineseDefinition": "分支",
    "exampleSentences": [
      "The example about running checks after a commit used \"branch\" because it means an independent line of development in version control."
    ]
  },
  {
    "id": "w0479",
    "no": 479,
    "topicId": "ci-cd",
    "word": "merge",
    "phonetic": "/mɜːrdʒ/",
    "englishDefinition": "To combine changes from different branches",
    "chineseDefinition": "合并",
    "exampleSentences": [
      "While configuring a deployment job, the instructor connected \"merge\" with the idea that it means to combine changes from different branches."
    ]
  },
  {
    "id": "w0480",
    "no": 480,
    "topicId": "ci-cd",
    "word": "conflict",
    "phonetic": "/ˈkɒnflɪkt/",
    "englishDefinition": "Incompatible changes in the same file during merge",
    "chineseDefinition": "冲突",
    "exampleSentences": [
      "The project discussion about shipping a hotfix included \"conflict\" as the term for incompatible changes in the same file during merge."
    ]
  }
] satisfies WordEntry[];
