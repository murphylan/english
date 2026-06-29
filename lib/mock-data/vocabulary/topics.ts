import type { Topic } from "@/types/vocabulary-types";

export const TOPICS = [
  {
    "id": "fundamentals",
    "orderLabel": "一、编程基础",
    "titleZh": "编程基础",
    "titleEn": "Fundamentals",
    "rangeStart": 1,
    "rangeEnd": 80
  },
  {
    "id": "oop",
    "orderLabel": "二、面向对象编程",
    "titleZh": "面向对象编程",
    "titleEn": "OOP",
    "rangeStart": 81,
    "rangeEnd": 120
  },
  {
    "id": "structures-algorithms",
    "orderLabel": "三、数据结构与算法",
    "titleZh": "数据结构与算法",
    "titleEn": "Data Structures & Algorithms",
    "rangeStart": 121,
    "rangeEnd": 180
  },
  {
    "id": "frontend-development",
    "orderLabel": "四、前端开发",
    "titleZh": "前端开发",
    "titleEn": "Frontend Development",
    "rangeStart": 181,
    "rangeEnd": 260
  },
  {
    "id": "development",
    "orderLabel": "五、后端开发",
    "titleZh": "后端开发",
    "titleEn": "Backend Development",
    "rangeStart": 261,
    "rangeEnd": 340
  },
  {
    "id": "database",
    "orderLabel": "六、数据库",
    "titleZh": "数据库",
    "titleEn": "Database",
    "rangeStart": 341,
    "rangeEnd": 410
  },
  {
    "id": "ci-cd",
    "orderLabel": "七、DevOps 与 CI/CD",
    "titleZh": "DevOps 与 CI/CD",
    "titleEn": "CI/CD",
    "rangeStart": 411,
    "rangeEnd": 480
  },
  {
    "id": "control",
    "orderLabel": "八、版本控制",
    "titleZh": "版本控制",
    "titleEn": "Version Control",
    "rangeStart": 481,
    "rangeEnd": 510
  },
  {
    "id": "computing",
    "orderLabel": "九、云计算",
    "titleZh": "云计算",
    "titleEn": "Cloud Computing",
    "rangeStart": 511,
    "rangeEnd": 570
  },
  {
    "id": "testing",
    "orderLabel": "十、测试",
    "titleZh": "测试",
    "titleEn": "Testing",
    "rangeStart": 571,
    "rangeEnd": 630
  },
  {
    "id": "security",
    "orderLabel": "十一、安全",
    "titleZh": "安全",
    "titleEn": "Security",
    "rangeStart": 631,
    "rangeEnd": 680
  },
  {
    "id": "management-agile",
    "orderLabel": "十二、项目管理与敏捷",
    "titleZh": "项目管理与敏捷",
    "titleEn": "Project Management & Agile",
    "rangeStart": 681,
    "rangeEnd": 750
  },
  {
    "id": "ai-machine-learning",
    "orderLabel": "十三、AI 与机器学习",
    "titleZh": "AI 与机器学习",
    "titleEn": "AI & Machine Learning",
    "rangeStart": 751,
    "rangeEnd": 810
  },
  {
    "id": "ui-ux-design",
    "orderLabel": "十四、UI/UX 设计",
    "titleZh": "UI/UX 设计",
    "titleEn": "UI/UX Design",
    "rangeStart": 811,
    "rangeEnd": 850
  },
  {
    "id": "communication-workplace",
    "orderLabel": "十五、商务沟通与职场",
    "titleZh": "商务沟通与职场",
    "titleEn": "Business Communication & Workplace",
    "rangeStart": 851,
    "rangeEnd": 930
  },
  {
    "id": "performance",
    "orderLabel": "十六、架构与性能",
    "titleZh": "架构与性能",
    "titleEn": "Architecture & Performance",
    "rangeStart": 931,
    "rangeEnd": 1000
  },
  {
    "id": "claude",
    "orderLabel": "十七、Claude 状态词",
    "titleZh": "Claude 状态词",
    "titleEn": "Status Words",
    "rangeStart": 1001,
    "rangeEnd": 1022
  },
  {
    "id": "claude-cognition",
    "orderLabel": "十八、Spinner Verbs · 认知思考",
    "titleZh": "认知思考类",
    "titleEn": "Spinner Verbs · Cognition",
    "rangeStart": 1101,
    "rangeEnd": 1117
  },
  {
    "id": "claude-cooking",
    "orderLabel": "十九、Spinner Verbs · 烹饪比喻",
    "titleZh": "烹饪与物理过程比喻类",
    "titleEn": "Spinner Verbs · Cooking & Process",
    "rangeStart": 1118,
    "rangeEnd": 1135
  },
  {
    "id": "claude-motion",
    "orderLabel": "二十、Spinner Verbs · 运动流动",
    "titleZh": "运动与流动类",
    "titleEn": "Spinner Verbs · Motion & Flow",
    "rangeStart": 1136,
    "rangeEnd": 1149
  },
  {
    "id": "claude-craft",
    "orderLabel": "二十一、Spinner Verbs · 手工创造",
    "titleZh": "手工制作与创造类",
    "titleEn": "Spinner Verbs · Craft & Creation",
    "rangeStart": 1150,
    "rangeEnd": 1164
  },
  {
    "id": "claude-slang",
    "orderLabel": "二十二、Spinner Verbs · 幽默俚语",
    "titleZh": "幽默俚语类",
    "titleEn": "Spinner Verbs · Playful Slang",
    "rangeStart": 1165,
    "rangeEnd": 1183
  },
  {
    "id": "claude-easter-eggs",
    "orderLabel": "二十三、Spinner Verbs · 极客彩蛋",
    "titleZh": "极客彩蛋类",
    "titleEn": "Spinner Verbs · Geek Easter Eggs",
    "rangeStart": 1184,
    "rangeEnd": 1192
  }
] satisfies Topic[];
