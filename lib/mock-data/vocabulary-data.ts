import type { Topic, WordEntry } from "@/types/vocabulary-types";

export const TOPICS = [
  {
    "id": "fundamentals",
    "orderLabel": "一、编程基础",
    "titleZh": "Programming",
    "titleEn": "Fundamentals",
    "rangeStart": 1,
    "rangeEnd": 80
  },
  {
    "id": "oop",
    "orderLabel": "二、面向对象编",
    "titleZh": "程",
    "titleEn": "OOP",
    "rangeStart": 81,
    "rangeEnd": 120
  },
  {
    "id": "structures-algorithms",
    "orderLabel": "三、数据结构与算法",
    "titleZh": "Data",
    "titleEn": "Structures & Algorithms",
    "rangeStart": 121,
    "rangeEnd": 180
  },
  {
    "id": "frontend-development",
    "orderLabel": "四、Web",
    "titleZh": "前端开发",
    "titleEn": "Frontend Development",
    "rangeStart": 181,
    "rangeEnd": 260
  },
  {
    "id": "development",
    "orderLabel": "五、后端开发",
    "titleZh": "Backend",
    "titleEn": "Development",
    "rangeStart": 261,
    "rangeEnd": 340
  },
  {
    "id": "database",
    "orderLabel": "六、数据",
    "titleZh": "库",
    "titleEn": "Database",
    "rangeStart": 341,
    "rangeEnd": 410
  },
  {
    "id": "ci-cd",
    "orderLabel": "七、DevOps",
    "titleZh": "与",
    "titleEn": "CI/CD",
    "rangeStart": 411,
    "rangeEnd": 480
  },
  {
    "id": "control",
    "orderLabel": "八、版本控制",
    "titleZh": "Version",
    "titleEn": "Control",
    "rangeStart": 481,
    "rangeEnd": 510
  },
  {
    "id": "computing",
    "orderLabel": "九、云计算",
    "titleZh": "Cloud",
    "titleEn": "Computing",
    "rangeStart": 511,
    "rangeEnd": 570
  },
  {
    "id": "testing",
    "orderLabel": "十、测",
    "titleZh": "试",
    "titleEn": "Testing",
    "rangeStart": 571,
    "rangeEnd": 630
  },
  {
    "id": "security",
    "orderLabel": "十一、安",
    "titleZh": "全",
    "titleEn": "Security",
    "rangeStart": 631,
    "rangeEnd": 680
  },
  {
    "id": "management-agile",
    "orderLabel": "十二、项目管理与敏捷",
    "titleZh": "Project",
    "titleEn": "Management & Agile",
    "rangeStart": 681,
    "rangeEnd": 750
  },
  {
    "id": "ai-machine-learning",
    "orderLabel": "十三、AI",
    "titleZh": "与机器学习",
    "titleEn": "AI & Machine Learning",
    "rangeStart": 751,
    "rangeEnd": 810
  },
  {
    "id": "ui-ux-design",
    "orderLabel": "十四、UI/UX",
    "titleZh": "设计",
    "titleEn": "UI/UX Design",
    "rangeStart": 811,
    "rangeEnd": 850
  },
  {
    "id": "communication-workplace",
    "orderLabel": "十五、商务沟通与职场",
    "titleZh": "Business",
    "titleEn": "Communication & Workplace",
    "rangeStart": 851,
    "rangeEnd": 930
  },
  {
    "id": "performance",
    "orderLabel": "十六、架构与性能",
    "titleZh": "Architecture &",
    "titleEn": "Performance",
    "rangeStart": 931,
    "rangeEnd": 1000
  }
] satisfies Topic[];

export const WORD_ENTRIES = [
  {
    "id": "w0001",
    "no": 1,
    "topicId": "fundamentals",
    "word": "variable",
    "phonetic": "/ˈverɪəbl/",
    "englishDefinition": "A named storage location in memory that holds a value",
    "chineseDefinition": "变量"
  },
  {
    "id": "w0002",
    "no": 2,
    "topicId": "fundamentals",
    "word": "constant",
    "phonetic": "/ˈkɒnstənt/",
    "englishDefinition": "A value that cannot be changed once assigned",
    "chineseDefinition": "常量"
  },
  {
    "id": "w0003",
    "no": 3,
    "topicId": "fundamentals",
    "word": "function",
    "phonetic": "/ˈfʌŋkʃn/",
    "englishDefinition": "A reusable block of code that performs a specific task",
    "chineseDefinition": "函数"
  },
  {
    "id": "w0004",
    "no": 4,
    "topicId": "fundamentals",
    "word": "parameter",
    "phonetic": "/pəˈræmɪtər/",
    "englishDefinition": "A variable listed in a function definition",
    "chineseDefinition": "参数（形参）"
  },
  {
    "id": "w0005",
    "no": 5,
    "topicId": "fundamentals",
    "word": "argument",
    "phonetic": "/ˈɑːrɡjumənt/",
    "englishDefinition": "The actual value passed to a function when called",
    "chineseDefinition": "参数（实参）"
  },
  {
    "id": "w0006",
    "no": 6,
    "topicId": "fundamentals",
    "word": "return",
    "phonetic": "/rɪˈtɜːrn/",
    "englishDefinition": "To send a value back from a function",
    "chineseDefinition": "返回"
  },
  {
    "id": "w0007",
    "no": 7,
    "topicId": "fundamentals",
    "word": "loop",
    "phonetic": "/luːp/",
    "englishDefinition": "A structure that repeats a block of code",
    "chineseDefinition": "循环"
  },
  {
    "id": "w0008",
    "no": 8,
    "topicId": "fundamentals",
    "word": "iteration",
    "phonetic": "/ˌɪtəˈreɪʃn/",
    "englishDefinition": "One complete execution of a loop body",
    "chineseDefinition": "迭代"
  },
  {
    "id": "w0009",
    "no": 9,
    "topicId": "fundamentals",
    "word": "condition",
    "phonetic": "/kənˈdɪʃn/",
    "englishDefinition": "An expression that evaluates to true or false",
    "chineseDefinition": "条件"
  },
  {
    "id": "w0010",
    "no": 10,
    "topicId": "fundamentals",
    "word": "statement",
    "phonetic": "/ˈsteɪtmənt/",
    "englishDefinition": "A single instruction in a program",
    "chineseDefinition": "语句"
  },
  {
    "id": "w0011",
    "no": 11,
    "topicId": "fundamentals",
    "word": "expression",
    "phonetic": "/ɪkˈspreʃn/",
    "englishDefinition": "A combination of values and operators that yields a result",
    "chineseDefinition": "表达式"
  },
  {
    "id": "w0012",
    "no": 12,
    "topicId": "fundamentals",
    "word": "operator",
    "phonetic": "/ˈɒpəreɪtər/",
    "englishDefinition": "A symbol that performs an operation on operands",
    "chineseDefinition": "运算符"
  },
  {
    "id": "w0013",
    "no": 13,
    "topicId": "fundamentals",
    "word": "assignment",
    "phonetic": "/əˈsaɪnmənt/",
    "englishDefinition": "The act of storing a value in a variable",
    "chineseDefinition": "赋值"
  },
  {
    "id": "w0014",
    "no": 14,
    "topicId": "fundamentals",
    "word": "declaration",
    "phonetic": "/ˌdekləˈreɪʃn/",
    "englishDefinition": "Introducing a variable or function to the program",
    "chineseDefinition": "声明"
  },
  {
    "id": "w0015",
    "no": 15,
    "topicId": "fundamentals",
    "word": "initialization",
    "phonetic": "/ɪˌnɪʃəlaɪˈzeɪʃn/",
    "englishDefinition": "Setting an initial value for a variable",
    "chineseDefinition": "初始化"
  },
  {
    "id": "w0016",
    "no": 16,
    "topicId": "fundamentals",
    "word": "scope",
    "phonetic": "/skoʊp/",
    "englishDefinition": "The region of code where a variable is accessible",
    "chineseDefinition": "作用域"
  },
  {
    "id": "w0017",
    "no": 17,
    "topicId": "fundamentals",
    "word": "syntax",
    "phonetic": "/ˈsɪntæks/",
    "englishDefinition": "The rules governing the structure of code",
    "chineseDefinition": "语法"
  },
  {
    "id": "w0018",
    "no": 18,
    "topicId": "fundamentals",
    "word": "compile",
    "phonetic": "/kəmˈpaɪl/",
    "englishDefinition": "To translate source code into machine code",
    "chineseDefinition": "编译"
  },
  {
    "id": "w0019",
    "no": 19,
    "topicId": "fundamentals",
    "word": "interpret",
    "phonetic": "/ɪnˈtɜːrprɪt/",
    "englishDefinition": "To execute code line by line without prior compilation",
    "chineseDefinition": "解释执行"
  },
  {
    "id": "w0020",
    "no": 20,
    "topicId": "fundamentals",
    "word": "debug",
    "phonetic": "/diːˈbʌɡ/",
    "englishDefinition": "To find and fix errors in code",
    "chineseDefinition": "调试"
  },
  {
    "id": "w0021",
    "no": 21,
    "topicId": "fundamentals",
    "word": "error",
    "phonetic": "/ˈerər/",
    "englishDefinition": "A mistake in code that prevents correct execution",
    "chineseDefinition": "错误"
  },
  {
    "id": "w0022",
    "no": 22,
    "topicId": "fundamentals",
    "word": "exception",
    "phonetic": "/ɪkˈsepʃn/",
    "englishDefinition": "An unexpected event that disrupts normal program flow",
    "chineseDefinition": "异常"
  },
  {
    "id": "w0023",
    "no": 23,
    "topicId": "fundamentals",
    "word": "runtime",
    "phonetic": "/ˈrʌntaɪm/",
    "englishDefinition": "The period during which a program is executing",
    "chineseDefinition": "运行时"
  },
  {
    "id": "w0024",
    "no": 24,
    "topicId": "fundamentals",
    "word": "boolean",
    "phonetic": "/ˈbuːliən/",
    "englishDefinition": "A data type with only two values: true or false",
    "chineseDefinition": "布尔值"
  },
  {
    "id": "w0025",
    "no": 25,
    "topicId": "fundamentals",
    "word": "integer",
    "phonetic": "/ˈɪntɪdʒər/",
    "englishDefinition": "A whole number without a decimal point",
    "chineseDefinition": "整数"
  },
  {
    "id": "w0026",
    "no": 26,
    "topicId": "fundamentals",
    "word": "float",
    "phonetic": "/floʊt/",
    "englishDefinition": "A number with a decimal point",
    "chineseDefinition": "浮点数"
  },
  {
    "id": "w0027",
    "no": 27,
    "topicId": "fundamentals",
    "word": "string",
    "phonetic": "/strɪŋ/",
    "englishDefinition": "A sequence of characters",
    "chineseDefinition": "字符串"
  },
  {
    "id": "w0028",
    "no": 28,
    "topicId": "fundamentals",
    "word": "array",
    "phonetic": "/əˈreɪ/",
    "englishDefinition": "An ordered collection of elements",
    "chineseDefinition": "数组"
  },
  {
    "id": "w0029",
    "no": 29,
    "topicId": "fundamentals",
    "word": "object",
    "phonetic": "/ˈɒbdʒɪkt/",
    "englishDefinition": "A data structure containing properties and methods",
    "chineseDefinition": "对象"
  },
  {
    "id": "w0030",
    "no": 30,
    "topicId": "fundamentals",
    "word": "null",
    "phonetic": "/nʌl/",
    "englishDefinition": "A special value representing no value or empty",
    "chineseDefinition": "空值"
  },
  {
    "id": "w0031",
    "no": 31,
    "topicId": "fundamentals",
    "word": "undefined",
    "phonetic": "/ˌʌndɪˈfaɪnd/",
    "englishDefinition": "A variable that has been declared but not assigned a value",
    "chineseDefinition": "未定义"
  },
  {
    "id": "w0032",
    "no": 32,
    "topicId": "fundamentals",
    "word": "type",
    "phonetic": "/taɪp/",
    "englishDefinition": "A classification of data that determines possible values",
    "chineseDefinition": "类型"
  },
  {
    "id": "w0033",
    "no": 33,
    "topicId": "fundamentals",
    "word": "casting",
    "phonetic": "/ˈkæstɪŋ/",
    "englishDefinition": "Converting a value from one type to another",
    "chineseDefinition": "类型转换"
  },
  {
    "id": "w0034",
    "no": 34,
    "topicId": "fundamentals",
    "word": "pointer",
    "phonetic": "/ˈpɔɪntər/",
    "englishDefinition": "A variable that stores a memory address",
    "chineseDefinition": "指针"
  },
  {
    "id": "w0035",
    "no": 35,
    "topicId": "fundamentals",
    "word": "reference",
    "phonetic": "/ˈrefrəns/",
    "englishDefinition": "An alias or indirect access to a value",
    "chineseDefinition": "引用"
  },
  {
    "id": "w0036",
    "no": 36,
    "topicId": "fundamentals",
    "word": "recursion",
    "phonetic": "/rɪˈkɜːrʒn/",
    "englishDefinition": "A function that calls itself",
    "chineseDefinition": "递归"
  },
  {
    "id": "w0037",
    "no": 37,
    "topicId": "fundamentals",
    "word": "callback",
    "phonetic": "/ˈkɔːlbæk/",
    "englishDefinition": "A function passed as an argument to another function",
    "chineseDefinition": "回调函数"
  },
  {
    "id": "w0038",
    "no": 38,
    "topicId": "fundamentals",
    "word": "closure",
    "phonetic": "/ˈkloʊʒər/",
    "englishDefinition": "A function that retains access to its outer scope",
    "chineseDefinition": "闭包"
  },
  {
    "id": "w0039",
    "no": 39,
    "topicId": "fundamentals",
    "word": "module",
    "phonetic": "/ˈmɒdjuːl/",
    "englishDefinition": "A self-contained unit of code that can be imported",
    "chineseDefinition": "模块"
  },
  {
    "id": "w0040",
    "no": 40,
    "topicId": "fundamentals",
    "word": "import",
    "phonetic": "/ˈɪmpɔːrt/",
    "englishDefinition": "To bring in code from another module",
    "chineseDefinition": "导入"
  },
  {
    "id": "w0041",
    "no": 41,
    "topicId": "fundamentals",
    "word": "export",
    "phonetic": "/ˈekspɔːrt/",
    "englishDefinition": "To make code available for other modules to use",
    "chineseDefinition": "导出"
  },
  {
    "id": "w0042",
    "no": 42,
    "topicId": "fundamentals",
    "word": "library",
    "phonetic": "/ˈlaɪbrəri/",
    "englishDefinition": "A collection of pre-written code for reuse",
    "chineseDefinition": "库"
  },
  {
    "id": "w0043",
    "no": 43,
    "topicId": "fundamentals",
    "word": "framework",
    "phonetic": "/ˈfreɪmwɜːrk/",
    "englishDefinition": "A platform providing structure for building applications",
    "chineseDefinition": "框架"
  },
  {
    "id": "w0044",
    "no": 44,
    "topicId": "fundamentals",
    "word": "package",
    "phonetic": "/ˈpækɪdʒ/",
    "englishDefinition": "A bundle of related code distributed as a unit",
    "chineseDefinition": "包"
  },
  {
    "id": "w0045",
    "no": 45,
    "topicId": "fundamentals",
    "word": "dependency",
    "phonetic": "/dɪˈpendənsi/",
    "englishDefinition": "An external library required by a project",
    "chineseDefinition": "依赖"
  },
  {
    "id": "w0046",
    "no": 46,
    "topicId": "fundamentals",
    "word": "namespace",
    "phonetic": "/ˈneɪmspeɪs/",
    "englishDefinition": "A container that groups related identifiers",
    "chineseDefinition": "命名空间"
  },
  {
    "id": "w0047",
    "no": 47,
    "topicId": "fundamentals",
    "word": "enum",
    "phonetic": "/ˈiːnʌm/",
    "englishDefinition": "A set of named constants",
    "chineseDefinition": "枚举"
  },
  {
    "id": "w0048",
    "no": 48,
    "topicId": "fundamentals",
    "word": "tuple",
    "phonetic": "/ˈtjuːpl/",
    "englishDefinition": "A fixed-size ordered collection of elements",
    "chineseDefinition": "元组"
  },
  {
    "id": "w0049",
    "no": 49,
    "topicId": "fundamentals",
    "word": "generic",
    "phonetic": "/dʒəˈnerɪk/",
    "englishDefinition": "Code that works with multiple types through type parameters",
    "chineseDefinition": "泛型"
  },
  {
    "id": "w0050",
    "no": 50,
    "topicId": "fundamentals",
    "word": "annotation",
    "phonetic": "/ˌænəˈteɪʃn/",
    "englishDefinition": "Metadata added to code for additional information",
    "chineseDefinition": "注解"
  },
  {
    "id": "w0051",
    "no": 51,
    "topicId": "fundamentals",
    "word": "decorator",
    "phonetic": "/ˈdekəreɪtər/",
    "englishDefinition": "A pattern that adds behavior to a function or class",
    "chineseDefinition": "装饰器"
  },
  {
    "id": "w0052",
    "no": 52,
    "topicId": "fundamentals",
    "word": "yield",
    "phonetic": "/jiːld/",
    "englishDefinition": "To produce a value from a generator function",
    "chineseDefinition": "生成/产出"
  },
  {
    "id": "w0053",
    "no": 53,
    "topicId": "fundamentals",
    "word": "async",
    "phonetic": "/eɪˈsɪŋk/",
    "englishDefinition": "Allowing code to run without blocking execution",
    "chineseDefinition": "异步"
  },
  {
    "id": "w0054",
    "no": 54,
    "topicId": "fundamentals",
    "word": "await",
    "phonetic": "/əˈweɪt/",
    "englishDefinition": "To pause execution until a promise resolves",
    "chineseDefinition": "等待"
  },
  {
    "id": "w0055",
    "no": 55,
    "topicId": "fundamentals",
    "word": "promise",
    "phonetic": "/ˈprɒmɪs/",
    "englishDefinition": "An object representing eventual completion of an async operation",
    "chineseDefinition": "Promise/期约"
  },
  {
    "id": "w0056",
    "no": 56,
    "topicId": "fundamentals",
    "word": "thread",
    "phonetic": "/θred/",
    "englishDefinition": "A lightweight unit of execution within a process",
    "chineseDefinition": "线程"
  },
  {
    "id": "w0057",
    "no": 57,
    "topicId": "fundamentals",
    "word": "process",
    "phonetic": "/ˈprɒses/",
    "englishDefinition": "An instance of a running program",
    "chineseDefinition": "进程"
  },
  {
    "id": "w0058",
    "no": 58,
    "topicId": "fundamentals",
    "word": "concurrency",
    "phonetic": "/kənˈkʌrənsi/",
    "englishDefinition": "Managing multiple tasks that overlap in time",
    "chineseDefinition": "并发"
  },
  {
    "id": "w0059",
    "no": 59,
    "topicId": "fundamentals",
    "word": "parallelism",
    "phonetic": "/ˈpærəlelɪzəm/",
    "englishDefinition": "Executing multiple tasks simultaneously",
    "chineseDefinition": "并行"
  },
  {
    "id": "w0060",
    "no": 60,
    "topicId": "fundamentals",
    "word": "deadlock",
    "phonetic": "/ˈdedlɒk/",
    "englishDefinition": "A state where processes block each other indefinitely",
    "chineseDefinition": "死锁"
  },
  {
    "id": "w0061",
    "no": 61,
    "topicId": "fundamentals",
    "word": "mutex",
    "phonetic": "/ˈmjuːteks/",
    "englishDefinition": "A lock ensuring only one thread accesses a resource",
    "chineseDefinition": "互斥锁"
  },
  {
    "id": "w0062",
    "no": 62,
    "topicId": "fundamentals",
    "word": "semaphore",
    "phonetic": "/ˈseməfɔːr/",
    "englishDefinition": "A signaling mechanism to control concurrent access",
    "chineseDefinition": "信号量"
  },
  {
    "id": "w0063",
    "no": 63,
    "topicId": "fundamentals",
    "word": "buffer",
    "phonetic": "/ˈbʌfər/",
    "englishDefinition": "Temporary storage for data in transit",
    "chineseDefinition": "缓冲区"
  },
  {
    "id": "w0064",
    "no": 64,
    "topicId": "fundamentals",
    "word": "stream",
    "phonetic": "/striːm/",
    "englishDefinition": "A sequence of data elements available over time",
    "chineseDefinition": "流"
  },
  {
    "id": "w0065",
    "no": 65,
    "topicId": "fundamentals",
    "word": "serialize",
    "phonetic": "/ˈsɪriəlaɪz/",
    "englishDefinition": "To convert an object into a storable/transmittable format",
    "chineseDefinition": "序列化"
  },
  {
    "id": "w0066",
    "no": 66,
    "topicId": "fundamentals",
    "word": "deserialize",
    "phonetic": "/diːˈsɪriəlaɪz/",
    "englishDefinition": "To reconstruct an object from serialized data",
    "chineseDefinition": "反序列化"
  },
  {
    "id": "w0067",
    "no": 67,
    "topicId": "fundamentals",
    "word": "parse",
    "phonetic": "/pɑːrs/",
    "englishDefinition": "To analyze a string and extract structured data",
    "chineseDefinition": "解析"
  },
  {
    "id": "w0068",
    "no": 68,
    "topicId": "fundamentals",
    "word": "token",
    "phonetic": "/ˈtoʊkən/",
    "englishDefinition": "A meaningful unit produced during parsing",
    "chineseDefinition": "令牌/标记"
  },
  {
    "id": "w0069",
    "no": 69,
    "topicId": "fundamentals",
    "word": "regex",
    "phonetic": "/ˈredʒeks/",
    "englishDefinition": "A pattern used for matching strings",
    "chineseDefinition": "正则表达式"
  },
  {
    "id": "w0070",
    "no": 70,
    "topicId": "fundamentals",
    "word": "literal",
    "phonetic": "/ˈlɪtərəl/",
    "englishDefinition": "A fixed value written directly in code",
    "chineseDefinition": "字面量"
  },
  {
    "id": "w0071",
    "no": 71,
    "topicId": "fundamentals",
    "word": "immutable",
    "phonetic": "/ɪˈmjuːtəbl/",
    "englishDefinition": "Unable to be changed after creation",
    "chineseDefinition": "不可变的"
  },
  {
    "id": "w0072",
    "no": 72,
    "topicId": "fundamentals",
    "word": "mutable",
    "phonetic": "/ˈmjuːtəbl/",
    "englishDefinition": "Able to be changed after creation",
    "chineseDefinition": "可变的"
  },
  {
    "id": "w0073",
    "no": 73,
    "topicId": "fundamentals",
    "word": "static",
    "phonetic": "/ˈstætɪk/",
    "englishDefinition": "Belonging to the class rather than any instance",
    "chineseDefinition": "静态的"
  },
  {
    "id": "w0074",
    "no": 74,
    "topicId": "fundamentals",
    "word": "dynamic",
    "phonetic": "/daɪˈnæmɪk/",
    "englishDefinition": "Determined or resolved at runtime",
    "chineseDefinition": "动态的"
  },
  {
    "id": "w0075",
    "no": 75,
    "topicId": "fundamentals",
    "word": "verbose",
    "phonetic": "/vɜːrˈboʊs/",
    "englishDefinition": "Using more words or code than necessary",
    "chineseDefinition": "冗长的"
  },
  {
    "id": "w0076",
    "no": 76,
    "topicId": "fundamentals",
    "word": "deprecated",
    "phonetic": "/ˈdeprɪkeɪtɪd/",
    "englishDefinition": "Marked as outdated and not recommended for use",
    "chineseDefinition": "已弃用的"
  },
  {
    "id": "w0077",
    "no": 77,
    "topicId": "fundamentals",
    "word": "legacy",
    "phonetic": "/ˈleɡəsi/",
    "englishDefinition": "Older code or systems still in use",
    "chineseDefinition": "遗留的"
  },
  {
    "id": "w0078",
    "no": 78,
    "topicId": "fundamentals",
    "word": "snippet",
    "phonetic": "/ˈsnɪpɪt/",
    "englishDefinition": "A small reusable piece of code",
    "chineseDefinition": "代码片段"
  },
  {
    "id": "w0079",
    "no": 79,
    "topicId": "fundamentals",
    "word": "boilerplate",
    "phonetic": "/ˈbɔɪlərpleɪt/",
    "englishDefinition": "Standard code required with little modification",
    "chineseDefinition": "样板代码"
  },
  {
    "id": "w0080",
    "no": 80,
    "topicId": "fundamentals",
    "word": "scaffold",
    "phonetic": "/ˈskæfoʊld/",
    "englishDefinition": "To generate the basic structure of a project",
    "chineseDefinition": "脚手架/搭建"
  },
  {
    "id": "w0081",
    "no": 81,
    "topicId": "oop",
    "word": "class",
    "phonetic": "/klæs/",
    "englishDefinition": "A blueprint for creating objects",
    "chineseDefinition": "类"
  },
  {
    "id": "w0082",
    "no": 82,
    "topicId": "oop",
    "word": "instance",
    "phonetic": "/ˈɪnstəns/",
    "englishDefinition": "A concrete object created from a class",
    "chineseDefinition": "实例"
  },
  {
    "id": "w0083",
    "no": 83,
    "topicId": "oop",
    "word": "constructor",
    "phonetic": "/kənˈstrʌktər/",
    "englishDefinition": "A method called when an object is created",
    "chineseDefinition": "构造函数"
  },
  {
    "id": "w0084",
    "no": 84,
    "topicId": "oop",
    "word": "destructor",
    "phonetic": "/dɪˈstrʌktər/",
    "englishDefinition": "A method called when an object is destroyed",
    "chineseDefinition": "析构函数"
  },
  {
    "id": "w0085",
    "no": 85,
    "topicId": "oop",
    "word": "inheritance",
    "phonetic": "/ɪnˈherɪtəns/",
    "englishDefinition": "A mechanism where a class derives from another class",
    "chineseDefinition": "继承"
  },
  {
    "id": "w0086",
    "no": 86,
    "topicId": "oop",
    "word": "polymorphism",
    "phonetic": "/ˌpɒliˈmɔːrfɪzəm/",
    "englishDefinition": "The ability of objects to take many forms",
    "chineseDefinition": "多态"
  },
  {
    "id": "w0087",
    "no": 87,
    "topicId": "oop",
    "word": "encapsulation",
    "phonetic": "/ɪnˌkæpsjuˈleɪʃn/",
    "englishDefinition": "Hiding internal details and exposing only interfaces",
    "chineseDefinition": "封装"
  },
  {
    "id": "w0088",
    "no": 88,
    "topicId": "oop",
    "word": "abstraction",
    "phonetic": "/æbˈstrækʃn/",
    "englishDefinition": "Hiding complex details behind a simple interface",
    "chineseDefinition": "抽象"
  },
  {
    "id": "w0089",
    "no": 89,
    "topicId": "oop",
    "word": "interface",
    "phonetic": "/ˈɪntərfeɪs/",
    "englishDefinition": "A contract specifying methods a class must implement",
    "chineseDefinition": "接口"
  },
  {
    "id": "w0090",
    "no": 90,
    "topicId": "oop",
    "word": "abstract",
    "phonetic": "/ˈæbstrækt/",
    "englishDefinition": "A class or method that must be implemented by subclasses",
    "chineseDefinition": "抽象的"
  },
  {
    "id": "w0091",
    "no": 91,
    "topicId": "oop",
    "word": "override",
    "phonetic": "/ˌoʊvərˈraɪd/",
    "englishDefinition": "To replace an inherited method with a new implementation",
    "chineseDefinition": "重写"
  },
  {
    "id": "w0092",
    "no": 92,
    "topicId": "oop",
    "word": "overload",
    "phonetic": "/ˌoʊvərˈloʊd/",
    "englishDefinition": "To define multiple methods with the same name but different parameters",
    "chineseDefinition": "重载"
  },
  {
    "id": "w0093",
    "no": 93,
    "topicId": "oop",
    "word": "method",
    "phonetic": "/ˈmeθəd/",
    "englishDefinition": "A function that belongs to a class",
    "chineseDefinition": "方法"
  },
  {
    "id": "w0094",
    "no": 94,
    "topicId": "oop",
    "word": "property",
    "phonetic": "/ˈprɒpərti/",
    "englishDefinition": "An attribute or field of an object",
    "chineseDefinition": "属性"
  },
  {
    "id": "w0095",
    "no": 95,
    "topicId": "oop",
    "word": "getter",
    "phonetic": "/ˈɡetər/",
    "englishDefinition": "A method that retrieves a property value",
    "chineseDefinition": "获取器"
  },
  {
    "id": "w0096",
    "no": 96,
    "topicId": "oop",
    "word": "setter",
    "phonetic": "/ˈsetər/",
    "englishDefinition": "A method that assigns a value to a property",
    "chineseDefinition": "设置器"
  },
  {
    "id": "w0097",
    "no": 97,
    "topicId": "oop",
    "word": "accessor",
    "phonetic": "/ækˈsesər/",
    "englishDefinition": "A method providing read access to a private field",
    "chineseDefinition": "访问器"
  },
  {
    "id": "w0098",
    "no": 98,
    "topicId": "oop",
    "word": "modifier",
    "phonetic": "/ˈmɒdɪfaɪər/",
    "englishDefinition": "A keyword defining access level (public, private, etc.)",
    "chineseDefinition": "修饰符"
  },
  {
    "id": "w0099",
    "no": 99,
    "topicId": "oop",
    "word": "prototype",
    "phonetic": "/ˈproʊtətaɪp/",
    "englishDefinition": "An object from which other objects inherit properties",
    "chineseDefinition": "原型"
  },
  {
    "id": "w0100",
    "no": 100,
    "topicId": "oop",
    "word": "mixin",
    "phonetic": "/ˈmɪksɪn/",
    "englishDefinition": "A class providing methods for other classes without inheritance",
    "chineseDefinition": "混入"
  },
  {
    "id": "w0101",
    "no": 101,
    "topicId": "oop",
    "word": "singleton",
    "phonetic": "/ˈsɪŋɡltən/",
    "englishDefinition": "A design pattern restricting a class to one instance",
    "chineseDefinition": "单例"
  },
  {
    "id": "w0102",
    "no": 102,
    "topicId": "oop",
    "word": "factory",
    "phonetic": "/ˈfæktəri/",
    "englishDefinition": "A pattern for creating objects without specifying exact class",
    "chineseDefinition": "工厂模式"
  },
  {
    "id": "w0103",
    "no": 103,
    "topicId": "oop",
    "word": "observer",
    "phonetic": "/əbˈzɜːrvər/",
    "englishDefinition": "A pattern where objects are notified of state changes",
    "chineseDefinition": "观察者模式"
  },
  {
    "id": "w0104",
    "no": 104,
    "topicId": "oop",
    "word": "strategy",
    "phonetic": "/ˈstrætədʒi/",
    "englishDefinition": "A pattern that selects an algorithm at runtime",
    "chineseDefinition": "策略模式"
  },
  {
    "id": "w0105",
    "no": 105,
    "topicId": "oop",
    "word": "adapter",
    "phonetic": "/əˈdæptər/",
    "englishDefinition": "A pattern that makes incompatible interfaces work together",
    "chineseDefinition": "适配器模式"
  },
  {
    "id": "w0106",
    "no": 106,
    "topicId": "oop",
    "word": "proxy",
    "phonetic": "/ˈprɒksi/",
    "englishDefinition": "A pattern providing a substitute for another object",
    "chineseDefinition": "代理模式"
  },
  {
    "id": "w0107",
    "no": 107,
    "topicId": "oop",
    "word": "facade",
    "phonetic": "/fəˈsɑːd/",
    "englishDefinition": "A simplified interface to a complex subsystem",
    "chineseDefinition": "外观模式"
  },
  {
    "id": "w0108",
    "no": 108,
    "topicId": "oop",
    "word": "composite",
    "phonetic": "/kəmˈpɒzɪt/",
    "englishDefinition": "A pattern treating individual and composite objects uniformly",
    "chineseDefinition": "组合模式"
  },
  {
    "id": "w0109",
    "no": 109,
    "topicId": "oop",
    "word": "iterator",
    "phonetic": "/ˈɪtəreɪtər/",
    "englishDefinition": "An object providing sequential access to elements",
    "chineseDefinition": "迭代器"
  },
  {
    "id": "w0110",
    "no": 110,
    "topicId": "oop",
    "word": "middleware",
    "phonetic": "/ˈmɪdlweər/",
    "englishDefinition": "Software that sits between components to handle requests",
    "chineseDefinition": "中间件"
  },
  {
    "id": "w0111",
    "no": 111,
    "topicId": "oop",
    "word": "coupling",
    "phonetic": "/ˈkʌplɪŋ/",
    "englishDefinition": "The degree of interdependence between modules",
    "chineseDefinition": "耦合"
  },
  {
    "id": "w0112",
    "no": 112,
    "topicId": "oop",
    "word": "cohesion",
    "phonetic": "/koʊˈhiːʒn/",
    "englishDefinition": "The degree to which elements within a module belong together",
    "chineseDefinition": "内聚"
  },
  {
    "id": "w0113",
    "no": 113,
    "topicId": "oop",
    "word": "dependency injection",
    "phonetic": "/dɪˈpendənsi ɪnˈdʒekʃn/",
    "englishDefinition": "Providing dependencies to a class from outside",
    "chineseDefinition": "依赖注入"
  },
  {
    "id": "w0114",
    "no": 114,
    "topicId": "oop",
    "word": "inversion of control",
    "phonetic": "/ɪnˈvɜːrʒn əv kənˈtroʊl/",
    "englishDefinition": "Delegating control flow to a framework",
    "chineseDefinition": "控制反转"
  },
  {
    "id": "w0115",
    "no": 115,
    "topicId": "oop",
    "word": "solid",
    "phonetic": "/ˈsɒlɪd/",
    "englishDefinition": "Five design principles for maintainable OOP code",
    "chineseDefinition": "SOLID原则"
  },
  {
    "id": "w0116",
    "no": 116,
    "topicId": "oop",
    "word": "composition",
    "phonetic": "/ˌkɒmpəˈzɪʃn/",
    "englishDefinition": "Building complex objects by combining simpler ones",
    "chineseDefinition": "组合"
  },
  {
    "id": "w0117",
    "no": 117,
    "topicId": "oop",
    "word": "delegation",
    "phonetic": "/ˌdelɪˈɡeɪʃn/",
    "englishDefinition": "Passing responsibility from one object to another",
    "chineseDefinition": "委托"
  },
  {
    "id": "w0118",
    "no": 118,
    "topicId": "oop",
    "word": "instantiate",
    "phonetic": "/ɪnˈstænʃieɪt/",
    "englishDefinition": "To create an instance of a class",
    "chineseDefinition": "实例化"
  },
  {
    "id": "w0119",
    "no": 119,
    "topicId": "oop",
    "word": "polymorphic",
    "phonetic": "/ˌpɒliˈmɔːrfɪk/",
    "englishDefinition": "Having multiple forms or implementations",
    "chineseDefinition": "多态的"
  },
  {
    "id": "w0120",
    "no": 120,
    "topicId": "oop",
    "word": "refactor",
    "phonetic": "/riːˈfæktər/",
    "englishDefinition": "To restructure code without changing its behavior",
    "chineseDefinition": "重构"
  },
  {
    "id": "w0121",
    "no": 121,
    "topicId": "structures-algorithms",
    "word": "stack",
    "phonetic": "/stæk/",
    "englishDefinition": "A LIFO data structure",
    "chineseDefinition": "栈"
  },
  {
    "id": "w0122",
    "no": 122,
    "topicId": "structures-algorithms",
    "word": "queue",
    "phonetic": "/kjuː/",
    "englishDefinition": "A FIFO data structure",
    "chineseDefinition": "队列"
  },
  {
    "id": "w0123",
    "no": 123,
    "topicId": "structures-algorithms",
    "word": "linked list",
    "phonetic": "/lɪŋkt lɪst/",
    "englishDefinition": "A sequence of nodes where each points to the next",
    "chineseDefinition": "链表"
  },
  {
    "id": "w0124",
    "no": 124,
    "topicId": "structures-algorithms",
    "word": "hash map",
    "phonetic": "/hæʃ mæp/",
    "englishDefinition": "A structure mapping keys to values via a hash function",
    "chineseDefinition": "哈希表"
  },
  {
    "id": "w0125",
    "no": 125,
    "topicId": "structures-algorithms",
    "word": "tree",
    "phonetic": "/triː/",
    "englishDefinition": "A hierarchical data structure with nodes",
    "chineseDefinition": "树"
  },
  {
    "id": "w0126",
    "no": 126,
    "topicId": "structures-algorithms",
    "word": "binary tree",
    "phonetic": "/ˈbaɪnəri triː/",
    "englishDefinition": "A tree where each node has at most two children",
    "chineseDefinition": "二叉树"
  },
  {
    "id": "w0127",
    "no": 127,
    "topicId": "structures-algorithms",
    "word": "graph",
    "phonetic": "/ɡræf/",
    "englishDefinition": "A structure of nodes connected by edges",
    "chineseDefinition": "图"
  },
  {
    "id": "w0128",
    "no": 128,
    "topicId": "structures-algorithms",
    "word": "heap",
    "phonetic": "/hiːp/",
    "englishDefinition": "A tree-based structure satisfying the heap property",
    "chineseDefinition": "堆"
  },
  {
    "id": "w0129",
    "no": 129,
    "topicId": "structures-algorithms",
    "word": "set",
    "phonetic": "/set/",
    "englishDefinition": "An unordered collection of unique elements",
    "chineseDefinition": "集合"
  },
  {
    "id": "w0130",
    "no": 130,
    "topicId": "structures-algorithms",
    "word": "dictionary",
    "phonetic": "/ˈdɪkʃəneri/",
    "englishDefinition": "A collection of key-value pairs",
    "chineseDefinition": "字典"
  },
  {
    "id": "w0131",
    "no": 131,
    "topicId": "structures-algorithms",
    "word": "node",
    "phonetic": "/noʊd/",
    "englishDefinition": "A fundamental unit of a data structure",
    "chineseDefinition": "节点"
  },
  {
    "id": "w0132",
    "no": 132,
    "topicId": "structures-algorithms",
    "word": "edge",
    "phonetic": "/edʒ/",
    "englishDefinition": "A connection between two nodes in a graph",
    "chineseDefinition": "边"
  },
  {
    "id": "w0133",
    "no": 133,
    "topicId": "structures-algorithms",
    "word": "vertex",
    "phonetic": "/ˈvɜːrteks/",
    "englishDefinition": "A point in a graph",
    "chineseDefinition": "顶点"
  },
  {
    "id": "w0134",
    "no": 134,
    "topicId": "structures-algorithms",
    "word": "index",
    "phonetic": "/ˈɪndeks/",
    "englishDefinition": "A position identifier in an array or database",
    "chineseDefinition": "索引"
  },
  {
    "id": "w0135",
    "no": 135,
    "topicId": "structures-algorithms",
    "word": "sort",
    "phonetic": "/sɔːrt/",
    "englishDefinition": "To arrange elements in a specific order",
    "chineseDefinition": "排序"
  },
  {
    "id": "w0136",
    "no": 136,
    "topicId": "structures-algorithms",
    "word": "search",
    "phonetic": "/sɜːrtʃ/",
    "englishDefinition": "To find an element in a data structure",
    "chineseDefinition": "搜索"
  },
  {
    "id": "w0137",
    "no": 137,
    "topicId": "structures-algorithms",
    "word": "traverse",
    "phonetic": "/trəˈvɜːrs/",
    "englishDefinition": "To visit all elements in a data structure",
    "chineseDefinition": "遍历"
  },
  {
    "id": "w0138",
    "no": 138,
    "topicId": "structures-algorithms",
    "word": "algorithm",
    "phonetic": "/ˈælɡərɪðəm/",
    "englishDefinition": "A step-by-step procedure for solving a problem",
    "chineseDefinition": "算法"
  },
  {
    "id": "w0139",
    "no": 139,
    "topicId": "structures-algorithms",
    "word": "complexity",
    "phonetic": "/kəmˈpleksɪti/",
    "englishDefinition": "A measure of resources an algorithm requires",
    "chineseDefinition": "复杂度"
  },
  {
    "id": "w0140",
    "no": 140,
    "topicId": "structures-algorithms",
    "word": "big O notation",
    "phonetic": "/bɪɡ oʊ noʊˈteɪʃn/",
    "englishDefinition": "A way to describe algorithm performance",
    "chineseDefinition": "大O表示法"
  },
  {
    "id": "w0141",
    "no": 141,
    "topicId": "structures-algorithms",
    "word": "binary search",
    "phonetic": "/ˈbaɪnəri sɜːrtʃ/",
    "englishDefinition": "An efficient search on sorted data by halving",
    "chineseDefinition": "二分查找"
  },
  {
    "id": "w0142",
    "no": 142,
    "topicId": "structures-algorithms",
    "word": "merge sort",
    "phonetic": "/mɜːrdʒ sɔːrt/",
    "englishDefinition": "A divide-and-conquer sorting algorithm",
    "chineseDefinition": "归并排序"
  },
  {
    "id": "w0143",
    "no": 143,
    "topicId": "structures-algorithms",
    "word": "quick sort",
    "phonetic": "/kwɪk sɔːrt/",
    "englishDefinition": "A partition-based sorting algorithm",
    "chineseDefinition": "快速排序"
  },
  {
    "id": "w0144",
    "no": 144,
    "topicId": "structures-algorithms",
    "word": "depth-first",
    "phonetic": "/depθ fɜːrst/",
    "englishDefinition": "Exploring as deep as possible before backtracking",
    "chineseDefinition": "深度优先"
  },
  {
    "id": "w0145",
    "no": 145,
    "topicId": "structures-algorithms",
    "word": "breadth-first",
    "phonetic": "/bredθ fɜːrst/",
    "englishDefinition": "Exploring all neighbors before going deeper",
    "chineseDefinition": "广度优先"
  },
  {
    "id": "w0146",
    "no": 146,
    "topicId": "structures-algorithms",
    "word": "hash",
    "phonetic": "/hæʃ/",
    "englishDefinition": "To map data to a fixed-size value",
    "chineseDefinition": "哈希"
  },
  {
    "id": "w0147",
    "no": 147,
    "topicId": "structures-algorithms",
    "word": "collision",
    "phonetic": "/kəˈlɪʒn/",
    "englishDefinition": "When two keys map to the same hash value",
    "chineseDefinition": "冲突/碰撞"
  },
  {
    "id": "w0148",
    "no": 148,
    "topicId": "structures-algorithms",
    "word": "balanced",
    "phonetic": "/ˈbælənst/",
    "englishDefinition": "A tree with minimal height difference between branches",
    "chineseDefinition": "平衡的"
  },
  {
    "id": "w0149",
    "no": 149,
    "topicId": "structures-algorithms",
    "word": "partition",
    "phonetic": "/pɑːrˈtɪʃn/",
    "englishDefinition": "Dividing data into distinct groups",
    "chineseDefinition": "分区"
  },
  {
    "id": "w0150",
    "no": 150,
    "topicId": "structures-algorithms",
    "word": "pivot",
    "phonetic": "/ˈpɪvət/",
    "englishDefinition": "An element used as a reference point in sorting",
    "chineseDefinition": "基准元素"
  },
  {
    "id": "w0151",
    "no": 151,
    "topicId": "structures-algorithms",
    "word": "recursion",
    "phonetic": "/rɪˈkɜːrʒn/",
    "englishDefinition": "Solving a problem by breaking it into smaller subproblems",
    "chineseDefinition": "递归"
  },
  {
    "id": "w0152",
    "no": 152,
    "topicId": "structures-algorithms",
    "word": "memoization",
    "phonetic": "/ˌmeməɪˈzeɪʃn/",
    "englishDefinition": "Caching results of expensive function calls",
    "chineseDefinition": "记忆化"
  },
  {
    "id": "w0153",
    "no": 153,
    "topicId": "structures-algorithms",
    "word": "dynamic programming",
    "phonetic": "/daɪˈnæmɪk ˈproʊɡræmɪŋ/",
    "englishDefinition": "Solving problems by breaking into overlapping subproblems",
    "chineseDefinition": "动态规划"
  },
  {
    "id": "w0154",
    "no": 154,
    "topicId": "structures-algorithms",
    "word": "greedy",
    "phonetic": "/ˈɡriːdi/",
    "englishDefinition": "An approach making locally optimal choices at each step",
    "chineseDefinition": "贪心的"
  },
  {
    "id": "w0155",
    "no": 155,
    "topicId": "structures-algorithms",
    "word": "brute force",
    "phonetic": "/bruːt fɔːrs/",
    "englishDefinition": "Trying all possible solutions",
    "chineseDefinition": "暴力枚举"
  },
  {
    "id": "w0156",
    "no": 156,
    "topicId": "structures-algorithms",
    "word": "backtracking",
    "phonetic": "/ˈbæktrekɪŋ/",
    "englishDefinition": "Undoing choices to explore alternative solutions",
    "chineseDefinition": "回溯"
  },
  {
    "id": "w0157",
    "no": 157,
    "topicId": "structures-algorithms",
    "word": "dequeue",
    "phonetic": "/diːˈkjuː/",
    "englishDefinition": "To remove an element from a queue",
    "chineseDefinition": "出队"
  },
  {
    "id": "w0158",
    "no": 158,
    "topicId": "structures-algorithms",
    "word": "enqueue",
    "phonetic": "/ɪnˈkjuː/",
    "englishDefinition": "To add an element to a queue",
    "chineseDefinition": "入队"
  },
  {
    "id": "w0159",
    "no": 159,
    "topicId": "structures-algorithms",
    "word": "push",
    "phonetic": "/pʊʃ/",
    "englishDefinition": "To add an element to the top of a stack",
    "chineseDefinition": "入栈/推入"
  },
  {
    "id": "w0160",
    "no": 160,
    "topicId": "structures-algorithms",
    "word": "pop",
    "phonetic": "/pɒp/",
    "englishDefinition": "To remove the top element from a stack",
    "chineseDefinition": "出栈/弹出"
  },
  {
    "id": "w0161",
    "no": 161,
    "topicId": "structures-algorithms",
    "word": "peek",
    "phonetic": "/piːk/",
    "englishDefinition": "To view the top element without removing it",
    "chineseDefinition": "查看栈顶"
  },
  {
    "id": "w0162",
    "no": 162,
    "topicId": "structures-algorithms",
    "word": "trie",
    "phonetic": "/traɪ/",
    "englishDefinition": "A tree structure for efficient string retrieval",
    "chineseDefinition": "字典树"
  },
  {
    "id": "w0163",
    "no": 163,
    "topicId": "structures-algorithms",
    "word": "cache",
    "phonetic": "/kæʃ/",
    "englishDefinition": "A store of frequently accessed data for fast retrieval",
    "chineseDefinition": "缓存"
  },
  {
    "id": "w0164",
    "no": 164,
    "topicId": "structures-algorithms",
    "word": "lookup",
    "phonetic": "/ˈlʊkʌp/",
    "englishDefinition": "To retrieve a value by its key",
    "chineseDefinition": "查找"
  },
  {
    "id": "w0165",
    "no": 165,
    "topicId": "structures-algorithms",
    "word": "rotate",
    "phonetic": "/roʊˈteɪt/",
    "englishDefinition": "To shift elements in a circular manner",
    "chineseDefinition": "旋转"
  },
  {
    "id": "w0166",
    "no": 166,
    "topicId": "structures-algorithms",
    "word": "leaf",
    "phonetic": "/liːf/",
    "englishDefinition": "A node with no children in a tree",
    "chineseDefinition": "叶子节点"
  },
  {
    "id": "w0167",
    "no": 167,
    "topicId": "structures-algorithms",
    "word": "root",
    "phonetic": "/ruːt/",
    "englishDefinition": "The top node of a tree",
    "chineseDefinition": "根节点"
  },
  {
    "id": "w0168",
    "no": 168,
    "topicId": "structures-algorithms",
    "word": "subtree",
    "phonetic": "/ˈsʌbtriː/",
    "englishDefinition": "A tree contained within a larger tree",
    "chineseDefinition": "子树"
  },
  {
    "id": "w0169",
    "no": 169,
    "topicId": "structures-algorithms",
    "word": "weight",
    "phonetic": "/weɪt/",
    "englishDefinition": "A value assigned to an edge in a graph",
    "chineseDefinition": "权重"
  },
  {
    "id": "w0170",
    "no": 170,
    "topicId": "structures-algorithms",
    "word": "path",
    "phonetic": "/pæθ/",
    "englishDefinition": "A sequence of connected nodes in a graph",
    "chineseDefinition": "路径"
  },
  {
    "id": "w0171",
    "no": 171,
    "topicId": "structures-algorithms",
    "word": "cycle",
    "phonetic": "/ˈsaɪkl/",
    "englishDefinition": "A path that starts and ends at the same node",
    "chineseDefinition": "环"
  },
  {
    "id": "w0172",
    "no": 172,
    "topicId": "structures-algorithms",
    "word": "topological",
    "phonetic": "/ˌtɒpəˈlɒdʒɪkl/",
    "englishDefinition": "An ordering of vertices in a directed acyclic graph",
    "chineseDefinition": "拓扑的"
  },
  {
    "id": "w0173",
    "no": 173,
    "topicId": "structures-algorithms",
    "word": "adjacency",
    "phonetic": "/əˈdʒeɪsənsi/",
    "englishDefinition": "The state of being next to or connected",
    "chineseDefinition": "邻接"
  },
  {
    "id": "w0174",
    "no": 174,
    "topicId": "structures-algorithms",
    "word": "priority queue",
    "phonetic": "/praɪˈɒrɪti kjuː/",
    "englishDefinition": "A queue where elements are served by priority",
    "chineseDefinition": "优先队列"
  },
  {
    "id": "w0175",
    "no": 175,
    "topicId": "structures-algorithms",
    "word": "sparse",
    "phonetic": "/spɑːrs/",
    "englishDefinition": "Having relatively few non-zero elements",
    "chineseDefinition": "稀疏的"
  },
  {
    "id": "w0176",
    "no": 176,
    "topicId": "structures-algorithms",
    "word": "dense",
    "phonetic": "/dens/",
    "englishDefinition": "Having many connections or elements",
    "chineseDefinition": "稠密的"
  },
  {
    "id": "w0177",
    "no": 177,
    "topicId": "structures-algorithms",
    "word": "deterministic",
    "phonetic": "/dɪˌtɜːrmɪˈnɪstɪk/",
    "englishDefinition": "Always producing the same output for the same input",
    "chineseDefinition": "确定性的"
  },
  {
    "id": "w0178",
    "no": 178,
    "topicId": "structures-algorithms",
    "word": "heuristic",
    "phonetic": "/hjuːˈrɪstɪk/",
    "englishDefinition": "An approach using practical methods to find good solutions",
    "chineseDefinition": "启发式的"
  },
  {
    "id": "w0179",
    "no": 179,
    "topicId": "structures-algorithms",
    "word": "optimal",
    "phonetic": "/ˈɒptɪməl/",
    "englishDefinition": "The best possible solution",
    "chineseDefinition": "最优的"
  },
  {
    "id": "w0180",
    "no": 180,
    "topicId": "structures-algorithms",
    "word": "time complexity",
    "phonetic": "/taɪm kəmˈpleksɪti/",
    "englishDefinition": "How running time grows with input size",
    "chineseDefinition": "时间复杂度"
  },
  {
    "id": "w0181",
    "no": 181,
    "topicId": "frontend-development",
    "word": "component",
    "phonetic": "/kəmˈpoʊnənt/",
    "englishDefinition": "A reusable, self-contained piece of UI",
    "chineseDefinition": "组件"
  },
  {
    "id": "w0182",
    "no": 182,
    "topicId": "frontend-development",
    "word": "render",
    "phonetic": "/ˈrendər/",
    "englishDefinition": "To generate and display UI output",
    "chineseDefinition": "渲染"
  },
  {
    "id": "w0183",
    "no": 183,
    "topicId": "frontend-development",
    "word": "template",
    "phonetic": "/ˈtemplɪt/",
    "englishDefinition": "A predefined structure for generating content",
    "chineseDefinition": "模板"
  },
  {
    "id": "w0184",
    "no": 184,
    "topicId": "frontend-development",
    "word": "layout",
    "phonetic": "/ˈleɪaʊt/",
    "englishDefinition": "The arrangement of visual elements on a page",
    "chineseDefinition": "布局"
  },
  {
    "id": "w0185",
    "no": 185,
    "topicId": "frontend-development",
    "word": "responsive",
    "phonetic": "/rɪˈspɒnsɪv/",
    "englishDefinition": "Adapting to different screen sizes",
    "chineseDefinition": "响应式的"
  },
  {
    "id": "w0186",
    "no": 186,
    "topicId": "frontend-development",
    "word": "viewport",
    "phonetic": "/ˈvjuːpɔːrt/",
    "englishDefinition": "The visible area of a web page",
    "chineseDefinition": "视口"
  },
  {
    "id": "w0187",
    "no": 187,
    "topicId": "frontend-development",
    "word": "stylesheet",
    "phonetic": "/ˈstaɪlʃiːt/",
    "englishDefinition": "A file defining the visual presentation of HTML",
    "chineseDefinition": "样式表"
  },
  {
    "id": "w0188",
    "no": 188,
    "topicId": "frontend-development",
    "word": "selector",
    "phonetic": "/sɪˈlektər/",
    "englishDefinition": "A pattern used to select HTML elements for styling",
    "chineseDefinition": "选择器"
  },
  {
    "id": "w0189",
    "no": 189,
    "topicId": "frontend-development",
    "word": "flexbox",
    "phonetic": "/ˈfleksbɒks/",
    "englishDefinition": "A CSS layout model for flexible containers",
    "chineseDefinition": "弹性盒布局"
  },
  {
    "id": "w0190",
    "no": 190,
    "topicId": "frontend-development",
    "word": "grid",
    "phonetic": "/ɡrɪd/",
    "englishDefinition": "A CSS layout system for two-dimensional layouts",
    "chineseDefinition": "网格布局"
  },
  {
    "id": "w0191",
    "no": 191,
    "topicId": "frontend-development",
    "word": "animation",
    "phonetic": "/ˌænɪˈmeɪʃn/",
    "englishDefinition": "Visual movement or transition effects",
    "chineseDefinition": "动画"
  },
  {
    "id": "w0192",
    "no": 192,
    "topicId": "frontend-development",
    "word": "transition",
    "phonetic": "/trænˈzɪʃn/",
    "englishDefinition": "A smooth change between CSS property values",
    "chineseDefinition": "过渡"
  },
  {
    "id": "w0193",
    "no": 193,
    "topicId": "frontend-development",
    "word": "event",
    "phonetic": "/ɪˈvent/",
    "englishDefinition": "An action or occurrence detected by the browser",
    "chineseDefinition": "事件"
  },
  {
    "id": "w0194",
    "no": 194,
    "topicId": "frontend-development",
    "word": "listener",
    "phonetic": "/ˈlɪsənər/",
    "englishDefinition": "A function that responds to an event",
    "chineseDefinition": "监听器"
  },
  {
    "id": "w0195",
    "no": 195,
    "topicId": "frontend-development",
    "word": "handler",
    "phonetic": "/ˈhændlər/",
    "englishDefinition": "A function that processes an event or request",
    "chineseDefinition": "处理器"
  },
  {
    "id": "w0196",
    "no": 196,
    "topicId": "frontend-development",
    "word": "DOM",
    "phonetic": "/dɒm/",
    "englishDefinition": "Document Object Model, a tree representation of HTML",
    "chineseDefinition": "文档对象模型"
  },
  {
    "id": "w0197",
    "no": 197,
    "topicId": "frontend-development",
    "word": "virtual DOM",
    "phonetic": "/ˈvɜːrtʃuəl dɒm/",
    "englishDefinition": "An in-memory representation of the real DOM",
    "chineseDefinition": "虚拟DOM"
  },
  {
    "id": "w0198",
    "no": 198,
    "topicId": "frontend-development",
    "word": "state",
    "phonetic": "/steɪt/",
    "englishDefinition": "Data that determines a component's behavior and output",
    "chineseDefinition": "状态"
  },
  {
    "id": "w0199",
    "no": 199,
    "topicId": "frontend-development",
    "word": "props",
    "phonetic": "/prɒps/",
    "englishDefinition": "Data passed from parent to child components",
    "chineseDefinition": "属性（props）"
  },
  {
    "id": "w0200",
    "no": 200,
    "topicId": "frontend-development",
    "word": "hook",
    "phonetic": "/hʊk/",
    "englishDefinition": "A function that lets you use React features in function components",
    "chineseDefinition": "钩子"
  },
  {
    "id": "w0201",
    "no": 201,
    "topicId": "frontend-development",
    "word": "lifecycle",
    "phonetic": "/ˈlaɪfsaɪkl/",
    "englishDefinition": "The stages a component goes through from creation to removal",
    "chineseDefinition": "生命周期"
  },
  {
    "id": "w0202",
    "no": 202,
    "topicId": "frontend-development",
    "word": "mounting",
    "phonetic": "/ˈmaʊntɪŋ/",
    "englishDefinition": "The phase when a component is inserted into the DOM",
    "chineseDefinition": "挂载"
  },
  {
    "id": "w0203",
    "no": 203,
    "topicId": "frontend-development",
    "word": "unmounting",
    "phonetic": "/ʌnˈmaʊntɪŋ/",
    "englishDefinition": "The phase when a component is removed from the DOM",
    "chineseDefinition": "卸载"
  },
  {
    "id": "w0204",
    "no": 204,
    "topicId": "frontend-development",
    "word": "binding",
    "phonetic": "/ˈbaɪndɪŋ/",
    "englishDefinition": "Connecting data to UI elements",
    "chineseDefinition": "绑定"
  },
  {
    "id": "w0205",
    "no": 205,
    "topicId": "frontend-development",
    "word": "directive",
    "phonetic": "/dɪˈrektɪv/",
    "englishDefinition": "A special attribute that gives instructions to the framework",
    "chineseDefinition": "指令"
  },
  {
    "id": "w0206",
    "no": 206,
    "topicId": "frontend-development",
    "word": "routing",
    "phonetic": "/ˈruːtɪŋ/",
    "englishDefinition": "Mapping URLs to views or components",
    "chineseDefinition": "路由"
  },
  {
    "id": "w0207",
    "no": 207,
    "topicId": "frontend-development",
    "word": "navigation",
    "phonetic": "/ˌnævɪˈɡeɪʃn/",
    "englishDefinition": "Moving between pages or views in an application",
    "chineseDefinition": "导航"
  },
  {
    "id": "w0208",
    "no": 208,
    "topicId": "frontend-development",
    "word": "hydration",
    "phonetic": "/haɪˈdreɪʃn/",
    "englishDefinition": "Attaching JavaScript behavior to server-rendered HTML",
    "chineseDefinition": "水合"
  },
  {
    "id": "w0209",
    "no": 209,
    "topicId": "frontend-development",
    "word": "SSR",
    "phonetic": "/ˌes es ˈɑːr/",
    "englishDefinition": "Server-Side Rendering, generating HTML on the server",
    "chineseDefinition": "服务端渲染"
  },
  {
    "id": "w0210",
    "no": 210,
    "topicId": "frontend-development",
    "word": "SSG",
    "phonetic": "/ˌes es ˈdʒiː/",
    "englishDefinition": "Static Site Generation, pre-building pages at build time",
    "chineseDefinition": "静态站点生成"
  },
  {
    "id": "w0211",
    "no": 211,
    "topicId": "frontend-development",
    "word": "CSR",
    "phonetic": "/ˌsiː es ˈɑːr/",
    "englishDefinition": "Client-Side Rendering, generating HTML in the browser",
    "chineseDefinition": "客户端渲染"
  },
  {
    "id": "w0212",
    "no": 212,
    "topicId": "frontend-development",
    "word": "lazy loading",
    "phonetic": "/ˈleɪzi ˈloʊdɪŋ/",
    "englishDefinition": "Loading resources only when needed",
    "chineseDefinition": "懒加载"
  },
  {
    "id": "w0213",
    "no": 213,
    "topicId": "frontend-development",
    "word": "code splitting",
    "phonetic": "/koʊd ˈsplɪtɪŋ/",
    "englishDefinition": "Dividing code into smaller bundles loaded on demand",
    "chineseDefinition": "代码分割"
  },
  {
    "id": "w0214",
    "no": 214,
    "topicId": "frontend-development",
    "word": "bundle",
    "phonetic": "/ˈbʌndl/",
    "englishDefinition": "A combined file of JavaScript modules",
    "chineseDefinition": "打包文件"
  },
  {
    "id": "w0215",
    "no": 215,
    "topicId": "frontend-development",
    "word": "minify",
    "phonetic": "/ˈmɪnɪfaɪ/",
    "englishDefinition": "To reduce file size by removing unnecessary characters",
    "chineseDefinition": "压缩/最小化"
  },
  {
    "id": "w0216",
    "no": 216,
    "topicId": "frontend-development",
    "word": "transpile",
    "phonetic": "/trænsˈpaɪl/",
    "englishDefinition": "To convert code from one language version to another",
    "chineseDefinition": "转译"
  },
  {
    "id": "w0217",
    "no": 217,
    "topicId": "frontend-development",
    "word": "polyfill",
    "phonetic": "/ˈpɒlifɪl/",
    "englishDefinition": "Code that provides modern functionality to older browsers",
    "chineseDefinition": "垫片/兼容补丁"
  },
  {
    "id": "w0218",
    "no": 218,
    "topicId": "frontend-development",
    "word": "webpack",
    "phonetic": "/ˈwebpæk/",
    "englishDefinition": "A popular JavaScript module bundler",
    "chineseDefinition": "Webpack打包工具"
  },
  {
    "id": "w0219",
    "no": 219,
    "topicId": "frontend-development",
    "word": "babel",
    "phonetic": "/ˈbæbl/",
    "englishDefinition": "A JavaScript compiler for backward compatibility",
    "chineseDefinition": "Babel编译器"
  },
  {
    "id": "w0220",
    "no": 220,
    "topicId": "frontend-development",
    "word": "accessibility",
    "phonetic": "/əkˌsesəˈbɪlɪti/",
    "englishDefinition": "Making applications usable by people with disabilities",
    "chineseDefinition": "无障碍/可访问性"
  },
  {
    "id": "w0221",
    "no": 221,
    "topicId": "frontend-development",
    "word": "semantic",
    "phonetic": "/sɪˈmæntɪk/",
    "englishDefinition": "HTML tags that convey meaning about the content",
    "chineseDefinition": "语义化的"
  },
  {
    "id": "w0222",
    "no": 222,
    "topicId": "frontend-development",
    "word": "SVG",
    "phonetic": "/ˌes viː ˈdʒiː/",
    "englishDefinition": "Scalable Vector Graphics for resolution-independent images",
    "chineseDefinition": "可缩放矢量图"
  },
  {
    "id": "w0223",
    "no": 223,
    "topicId": "frontend-development",
    "word": "canvas",
    "phonetic": "/ˈkænvəs/",
    "englishDefinition": "An HTML element for drawing graphics via JavaScript",
    "chineseDefinition": "画布"
  },
  {
    "id": "w0224",
    "no": 224,
    "topicId": "frontend-development",
    "word": "shadow DOM",
    "phonetic": "/ˈʃædoʊ dɒm/",
    "englishDefinition": "Encapsulated DOM tree attached to an element",
    "chineseDefinition": "影子DOM"
  },
  {
    "id": "w0225",
    "no": 225,
    "topicId": "frontend-development",
    "word": "web component",
    "phonetic": "/web kəmˈpoʊnənt/",
    "englishDefinition": "A set of standards for reusable custom elements",
    "chineseDefinition": "Web组件"
  },
  {
    "id": "w0226",
    "no": 226,
    "topicId": "frontend-development",
    "word": "slot",
    "phonetic": "/slɒt/",
    "englishDefinition": "A placeholder in a component for inserting content",
    "chineseDefinition": "插槽"
  },
  {
    "id": "w0227",
    "no": 227,
    "topicId": "frontend-development",
    "word": "emit",
    "phonetic": "/ɪˈmɪt/",
    "englishDefinition": "To dispatch an event from a child component",
    "chineseDefinition": "触发/发射"
  },
  {
    "id": "w0228",
    "no": 228,
    "topicId": "frontend-development",
    "word": "context",
    "phonetic": "/ˈkɒntekst/",
    "englishDefinition": "A way to share data across components without props drilling",
    "chineseDefinition": "上下文"
  },
  {
    "id": "w0229",
    "no": 229,
    "topicId": "frontend-development",
    "word": "reducer",
    "phonetic": "/rɪˈdjuːsər/",
    "englishDefinition": "A function that determines state changes based on actions",
    "chineseDefinition": "归约器"
  },
  {
    "id": "w0230",
    "no": 230,
    "topicId": "frontend-development",
    "word": "store",
    "phonetic": "/stɔːr/",
    "englishDefinition": "A centralized state management container",
    "chineseDefinition": "状态仓库"
  },
  {
    "id": "w0231",
    "no": 231,
    "topicId": "frontend-development",
    "word": "dispatch",
    "phonetic": "/dɪˈspætʃ/",
    "englishDefinition": "To send an action to the state management system",
    "chineseDefinition": "派发"
  },
  {
    "id": "w0232",
    "no": 232,
    "topicId": "frontend-development",
    "word": "action",
    "phonetic": "/ˈækʃn/",
    "englishDefinition": "An object describing what happened in state management",
    "chineseDefinition": "动作"
  },
  {
    "id": "w0233",
    "no": 233,
    "topicId": "frontend-development",
    "word": "mutation",
    "phonetic": "/mjuːˈteɪʃn/",
    "englishDefinition": "A synchronous state change in Vuex",
    "chineseDefinition": "变更"
  },
  {
    "id": "w0234",
    "no": 234,
    "topicId": "frontend-development",
    "word": "selector",
    "phonetic": "/sɪˈlektər/",
    "englishDefinition": "A function that extracts specific data from the store",
    "chineseDefinition": "选择器"
  },
  {
    "id": "w0235",
    "no": 235,
    "topicId": "frontend-development",
    "word": "memo",
    "phonetic": "/ˈmemoʊ/",
    "englishDefinition": "To cache a component or value to prevent unnecessary re-renders",
    "chineseDefinition": "记忆化"
  },
  {
    "id": "w0236",
    "no": 236,
    "topicId": "frontend-development",
    "word": "suspense",
    "phonetic": "/səˈspens/",
    "englishDefinition": "A mechanism for handling async rendering in React",
    "chineseDefinition": "悬念/异步边界"
  },
  {
    "id": "w0237",
    "no": 237,
    "topicId": "frontend-development",
    "word": "portal",
    "phonetic": "/ˈpɔːrtl/",
    "englishDefinition": "Rendering children into a DOM node outside the parent",
    "chineseDefinition": "传送门"
  },
  {
    "id": "w0238",
    "no": 238,
    "topicId": "frontend-development",
    "word": "fragment",
    "phonetic": "/ˈfræɡmənt/",
    "englishDefinition": "A wrapper for grouping elements without adding DOM nodes",
    "chineseDefinition": "片段"
  },
  {
    "id": "w0239",
    "no": 239,
    "topicId": "frontend-development",
    "word": "ref",
    "phonetic": "/ref/",
    "englishDefinition": "A reference to a DOM element or component instance",
    "chineseDefinition": "引用"
  },
  {
    "id": "w0240",
    "no": 240,
    "topicId": "frontend-development",
    "word": "key",
    "phonetic": "/kiː/",
    "englishDefinition": "A unique identifier for list elements to optimize rendering",
    "chineseDefinition": "键"
  },
  {
    "id": "w0241",
    "no": 241,
    "topicId": "frontend-development",
    "word": "TypeScript",
    "phonetic": "/ˈtaɪpskrɪpt/",
    "englishDefinition": "A typed superset of JavaScript",
    "chineseDefinition": "TypeScript语言"
  },
  {
    "id": "w0242",
    "no": 242,
    "topicId": "frontend-development",
    "word": "JSX",
    "phonetic": "/ˌdʒeɪ es ˈeks/",
    "englishDefinition": "A syntax extension allowing HTML-like code in JavaScript",
    "chineseDefinition": "JSX语法"
  },
  {
    "id": "w0243",
    "no": 243,
    "topicId": "frontend-development",
    "word": "SPA",
    "phonetic": "/ˌes piː ˈeɪ/",
    "englishDefinition": "Single Page Application with dynamic content updates",
    "chineseDefinition": "单页应用"
  },
  {
    "id": "w0244",
    "no": 244,
    "topicId": "frontend-development",
    "word": "PWA",
    "phonetic": "/ˌpiː ˈdʌbljuː eɪ/",
    "englishDefinition": "Progressive Web App with native-like capabilities",
    "chineseDefinition": "渐进式Web应用"
  },
  {
    "id": "w0245",
    "no": 245,
    "topicId": "frontend-development",
    "word": "service worker",
    "phonetic": "/ˈsɜːrvɪs ˈwɜːrkər/",
    "englishDefinition": "A script running in the background for offline support",
    "chineseDefinition": "服务工作线程"
  },
  {
    "id": "w0246",
    "no": 246,
    "topicId": "frontend-development",
    "word": "local storage",
    "phonetic": "/ˈloʊkl ˈstɔːrɪdʒ/",
    "englishDefinition": "Browser storage that persists across sessions",
    "chineseDefinition": "本地存储"
  },
  {
    "id": "w0247",
    "no": 247,
    "topicId": "frontend-development",
    "word": "session storage",
    "phonetic": "/ˈseʃn ˈstɔːrɪdʒ/",
    "englishDefinition": "Browser storage that clears when the tab closes",
    "chineseDefinition": "会话存储"
  },
  {
    "id": "w0248",
    "no": 248,
    "topicId": "frontend-development",
    "word": "cookie",
    "phonetic": "/ˈkʊki/",
    "englishDefinition": "Small data stored by the browser for server communication",
    "chineseDefinition": "Cookie"
  },
  {
    "id": "w0249",
    "no": 249,
    "topicId": "frontend-development",
    "word": "CORS",
    "phonetic": "/kɔːrz/",
    "englishDefinition": "Cross-Origin Resource Sharing policy",
    "chineseDefinition": "跨域资源共享"
  },
  {
    "id": "w0250",
    "no": 250,
    "topicId": "frontend-development",
    "word": "prefetch",
    "phonetic": "/priːˈfetʃ/",
    "englishDefinition": "Loading resources before they are needed",
    "chineseDefinition": "预获取"
  },
  {
    "id": "w0251",
    "no": 251,
    "topicId": "frontend-development",
    "word": "debounce",
    "phonetic": "/dɪˈbaʊns/",
    "englishDefinition": "Delaying function execution until input activity stops",
    "chineseDefinition": "防抖"
  },
  {
    "id": "w0252",
    "no": 252,
    "topicId": "frontend-development",
    "word": "throttle",
    "phonetic": "/ˈθrɒtl/",
    "englishDefinition": "Limiting the rate at which a function executes",
    "chineseDefinition": "节流"
  },
  {
    "id": "w0253",
    "no": 253,
    "topicId": "frontend-development",
    "word": "tree shaking",
    "phonetic": "/triː ˈʃeɪkɪŋ/",
    "englishDefinition": "Removing unused code during the build process",
    "chineseDefinition": "树摇/死代码消除"
  },
  {
    "id": "w0254",
    "no": 254,
    "topicId": "frontend-development",
    "word": "hot reload",
    "phonetic": "/hɒt rɪˈloʊd/",
    "englishDefinition": "Updating code in the browser without a full page refresh",
    "chineseDefinition": "热重载"
  },
  {
    "id": "w0255",
    "no": 255,
    "topicId": "frontend-development",
    "word": "pixel",
    "phonetic": "/ˈpɪksl/",
    "englishDefinition": "The smallest unit of a digital image",
    "chineseDefinition": "像素"
  },
  {
    "id": "w0256",
    "no": 256,
    "topicId": "frontend-development",
    "word": "breakpoint",
    "phonetic": "/ˈbreɪkpɔɪnt/",
    "englishDefinition": "A point where responsive design changes layout",
    "chineseDefinition": "断点"
  },
  {
    "id": "w0257",
    "no": 257,
    "topicId": "frontend-development",
    "word": "media query",
    "phonetic": "/ˈmiːdiə ˈkwɪri/",
    "englishDefinition": "A CSS technique for applying styles based on device features",
    "chineseDefinition": "媒体查询"
  },
  {
    "id": "w0258",
    "no": 258,
    "topicId": "frontend-development",
    "word": "preprocessor",
    "phonetic": "/priːˈprɒsesər/",
    "englishDefinition": "A tool that extends CSS with variables and nesting",
    "chineseDefinition": "预处理器"
  },
  {
    "id": "w0259",
    "no": 259,
    "topicId": "frontend-development",
    "word": "linter",
    "phonetic": "/ˈlɪntər/",
    "englishDefinition": "A tool that analyzes code for potential errors and style issues",
    "chineseDefinition": "代码检查工具"
  },
  {
    "id": "w0260",
    "no": 260,
    "topicId": "frontend-development",
    "word": "formatter",
    "phonetic": "/ˈfɔːrmætər/",
    "englishDefinition": "A tool that automatically formats code consistently",
    "chineseDefinition": "代码格式化工具"
  },
  {
    "id": "w0261",
    "no": 261,
    "topicId": "development",
    "word": "server",
    "phonetic": "/ˈsɜːrvər/",
    "englishDefinition": "A computer or program that serves requests from clients",
    "chineseDefinition": "服务器"
  },
  {
    "id": "w0262",
    "no": 262,
    "topicId": "development",
    "word": "client",
    "phonetic": "/ˈklaɪənt/",
    "englishDefinition": "A program or device that makes requests to a server",
    "chineseDefinition": "客户端"
  },
  {
    "id": "w0263",
    "no": 263,
    "topicId": "development",
    "word": "request",
    "phonetic": "/rɪˈkwest/",
    "englishDefinition": "A message sent from client to server asking for data",
    "chineseDefinition": "请求"
  },
  {
    "id": "w0264",
    "no": 264,
    "topicId": "development",
    "word": "response",
    "phonetic": "/rɪˈspɒns/",
    "englishDefinition": "The data sent back from server to client",
    "chineseDefinition": "响应"
  },
  {
    "id": "w0265",
    "no": 265,
    "topicId": "development",
    "word": "endpoint",
    "phonetic": "/ˈendpɔɪnt/",
    "englishDefinition": "A specific URL where an API can be accessed",
    "chineseDefinition": "端点"
  },
  {
    "id": "w0266",
    "no": 266,
    "topicId": "development",
    "word": "route",
    "phonetic": "/ruːt/",
    "englishDefinition": "A URL pattern mapped to a handler function",
    "chineseDefinition": "路由"
  },
  {
    "id": "w0267",
    "no": 267,
    "topicId": "development",
    "word": "controller",
    "phonetic": "/kənˈtroʊlər/",
    "englishDefinition": "A component that handles incoming requests",
    "chineseDefinition": "控制器"
  },
  {
    "id": "w0268",
    "no": 268,
    "topicId": "development",
    "word": "service",
    "phonetic": "/ˈsɜːrvɪs/",
    "englishDefinition": "A layer containing business logic",
    "chineseDefinition": "服务层"
  },
  {
    "id": "w0269",
    "no": 269,
    "topicId": "development",
    "word": "repository",
    "phonetic": "/rɪˈpɒzɪtɔːri/",
    "englishDefinition": "A layer that abstracts data access operations",
    "chineseDefinition": "仓库/数据访问层"
  },
  {
    "id": "w0270",
    "no": 270,
    "topicId": "development",
    "word": "model",
    "phonetic": "/ˈmɒdl/",
    "englishDefinition": "A representation of data and business rules",
    "chineseDefinition": "模型"
  },
  {
    "id": "w0271",
    "no": 271,
    "topicId": "development",
    "word": "view",
    "phonetic": "/vjuː/",
    "englishDefinition": "The presentation layer of an application",
    "chineseDefinition": "视图"
  },
  {
    "id": "w0272",
    "no": 272,
    "topicId": "development",
    "word": "MVC",
    "phonetic": "/ˌem viː ˈsiː/",
    "englishDefinition": "Model-View-Controller architecture pattern",
    "chineseDefinition": "MVC架构"
  },
  {
    "id": "w0273",
    "no": 273,
    "topicId": "development",
    "word": "REST",
    "phonetic": "/rest/",
    "englishDefinition": "Representational State Transfer, an API architectural style",
    "chineseDefinition": "REST架构"
  },
  {
    "id": "w0274",
    "no": 274,
    "topicId": "development",
    "word": "GraphQL",
    "phonetic": "/ˈɡræfkjuːel/",
    "englishDefinition": "A query language for APIs with flexible data fetching",
    "chineseDefinition": "GraphQL查询语言"
  },
  {
    "id": "w0275",
    "no": 275,
    "topicId": "development",
    "word": "gRPC",
    "phonetic": "/ˌdʒiː ɑːr piː ˈsiː/",
    "englishDefinition": "A high-performance RPC framework",
    "chineseDefinition": "gRPC框架"
  },
  {
    "id": "w0276",
    "no": 276,
    "topicId": "development",
    "word": "WebSocket",
    "phonetic": "/ˈwebsɒkɪt/",
    "englishDefinition": "A protocol for full-duplex communication over a single connection",
    "chineseDefinition": "WebSocket协议"
  },
  {
    "id": "w0277",
    "no": 277,
    "topicId": "development",
    "word": "payload",
    "phonetic": "/ˈpeɪloʊd/",
    "englishDefinition": "The data carried in a request or response body",
    "chineseDefinition": "有效载荷/数据体"
  },
  {
    "id": "w0278",
    "no": 278,
    "topicId": "development",
    "word": "header",
    "phonetic": "/ˈhedər/",
    "englishDefinition": "Metadata sent with HTTP requests and responses",
    "chineseDefinition": "请求头"
  },
  {
    "id": "w0279",
    "no": 279,
    "topicId": "development",
    "word": "status code",
    "phonetic": "/ˈsteɪtəs koʊd/",
    "englishDefinition": "A number indicating the result of an HTTP request",
    "chineseDefinition": "状态码"
  },
  {
    "id": "w0280",
    "no": 280,
    "topicId": "development",
    "word": "authentication",
    "phonetic": "/ɔːˌθentɪˈkeɪʃn/",
    "englishDefinition": "Verifying the identity of a user",
    "chineseDefinition": "身份认证"
  },
  {
    "id": "w0281",
    "no": 281,
    "topicId": "development",
    "word": "authorization",
    "phonetic": "/ˌɔːθəraɪˈzeɪʃn/",
    "englishDefinition": "Determining what a user is allowed to do",
    "chineseDefinition": "授权"
  },
  {
    "id": "w0282",
    "no": 282,
    "topicId": "development",
    "word": "token",
    "phonetic": "/ˈtoʊkən/",
    "englishDefinition": "A piece of data used to verify identity or permissions",
    "chineseDefinition": "令牌"
  },
  {
    "id": "w0283",
    "no": 283,
    "topicId": "development",
    "word": "JWT",
    "phonetic": "/ˌdʒeɪ ˈdʌbljuː tiː/",
    "englishDefinition": "JSON Web Token for stateless authentication",
    "chineseDefinition": "JWT令牌"
  },
  {
    "id": "w0284",
    "no": 284,
    "topicId": "development",
    "word": "OAuth",
    "phonetic": "/ˈoʊɔːθ/",
    "englishDefinition": "An open standard for access delegation",
    "chineseDefinition": "OAuth授权协议"
  },
  {
    "id": "w0285",
    "no": 285,
    "topicId": "development",
    "word": "session",
    "phonetic": "/ˈseʃn/",
    "englishDefinition": "A server-side record of user interaction state",
    "chineseDefinition": "会话"
  },
  {
    "id": "w0286",
    "no": 286,
    "topicId": "development",
    "word": "cookie",
    "phonetic": "/ˈkʊki/",
    "englishDefinition": "A small piece of data stored on the client",
    "chineseDefinition": "Cookie"
  },
  {
    "id": "w0287",
    "no": 287,
    "topicId": "development",
    "word": "rate limiting",
    "phonetic": "/reɪt ˈlɪmɪtɪŋ/",
    "englishDefinition": "Restricting the number of requests in a time period",
    "chineseDefinition": "速率限制"
  },
  {
    "id": "w0288",
    "no": 288,
    "topicId": "development",
    "word": "pagination",
    "phonetic": "/ˌpædʒɪˈneɪʃn/",
    "englishDefinition": "Dividing results into discrete pages",
    "chineseDefinition": "分页"
  },
  {
    "id": "w0289",
    "no": 289,
    "topicId": "development",
    "word": "cursor",
    "phonetic": "/ˈkɜːrsər/",
    "englishDefinition": "A pointer used for iterating through database results",
    "chineseDefinition": "游标"
  },
  {
    "id": "w0290",
    "no": 290,
    "topicId": "development",
    "word": "webhook",
    "phonetic": "/ˈwebhʊk/",
    "englishDefinition": "An HTTP callback triggered by an event",
    "chineseDefinition": "Webhook回调"
  },
  {
    "id": "w0291",
    "no": 291,
    "topicId": "development",
    "word": "cron",
    "phonetic": "/krɒn/",
    "englishDefinition": "A time-based job scheduler",
    "chineseDefinition": "定时任务"
  },
  {
    "id": "w0292",
    "no": 292,
    "topicId": "development",
    "word": "queue",
    "phonetic": "/kjuː/",
    "englishDefinition": "A message queue for asynchronous processing",
    "chineseDefinition": "消息队列"
  },
  {
    "id": "w0293",
    "no": 293,
    "topicId": "development",
    "word": "worker",
    "phonetic": "/ˈwɜːrkər/",
    "englishDefinition": "A background process handling queued tasks",
    "chineseDefinition": "工作进程"
  },
  {
    "id": "w0294",
    "no": 294,
    "topicId": "development",
    "word": "microservice",
    "phonetic": "/ˈmaɪkroʊsɜːrvɪs/",
    "englishDefinition": "A small, independently deployable service",
    "chineseDefinition": "微服务"
  },
  {
    "id": "w0295",
    "no": 295,
    "topicId": "development",
    "word": "monolith",
    "phonetic": "/ˈmɒnəlɪθ/",
    "englishDefinition": "A single large application containing all functionality",
    "chineseDefinition": "单体应用"
  },
  {
    "id": "w0296",
    "no": 296,
    "topicId": "development",
    "word": "API gateway",
    "phonetic": "/ˌeɪ piː ˈaɪ ˈɡeɪtweɪ/",
    "englishDefinition": "A single entry point managing API traffic",
    "chineseDefinition": "API网关"
  },
  {
    "id": "w0297",
    "no": 297,
    "topicId": "development",
    "word": "load balancer",
    "phonetic": "/loʊd ˈbælənsər/",
    "englishDefinition": "A tool distributing traffic across multiple servers",
    "chineseDefinition": "负载均衡器"
  },
  {
    "id": "w0298",
    "no": 298,
    "topicId": "development",
    "word": "reverse proxy",
    "phonetic": "/rɪˈvɜːrs ˈprɒksi/",
    "englishDefinition": "A server forwarding client requests to backend servers",
    "chineseDefinition": "反向代理"
  },
  {
    "id": "w0299",
    "no": 299,
    "topicId": "development",
    "word": "socket",
    "phonetic": "/ˈsɒkɪt/",
    "englishDefinition": "An endpoint for network communication",
    "chineseDefinition": "套接字"
  },
  {
    "id": "w0300",
    "no": 300,
    "topicId": "development",
    "word": "protocol",
    "phonetic": "/ˈproʊtəkɒl/",
    "englishDefinition": "A set of rules for data communication",
    "chineseDefinition": "协议"
  },
  {
    "id": "w0301",
    "no": 301,
    "topicId": "development",
    "word": "HTTP",
    "phonetic": "/ˌeɪtʃ tiː tiː ˈpiː/",
    "englishDefinition": "HyperText Transfer Protocol",
    "chineseDefinition": "超文本传输协议"
  },
  {
    "id": "w0302",
    "no": 302,
    "topicId": "development",
    "word": "HTTPS",
    "phonetic": "/ˌeɪtʃ tiː tiː piː ˈes/",
    "englishDefinition": "Secure version of HTTP with encryption",
    "chineseDefinition": "安全超文本传输协议"
  },
  {
    "id": "w0303",
    "no": 303,
    "topicId": "development",
    "word": "TCP",
    "phonetic": "/ˌtiː siː ˈpiː/",
    "englishDefinition": "Transmission Control Protocol for reliable data delivery",
    "chineseDefinition": "传输控制协议"
  },
  {
    "id": "w0304",
    "no": 304,
    "topicId": "development",
    "word": "UDP",
    "phonetic": "/ˌjuː diː ˈpiː/",
    "englishDefinition": "User Datagram Protocol for fast, connectionless data",
    "chineseDefinition": "用户数据报协议"
  },
  {
    "id": "w0305",
    "no": 305,
    "topicId": "development",
    "word": "DNS",
    "phonetic": "/ˌdiː en ˈes/",
    "englishDefinition": "Domain Name System translating names to IP addresses",
    "chineseDefinition": "域名系统"
  },
  {
    "id": "w0306",
    "no": 306,
    "topicId": "development",
    "word": "IP address",
    "phonetic": "/ˌaɪ ˈpiː ˈædres/",
    "englishDefinition": "A unique numerical label for a device on a network",
    "chineseDefinition": "IP地址"
  },
  {
    "id": "w0307",
    "no": 307,
    "topicId": "development",
    "word": "port",
    "phonetic": "/pɔːrt/",
    "englishDefinition": "A number identifying a specific process on a server",
    "chineseDefinition": "端口"
  },
  {
    "id": "w0308",
    "no": 308,
    "topicId": "development",
    "word": "SSL",
    "phonetic": "/ˌes es ˈel/",
    "englishDefinition": "Secure Sockets Layer for encrypted communication",
    "chineseDefinition": "安全套接层"
  },
  {
    "id": "w0309",
    "no": 309,
    "topicId": "development",
    "word": "TLS",
    "phonetic": "/ˌtiː el ˈes/",
    "englishDefinition": "Transport Layer Security, successor to SSL",
    "chineseDefinition": "传输层安全"
  },
  {
    "id": "w0310",
    "no": 310,
    "topicId": "development",
    "word": "certificate",
    "phonetic": "/sərˈtɪfɪkət/",
    "englishDefinition": "A digital document verifying a server's identity",
    "chineseDefinition": "证书"
  },
  {
    "id": "w0311",
    "no": 311,
    "topicId": "development",
    "word": "latency",
    "phonetic": "/ˈleɪtənsi/",
    "englishDefinition": "The delay between request and response",
    "chineseDefinition": "延迟"
  },
  {
    "id": "w0312",
    "no": 312,
    "topicId": "development",
    "word": "throughput",
    "phonetic": "/ˈθruːpʊt/",
    "englishDefinition": "The amount of data processed in a given time",
    "chineseDefinition": "吞吐量"
  },
  {
    "id": "w0313",
    "no": 313,
    "topicId": "development",
    "word": "bandwidth",
    "phonetic": "/ˈbændwɪdθ/",
    "englishDefinition": "The maximum data transfer rate of a network",
    "chineseDefinition": "带宽"
  },
  {
    "id": "w0314",
    "no": 314,
    "topicId": "development",
    "word": "timeout",
    "phonetic": "/ˈtaɪmaʊt/",
    "englishDefinition": "A limit on how long to wait for a response",
    "chineseDefinition": "超时"
  },
  {
    "id": "w0315",
    "no": 315,
    "topicId": "development",
    "word": "retry",
    "phonetic": "/riːˈtraɪ/",
    "englishDefinition": "To attempt an operation again after failure",
    "chineseDefinition": "重试"
  },
  {
    "id": "w0316",
    "no": 316,
    "topicId": "development",
    "word": "fallback",
    "phonetic": "/ˈfɔːlbæk/",
    "englishDefinition": "An alternative option when the primary fails",
    "chineseDefinition": "回退/降级"
  },
  {
    "id": "w0317",
    "no": 317,
    "topicId": "development",
    "word": "circuit breaker",
    "phonetic": "/ˈsɜːrkɪt ˈbreɪkər/",
    "englishDefinition": "A pattern that prevents cascading failures",
    "chineseDefinition": "熔断器"
  },
  {
    "id": "w0318",
    "no": 318,
    "topicId": "development",
    "word": "idempotent",
    "phonetic": "/ˌaɪdemˈpoʊtənt/",
    "englishDefinition": "Producing the same result regardless of repetition",
    "chineseDefinition": "幂等的"
  },
  {
    "id": "w0319",
    "no": 319,
    "topicId": "development",
    "word": "stateless",
    "phonetic": "/ˈsteɪtləs/",
    "englishDefinition": "Not retaining data between requests",
    "chineseDefinition": "无状态的"
  },
  {
    "id": "w0320",
    "no": 320,
    "topicId": "development",
    "word": "stateful",
    "phonetic": "/ˈsteɪtfʊl/",
    "englishDefinition": "Retaining data between requests",
    "chineseDefinition": "有状态的"
  },
  {
    "id": "w0321",
    "no": 321,
    "topicId": "development",
    "word": "middleware",
    "phonetic": "/ˈmɪdlweər/",
    "englishDefinition": "Software between the OS and applications",
    "chineseDefinition": "中间件"
  },
  {
    "id": "w0322",
    "no": 322,
    "topicId": "development",
    "word": "ORM",
    "phonetic": "/ˌoʊ ɑːr ˈem/",
    "englishDefinition": "Object-Relational Mapping for database interaction",
    "chineseDefinition": "对象关系映射"
  },
  {
    "id": "w0323",
    "no": 323,
    "topicId": "development",
    "word": "migration",
    "phonetic": "/maɪˈɡreɪʃn/",
    "englishDefinition": "A versioned change to the database schema",
    "chineseDefinition": "数据库迁移"
  },
  {
    "id": "w0324",
    "no": 324,
    "topicId": "development",
    "word": "seed",
    "phonetic": "/siːd/",
    "englishDefinition": "Initial data loaded into a database for development",
    "chineseDefinition": "种子数据"
  },
  {
    "id": "w0325",
    "no": 325,
    "topicId": "development",
    "word": "schema",
    "phonetic": "/ˈskiːmə/",
    "englishDefinition": "The structure definition of a database or data model",
    "chineseDefinition": "模式/架构"
  },
  {
    "id": "w0326",
    "no": 326,
    "topicId": "development",
    "word": "validation",
    "phonetic": "/ˌvælɪˈdeɪʃn/",
    "englishDefinition": "Checking that data meets required rules",
    "chineseDefinition": "验证"
  },
  {
    "id": "w0327",
    "no": 327,
    "topicId": "development",
    "word": "sanitize",
    "phonetic": "/ˈsænɪtaɪz/",
    "englishDefinition": "Cleaning input data to prevent security issues",
    "chineseDefinition": "消毒/净化"
  },
  {
    "id": "w0328",
    "no": 328,
    "topicId": "development",
    "word": "logging",
    "phonetic": "/ˈlɒɡɪŋ/",
    "englishDefinition": "Recording application events for monitoring",
    "chineseDefinition": "日志记录"
  },
  {
    "id": "w0329",
    "no": 329,
    "topicId": "development",
    "word": "monitoring",
    "phonetic": "/ˈmɒnɪtərɪŋ/",
    "englishDefinition": "Observing system performance and health",
    "chineseDefinition": "监控"
  },
  {
    "id": "w0330",
    "no": 330,
    "topicId": "development",
    "word": "health check",
    "phonetic": "/helθ tʃek/",
    "englishDefinition": "An endpoint that reports a service's operational status",
    "chineseDefinition": "健康检查"
  },
  {
    "id": "w0331",
    "no": 331,
    "topicId": "development",
    "word": "scaling",
    "phonetic": "/ˈskeɪlɪŋ/",
    "englishDefinition": "Increasing capacity to handle more load",
    "chineseDefinition": "扩展/伸缩"
  },
  {
    "id": "w0332",
    "no": 332,
    "topicId": "development",
    "word": "horizontal scaling",
    "phonetic": "/ˌhɒrɪˈzɒntl ˈskeɪlɪŋ/",
    "englishDefinition": "Adding more machines to distribute load",
    "chineseDefinition": "水平扩展"
  },
  {
    "id": "w0333",
    "no": 333,
    "topicId": "development",
    "word": "vertical scaling",
    "phonetic": "/ˈvɜːrtɪkl ˈskeɪlɪŋ/",
    "englishDefinition": "Adding more power to an existing machine",
    "chineseDefinition": "垂直扩展"
  },
  {
    "id": "w0334",
    "no": 334,
    "topicId": "development",
    "word": "caching",
    "phonetic": "/ˈkæʃɪŋ/",
    "englishDefinition": "Storing data for faster future access",
    "chineseDefinition": "缓存"
  },
  {
    "id": "w0335",
    "no": 335,
    "topicId": "development",
    "word": "Redis",
    "phonetic": "/ˈredɪs/",
    "englishDefinition": "An in-memory data store used for caching and messaging",
    "chineseDefinition": "Redis缓存"
  },
  {
    "id": "w0336",
    "no": 336,
    "topicId": "development",
    "word": "message broker",
    "phonetic": "/ˈmesɪdʒ ˈbroʊkər/",
    "englishDefinition": "A system that translates messages between services",
    "chineseDefinition": "消息代理"
  },
  {
    "id": "w0337",
    "no": 337,
    "topicId": "development",
    "word": "event-driven",
    "phonetic": "/ɪˈvent ˈdrɪvn/",
    "englishDefinition": "An architecture responding to events asynchronously",
    "chineseDefinition": "事件驱动的"
  },
  {
    "id": "w0338",
    "no": 338,
    "topicId": "development",
    "word": "pub/sub",
    "phonetic": "/pʌb sʌb/",
    "englishDefinition": "A messaging pattern: publish and subscribe",
    "chineseDefinition": "发布/订阅"
  },
  {
    "id": "w0339",
    "no": 339,
    "topicId": "development",
    "word": "RPC",
    "phonetic": "/ˌɑːr piː ˈsiː/",
    "englishDefinition": "Remote Procedure Call, invoking functions on remote servers",
    "chineseDefinition": "远程过程调用"
  },
  {
    "id": "w0340",
    "no": 340,
    "topicId": "development",
    "word": "serialization",
    "phonetic": "/ˌsɪriəlaɪˈzeɪʃn/",
    "englishDefinition": "Converting objects to a transmittable format",
    "chineseDefinition": "序列化"
  },
  {
    "id": "w0341",
    "no": 341,
    "topicId": "database",
    "word": "database",
    "phonetic": "/ˈdeɪtəbeɪs/",
    "englishDefinition": "An organized collection of structured data",
    "chineseDefinition": "数据库"
  },
  {
    "id": "w0342",
    "no": 342,
    "topicId": "database",
    "word": "table",
    "phonetic": "/ˈteɪbl/",
    "englishDefinition": "A collection of related data organized in rows and columns",
    "chineseDefinition": "表"
  },
  {
    "id": "w0343",
    "no": 343,
    "topicId": "database",
    "word": "column",
    "phonetic": "/ˈkɒləm/",
    "englishDefinition": "A vertical field in a database table",
    "chineseDefinition": "列/字段"
  },
  {
    "id": "w0344",
    "no": 344,
    "topicId": "database",
    "word": "row",
    "phonetic": "/roʊ/",
    "englishDefinition": "A horizontal record in a database table",
    "chineseDefinition": "行/记录"
  },
  {
    "id": "w0345",
    "no": 345,
    "topicId": "database",
    "word": "record",
    "phonetic": "/ˈrekɔːrd/",
    "englishDefinition": "A single entry in a database table",
    "chineseDefinition": "记录"
  },
  {
    "id": "w0346",
    "no": 346,
    "topicId": "database",
    "word": "field",
    "phonetic": "/fiːld/",
    "englishDefinition": "A single piece of data within a record",
    "chineseDefinition": "字段"
  },
  {
    "id": "w0347",
    "no": 347,
    "topicId": "database",
    "word": "primary key",
    "phonetic": "/ˈpraɪməri kiː/",
    "englishDefinition": "A unique identifier for each record in a table",
    "chineseDefinition": "主键"
  },
  {
    "id": "w0348",
    "no": 348,
    "topicId": "database",
    "word": "foreign key",
    "phonetic": "/ˈfɒrɪn kiː/",
    "englishDefinition": "A field linking one table to the primary key of another",
    "chineseDefinition": "外键"
  },
  {
    "id": "w0349",
    "no": 349,
    "topicId": "database",
    "word": "query",
    "phonetic": "/ˈkwɪri/",
    "englishDefinition": "A request for data from a database",
    "chineseDefinition": "查询"
  },
  {
    "id": "w0350",
    "no": 350,
    "topicId": "database",
    "word": "SQL",
    "phonetic": "/ˌes kjuː ˈel/",
    "englishDefinition": "Structured Query Language for managing databases",
    "chineseDefinition": "SQL语言"
  },
  {
    "id": "w0351",
    "no": 351,
    "topicId": "database",
    "word": "NoSQL",
    "phonetic": "/noʊ ˌes kjuː ˈel/",
    "englishDefinition": "Non-relational database systems",
    "chineseDefinition": "非关系型数据库"
  },
  {
    "id": "w0352",
    "no": 352,
    "topicId": "database",
    "word": "relational",
    "phonetic": "/rɪˈleɪʃənl/",
    "englishDefinition": "A database model based on tables with relationships",
    "chineseDefinition": "关系型的"
  },
  {
    "id": "w0353",
    "no": 353,
    "topicId": "database",
    "word": "join",
    "phonetic": "/dʒɔɪn/",
    "englishDefinition": "Combining data from multiple tables",
    "chineseDefinition": "连接"
  },
  {
    "id": "w0354",
    "no": 354,
    "topicId": "database",
    "word": "inner join",
    "phonetic": "/ˈɪnər dʒɔɪn/",
    "englishDefinition": "A join returning only matching rows from both tables",
    "chineseDefinition": "内连接"
  },
  {
    "id": "w0355",
    "no": 355,
    "topicId": "database",
    "word": "outer join",
    "phonetic": "/ˈaʊtər dʒɔɪn/",
    "englishDefinition": "A join returning all rows including unmatched ones",
    "chineseDefinition": "外连接"
  },
  {
    "id": "w0356",
    "no": 356,
    "topicId": "database",
    "word": "select",
    "phonetic": "/sɪˈlekt/",
    "englishDefinition": "To retrieve data from a database",
    "chineseDefinition": "查询/选择"
  },
  {
    "id": "w0357",
    "no": 357,
    "topicId": "database",
    "word": "insert",
    "phonetic": "/ɪnˈsɜːrt/",
    "englishDefinition": "To add new data into a table",
    "chineseDefinition": "插入"
  },
  {
    "id": "w0358",
    "no": 358,
    "topicId": "database",
    "word": "update",
    "phonetic": "/ʌpˈdeɪt/",
    "englishDefinition": "To modify existing data in a table",
    "chineseDefinition": "更新"
  },
  {
    "id": "w0359",
    "no": 359,
    "topicId": "database",
    "word": "delete",
    "phonetic": "/dɪˈliːt/",
    "englishDefinition": "To remove data from a table",
    "chineseDefinition": "删除"
  },
  {
    "id": "w0360",
    "no": 360,
    "topicId": "database",
    "word": "CRUD",
    "phonetic": "/krʌd/",
    "englishDefinition": "Create, Read, Update, Delete — basic data operations",
    "chineseDefinition": "增删改查"
  },
  {
    "id": "w0361",
    "no": 361,
    "topicId": "database",
    "word": "transaction",
    "phonetic": "/trænˈzækʃn/",
    "englishDefinition": "A unit of work that is either fully completed or rolled back",
    "chineseDefinition": "事务"
  },
  {
    "id": "w0362",
    "no": 362,
    "topicId": "database",
    "word": "commit",
    "phonetic": "/kəˈmɪt/",
    "englishDefinition": "To save a transaction's changes permanently",
    "chineseDefinition": "提交"
  },
  {
    "id": "w0363",
    "no": 363,
    "topicId": "database",
    "word": "rollback",
    "phonetic": "/ˈroʊlbæk/",
    "englishDefinition": "To undo changes made during a transaction",
    "chineseDefinition": "回滚"
  },
  {
    "id": "w0364",
    "no": 364,
    "topicId": "database",
    "word": "ACID",
    "phonetic": "/ˈæsɪd/",
    "englishDefinition": "Atomicity, Consistency, Isolation, Durability — transaction properties",
    "chineseDefinition": "ACID特性"
  },
  {
    "id": "w0365",
    "no": 365,
    "topicId": "database",
    "word": "index",
    "phonetic": "/ˈɪndeks/",
    "englishDefinition": "A data structure improving query performance",
    "chineseDefinition": "索引"
  },
  {
    "id": "w0366",
    "no": 366,
    "topicId": "database",
    "word": "constraint",
    "phonetic": "/kənˈstreɪnt/",
    "englishDefinition": "A rule enforced on data in a table",
    "chineseDefinition": "约束"
  },
  {
    "id": "w0367",
    "no": 367,
    "topicId": "database",
    "word": "unique",
    "phonetic": "/juːˈniːk/",
    "englishDefinition": "A constraint ensuring no duplicate values",
    "chineseDefinition": "唯一的"
  },
  {
    "id": "w0368",
    "no": 368,
    "topicId": "database",
    "word": "nullable",
    "phonetic": "/ˈnʌləbl/",
    "englishDefinition": "Allowing a field to contain null values",
    "chineseDefinition": "可空的"
  },
  {
    "id": "w0369",
    "no": 369,
    "topicId": "database",
    "word": "aggregate",
    "phonetic": "/ˈæɡrɪɡeɪt/",
    "englishDefinition": "A function that operates on a set of values (SUM, AVG, etc.)",
    "chineseDefinition": "聚合"
  },
  {
    "id": "w0370",
    "no": 370,
    "topicId": "database",
    "word": "group by",
    "phonetic": "/ɡruːp baɪ/",
    "englishDefinition": "A clause that groups rows with the same values",
    "chineseDefinition": "分组"
  },
  {
    "id": "w0371",
    "no": 371,
    "topicId": "database",
    "word": "order by",
    "phonetic": "/ˈɔːrdər baɪ/",
    "englishDefinition": "A clause that sorts results",
    "chineseDefinition": "排序"
  },
  {
    "id": "w0372",
    "no": 372,
    "topicId": "database",
    "word": "where",
    "phonetic": "/weər/",
    "englishDefinition": "A clause that filters records based on conditions",
    "chineseDefinition": "条件筛选"
  },
  {
    "id": "w0373",
    "no": 373,
    "topicId": "database",
    "word": "having",
    "phonetic": "/ˈhævɪŋ/",
    "englishDefinition": "A clause filtering groups after aggregation",
    "chineseDefinition": "分组条件"
  },
  {
    "id": "w0374",
    "no": 374,
    "topicId": "database",
    "word": "subquery",
    "phonetic": "/ˈsʌbkwɪri/",
    "englishDefinition": "A query nested inside another query",
    "chineseDefinition": "子查询"
  },
  {
    "id": "w0375",
    "no": 375,
    "topicId": "database",
    "word": "view",
    "phonetic": "/vjuː/",
    "englishDefinition": "A virtual table based on a query",
    "chineseDefinition": "视图"
  },
  {
    "id": "w0376",
    "no": 376,
    "topicId": "database",
    "word": "stored procedure",
    "phonetic": "/stɔːrd prəˈsiːdʒər/",
    "englishDefinition": "A precompiled set of SQL statements",
    "chineseDefinition": "存储过程"
  },
  {
    "id": "w0377",
    "no": 377,
    "topicId": "database",
    "word": "trigger",
    "phonetic": "/ˈtrɪɡər/",
    "englishDefinition": "An automatic action executed on a database event",
    "chineseDefinition": "触发器"
  },
  {
    "id": "w0378",
    "no": 378,
    "topicId": "database",
    "word": "normalization",
    "phonetic": "/ˌnɔːrməlaɪˈzeɪʃn/",
    "englishDefinition": "Organizing data to reduce redundancy",
    "chineseDefinition": "范式化/规范化"
  },
  {
    "id": "w0379",
    "no": 379,
    "topicId": "database",
    "word": "denormalization",
    "phonetic": "/diːˌnɔːrməlaɪˈzeɪʃn/",
    "englishDefinition": "Adding redundancy to improve read performance",
    "chineseDefinition": "反范式化"
  },
  {
    "id": "w0380",
    "no": 380,
    "topicId": "database",
    "word": "sharding",
    "phonetic": "/ˈʃɑːrdɪŋ/",
    "englishDefinition": "Splitting a database across multiple servers",
    "chineseDefinition": "分片"
  },
  {
    "id": "w0381",
    "no": 381,
    "topicId": "database",
    "word": "replication",
    "phonetic": "/ˌreplɪˈkeɪʃn/",
    "englishDefinition": "Copying data across multiple database instances",
    "chineseDefinition": "复制"
  },
  {
    "id": "w0382",
    "no": 382,
    "topicId": "database",
    "word": "backup",
    "phonetic": "/ˈbækʌp/",
    "englishDefinition": "A copy of data for recovery purposes",
    "chineseDefinition": "备份"
  },
  {
    "id": "w0383",
    "no": 383,
    "topicId": "database",
    "word": "restore",
    "phonetic": "/rɪˈstɔːr/",
    "englishDefinition": "To recover data from a backup",
    "chineseDefinition": "恢复"
  },
  {
    "id": "w0384",
    "no": 384,
    "topicId": "database",
    "word": "snapshot",
    "phonetic": "/ˈsnæpʃɒt/",
    "englishDefinition": "A point-in-time copy of data",
    "chineseDefinition": "快照"
  },
  {
    "id": "w0385",
    "no": 385,
    "topicId": "database",
    "word": "partition",
    "phonetic": "/pɑːrˈtɪʃn/",
    "englishDefinition": "Dividing a table into smaller segments",
    "chineseDefinition": "分区"
  },
  {
    "id": "w0386",
    "no": 386,
    "topicId": "database",
    "word": "document",
    "phonetic": "/ˈdɒkjumənt/",
    "englishDefinition": "A record in a document-oriented database",
    "chineseDefinition": "文档"
  },
  {
    "id": "w0387",
    "no": 387,
    "topicId": "database",
    "word": "collection",
    "phonetic": "/kəˈlekʃn/",
    "englishDefinition": "A group of documents in a NoSQL database",
    "chineseDefinition": "集合"
  },
  {
    "id": "w0388",
    "no": 388,
    "topicId": "database",
    "word": "embedding",
    "phonetic": "/ɪmˈbedɪŋ/",
    "englishDefinition": "Nesting related data within a document",
    "chineseDefinition": "嵌入"
  },
  {
    "id": "w0389",
    "no": 389,
    "topicId": "database",
    "word": "projection",
    "phonetic": "/prəˈdʒekʃn/",
    "englishDefinition": "Selecting specific fields from a query result",
    "chineseDefinition": "投影"
  },
  {
    "id": "w0390",
    "no": 390,
    "topicId": "database",
    "word": "cursor",
    "phonetic": "/ˈkɜːrsər/",
    "englishDefinition": "A pointer for iterating through query results",
    "chineseDefinition": "游标"
  },
  {
    "id": "w0391",
    "no": 391,
    "topicId": "database",
    "word": "connection pool",
    "phonetic": "/kəˈnekʃn puːl/",
    "englishDefinition": "A cache of database connections for reuse",
    "chineseDefinition": "连接池"
  },
  {
    "id": "w0392",
    "no": 392,
    "topicId": "database",
    "word": "deadlock",
    "phonetic": "/ˈdedlɒk/",
    "englishDefinition": "A situation where transactions block each other",
    "chineseDefinition": "死锁"
  },
  {
    "id": "w0393",
    "no": 393,
    "topicId": "database",
    "word": "lock",
    "phonetic": "/lɒk/",
    "englishDefinition": "A mechanism preventing concurrent data modification",
    "chineseDefinition": "锁"
  },
  {
    "id": "w0394",
    "no": 394,
    "topicId": "database",
    "word": "optimistic locking",
    "phonetic": "/ˌɒptɪˈmɪstɪk ˈlɒkɪŋ/",
    "englishDefinition": "Allowing concurrent access and checking for conflicts at commit",
    "chineseDefinition": "乐观锁"
  },
  {
    "id": "w0395",
    "no": 395,
    "topicId": "database",
    "word": "pessimistic locking",
    "phonetic": "/ˌpesɪˈmɪstɪk ˈlɒkɪŋ/",
    "englishDefinition": "Locking data before modification to prevent conflicts",
    "chineseDefinition": "悲观锁"
  },
  {
    "id": "w0396",
    "no": 396,
    "topicId": "database",
    "word": "eventual consistency",
    "phonetic": "/ɪˈventʃuəl kənˈsɪstənsi/",
    "englishDefinition": "Data becoming consistent over time across replicas",
    "chineseDefinition": "最终一致性"
  },
  {
    "id": "w0397",
    "no": 397,
    "topicId": "database",
    "word": "strong consistency",
    "phonetic": "/strɒŋ kənˈsɪstənsi/",
    "englishDefinition": "All reads see the most recent write immediately",
    "chineseDefinition": "强一致性"
  },
  {
    "id": "w0398",
    "no": 398,
    "topicId": "database",
    "word": "CAP theorem",
    "phonetic": "/kæp ˈθɪərəm/",
    "englishDefinition": "A principle about trade-offs in distributed databases",
    "chineseDefinition": "CAP定理"
  },
  {
    "id": "w0399",
    "no": 399,
    "topicId": "database",
    "word": "ETL",
    "phonetic": "/ˌiː tiː ˈel/",
    "englishDefinition": "Extract, Transform, Load — data processing pipeline",
    "chineseDefinition": "ETL数据处理"
  },
  {
    "id": "w0400",
    "no": 400,
    "topicId": "database",
    "word": "data warehouse",
    "phonetic": "/ˈdeɪtə ˈweəhaʊs/",
    "englishDefinition": "A system for storing and analyzing large volumes of data",
    "chineseDefinition": "数据仓库"
  },
  {
    "id": "w0401",
    "no": 401,
    "topicId": "database",
    "word": "data lake",
    "phonetic": "/ˈdeɪtə leɪk/",
    "englishDefinition": "A storage repository holding vast amounts of raw data",
    "chineseDefinition": "数据湖"
  },
  {
    "id": "w0402",
    "no": 402,
    "topicId": "database",
    "word": "column-oriented",
    "phonetic": "/ˈkɒləm ˈɔːrientɪd/",
    "englishDefinition": "A database storing data by columns for analytics",
    "chineseDefinition": "列式存储"
  },
  {
    "id": "w0403",
    "no": 403,
    "topicId": "database",
    "word": "key-value store",
    "phonetic": "/kiː ˈvæljuː stɔːr/",
    "englishDefinition": "A database storing data as key-value pairs",
    "chineseDefinition": "键值存储"
  },
  {
    "id": "w0404",
    "no": 404,
    "topicId": "database",
    "word": "time series",
    "phonetic": "/taɪm ˈsɪriːz/",
    "englishDefinition": "Data points indexed by time",
    "chineseDefinition": "时间序列"
  },
  {
    "id": "w0405",
    "no": 405,
    "topicId": "database",
    "word": "full-text search",
    "phonetic": "/fʊl tekst sɜːrtʃ/",
    "englishDefinition": "Searching through entire document contents",
    "chineseDefinition": "全文搜索"
  },
  {
    "id": "w0406",
    "no": 406,
    "topicId": "database",
    "word": "materialized view",
    "phonetic": "/məˈtɪriəlaɪzd vjuː/",
    "englishDefinition": "A pre-computed query result stored as a table",
    "chineseDefinition": "物化视图"
  },
  {
    "id": "w0407",
    "no": 407,
    "topicId": "database",
    "word": "schema migration",
    "phonetic": "/ˈskiːmə maɪˈɡreɪʃn/",
    "englishDefinition": "Versioned changes to the database structure",
    "chineseDefinition": "模式迁移"
  },
  {
    "id": "w0408",
    "no": 408,
    "topicId": "database",
    "word": "seed data",
    "phonetic": "/siːd ˈdeɪtə/",
    "englishDefinition": "Initial data populated for development or testing",
    "chineseDefinition": "种子数据"
  },
  {
    "id": "w0409",
    "no": 409,
    "topicId": "database",
    "word": "data integrity",
    "phonetic": "/ˈdeɪtə ɪnˈteɡrɪti/",
    "englishDefinition": "Ensuring data accuracy and consistency",
    "chineseDefinition": "数据完整性"
  },
  {
    "id": "w0410",
    "no": 410,
    "topicId": "database",
    "word": "ORM",
    "phonetic": "/ˌoʊ ɑːr ˈem/",
    "englishDefinition": "Mapping database tables to programming language objects",
    "chineseDefinition": "对象关系映射"
  },
  {
    "id": "w0411",
    "no": 411,
    "topicId": "ci-cd",
    "word": "DevOps",
    "phonetic": "/ˈdevɒps/",
    "englishDefinition": "Practices combining development and operations",
    "chineseDefinition": "开发运维"
  },
  {
    "id": "w0412",
    "no": 412,
    "topicId": "ci-cd",
    "word": "CI",
    "phonetic": "/ˌsiː ˈaɪ/",
    "englishDefinition": "Continuous Integration — automatically testing code changes",
    "chineseDefinition": "持续集成"
  },
  {
    "id": "w0413",
    "no": 413,
    "topicId": "ci-cd",
    "word": "CD",
    "phonetic": "/ˌsiː ˈdiː/",
    "englishDefinition": "Continuous Delivery/Deployment — automatically releasing code",
    "chineseDefinition": "持续交付/部署"
  },
  {
    "id": "w0414",
    "no": 414,
    "topicId": "ci-cd",
    "word": "pipeline",
    "phonetic": "/ˈpaɪplaɪn/",
    "englishDefinition": "A series of automated steps for building and deploying",
    "chineseDefinition": "流水线"
  },
  {
    "id": "w0415",
    "no": 415,
    "topicId": "ci-cd",
    "word": "build",
    "phonetic": "/bɪld/",
    "englishDefinition": "To compile and package source code",
    "chineseDefinition": "构建"
  },
  {
    "id": "w0416",
    "no": 416,
    "topicId": "ci-cd",
    "word": "deploy",
    "phonetic": "/dɪˈplɔɪ/",
    "englishDefinition": "To release software to a target environment",
    "chineseDefinition": "部署"
  },
  {
    "id": "w0417",
    "no": 417,
    "topicId": "ci-cd",
    "word": "release",
    "phonetic": "/rɪˈliːs/",
    "englishDefinition": "A version of software made available to users",
    "chineseDefinition": "发布"
  },
  {
    "id": "w0418",
    "no": 418,
    "topicId": "ci-cd",
    "word": "artifact",
    "phonetic": "/ˈɑːrtɪfækt/",
    "englishDefinition": "A file produced during the build process",
    "chineseDefinition": "构建产物"
  },
  {
    "id": "w0419",
    "no": 419,
    "topicId": "ci-cd",
    "word": "container",
    "phonetic": "/kənˈteɪnər/",
    "englishDefinition": "A lightweight virtualized environment for running applications",
    "chineseDefinition": "容器"
  },
  {
    "id": "w0420",
    "no": 420,
    "topicId": "ci-cd",
    "word": "Docker",
    "phonetic": "/ˈdɒkər/",
    "englishDefinition": "A platform for building and running containers",
    "chineseDefinition": "Docker容器平台"
  },
  {
    "id": "w0421",
    "no": 421,
    "topicId": "ci-cd",
    "word": "image",
    "phonetic": "/ˈɪmɪdʒ/",
    "englishDefinition": "A read-only template for creating containers",
    "chineseDefinition": "镜像"
  },
  {
    "id": "w0422",
    "no": 422,
    "topicId": "ci-cd",
    "word": "Dockerfile",
    "phonetic": "/ˈdɒkərfaɪl/",
    "englishDefinition": "A script defining how to build a Docker image",
    "chineseDefinition": "Dockerfile配置"
  },
  {
    "id": "w0423",
    "no": 423,
    "topicId": "ci-cd",
    "word": "registry",
    "phonetic": "/ˈredʒɪstri/",
    "englishDefinition": "A storage system for container images",
    "chineseDefinition": "镜像仓库"
  },
  {
    "id": "w0424",
    "no": 424,
    "topicId": "ci-cd",
    "word": "Kubernetes",
    "phonetic": "/kuːbərˈnetiːz/",
    "englishDefinition": "A container orchestration platform",
    "chineseDefinition": "Kubernetes容器编排"
  },
  {
    "id": "w0425",
    "no": 425,
    "topicId": "ci-cd",
    "word": "pod",
    "phonetic": "/pɒd/",
    "englishDefinition": "The smallest deployable unit in Kubernetes",
    "chineseDefinition": "Pod容器组"
  },
  {
    "id": "w0426",
    "no": 426,
    "topicId": "ci-cd",
    "word": "cluster",
    "phonetic": "/ˈklʌstər/",
    "englishDefinition": "A group of machines working together",
    "chineseDefinition": "集群"
  },
  {
    "id": "w0427",
    "no": 427,
    "topicId": "ci-cd",
    "word": "node",
    "phonetic": "/noʊd/",
    "englishDefinition": "A single machine in a cluster",
    "chineseDefinition": "节点"
  },
  {
    "id": "w0428",
    "no": 428,
    "topicId": "ci-cd",
    "word": "namespace",
    "phonetic": "/ˈneɪmspeɪs/",
    "englishDefinition": "A virtual cluster within Kubernetes",
    "chineseDefinition": "命名空间"
  },
  {
    "id": "w0429",
    "no": 429,
    "topicId": "ci-cd",
    "word": "ingress",
    "phonetic": "/ˈɪnɡres/",
    "englishDefinition": "An entry point for external traffic into a cluster",
    "chineseDefinition": "入口"
  },
  {
    "id": "w0430",
    "no": 430,
    "topicId": "ci-cd",
    "word": "service mesh",
    "phonetic": "/ˈsɜːrvɪs meʃ/",
    "englishDefinition": "Infrastructure managing service-to-service communication",
    "chineseDefinition": "服务网格"
  },
  {
    "id": "w0431",
    "no": 431,
    "topicId": "ci-cd",
    "word": "helm",
    "phonetic": "/helm/",
    "englishDefinition": "A package manager for Kubernetes",
    "chineseDefinition": "Helm包管理器"
  },
  {
    "id": "w0432",
    "no": 432,
    "topicId": "ci-cd",
    "word": "terraform",
    "phonetic": "/ˈterəfɔːrm/",
    "englishDefinition": "An infrastructure as code tool",
    "chineseDefinition": "Terraform基础设施工具"
  },
  {
    "id": "w0433",
    "no": 433,
    "topicId": "ci-cd",
    "word": "infrastructure as code",
    "phonetic": "/ˈɪnfrəstrʌktʃər æz koʊd/",
    "englishDefinition": "Managing infrastructure through configuration files",
    "chineseDefinition": "基础设施即代码"
  },
  {
    "id": "w0434",
    "no": 434,
    "topicId": "ci-cd",
    "word": "provisioning",
    "phonetic": "/prəˈvɪʒənɪŋ/",
    "englishDefinition": "Setting up and configuring infrastructure resources",
    "chineseDefinition": "资源配置"
  },
  {
    "id": "w0435",
    "no": 435,
    "topicId": "ci-cd",
    "word": "orchestration",
    "phonetic": "/ˌɔːrkɪˈstreɪʃn/",
    "englishDefinition": "Automating the management of containers and services",
    "chineseDefinition": "编排"
  },
  {
    "id": "w0436",
    "no": 436,
    "topicId": "ci-cd",
    "word": "configuration",
    "phonetic": "/kənˌfɪɡjəˈreɪʃn/",
    "englishDefinition": "Settings that control how software behaves",
    "chineseDefinition": "配置"
  },
  {
    "id": "w0437",
    "no": 437,
    "topicId": "ci-cd",
    "word": "environment variable",
    "phonetic": "/ɪnˈvaɪrənmənt ˈverɪəbl/",
    "englishDefinition": "A dynamic value set in the operating environment",
    "chineseDefinition": "环境变量"
  },
  {
    "id": "w0438",
    "no": 438,
    "topicId": "ci-cd",
    "word": "secret",
    "phonetic": "/ˈsiːkrɪt/",
    "englishDefinition": "Sensitive configuration data like passwords or API keys",
    "chineseDefinition": "密钥/敏感信息"
  },
  {
    "id": "w0439",
    "no": 439,
    "topicId": "ci-cd",
    "word": "vault",
    "phonetic": "/vɔːlt/",
    "englishDefinition": "A tool for securely storing and accessing secrets",
    "chineseDefinition": "密钥管理库"
  },
  {
    "id": "w0440",
    "no": 440,
    "topicId": "ci-cd",
    "word": "blue-green deployment",
    "phonetic": "/bluː ɡriːn dɪˈplɔɪmənt/",
    "englishDefinition": "Running two identical environments and switching traffic",
    "chineseDefinition": "蓝绿部署"
  },
  {
    "id": "w0441",
    "no": 441,
    "topicId": "ci-cd",
    "word": "canary deployment",
    "phonetic": "/kəˈneri dɪˈplɔɪmənt/",
    "englishDefinition": "Gradually rolling out changes to a subset of users",
    "chineseDefinition": "金丝雀部署"
  },
  {
    "id": "w0442",
    "no": 442,
    "topicId": "ci-cd",
    "word": "rolling update",
    "phonetic": "/ˈroʊlɪŋ ˈʌpdeɪt/",
    "englishDefinition": "Incrementally updating instances one at a time",
    "chineseDefinition": "滚动更新"
  },
  {
    "id": "w0443",
    "no": 443,
    "topicId": "ci-cd",
    "word": "rollback",
    "phonetic": "/ˈroʊlbæk/",
    "englishDefinition": "Reverting to a previous version after a failed deployment",
    "chineseDefinition": "回滚"
  },
  {
    "id": "w0444",
    "no": 444,
    "topicId": "ci-cd",
    "word": "downtime",
    "phonetic": "/ˈdaʊntaɪm/",
    "englishDefinition": "A period when a system is unavailable",
    "chineseDefinition": "停机时间"
  },
  {
    "id": "w0445",
    "no": 445,
    "topicId": "ci-cd",
    "word": "uptime",
    "phonetic": "/ˈʌptaɪm/",
    "englishDefinition": "The time a system has been continuously operational",
    "chineseDefinition": "正常运行时间"
  },
  {
    "id": "w0446",
    "no": 446,
    "topicId": "ci-cd",
    "word": "SLA",
    "phonetic": "/ˌes el ˈeɪ/",
    "englishDefinition": "Service Level Agreement defining service expectations",
    "chineseDefinition": "服务等级协议"
  },
  {
    "id": "w0447",
    "no": 447,
    "topicId": "ci-cd",
    "word": "SLO",
    "phonetic": "/ˌes el ˈoʊ/",
    "englishDefinition": "Service Level Objective — a target for service quality",
    "chineseDefinition": "服务等级目标"
  },
  {
    "id": "w0448",
    "no": 448,
    "topicId": "ci-cd",
    "word": "SLI",
    "phonetic": "/ˌes el ˈaɪ/",
    "englishDefinition": "Service Level Indicator — a metric measuring service quality",
    "chineseDefinition": "服务等级指标"
  },
  {
    "id": "w0449",
    "no": 449,
    "topicId": "ci-cd",
    "word": "observability",
    "phonetic": "/əbˌzɜːrvəˈbɪlɪti/",
    "englishDefinition": "The ability to understand a system's state from its outputs",
    "chineseDefinition": "可观测性"
  },
  {
    "id": "w0450",
    "no": 450,
    "topicId": "ci-cd",
    "word": "tracing",
    "phonetic": "/ˈtreɪsɪŋ/",
    "englishDefinition": "Tracking requests across distributed services",
    "chineseDefinition": "链路追踪"
  },
  {
    "id": "w0451",
    "no": 451,
    "topicId": "ci-cd",
    "word": "metrics",
    "phonetic": "/ˈmetrɪks/",
    "englishDefinition": "Quantitative measures of system performance",
    "chineseDefinition": "指标"
  },
  {
    "id": "w0452",
    "no": 452,
    "topicId": "ci-cd",
    "word": "alerting",
    "phonetic": "/əˈlɜːrtɪŋ/",
    "englishDefinition": "Notifying teams when metrics exceed thresholds",
    "chineseDefinition": "告警"
  },
  {
    "id": "w0453",
    "no": 453,
    "topicId": "ci-cd",
    "word": "dashboard",
    "phonetic": "/ˈdæʃbɔːrd/",
    "englishDefinition": "A visual display of key metrics and data",
    "chineseDefinition": "仪表盘"
  },
  {
    "id": "w0454",
    "no": 454,
    "topicId": "ci-cd",
    "word": "log aggregation",
    "phonetic": "/lɒɡ ˌæɡrɪˈɡeɪʃn/",
    "englishDefinition": "Collecting and centralizing logs from multiple sources",
    "chineseDefinition": "日志聚合"
  },
  {
    "id": "w0455",
    "no": 455,
    "topicId": "ci-cd",
    "word": "daemon",
    "phonetic": "/ˈdiːmən/",
    "englishDefinition": "A background process running continuously",
    "chineseDefinition": "守护进程"
  },
  {
    "id": "w0456",
    "no": 456,
    "topicId": "ci-cd",
    "word": "cron job",
    "phonetic": "/krɒn dʒɒb/",
    "englishDefinition": "A scheduled task that runs at specified times",
    "chineseDefinition": "定时任务"
  },
  {
    "id": "w0457",
    "no": 457,
    "topicId": "ci-cd",
    "word": "script",
    "phonetic": "/skrɪpt/",
    "englishDefinition": "A program written for automating tasks",
    "chineseDefinition": "脚本"
  },
  {
    "id": "w0458",
    "no": 458,
    "topicId": "ci-cd",
    "word": "shell",
    "phonetic": "/ʃel/",
    "englishDefinition": "A command-line interface for interacting with the OS",
    "chineseDefinition": "命令行终端"
  },
  {
    "id": "w0459",
    "no": 459,
    "topicId": "ci-cd",
    "word": "bash",
    "phonetic": "/bæʃ/",
    "englishDefinition": "A popular Unix shell and scripting language",
    "chineseDefinition": "Bash终端"
  },
  {
    "id": "w0460",
    "no": 460,
    "topicId": "ci-cd",
    "word": "SSH",
    "phonetic": "/ˌes es ˈeɪtʃ/",
    "englishDefinition": "Secure Shell for remote server access",
    "chineseDefinition": "SSH远程连接"
  },
  {
    "id": "w0461",
    "no": 461,
    "topicId": "ci-cd",
    "word": "YAML",
    "phonetic": "/ˈjæml/",
    "englishDefinition": "A human-readable data serialization format",
    "chineseDefinition": "YAML格式"
  },
  {
    "id": "w0462",
    "no": 462,
    "topicId": "ci-cd",
    "word": "JSON",
    "phonetic": "/ˈdʒeɪsɒn/",
    "englishDefinition": "JavaScript Object Notation for data interchange",
    "chineseDefinition": "JSON格式"
  },
  {
    "id": "w0463",
    "no": 463,
    "topicId": "ci-cd",
    "word": "XML",
    "phonetic": "/ˌeks em ˈel/",
    "englishDefinition": "Extensible Markup Language for structured data",
    "chineseDefinition": "XML格式"
  },
  {
    "id": "w0464",
    "no": 464,
    "topicId": "ci-cd",
    "word": "lint",
    "phonetic": "/lɪnt/",
    "englishDefinition": "To analyze code for potential errors and style issues",
    "chineseDefinition": "代码检查"
  },
  {
    "id": "w0465",
    "no": 465,
    "topicId": "ci-cd",
    "word": "hook",
    "phonetic": "/hʊk/",
    "englishDefinition": "A script triggered at a specific point in a workflow",
    "chineseDefinition": "钩子"
  },
  {
    "id": "w0466",
    "no": 466,
    "topicId": "ci-cd",
    "word": "pre-commit",
    "phonetic": "/priː kəˈmɪt/",
    "englishDefinition": "A hook that runs before a git commit is finalized",
    "chineseDefinition": "提交前钩子"
  },
  {
    "id": "w0467",
    "no": 467,
    "topicId": "ci-cd",
    "word": "staging",
    "phonetic": "/ˈsteɪdʒɪŋ/",
    "englishDefinition": "An environment that mirrors production for testing",
    "chineseDefinition": "预发布环境"
  },
  {
    "id": "w0468",
    "no": 468,
    "topicId": "ci-cd",
    "word": "production",
    "phonetic": "/prəˈdʌkʃn/",
    "englishDefinition": "The live environment serving real users",
    "chineseDefinition": "生产环境"
  },
  {
    "id": "w0469",
    "no": 469,
    "topicId": "ci-cd",
    "word": "development",
    "phonetic": "/dɪˈveləpmənt/",
    "englishDefinition": "The environment used for active coding",
    "chineseDefinition": "开发环境"
  },
  {
    "id": "w0470",
    "no": 470,
    "topicId": "ci-cd",
    "word": "sandbox",
    "phonetic": "/ˈsændbɒks/",
    "englishDefinition": "An isolated environment for safe experimentation",
    "chineseDefinition": "沙箱环境"
  },
  {
    "id": "w0471",
    "no": 471,
    "topicId": "ci-cd",
    "word": "feature flag",
    "phonetic": "/ˈfiːtʃər flæɡ/",
    "englishDefinition": "A toggle to enable or disable features without deployment",
    "chineseDefinition": "功能开关"
  },
  {
    "id": "w0472",
    "no": 472,
    "topicId": "ci-cd",
    "word": "hotfix",
    "phonetic": "/ˈhɒtfɪks/",
    "englishDefinition": "An urgent fix applied directly to production",
    "chineseDefinition": "热修复"
  },
  {
    "id": "w0473",
    "no": 473,
    "topicId": "ci-cd",
    "word": "patch",
    "phonetic": "/pætʃ/",
    "englishDefinition": "A small update fixing specific issues",
    "chineseDefinition": "补丁"
  },
  {
    "id": "w0474",
    "no": 474,
    "topicId": "ci-cd",
    "word": "version",
    "phonetic": "/ˈvɜːrʒn/",
    "englishDefinition": "A specific release of software identified by a number",
    "chineseDefinition": "版本"
  },
  {
    "id": "w0475",
    "no": 475,
    "topicId": "ci-cd",
    "word": "semantic versioning",
    "phonetic": "/sɪˈmæntɪk ˈvɜːrʒnɪŋ/",
    "englishDefinition": "A versioning scheme using MAJOR.MINOR.PATCH",
    "chineseDefinition": "语义化版本"
  },
  {
    "id": "w0476",
    "no": 476,
    "topicId": "ci-cd",
    "word": "changelog",
    "phonetic": "/ˈtʃeɪndʒlɒɡ/",
    "englishDefinition": "A record of notable changes between versions",
    "chineseDefinition": "变更日志"
  },
  {
    "id": "w0477",
    "no": 477,
    "topicId": "ci-cd",
    "word": "tag",
    "phonetic": "/tæɡ/",
    "englishDefinition": "A label marking a specific point in version history",
    "chineseDefinition": "标签"
  },
  {
    "id": "w0478",
    "no": 478,
    "topicId": "ci-cd",
    "word": "branch",
    "phonetic": "/bræntʃ/",
    "englishDefinition": "An independent line of development in version control",
    "chineseDefinition": "分支"
  },
  {
    "id": "w0479",
    "no": 479,
    "topicId": "ci-cd",
    "word": "merge",
    "phonetic": "/mɜːrdʒ/",
    "englishDefinition": "To combine changes from different branches",
    "chineseDefinition": "合并"
  },
  {
    "id": "w0480",
    "no": 480,
    "topicId": "ci-cd",
    "word": "conflict",
    "phonetic": "/ˈkɒnflɪkt/",
    "englishDefinition": "Incompatible changes in the same file during merge",
    "chineseDefinition": "冲突"
  },
  {
    "id": "w0481",
    "no": 481,
    "topicId": "control",
    "word": "git",
    "phonetic": "/ɡɪt/",
    "englishDefinition": "A distributed version control system",
    "chineseDefinition": "Git版本控制"
  },
  {
    "id": "w0482",
    "no": 482,
    "topicId": "control",
    "word": "commit",
    "phonetic": "/kəˈmɪt/",
    "englishDefinition": "A saved snapshot of changes in version control",
    "chineseDefinition": "提交"
  },
  {
    "id": "w0483",
    "no": 483,
    "topicId": "control",
    "word": "push",
    "phonetic": "/pʊʃ/",
    "englishDefinition": "To upload local commits to a remote repository",
    "chineseDefinition": "推送"
  },
  {
    "id": "w0484",
    "no": 484,
    "topicId": "control",
    "word": "pull",
    "phonetic": "/pʊl/",
    "englishDefinition": "To download and integrate remote changes",
    "chineseDefinition": "拉取"
  },
  {
    "id": "w0485",
    "no": 485,
    "topicId": "control",
    "word": "fetch",
    "phonetic": "/fetʃ/",
    "englishDefinition": "To download remote changes without merging",
    "chineseDefinition": "获取"
  },
  {
    "id": "w0486",
    "no": 486,
    "topicId": "control",
    "word": "clone",
    "phonetic": "/kloʊn/",
    "englishDefinition": "To create a local copy of a remote repository",
    "chineseDefinition": "克隆"
  },
  {
    "id": "w0487",
    "no": 487,
    "topicId": "control",
    "word": "fork",
    "phonetic": "/fɔːrk/",
    "englishDefinition": "To create a personal copy of another user's repository",
    "chineseDefinition": "复刻"
  },
  {
    "id": "w0488",
    "no": 488,
    "topicId": "control",
    "word": "pull request",
    "phonetic": "/pʊl rɪˈkwest/",
    "englishDefinition": "A request to merge changes into a branch",
    "chineseDefinition": "拉取请求/合并请求"
  },
  {
    "id": "w0489",
    "no": 489,
    "topicId": "control",
    "word": "code review",
    "phonetic": "/koʊd rɪˈvjuː/",
    "englishDefinition": "Examining code changes for quality and correctness",
    "chineseDefinition": "代码审查"
  },
  {
    "id": "w0490",
    "no": 490,
    "topicId": "control",
    "word": "rebase",
    "phonetic": "/riːˈbeɪs/",
    "englishDefinition": "Reapplying commits on top of a different base",
    "chineseDefinition": "变基"
  },
  {
    "id": "w0491",
    "no": 491,
    "topicId": "control",
    "word": "cherry-pick",
    "phonetic": "/ˈtʃeri pɪk/",
    "englishDefinition": "Applying a specific commit to another branch",
    "chineseDefinition": "择优挑选"
  },
  {
    "id": "w0492",
    "no": 492,
    "topicId": "control",
    "word": "stash",
    "phonetic": "/stæʃ/",
    "englishDefinition": "Temporarily saving uncommitted changes",
    "chineseDefinition": "暂存"
  },
  {
    "id": "w0493",
    "no": 493,
    "topicId": "control",
    "word": "diff",
    "phonetic": "/dɪf/",
    "englishDefinition": "A comparison showing differences between versions",
    "chineseDefinition": "差异"
  },
  {
    "id": "w0494",
    "no": 494,
    "topicId": "control",
    "word": "blame",
    "phonetic": "/bleɪm/",
    "englishDefinition": "Showing who last modified each line of a file",
    "chineseDefinition": "追溯"
  },
  {
    "id": "w0495",
    "no": 495,
    "topicId": "control",
    "word": "revert",
    "phonetic": "/rɪˈvɜːrt/",
    "englishDefinition": "Creating a new commit that undoes a previous one",
    "chineseDefinition": "恢复/还原"
  },
  {
    "id": "w0496",
    "no": 496,
    "topicId": "control",
    "word": "HEAD",
    "phonetic": "/hed/",
    "englishDefinition": "A reference to the current commit",
    "chineseDefinition": "HEAD指针"
  },
  {
    "id": "w0497",
    "no": 497,
    "topicId": "control",
    "word": "remote",
    "phonetic": "/rɪˈmoʊt/",
    "englishDefinition": "A version of the repository hosted elsewhere",
    "chineseDefinition": "远程仓库"
  },
  {
    "id": "w0498",
    "no": 498,
    "topicId": "control",
    "word": "origin",
    "phonetic": "/ˈɒrɪdʒɪn/",
    "englishDefinition": "The default name for the remote repository",
    "chineseDefinition": "源仓库"
  },
  {
    "id": "w0499",
    "no": 499,
    "topicId": "control",
    "word": "upstream",
    "phonetic": "/ˈʌpstriːm/",
    "englishDefinition": "The original repository a fork was created from",
    "chineseDefinition": "上游仓库"
  },
  {
    "id": "w0500",
    "no": 500,
    "topicId": "control",
    "word": "gitignore",
    "phonetic": "/ɡɪt ɪɡˈnɔːr/",
    "englishDefinition": "A file specifying which files to exclude from tracking",
    "chineseDefinition": "gitignore配置"
  },
  {
    "id": "w0501",
    "no": 501,
    "topicId": "control",
    "word": "submodule",
    "phonetic": "/ˈsʌbmɒdjuːl/",
    "englishDefinition": "A repository embedded inside another repository",
    "chineseDefinition": "子模块"
  },
  {
    "id": "w0502",
    "no": 502,
    "topicId": "control",
    "word": "worktree",
    "phonetic": "/ˈwɜːrktriː/",
    "englishDefinition": "An additional working directory linked to a repository",
    "chineseDefinition": "工作树"
  },
  {
    "id": "w0503",
    "no": 503,
    "topicId": "control",
    "word": "squash",
    "phonetic": "/skwɒʃ/",
    "englishDefinition": "Combining multiple commits into one",
    "chineseDefinition": "压缩提交"
  },
  {
    "id": "w0504",
    "no": 504,
    "topicId": "control",
    "word": "amend",
    "phonetic": "/əˈmend/",
    "englishDefinition": "Modifying the most recent commit",
    "chineseDefinition": "修改提交"
  },
  {
    "id": "w0505",
    "no": 505,
    "topicId": "control",
    "word": "staging area",
    "phonetic": "/ˈsteɪdʒɪŋ ˈeəriə/",
    "englishDefinition": "The area where changes are prepared for committing",
    "chineseDefinition": "暂存区"
  },
  {
    "id": "w0506",
    "no": 506,
    "topicId": "control",
    "word": "working directory",
    "phonetic": "/ˈwɜːrkɪŋ dɪˈrektəri/",
    "englishDefinition": "The directory containing your current files",
    "chineseDefinition": "工作目录"
  },
  {
    "id": "w0507",
    "no": 507,
    "topicId": "control",
    "word": "detached HEAD",
    "phonetic": "/dɪˈtætʃt hed/",
    "englishDefinition": "A state where HEAD points to a commit, not a branch",
    "chineseDefinition": "游离HEAD"
  },
  {
    "id": "w0508",
    "no": 508,
    "topicId": "control",
    "word": "bisect",
    "phonetic": "/baɪˈsekt/",
    "englishDefinition": "Using binary search to find a commit that introduced a bug",
    "chineseDefinition": "二分查找提交"
  },
  {
    "id": "w0509",
    "no": 509,
    "topicId": "control",
    "word": "hook",
    "phonetic": "/hʊk/",
    "englishDefinition": "A script triggered by git events",
    "chineseDefinition": "Git钩子"
  },
  {
    "id": "w0510",
    "no": 510,
    "topicId": "control",
    "word": "monorepo",
    "phonetic": "/ˈmɒnoʊrepoʊ/",
    "englishDefinition": "A single repository containing multiple projects",
    "chineseDefinition": "单仓库"
  },
  {
    "id": "w0511",
    "no": 511,
    "topicId": "computing",
    "word": "cloud",
    "phonetic": "/klaʊd/",
    "englishDefinition": "Remote servers accessed over the internet",
    "chineseDefinition": "云"
  },
  {
    "id": "w0512",
    "no": 512,
    "topicId": "computing",
    "word": "IaaS",
    "phonetic": "/aɪ æz ə ˈsɜːrvɪs/",
    "englishDefinition": "Infrastructure as a Service",
    "chineseDefinition": "基础设施即服务"
  },
  {
    "id": "w0513",
    "no": 513,
    "topicId": "computing",
    "word": "PaaS",
    "phonetic": "/pæz/",
    "englishDefinition": "Platform as a Service",
    "chineseDefinition": "平台即服务"
  },
  {
    "id": "w0514",
    "no": 514,
    "topicId": "computing",
    "word": "SaaS",
    "phonetic": "/sæs/",
    "englishDefinition": "Software as a Service",
    "chineseDefinition": "软件即服务"
  },
  {
    "id": "w0515",
    "no": 515,
    "topicId": "computing",
    "word": "serverless",
    "phonetic": "/ˈsɜːrvərləs/",
    "englishDefinition": "Running code without managing servers",
    "chineseDefinition": "无服务器"
  },
  {
    "id": "w0516",
    "no": 516,
    "topicId": "computing",
    "word": "lambda",
    "phonetic": "/ˈlæmdə/",
    "englishDefinition": "A serverless compute service (AWS term)",
    "chineseDefinition": "Lambda函数"
  },
  {
    "id": "w0517",
    "no": 517,
    "topicId": "computing",
    "word": "function as a service",
    "phonetic": "/ˈfʌŋkʃn æz ə ˈsɜːrvɪs/",
    "englishDefinition": "Running individual functions in the cloud",
    "chineseDefinition": "函数即服务"
  },
  {
    "id": "w0518",
    "no": 518,
    "topicId": "computing",
    "word": "virtual machine",
    "phonetic": "/ˈvɜːrtʃuəl məˈʃiːn/",
    "englishDefinition": "A software emulation of a physical computer",
    "chineseDefinition": "虚拟机"
  },
  {
    "id": "w0519",
    "no": 519,
    "topicId": "computing",
    "word": "instance",
    "phonetic": "/ˈɪnstəns/",
    "englishDefinition": "A single virtual server in the cloud",
    "chineseDefinition": "实例"
  },
  {
    "id": "w0520",
    "no": 520,
    "topicId": "computing",
    "word": "region",
    "phonetic": "/ˈriːdʒən/",
    "englishDefinition": "A geographic area containing data centers",
    "chineseDefinition": "区域"
  },
  {
    "id": "w0521",
    "no": 521,
    "topicId": "computing",
    "word": "availability zone",
    "phonetic": "/əˌveɪləˈbɪlɪti zoʊn/",
    "englishDefinition": "An isolated data center within a region",
    "chineseDefinition": "可用区"
  },
  {
    "id": "w0522",
    "no": 522,
    "topicId": "computing",
    "word": "CDN",
    "phonetic": "/ˌsiː diː ˈen/",
    "englishDefinition": "Content Delivery Network for distributing content globally",
    "chineseDefinition": "内容分发网络"
  },
  {
    "id": "w0523",
    "no": 523,
    "topicId": "computing",
    "word": "edge",
    "phonetic": "/edʒ/",
    "englishDefinition": "Computing resources close to end users",
    "chineseDefinition": "边缘计算"
  },
  {
    "id": "w0524",
    "no": 524,
    "topicId": "computing",
    "word": "S3",
    "phonetic": "/ˌes θriː/",
    "englishDefinition": "A scalable object storage service",
    "chineseDefinition": "S3对象存储"
  },
  {
    "id": "w0525",
    "no": 525,
    "topicId": "computing",
    "word": "blob storage",
    "phonetic": "/blɒb ˈstɔːrɪdʒ/",
    "englishDefinition": "Storage for unstructured binary data",
    "chineseDefinition": "Blob存储"
  },
  {
    "id": "w0526",
    "no": 526,
    "topicId": "computing",
    "word": "bucket",
    "phonetic": "/ˈbʌkɪt/",
    "englishDefinition": "A container for storing objects in cloud storage",
    "chineseDefinition": "存储桶"
  },
  {
    "id": "w0527",
    "no": 527,
    "topicId": "computing",
    "word": "elastic",
    "phonetic": "/ɪˈlæstɪk/",
    "englishDefinition": "Able to automatically scale resources up or down",
    "chineseDefinition": "弹性的"
  },
  {
    "id": "w0528",
    "no": 528,
    "topicId": "computing",
    "word": "auto-scaling",
    "phonetic": "/ˈɔːtoʊ ˈskeɪlɪŋ/",
    "englishDefinition": "Automatically adjusting resources based on demand",
    "chineseDefinition": "自动伸缩"
  },
  {
    "id": "w0529",
    "no": 529,
    "topicId": "computing",
    "word": "load balancing",
    "phonetic": "/loʊd ˈbælənsɪŋ/",
    "englishDefinition": "Distributing workload across multiple resources",
    "chineseDefinition": "负载均衡"
  },
  {
    "id": "w0530",
    "no": 530,
    "topicId": "computing",
    "word": "firewall",
    "phonetic": "/ˈfaɪərwɔːl/",
    "englishDefinition": "A security system controlling network traffic",
    "chineseDefinition": "防火墙"
  },
  {
    "id": "w0531",
    "no": 531,
    "topicId": "computing",
    "word": "VPC",
    "phonetic": "/ˌviː piː ˈsiː/",
    "englishDefinition": "Virtual Private Cloud — an isolated network",
    "chineseDefinition": "虚拟私有云"
  },
  {
    "id": "w0532",
    "no": 532,
    "topicId": "computing",
    "word": "subnet",
    "phonetic": "/ˈsʌbnet/",
    "englishDefinition": "A subdivision of a network",
    "chineseDefinition": "子网"
  },
  {
    "id": "w0533",
    "no": 533,
    "topicId": "computing",
    "word": "IAM",
    "phonetic": "/aɪ eɪ ˈem/",
    "englishDefinition": "Identity and Access Management",
    "chineseDefinition": "身份访问管理"
  },
  {
    "id": "w0534",
    "no": 534,
    "topicId": "computing",
    "word": "role",
    "phonetic": "/roʊl/",
    "englishDefinition": "A set of permissions assigned to a user or service",
    "chineseDefinition": "角色"
  },
  {
    "id": "w0535",
    "no": 535,
    "topicId": "computing",
    "word": "policy",
    "phonetic": "/ˈpɒlɪsi/",
    "englishDefinition": "A document defining permissions and access rules",
    "chineseDefinition": "策略"
  },
  {
    "id": "w0536",
    "no": 536,
    "topicId": "computing",
    "word": "billing",
    "phonetic": "/ˈbɪlɪŋ/",
    "englishDefinition": "The process of tracking and charging for cloud usage",
    "chineseDefinition": "计费"
  },
  {
    "id": "w0537",
    "no": 537,
    "topicId": "computing",
    "word": "cost optimization",
    "phonetic": "/kɒst ˌɒptɪmaɪˈzeɪʃn/",
    "englishDefinition": "Reducing cloud spending without sacrificing performance",
    "chineseDefinition": "成本优化"
  },
  {
    "id": "w0538",
    "no": 538,
    "topicId": "computing",
    "word": "spot instance",
    "phonetic": "/spɒt ˈɪnstəns/",
    "englishDefinition": "A discounted cloud instance that can be interrupted",
    "chineseDefinition": "竞价实例"
  },
  {
    "id": "w0539",
    "no": 539,
    "topicId": "computing",
    "word": "reserved instance",
    "phonetic": "/rɪˈzɜːrvd ˈɪnstəns/",
    "englishDefinition": "A pre-purchased instance at a lower rate",
    "chineseDefinition": "预留实例"
  },
  {
    "id": "w0540",
    "no": 540,
    "topicId": "computing",
    "word": "multi-cloud",
    "phonetic": "/ˈmʌlti klaʊd/",
    "englishDefinition": "Using services from multiple cloud providers",
    "chineseDefinition": "多云"
  },
  {
    "id": "w0541",
    "no": 541,
    "topicId": "computing",
    "word": "hybrid cloud",
    "phonetic": "/ˈhaɪbrɪd klaʊd/",
    "englishDefinition": "A mix of on-premises and cloud infrastructure",
    "chineseDefinition": "混合云"
  },
  {
    "id": "w0542",
    "no": 542,
    "topicId": "computing",
    "word": "on-premises",
    "phonetic": "/ɒn ˈpremɪsɪz/",
    "englishDefinition": "Infrastructure hosted locally within an organization",
    "chineseDefinition": "本地部署"
  },
  {
    "id": "w0543",
    "no": 543,
    "topicId": "computing",
    "word": "cold start",
    "phonetic": "/koʊld stɑːrt/",
    "englishDefinition": "Initial delay when a serverless function is first invoked",
    "chineseDefinition": "冷启动"
  },
  {
    "id": "w0544",
    "no": 544,
    "topicId": "computing",
    "word": "warm start",
    "phonetic": "/wɔːrm stɑːrt/",
    "englishDefinition": "A faster invocation when a function instance is already running",
    "chineseDefinition": "热启动"
  },
  {
    "id": "w0545",
    "no": 545,
    "topicId": "computing",
    "word": "managed service",
    "phonetic": "/ˈmænɪdʒd ˈsɜːrvɪs/",
    "englishDefinition": "A cloud service handled by the provider",
    "chineseDefinition": "托管服务"
  },
  {
    "id": "w0546",
    "no": 546,
    "topicId": "computing",
    "word": "object storage",
    "phonetic": "/ˈɒbdʒɪkt ˈstɔːrɪdʒ/",
    "englishDefinition": "Storing data as objects with metadata",
    "chineseDefinition": "对象存储"
  },
  {
    "id": "w0547",
    "no": 547,
    "topicId": "computing",
    "word": "block storage",
    "phonetic": "/blɒk ˈstɔːrɪdʒ/",
    "englishDefinition": "Storage divided into fixed-size blocks",
    "chineseDefinition": "块存储"
  },
  {
    "id": "w0548",
    "no": 548,
    "topicId": "computing",
    "word": "file storage",
    "phonetic": "/faɪl ˈstɔːrɪdʒ/",
    "englishDefinition": "Hierarchical storage accessible as a file system",
    "chineseDefinition": "文件存储"
  },
  {
    "id": "w0549",
    "no": 549,
    "topicId": "computing",
    "word": "container registry",
    "phonetic": "/kənˈteɪnər ˈredʒɪstri/",
    "englishDefinition": "A repository for storing container images",
    "chineseDefinition": "容器镜像仓库"
  },
  {
    "id": "w0550",
    "no": 550,
    "topicId": "computing",
    "word": "service discovery",
    "phonetic": "/ˈsɜːrvɪs dɪˈskʌvəri/",
    "englishDefinition": "Automatically locating services in a distributed system",
    "chineseDefinition": "服务发现"
  },
  {
    "id": "w0551",
    "no": 551,
    "topicId": "computing",
    "word": "API management",
    "phonetic": "/ˌeɪ piː ˈaɪ ˈmænɪdʒmənt/",
    "englishDefinition": "Tools for publishing, monitoring, and securing APIs",
    "chineseDefinition": "API管理"
  },
  {
    "id": "w0552",
    "no": 552,
    "topicId": "computing",
    "word": "event bus",
    "phonetic": "/ɪˈvent bʌs/",
    "englishDefinition": "A system for distributing events between services",
    "chineseDefinition": "事件总线"
  },
  {
    "id": "w0553",
    "no": 553,
    "topicId": "computing",
    "word": "step function",
    "phonetic": "/step ˈfʌŋkʃn/",
    "englishDefinition": "A serverless orchestration of multiple functions",
    "chineseDefinition": "步骤函数"
  },
  {
    "id": "w0554",
    "no": 554,
    "topicId": "computing",
    "word": "queue service",
    "phonetic": "/kjuː ˈsɜːrvɪs/",
    "englishDefinition": "A managed message queue in the cloud",
    "chineseDefinition": "队列服务"
  },
  {
    "id": "w0555",
    "no": 555,
    "topicId": "computing",
    "word": "notification service",
    "phonetic": "/ˌnoʊtɪfɪˈkeɪʃn ˈsɜːrvɪs/",
    "englishDefinition": "A service for sending push notifications",
    "chineseDefinition": "通知服务"
  },
  {
    "id": "w0556",
    "no": 556,
    "topicId": "computing",
    "word": "cloud function",
    "phonetic": "/klaʊd ˈfʌŋkʃn/",
    "englishDefinition": "A serverless function running in the cloud",
    "chineseDefinition": "云函数"
  },
  {
    "id": "w0557",
    "no": 557,
    "topicId": "computing",
    "word": "gateway",
    "phonetic": "/ˈɡeɪtweɪ/",
    "englishDefinition": "An entry point managing API traffic and routing",
    "chineseDefinition": "网关"
  },
  {
    "id": "w0558",
    "no": 558,
    "topicId": "computing",
    "word": "warm pool",
    "phonetic": "/wɔːrm puːl/",
    "englishDefinition": "Pre-initialized instances ready for quick scaling",
    "chineseDefinition": "预热池"
  },
  {
    "id": "w0559",
    "no": 559,
    "topicId": "computing",
    "word": "tenant",
    "phonetic": "/ˈtenənt/",
    "englishDefinition": "A customer or user of a shared cloud service",
    "chineseDefinition": "租户"
  },
  {
    "id": "w0560",
    "no": 560,
    "topicId": "computing",
    "word": "multi-tenant",
    "phonetic": "/ˈmʌlti ˈtenənt/",
    "englishDefinition": "An architecture serving multiple customers from shared resources",
    "chineseDefinition": "多租户"
  },
  {
    "id": "w0561",
    "no": 561,
    "topicId": "computing",
    "word": "compliance",
    "phonetic": "/kəmˈplaɪəns/",
    "englishDefinition": "Adherence to regulatory requirements and standards",
    "chineseDefinition": "合规"
  },
  {
    "id": "w0562",
    "no": 562,
    "topicId": "computing",
    "word": "disaster recovery",
    "phonetic": "/dɪˈzæstər rɪˈkʌvəri/",
    "englishDefinition": "Strategies for restoring systems after a failure",
    "chineseDefinition": "灾难恢复"
  },
  {
    "id": "w0563",
    "no": 563,
    "topicId": "computing",
    "word": "failover",
    "phonetic": "/ˈfeɪloʊvər/",
    "englishDefinition": "Switching to a backup system when the primary fails",
    "chineseDefinition": "故障转移"
  },
  {
    "id": "w0564",
    "no": 564,
    "topicId": "computing",
    "word": "high availability",
    "phonetic": "/haɪ əˌveɪləˈbɪlɪti/",
    "englishDefinition": "Designing systems to minimize downtime",
    "chineseDefinition": "高可用性"
  },
  {
    "id": "w0565",
    "no": 565,
    "topicId": "computing",
    "word": "redundancy",
    "phonetic": "/rɪˈdʌndənsi/",
    "englishDefinition": "Duplicating components to increase reliability",
    "chineseDefinition": "冗余"
  },
  {
    "id": "w0566",
    "no": 566,
    "topicId": "computing",
    "word": "data center",
    "phonetic": "/ˈdeɪtə ˈsentər/",
    "englishDefinition": "A facility housing computing infrastructure",
    "chineseDefinition": "数据中心"
  },
  {
    "id": "w0567",
    "no": 567,
    "topicId": "computing",
    "word": "colocation",
    "phonetic": "/ˌkoʊloʊˈkeɪʃn/",
    "englishDefinition": "Housing privately-owned servers in a third-party data center",
    "chineseDefinition": "托管"
  },
  {
    "id": "w0568",
    "no": 568,
    "topicId": "computing",
    "word": "edge computing",
    "phonetic": "/edʒ kəmˈpjuːtɪŋ/",
    "englishDefinition": "Processing data close to where it is generated",
    "chineseDefinition": "边缘计算"
  },
  {
    "id": "w0569",
    "no": 569,
    "topicId": "computing",
    "word": "fog computing",
    "phonetic": "/fɒɡ kəmˈpjuːtɪŋ/",
    "englishDefinition": "Extending cloud computing to the edge of the network",
    "chineseDefinition": "雾计算"
  },
  {
    "id": "w0570",
    "no": 570,
    "topicId": "computing",
    "word": "cloud-native",
    "phonetic": "/klaʊd ˈneɪtɪv/",
    "englishDefinition": "Applications designed specifically for cloud environments",
    "chineseDefinition": "云原生"
  },
  {
    "id": "w0571",
    "no": 571,
    "topicId": "testing",
    "word": "test",
    "phonetic": "/test/",
    "englishDefinition": "Code that verifies the behavior of other code",
    "chineseDefinition": "测试"
  },
  {
    "id": "w0572",
    "no": 572,
    "topicId": "testing",
    "word": "unit test",
    "phonetic": "/ˈjuːnɪt test/",
    "englishDefinition": "Testing individual functions or methods in isolation",
    "chineseDefinition": "单元测试"
  },
  {
    "id": "w0573",
    "no": 573,
    "topicId": "testing",
    "word": "integration test",
    "phonetic": "/ˌɪntɪˈɡreɪʃn test/",
    "englishDefinition": "Testing interactions between multiple components",
    "chineseDefinition": "集成测试"
  },
  {
    "id": "w0574",
    "no": 574,
    "topicId": "testing",
    "word": "end-to-end test",
    "phonetic": "/end tə end test/",
    "englishDefinition": "Testing the entire application workflow",
    "chineseDefinition": "端到端测试"
  },
  {
    "id": "w0575",
    "no": 575,
    "topicId": "testing",
    "word": "regression test",
    "phonetic": "/rɪˈɡreʃn test/",
    "englishDefinition": "Testing that new changes don't break existing features",
    "chineseDefinition": "回归测试"
  },
  {
    "id": "w0576",
    "no": 576,
    "topicId": "testing",
    "word": "smoke test",
    "phonetic": "/smoʊk test/",
    "englishDefinition": "A quick test to check basic functionality",
    "chineseDefinition": "冒烟测试"
  },
  {
    "id": "w0577",
    "no": 577,
    "topicId": "testing",
    "word": "acceptance test",
    "phonetic": "/əkˈseptəns test/",
    "englishDefinition": "Testing whether the system meets business requirements",
    "chineseDefinition": "验收测试"
  },
  {
    "id": "w0578",
    "no": 578,
    "topicId": "testing",
    "word": "performance test",
    "phonetic": "/pərˈfɔːrməns test/",
    "englishDefinition": "Testing system behavior under various loads",
    "chineseDefinition": "性能测试"
  },
  {
    "id": "w0579",
    "no": 579,
    "topicId": "testing",
    "word": "load test",
    "phonetic": "/loʊd test/",
    "englishDefinition": "Testing system performance under expected load",
    "chineseDefinition": "负载测试"
  },
  {
    "id": "w0580",
    "no": 580,
    "topicId": "testing",
    "word": "stress test",
    "phonetic": "/stres test/",
    "englishDefinition": "Testing system limits under extreme conditions",
    "chineseDefinition": "压力测试"
  },
  {
    "id": "w0581",
    "no": 581,
    "topicId": "testing",
    "word": "assertion",
    "phonetic": "/əˈsɜːrʃn/",
    "englishDefinition": "A statement verifying an expected outcome",
    "chineseDefinition": "断言"
  },
  {
    "id": "w0582",
    "no": 582,
    "topicId": "testing",
    "word": "mock",
    "phonetic": "/mɒk/",
    "englishDefinition": "A simulated object mimicking real component behavior",
    "chineseDefinition": "模拟对象"
  },
  {
    "id": "w0583",
    "no": 583,
    "topicId": "testing",
    "word": "stub",
    "phonetic": "/stʌb/",
    "englishDefinition": "A simplified replacement for a dependency in testing",
    "chineseDefinition": "桩"
  },
  {
    "id": "w0584",
    "no": 584,
    "topicId": "testing",
    "word": "spy",
    "phonetic": "/spaɪ/",
    "englishDefinition": "A test double that records how it was called",
    "chineseDefinition": "间谍函数"
  },
  {
    "id": "w0585",
    "no": 585,
    "topicId": "testing",
    "word": "fixture",
    "phonetic": "/ˈfɪkstʃər/",
    "englishDefinition": "Predefined data or state used to set up tests",
    "chineseDefinition": "测试夹具"
  },
  {
    "id": "w0586",
    "no": 586,
    "topicId": "testing",
    "word": "setup",
    "phonetic": "/ˈsetʌp/",
    "englishDefinition": "Code that runs before each test to prepare the environment",
    "chineseDefinition": "测试准备"
  },
  {
    "id": "w0587",
    "no": 587,
    "topicId": "testing",
    "word": "teardown",
    "phonetic": "/ˈtɪrdaʊn/",
    "englishDefinition": "Code that runs after each test to clean up",
    "chineseDefinition": "测试清理"
  },
  {
    "id": "w0588",
    "no": 588,
    "topicId": "testing",
    "word": "test suite",
    "phonetic": "/test swiːt/",
    "englishDefinition": "A collection of related tests",
    "chineseDefinition": "测试套件"
  },
  {
    "id": "w0589",
    "no": 589,
    "topicId": "testing",
    "word": "test case",
    "phonetic": "/test keɪs/",
    "englishDefinition": "A specific scenario being tested",
    "chineseDefinition": "测试用例"
  },
  {
    "id": "w0590",
    "no": 590,
    "topicId": "testing",
    "word": "test runner",
    "phonetic": "/test ˈrʌnər/",
    "englishDefinition": "A tool that executes tests and reports results",
    "chineseDefinition": "测试运行器"
  },
  {
    "id": "w0591",
    "no": 591,
    "topicId": "testing",
    "word": "coverage",
    "phonetic": "/ˈkʌvərɪdʒ/",
    "englishDefinition": "The percentage of code exercised by tests",
    "chineseDefinition": "测试覆盖率"
  },
  {
    "id": "w0592",
    "no": 592,
    "topicId": "testing",
    "word": "TDD",
    "phonetic": "/ˌtiː diː ˈdiː/",
    "englishDefinition": "Test-Driven Development — writing tests before code",
    "chineseDefinition": "测试驱动开发"
  },
  {
    "id": "w0593",
    "no": 593,
    "topicId": "testing",
    "word": "BDD",
    "phonetic": "/ˌbiː diː ˈdiː/",
    "englishDefinition": "Behavior-Driven Development — tests described in business terms",
    "chineseDefinition": "行为驱动开发"
  },
  {
    "id": "w0594",
    "no": 594,
    "topicId": "testing",
    "word": "snapshot test",
    "phonetic": "/ˈsnæpʃɒt test/",
    "englishDefinition": "Comparing output against a stored reference",
    "chineseDefinition": "快照测试"
  },
  {
    "id": "w0595",
    "no": 595,
    "topicId": "testing",
    "word": "visual regression",
    "phonetic": "/ˈvɪʒuəl rɪˈɡreʃn/",
    "englishDefinition": "Detecting unintended visual changes in UI",
    "chineseDefinition": "视觉回归测试"
  },
  {
    "id": "w0596",
    "no": 596,
    "topicId": "testing",
    "word": "flaky test",
    "phonetic": "/ˈfleɪki test/",
    "englishDefinition": "A test that passes and fails inconsistently",
    "chineseDefinition": "不稳定测试"
  },
  {
    "id": "w0597",
    "no": 597,
    "topicId": "testing",
    "word": "deterministic",
    "phonetic": "/dɪˌtɜːrmɪˈnɪstɪk/",
    "englishDefinition": "Always producing the same result under the same conditions",
    "chineseDefinition": "确定性的"
  },
  {
    "id": "w0598",
    "no": 598,
    "topicId": "testing",
    "word": "isolation",
    "phonetic": "/ˌaɪsəˈleɪʃn/",
    "englishDefinition": "Running tests independently without shared state",
    "chineseDefinition": "隔离"
  },
  {
    "id": "w0599",
    "no": 599,
    "topicId": "testing",
    "word": "boundary test",
    "phonetic": "/ˈbaʊndri test/",
    "englishDefinition": "Testing edge cases at the limits of input ranges",
    "chineseDefinition": "边界测试"
  },
  {
    "id": "w0600",
    "no": 600,
    "topicId": "testing",
    "word": "fuzzing",
    "phonetic": "/ˈfʌzɪŋ/",
    "englishDefinition": "Testing with random or unexpected input data",
    "chineseDefinition": "模糊测试"
  },
  {
    "id": "w0601",
    "no": 601,
    "topicId": "testing",
    "word": "benchmark",
    "phonetic": "/ˈbentʃmɑːrk/",
    "englishDefinition": "A standard test measuring performance",
    "chineseDefinition": "基准测试"
  },
  {
    "id": "w0602",
    "no": 602,
    "topicId": "testing",
    "word": "profiling",
    "phonetic": "/ˈproʊfaɪlɪŋ/",
    "englishDefinition": "Analyzing a program to find performance bottlenecks",
    "chineseDefinition": "性能分析"
  },
  {
    "id": "w0603",
    "no": 603,
    "topicId": "testing",
    "word": "A/B testing",
    "phonetic": "/eɪ biː ˈtestɪŋ/",
    "englishDefinition": "Comparing two versions to determine which performs better",
    "chineseDefinition": "A/B测试"
  },
  {
    "id": "w0604",
    "no": 604,
    "topicId": "testing",
    "word": "canary testing",
    "phonetic": "/kəˈneri ˈtestɪŋ/",
    "englishDefinition": "Testing changes on a small subset of users first",
    "chineseDefinition": "金丝雀测试"
  },
  {
    "id": "w0605",
    "no": 605,
    "topicId": "testing",
    "word": "chaos engineering",
    "phonetic": "/ˈkeɪɒs ˌendʒɪˈnɪrɪŋ/",
    "englishDefinition": "Deliberately introducing failures to test resilience",
    "chineseDefinition": "混沌工程"
  },
  {
    "id": "w0606",
    "no": 606,
    "topicId": "testing",
    "word": "test double",
    "phonetic": "/test ˈdʌbl/",
    "englishDefinition": "A generic term for mock, stub, spy, or fake",
    "chineseDefinition": "测试替身"
  },
  {
    "id": "w0607",
    "no": 607,
    "topicId": "testing",
    "word": "fake",
    "phonetic": "/feɪk/",
    "englishDefinition": "A working implementation with simplified behavior",
    "chineseDefinition": "伪造对象"
  },
  {
    "id": "w0608",
    "no": 608,
    "topicId": "testing",
    "word": "test pyramid",
    "phonetic": "/test ˈpɪrəmɪd/",
    "englishDefinition": "A model suggesting more unit tests than integration tests",
    "chineseDefinition": "测试金字塔"
  },
  {
    "id": "w0609",
    "no": 609,
    "topicId": "testing",
    "word": "contract test",
    "phonetic": "/ˈkɒntrækt test/",
    "englishDefinition": "Testing that services adhere to their agreed interfaces",
    "chineseDefinition": "契约测试"
  },
  {
    "id": "w0610",
    "no": 610,
    "topicId": "testing",
    "word": "mutation testing",
    "phonetic": "/mjuːˈteɪʃn ˈtestɪŋ/",
    "englishDefinition": "Introducing deliberate bugs to test test quality",
    "chineseDefinition": "变异测试"
  },
  {
    "id": "w0611",
    "no": 611,
    "topicId": "testing",
    "word": "parameterized test",
    "phonetic": "/pəˈræmɪtəraɪzd test/",
    "englishDefinition": "Running the same test with different input data",
    "chineseDefinition": "参数化测试"
  },
  {
    "id": "w0612",
    "no": 612,
    "topicId": "testing",
    "word": "golden file",
    "phonetic": "/ˈɡoʊldən faɪl/",
    "englishDefinition": "A reference file used for comparison in tests",
    "chineseDefinition": "黄金文件"
  },
  {
    "id": "w0613",
    "no": 613,
    "topicId": "testing",
    "word": "test harness",
    "phonetic": "/test ˈhɑːrnɪs/",
    "englishDefinition": "A framework for running and organizing tests",
    "chineseDefinition": "测试框架"
  },
  {
    "id": "w0614",
    "no": 614,
    "topicId": "testing",
    "word": "continuous testing",
    "phonetic": "/kənˈtɪnjuəs ˈtestɪŋ/",
    "englishDefinition": "Running tests automatically as part of the development pipeline",
    "chineseDefinition": "持续测试"
  },
  {
    "id": "w0615",
    "no": 615,
    "topicId": "testing",
    "word": "static analysis",
    "phonetic": "/ˈstætɪk əˈnæləsɪs/",
    "englishDefinition": "Analyzing code without executing it",
    "chineseDefinition": "静态分析"
  },
  {
    "id": "w0616",
    "no": 616,
    "topicId": "testing",
    "word": "dynamic analysis",
    "phonetic": "/daɪˈnæmɪk əˈnæləsɪs/",
    "englishDefinition": "Analyzing code during execution",
    "chineseDefinition": "动态分析"
  },
  {
    "id": "w0617",
    "no": 617,
    "topicId": "testing",
    "word": "code smell",
    "phonetic": "/koʊd smel/",
    "englishDefinition": "A pattern in code suggesting a deeper problem",
    "chineseDefinition": "代码异味"
  },
  {
    "id": "w0618",
    "no": 618,
    "topicId": "testing",
    "word": "technical debt",
    "phonetic": "/ˈteknɪkl det/",
    "englishDefinition": "The cost of shortcuts taken during development",
    "chineseDefinition": "技术债务"
  },
  {
    "id": "w0619",
    "no": 619,
    "topicId": "testing",
    "word": "test environment",
    "phonetic": "/test ɪnˈvaɪrənmənt/",
    "englishDefinition": "A separate setup for running tests",
    "chineseDefinition": "测试环境"
  },
  {
    "id": "w0620",
    "no": 620,
    "topicId": "testing",
    "word": "test data",
    "phonetic": "/test ˈdeɪtə/",
    "englishDefinition": "Data used to exercise test scenarios",
    "chineseDefinition": "测试数据"
  },
  {
    "id": "w0621",
    "no": 621,
    "topicId": "testing",
    "word": "happy path",
    "phonetic": "/ˈhæpi pæθ/",
    "englishDefinition": "The default scenario with no errors or exceptions",
    "chineseDefinition": "正常路径"
  },
  {
    "id": "w0622",
    "no": 622,
    "topicId": "testing",
    "word": "edge case",
    "phonetic": "/edʒ keɪs/",
    "englishDefinition": "An unusual or extreme scenario that may cause issues",
    "chineseDefinition": "边界情况"
  },
  {
    "id": "w0623",
    "no": 623,
    "topicId": "testing",
    "word": "corner case",
    "phonetic": "/ˈkɔːrnər keɪs/",
    "englishDefinition": "A problem involving multiple boundary conditions",
    "chineseDefinition": "极端情况"
  },
  {
    "id": "w0624",
    "no": 624,
    "topicId": "testing",
    "word": "negative test",
    "phonetic": "/ˈneɡətɪv test/",
    "englishDefinition": "Testing with invalid or unexpected inputs",
    "chineseDefinition": "负面测试"
  },
  {
    "id": "w0625",
    "no": 625,
    "topicId": "testing",
    "word": "sanity check",
    "phonetic": "/ˈsænɪti tʃek/",
    "englishDefinition": "A quick verification that something works correctly",
    "chineseDefinition": "健全性检查"
  },
  {
    "id": "w0626",
    "no": 626,
    "topicId": "testing",
    "word": "dry run",
    "phonetic": "/draɪ rʌn/",
    "englishDefinition": "A practice execution without actual consequences",
    "chineseDefinition": "试运行"
  },
  {
    "id": "w0627",
    "no": 627,
    "topicId": "testing",
    "word": "test automation",
    "phonetic": "/test ˌɔːtəˈmeɪʃn/",
    "englishDefinition": "Using tools to run tests automatically",
    "chineseDefinition": "测试自动化"
  },
  {
    "id": "w0628",
    "no": 628,
    "topicId": "testing",
    "word": "mocking framework",
    "phonetic": "/ˈmɒkɪŋ ˈfreɪmwɜːrk/",
    "englishDefinition": "A library for creating mock objects in tests",
    "chineseDefinition": "模拟框架"
  },
  {
    "id": "w0629",
    "no": 629,
    "topicId": "testing",
    "word": "assertion library",
    "phonetic": "/əˈsɜːrʃn ˈlaɪbrəri/",
    "englishDefinition": "A library providing assertion methods for tests",
    "chineseDefinition": "断言库"
  },
  {
    "id": "w0630",
    "no": 630,
    "topicId": "testing",
    "word": "test report",
    "phonetic": "/test rɪˈpɔːrt/",
    "englishDefinition": "A summary of test execution results",
    "chineseDefinition": "测试报告"
  },
  {
    "id": "w0631",
    "no": 631,
    "topicId": "security",
    "word": "encryption",
    "phonetic": "/ɪnˈkrɪpʃn/",
    "englishDefinition": "Converting data into a coded format",
    "chineseDefinition": "加密"
  },
  {
    "id": "w0632",
    "no": 632,
    "topicId": "security",
    "word": "decryption",
    "phonetic": "/diːˈkrɪpʃn/",
    "englishDefinition": "Converting coded data back to its original form",
    "chineseDefinition": "解密"
  },
  {
    "id": "w0633",
    "no": 633,
    "topicId": "security",
    "word": "hashing",
    "phonetic": "/ˈhæʃɪŋ/",
    "englishDefinition": "Generating a fixed-size value from data (one-way)",
    "chineseDefinition": "哈希运算"
  },
  {
    "id": "w0634",
    "no": 634,
    "topicId": "security",
    "word": "salt",
    "phonetic": "/sɔːlt/",
    "englishDefinition": "Random data added to a password before hashing",
    "chineseDefinition": "盐值"
  },
  {
    "id": "w0635",
    "no": 635,
    "topicId": "security",
    "word": "symmetric encryption",
    "phonetic": "/sɪˈmetrɪk ɪnˈkrɪpʃn/",
    "englishDefinition": "Using the same key to encrypt and decrypt",
    "chineseDefinition": "对称加密"
  },
  {
    "id": "w0636",
    "no": 636,
    "topicId": "security",
    "word": "asymmetric encryption",
    "phonetic": "/ˌeɪsɪˈmetrɪk ɪnˈkrɪpʃn/",
    "englishDefinition": "Using different keys for encryption and decryption",
    "chineseDefinition": "非对称加密"
  },
  {
    "id": "w0637",
    "no": 637,
    "topicId": "security",
    "word": "public key",
    "phonetic": "/ˈpʌblɪk kiː/",
    "englishDefinition": "A key shared openly for encryption or verification",
    "chineseDefinition": "公钥"
  },
  {
    "id": "w0638",
    "no": 638,
    "topicId": "security",
    "word": "private key",
    "phonetic": "/ˈpraɪvɪt kiː/",
    "englishDefinition": "A secret key used for decryption or signing",
    "chineseDefinition": "私钥"
  },
  {
    "id": "w0639",
    "no": 639,
    "topicId": "security",
    "word": "digital signature",
    "phonetic": "/ˈdɪdʒɪtl ˈsɪɡnɪtʃər/",
    "englishDefinition": "A cryptographic proof of authenticity",
    "chineseDefinition": "数字签名"
  },
  {
    "id": "w0640",
    "no": 640,
    "topicId": "security",
    "word": "vulnerability",
    "phonetic": "/ˌvʌlnərəˈbɪlɪti/",
    "englishDefinition": "A weakness that can be exploited",
    "chineseDefinition": "漏洞"
  },
  {
    "id": "w0641",
    "no": 641,
    "topicId": "security",
    "word": "exploit",
    "phonetic": "/ˈeksplɔɪt/",
    "englishDefinition": "A method of taking advantage of a vulnerability",
    "chineseDefinition": "利用/攻击"
  },
  {
    "id": "w0642",
    "no": 642,
    "topicId": "security",
    "word": "malware",
    "phonetic": "/ˈmælweər/",
    "englishDefinition": "Malicious software designed to cause harm",
    "chineseDefinition": "恶意软件"
  },
  {
    "id": "w0643",
    "no": 643,
    "topicId": "security",
    "word": "phishing",
    "phonetic": "/ˈfɪʃɪŋ/",
    "englishDefinition": "Fraudulent attempts to obtain sensitive information",
    "chineseDefinition": "钓鱼攻击"
  },
  {
    "id": "w0644",
    "no": 644,
    "topicId": "security",
    "word": "XSS",
    "phonetic": "/ˌeks es ˈes/",
    "englishDefinition": "Cross-Site Scripting — injecting scripts into web pages",
    "chineseDefinition": "跨站脚本攻击"
  },
  {
    "id": "w0645",
    "no": 645,
    "topicId": "security",
    "word": "CSRF",
    "phonetic": "/ˌsiː es ɑːr ˈef/",
    "englishDefinition": "Cross-Site Request Forgery — unauthorized commands from a user",
    "chineseDefinition": "跨站请求伪造"
  },
  {
    "id": "w0646",
    "no": 646,
    "topicId": "security",
    "word": "SQL injection",
    "phonetic": "/ˌes kjuː ˈel ɪnˈdʒekʃn/",
    "englishDefinition": "Inserting malicious SQL through user input",
    "chineseDefinition": "SQL注入"
  },
  {
    "id": "w0647",
    "no": 647,
    "topicId": "security",
    "word": "DDoS",
    "phonetic": "/ˌdiː diː oʊ ˈes/",
    "englishDefinition": "Distributed Denial of Service attack",
    "chineseDefinition": "分布式拒绝服务攻击"
  },
  {
    "id": "w0648",
    "no": 648,
    "topicId": "security",
    "word": "firewall",
    "phonetic": "/ˈfaɪərwɔːl/",
    "englishDefinition": "A system that controls incoming and outgoing network traffic",
    "chineseDefinition": "防火墙"
  },
  {
    "id": "w0649",
    "no": 649,
    "topicId": "security",
    "word": "WAF",
    "phonetic": "/wæf/",
    "englishDefinition": "Web Application Firewall",
    "chineseDefinition": "Web应用防火墙"
  },
  {
    "id": "w0650",
    "no": 650,
    "topicId": "security",
    "word": "penetration testing",
    "phonetic": "/ˌpenɪˈtreɪʃn ˈtestɪŋ/",
    "englishDefinition": "Simulating attacks to find security weaknesses",
    "chineseDefinition": "渗透测试"
  },
  {
    "id": "w0651",
    "no": 651,
    "topicId": "security",
    "word": "audit",
    "phonetic": "/ˈɔːdɪt/",
    "englishDefinition": "A systematic review of security practices",
    "chineseDefinition": "审计"
  },
  {
    "id": "w0652",
    "no": 652,
    "topicId": "security",
    "word": "compliance",
    "phonetic": "/kəmˈplaɪəns/",
    "englishDefinition": "Meeting security regulations and standards",
    "chineseDefinition": "合规"
  },
  {
    "id": "w0653",
    "no": 653,
    "topicId": "security",
    "word": "OWASP",
    "phonetic": "/ˈoʊwɒsp/",
    "englishDefinition": "Open Web Application Security Project",
    "chineseDefinition": "OWASP安全项目"
  },
  {
    "id": "w0654",
    "no": 654,
    "topicId": "security",
    "word": "two-factor authentication",
    "phonetic": "/tuː ˈfæktər ɔːˌθentɪˈkeɪʃn/",
    "englishDefinition": "Requiring two forms of verification",
    "chineseDefinition": "双因素认证"
  },
  {
    "id": "w0655",
    "no": 655,
    "topicId": "security",
    "word": "MFA",
    "phonetic": "/ˌem ef ˈeɪ/",
    "englishDefinition": "Multi-Factor Authentication",
    "chineseDefinition": "多因素认证"
  },
  {
    "id": "w0656",
    "no": 656,
    "topicId": "security",
    "word": "SSO",
    "phonetic": "/ˌes es ˈoʊ/",
    "englishDefinition": "Single Sign-On — one login for multiple services",
    "chineseDefinition": "单点登录"
  },
  {
    "id": "w0657",
    "no": 657,
    "topicId": "security",
    "word": "RBAC",
    "phonetic": "/ˌɑːr biː eɪ ˈsiː/",
    "englishDefinition": "Role-Based Access Control",
    "chineseDefinition": "基于角色的访问控制"
  },
  {
    "id": "w0658",
    "no": 658,
    "topicId": "security",
    "word": "ABAC",
    "phonetic": "/ˌeɪ biː eɪ ˈsiː/",
    "englishDefinition": "Attribute-Based Access Control",
    "chineseDefinition": "基于属性的访问控制"
  },
  {
    "id": "w0659",
    "no": 659,
    "topicId": "security",
    "word": "least privilege",
    "phonetic": "/liːst ˈprɪvəlɪdʒ/",
    "englishDefinition": "Granting only the minimum permissions needed",
    "chineseDefinition": "最小权限原则"
  },
  {
    "id": "w0660",
    "no": 660,
    "topicId": "security",
    "word": "zero trust",
    "phonetic": "/ˈzɪroʊ trʌst/",
    "englishDefinition": "A security model that trusts nothing by default",
    "chineseDefinition": "零信任"
  },
  {
    "id": "w0661",
    "no": 661,
    "topicId": "security",
    "word": "sandbox",
    "phonetic": "/ˈsændbɒks/",
    "englishDefinition": "An isolated environment for running untrusted code",
    "chineseDefinition": "沙箱"
  },
  {
    "id": "w0662",
    "no": 662,
    "topicId": "security",
    "word": "obfuscation",
    "phonetic": "/ˌɒbfʌˈskeɪʃn/",
    "englishDefinition": "Making code difficult to understand to prevent reverse engineering",
    "chineseDefinition": "混淆"
  },
  {
    "id": "w0663",
    "no": 663,
    "topicId": "security",
    "word": "cipher",
    "phonetic": "/ˈsaɪfər/",
    "englishDefinition": "An algorithm for encryption and decryption",
    "chineseDefinition": "密码算法"
  },
  {
    "id": "w0664",
    "no": 664,
    "topicId": "security",
    "word": "checksum",
    "phonetic": "/ˈtʃeksʌm/",
    "englishDefinition": "A value used to verify data integrity",
    "chineseDefinition": "校验和"
  },
  {
    "id": "w0665",
    "no": 665,
    "topicId": "security",
    "word": "token rotation",
    "phonetic": "/ˈtoʊkən roʊˈteɪʃn/",
    "englishDefinition": "Regularly replacing authentication tokens",
    "chineseDefinition": "令牌轮换"
  },
  {
    "id": "w0666",
    "no": 666,
    "topicId": "security",
    "word": "rate limiting",
    "phonetic": "/reɪt ˈlɪmɪtɪŋ/",
    "englishDefinition": "Restricting request frequency to prevent abuse",
    "chineseDefinition": "速率限制"
  },
  {
    "id": "w0667",
    "no": 667,
    "topicId": "security",
    "word": "input validation",
    "phonetic": "/ˈɪnpʊt ˌvælɪˈdeɪʃn/",
    "englishDefinition": "Checking user input for correctness and safety",
    "chineseDefinition": "输入验证"
  },
  {
    "id": "w0668",
    "no": 668,
    "topicId": "security",
    "word": "output encoding",
    "phonetic": "/ˈaʊtpʊt ɪnˈkoʊdɪŋ/",
    "englishDefinition": "Converting output to prevent injection attacks",
    "chineseDefinition": "输出编码"
  },
  {
    "id": "w0669",
    "no": 669,
    "topicId": "security",
    "word": "content security policy",
    "phonetic": "/ˈkɒntent sɪˈkjʊrɪti ˈpɒlɪsi/",
    "englishDefinition": "An HTTP header preventing XSS and injection",
    "chineseDefinition": "内容安全策略"
  },
  {
    "id": "w0670",
    "no": 670,
    "topicId": "security",
    "word": "HTTPS",
    "phonetic": "/ˌeɪtʃ tiː tiː piː ˈes/",
    "englishDefinition": "Encrypted HTTP communication",
    "chineseDefinition": "安全HTTP协议"
  },
  {
    "id": "w0671",
    "no": 671,
    "topicId": "security",
    "word": "certificate authority",
    "phonetic": "/sərˈtɪfɪkət ɔːˈθɒrɪti/",
    "englishDefinition": "An entity that issues digital certificates",
    "chineseDefinition": "证书颁发机构"
  },
  {
    "id": "w0672",
    "no": 672,
    "topicId": "security",
    "word": "data breach",
    "phonetic": "/ˈdeɪtə briːtʃ/",
    "englishDefinition": "Unauthorized access to sensitive data",
    "chineseDefinition": "数据泄露"
  },
  {
    "id": "w0673",
    "no": 673,
    "topicId": "security",
    "word": "incident response",
    "phonetic": "/ˈɪnsɪdənt rɪˈspɒns/",
    "englishDefinition": "Procedures for handling security events",
    "chineseDefinition": "事件响应"
  },
  {
    "id": "w0674",
    "no": 674,
    "topicId": "security",
    "word": "patch management",
    "phonetic": "/pætʃ ˈmænɪdʒmənt/",
    "englishDefinition": "Keeping software up to date with security fixes",
    "chineseDefinition": "补丁管理"
  },
  {
    "id": "w0675",
    "no": 675,
    "topicId": "security",
    "word": "threat modeling",
    "phonetic": "/θret ˈmɒdlɪŋ/",
    "englishDefinition": "Identifying potential security threats systematically",
    "chineseDefinition": "威胁建模"
  },
  {
    "id": "w0676",
    "no": 676,
    "topicId": "security",
    "word": "security audit",
    "phonetic": "/sɪˈkjʊrɪti ˈɔːdɪt/",
    "englishDefinition": "A comprehensive review of security controls",
    "chineseDefinition": "安全审计"
  },
  {
    "id": "w0677",
    "no": 677,
    "topicId": "security",
    "word": "encryption at rest",
    "phonetic": "/ɪnˈkrɪpʃn æt rest/",
    "englishDefinition": "Encrypting stored data",
    "chineseDefinition": "静态加密"
  },
  {
    "id": "w0678",
    "no": 678,
    "topicId": "security",
    "word": "encryption in transit",
    "phonetic": "/ɪnˈkrɪpʃn ɪn ˈtrænzɪt/",
    "englishDefinition": "Encrypting data during transmission",
    "chineseDefinition": "传输加密"
  },
  {
    "id": "w0679",
    "no": 679,
    "topicId": "security",
    "word": "key management",
    "phonetic": "/kiː ˈmænɪdʒmənt/",
    "englishDefinition": "Handling cryptographic keys securely",
    "chineseDefinition": "密钥管理"
  },
  {
    "id": "w0680",
    "no": 680,
    "topicId": "security",
    "word": "security token",
    "phonetic": "/sɪˈkjʊrɪti ˈtoʊkən/",
    "englishDefinition": "A device or code used for authentication",
    "chineseDefinition": "安全令牌"
  },
  {
    "id": "w0681",
    "no": 681,
    "topicId": "management-agile",
    "word": "agile",
    "phonetic": "/ˈædʒaɪl/",
    "englishDefinition": "An iterative approach to software development",
    "chineseDefinition": "敏捷开发"
  },
  {
    "id": "w0682",
    "no": 682,
    "topicId": "management-agile",
    "word": "scrum",
    "phonetic": "/skrʌm/",
    "englishDefinition": "An agile framework with sprints and ceremonies",
    "chineseDefinition": "Scrum框架"
  },
  {
    "id": "w0683",
    "no": 683,
    "topicId": "management-agile",
    "word": "kanban",
    "phonetic": "/ˈkɑːnbɑːn/",
    "englishDefinition": "A visual workflow management method",
    "chineseDefinition": "看板"
  },
  {
    "id": "w0684",
    "no": 684,
    "topicId": "management-agile",
    "word": "sprint",
    "phonetic": "/sprɪnt/",
    "englishDefinition": "A fixed time period for completing a set of work",
    "chineseDefinition": "冲刺/迭代"
  },
  {
    "id": "w0685",
    "no": 685,
    "topicId": "management-agile",
    "word": "backlog",
    "phonetic": "/ˈbæklɒɡ/",
    "englishDefinition": "A prioritized list of work items",
    "chineseDefinition": "待办列表"
  },
  {
    "id": "w0686",
    "no": 686,
    "topicId": "management-agile",
    "word": "user story",
    "phonetic": "/ˈjuːzər ˈstɔːri/",
    "englishDefinition": "A description of a feature from the user's perspective",
    "chineseDefinition": "用户故事"
  },
  {
    "id": "w0687",
    "no": 687,
    "topicId": "management-agile",
    "word": "epic",
    "phonetic": "/ˈepɪk/",
    "englishDefinition": "A large body of work that can be broken into stories",
    "chineseDefinition": "史诗/大需求"
  },
  {
    "id": "w0688",
    "no": 688,
    "topicId": "management-agile",
    "word": "task",
    "phonetic": "/tæsk/",
    "englishDefinition": "A specific piece of work to be completed",
    "chineseDefinition": "任务"
  },
  {
    "id": "w0689",
    "no": 689,
    "topicId": "management-agile",
    "word": "subtask",
    "phonetic": "/ˈsʌbtæsk/",
    "englishDefinition": "A smaller part of a larger task",
    "chineseDefinition": "子任务"
  },
  {
    "id": "w0690",
    "no": 690,
    "topicId": "management-agile",
    "word": "story point",
    "phonetic": "/ˈstɔːri pɔɪnt/",
    "englishDefinition": "A unit estimating the effort required for a user story",
    "chineseDefinition": "故事点"
  },
  {
    "id": "w0691",
    "no": 691,
    "topicId": "management-agile",
    "word": "velocity",
    "phonetic": "/vəˈlɒsɪti/",
    "englishDefinition": "The amount of work completed per sprint",
    "chineseDefinition": "速度/产能"
  },
  {
    "id": "w0692",
    "no": 692,
    "topicId": "management-agile",
    "word": "burndown chart",
    "phonetic": "/ˈbɜːrndaʊn tʃɑːrt/",
    "englishDefinition": "A chart showing remaining work over time",
    "chineseDefinition": "燃尽图"
  },
  {
    "id": "w0693",
    "no": 693,
    "topicId": "management-agile",
    "word": "standup",
    "phonetic": "/ˈstændʌp/",
    "englishDefinition": "A brief daily team meeting",
    "chineseDefinition": "站会"
  },
  {
    "id": "w0694",
    "no": 694,
    "topicId": "management-agile",
    "word": "retrospective",
    "phonetic": "/ˌretrəˈspektɪv/",
    "englishDefinition": "A meeting to reflect on the sprint and improve",
    "chineseDefinition": "回顾会"
  },
  {
    "id": "w0695",
    "no": 695,
    "topicId": "management-agile",
    "word": "sprint review",
    "phonetic": "/sprɪnt rɪˈvjuː/",
    "englishDefinition": "A meeting to demonstrate completed work",
    "chineseDefinition": "迭代评审"
  },
  {
    "id": "w0696",
    "no": 696,
    "topicId": "management-agile",
    "word": "sprint planning",
    "phonetic": "/sprɪnt ˈplænɪŋ/",
    "englishDefinition": "A meeting to decide what to work on next sprint",
    "chineseDefinition": "迭代规划"
  },
  {
    "id": "w0697",
    "no": 697,
    "topicId": "management-agile",
    "word": "product owner",
    "phonetic": "/ˈprɒdʌkt ˈoʊnər/",
    "englishDefinition": "The person responsible for the product backlog",
    "chineseDefinition": "产品负责人"
  },
  {
    "id": "w0698",
    "no": 698,
    "topicId": "management-agile",
    "word": "scrum master",
    "phonetic": "/skrʌm ˈmɑːstər/",
    "englishDefinition": "A facilitator for the scrum team",
    "chineseDefinition": "Scrum主管"
  },
  {
    "id": "w0699",
    "no": 699,
    "topicId": "management-agile",
    "word": "stakeholder",
    "phonetic": "/ˈsteɪkhoʊldər/",
    "englishDefinition": "A person with interest in the project's outcome",
    "chineseDefinition": "利益相关者"
  },
  {
    "id": "w0700",
    "no": 700,
    "topicId": "management-agile",
    "word": "milestone",
    "phonetic": "/ˈmaɪlstoʊn/",
    "englishDefinition": "A significant point in the project timeline",
    "chineseDefinition": "里程碑"
  },
  {
    "id": "w0701",
    "no": 701,
    "topicId": "management-agile",
    "word": "deadline",
    "phonetic": "/ˈdedlaɪn/",
    "englishDefinition": "The date by which work must be completed",
    "chineseDefinition": "截止日期"
  },
  {
    "id": "w0702",
    "no": 702,
    "topicId": "management-agile",
    "word": "deliverable",
    "phonetic": "/dɪˈlɪvərəbl/",
    "englishDefinition": "A tangible output produced by the project",
    "chineseDefinition": "交付物"
  },
  {
    "id": "w0703",
    "no": 703,
    "topicId": "management-agile",
    "word": "requirement",
    "phonetic": "/rɪˈkwaɪərmənt/",
    "englishDefinition": "A documented need that the system must satisfy",
    "chineseDefinition": "需求"
  },
  {
    "id": "w0704",
    "no": 704,
    "topicId": "management-agile",
    "word": "specification",
    "phonetic": "/ˌspesɪfɪˈkeɪʃn/",
    "englishDefinition": "A detailed description of system requirements",
    "chineseDefinition": "规格说明"
  },
  {
    "id": "w0705",
    "no": 705,
    "topicId": "management-agile",
    "word": "scope",
    "phonetic": "/skoʊp/",
    "englishDefinition": "The boundaries of what a project will deliver",
    "chineseDefinition": "范围"
  },
  {
    "id": "w0706",
    "no": 706,
    "topicId": "management-agile",
    "word": "scope creep",
    "phonetic": "/skoʊp kriːp/",
    "englishDefinition": "Uncontrolled expansion of project requirements",
    "chineseDefinition": "范围蔓延"
  },
  {
    "id": "w0707",
    "no": 707,
    "topicId": "management-agile",
    "word": "estimation",
    "phonetic": "/ˌestɪˈmeɪʃn/",
    "englishDefinition": "Predicting the time and effort needed for tasks",
    "chineseDefinition": "估算"
  },
  {
    "id": "w0708",
    "no": 708,
    "topicId": "management-agile",
    "word": "priority",
    "phonetic": "/praɪˈɒrɪti/",
    "englishDefinition": "The importance level assigned to a task",
    "chineseDefinition": "优先级"
  },
  {
    "id": "w0709",
    "no": 709,
    "topicId": "management-agile",
    "word": "blocker",
    "phonetic": "/ˈblɒkər/",
    "englishDefinition": "An issue that prevents progress on a task",
    "chineseDefinition": "阻碍项"
  },
  {
    "id": "w0710",
    "no": 710,
    "topicId": "management-agile",
    "word": "impediment",
    "phonetic": "/ɪmˈpedɪmənt/",
    "englishDefinition": "An obstacle that slows down the team",
    "chineseDefinition": "障碍"
  },
  {
    "id": "w0711",
    "no": 711,
    "topicId": "management-agile",
    "word": "dependency",
    "phonetic": "/dɪˈpendənsi/",
    "englishDefinition": "A relationship where one task relies on another",
    "chineseDefinition": "依赖关系"
  },
  {
    "id": "w0712",
    "no": 712,
    "topicId": "management-agile",
    "word": "risk",
    "phonetic": "/rɪsk/",
    "englishDefinition": "A potential event that could impact the project",
    "chineseDefinition": "风险"
  },
  {
    "id": "w0713",
    "no": 713,
    "topicId": "management-agile",
    "word": "mitigation",
    "phonetic": "/ˌmɪtɪˈɡeɪʃn/",
    "englishDefinition": "Actions taken to reduce the impact of a risk",
    "chineseDefinition": "缓解措施"
  },
  {
    "id": "w0714",
    "no": 714,
    "topicId": "management-agile",
    "word": "iteration",
    "phonetic": "/ˌɪtəˈreɪʃn/",
    "englishDefinition": "One cycle of development in an iterative process",
    "chineseDefinition": "迭代"
  },
  {
    "id": "w0715",
    "no": 715,
    "topicId": "management-agile",
    "word": "increment",
    "phonetic": "/ˈɪŋkrɪmənt/",
    "englishDefinition": "A potentially releasable piece of the product",
    "chineseDefinition": "增量"
  },
  {
    "id": "w0716",
    "no": 716,
    "topicId": "management-agile",
    "word": "MVP",
    "phonetic": "/ˌem viː ˈpiː/",
    "englishDefinition": "Minimum Viable Product — the simplest usable version",
    "chineseDefinition": "最小可行产品"
  },
  {
    "id": "w0717",
    "no": 717,
    "topicId": "management-agile",
    "word": "POC",
    "phonetic": "/ˌpiː oʊ ˈsiː/",
    "englishDefinition": "Proof of Concept — validating feasibility",
    "chineseDefinition": "概念验证"
  },
  {
    "id": "w0718",
    "no": 718,
    "topicId": "management-agile",
    "word": "prototype",
    "phonetic": "/ˈproʊtətaɪp/",
    "englishDefinition": "An early model of a product for testing concepts",
    "chineseDefinition": "原型"
  },
  {
    "id": "w0719",
    "no": 719,
    "topicId": "management-agile",
    "word": "wireframe",
    "phonetic": "/ˈwaɪərfreɪm/",
    "englishDefinition": "A basic visual guide for a user interface",
    "chineseDefinition": "线框图"
  },
  {
    "id": "w0720",
    "no": 720,
    "topicId": "management-agile",
    "word": "mockup",
    "phonetic": "/ˈmɒkʌp/",
    "englishDefinition": "A detailed visual representation of a design",
    "chineseDefinition": "设计稿"
  },
  {
    "id": "w0721",
    "no": 721,
    "topicId": "management-agile",
    "word": "roadmap",
    "phonetic": "/ˈroʊdmæp/",
    "englishDefinition": "A strategic plan outlining product direction",
    "chineseDefinition": "路线图"
  },
  {
    "id": "w0722",
    "no": 722,
    "topicId": "management-agile",
    "word": "KPI",
    "phonetic": "/ˌkeɪ piː ˈaɪ/",
    "englishDefinition": "Key Performance Indicator — a measurable goal",
    "chineseDefinition": "关键绩效指标"
  },
  {
    "id": "w0723",
    "no": 723,
    "topicId": "management-agile",
    "word": "OKR",
    "phonetic": "/ˌoʊ keɪ ˈɑːr/",
    "englishDefinition": "Objectives and Key Results — a goal-setting framework",
    "chineseDefinition": "目标与关键结果"
  },
  {
    "id": "w0724",
    "no": 724,
    "topicId": "management-agile",
    "word": "standup meeting",
    "phonetic": "/ˈstændʌp ˈmiːtɪŋ/",
    "englishDefinition": "A short daily synchronization meeting",
    "chineseDefinition": "每日站会"
  },
  {
    "id": "w0725",
    "no": 725,
    "topicId": "management-agile",
    "word": "workshop",
    "phonetic": "/ˈwɜːrkʃɒp/",
    "englishDefinition": "A collaborative session for solving specific problems",
    "chineseDefinition": "工作坊"
  },
  {
    "id": "w0726",
    "no": 726,
    "topicId": "management-agile",
    "word": "brainstorm",
    "phonetic": "/ˈbreɪnstɔːrm/",
    "englishDefinition": "A group activity for generating ideas",
    "chineseDefinition": "头脑风暴"
  },
  {
    "id": "w0727",
    "no": 727,
    "topicId": "management-agile",
    "word": "post-mortem",
    "phonetic": "/poʊst ˈmɔːrtəm/",
    "englishDefinition": "An analysis after an incident or project ends",
    "chineseDefinition": "事后分析"
  },
  {
    "id": "w0728",
    "no": 728,
    "topicId": "management-agile",
    "word": "root cause",
    "phonetic": "/ruːt kɔːz/",
    "englishDefinition": "The fundamental reason for a problem",
    "chineseDefinition": "根本原因"
  },
  {
    "id": "w0729",
    "no": 729,
    "topicId": "management-agile",
    "word": "action item",
    "phonetic": "/ˈækʃn ˈaɪtəm/",
    "englishDefinition": "A specific task assigned during a meeting",
    "chineseDefinition": "行动项"
  },
  {
    "id": "w0730",
    "no": 730,
    "topicId": "management-agile",
    "word": "follow-up",
    "phonetic": "/ˈfɒloʊ ʌp/",
    "englishDefinition": "A subsequent action to check on progress",
    "chineseDefinition": "跟进"
  },
  {
    "id": "w0731",
    "no": 731,
    "topicId": "management-agile",
    "word": "sign-off",
    "phonetic": "/saɪn ɒf/",
    "englishDefinition": "Formal approval of a deliverable",
    "chineseDefinition": "签署确认"
  },
  {
    "id": "w0732",
    "no": 732,
    "topicId": "management-agile",
    "word": "go-live",
    "phonetic": "/ɡoʊ laɪv/",
    "englishDefinition": "The moment a system is launched for real users",
    "chineseDefinition": "上线"
  },
  {
    "id": "w0733",
    "no": 733,
    "topicId": "management-agile",
    "word": "cutover",
    "phonetic": "/ˈkʌtoʊvər/",
    "englishDefinition": "Switching from the old system to the new one",
    "chineseDefinition": "切换"
  },
  {
    "id": "w0734",
    "no": 734,
    "topicId": "management-agile",
    "word": "rollout",
    "phonetic": "/ˈroʊlaʊt/",
    "englishDefinition": "The process of deploying changes to users",
    "chineseDefinition": "推出/发布"
  },
  {
    "id": "w0735",
    "no": 735,
    "topicId": "management-agile",
    "word": "handoff",
    "phonetic": "/ˈhændɒf/",
    "englishDefinition": "Transferring responsibility to another person or team",
    "chineseDefinition": "交接"
  },
  {
    "id": "w0736",
    "no": 736,
    "topicId": "management-agile",
    "word": "onboarding",
    "phonetic": "/ˈɒnbɔːrdɪŋ/",
    "englishDefinition": "The process of integrating a new team member",
    "chineseDefinition": "入职引导"
  },
  {
    "id": "w0737",
    "no": 737,
    "topicId": "management-agile",
    "word": "knowledge transfer",
    "phonetic": "/ˈnɒlɪdʒ ˈtrænsfɜːr/",
    "englishDefinition": "Sharing expertise from one person to another",
    "chineseDefinition": "知识传递"
  },
  {
    "id": "w0738",
    "no": 738,
    "topicId": "management-agile",
    "word": "documentation",
    "phonetic": "/ˌdɒkjuˌmenˈteɪʃn/",
    "englishDefinition": "Written information describing how the system works",
    "chineseDefinition": "文档"
  },
  {
    "id": "w0739",
    "no": 739,
    "topicId": "management-agile",
    "word": "wiki",
    "phonetic": "/ˈwɪki/",
    "englishDefinition": "A collaborative knowledge base",
    "chineseDefinition": "维基"
  },
  {
    "id": "w0740",
    "no": 740,
    "topicId": "management-agile",
    "word": "ticket",
    "phonetic": "/ˈtɪkɪt/",
    "englishDefinition": "A tracked work item in a project management system",
    "chineseDefinition": "工单"
  },
  {
    "id": "w0741",
    "no": 741,
    "topicId": "management-agile",
    "word": "issue",
    "phonetic": "/ˈɪʃuː/",
    "englishDefinition": "A bug, task, or feature request in a tracking system",
    "chineseDefinition": "问题/工单"
  },
  {
    "id": "w0742",
    "no": 742,
    "topicId": "management-agile",
    "word": "board",
    "phonetic": "/bɔːrd/",
    "englishDefinition": "A visual display of tasks and their status",
    "chineseDefinition": "看板"
  },
  {
    "id": "w0743",
    "no": 743,
    "topicId": "management-agile",
    "word": "swim lane",
    "phonetic": "/swɪm leɪn/",
    "englishDefinition": "A visual category on a kanban board",
    "chineseDefinition": "泳道"
  },
  {
    "id": "w0744",
    "no": 744,
    "topicId": "management-agile",
    "word": "WIP limit",
    "phonetic": "/wɪp ˈlɪmɪt/",
    "englishDefinition": "Maximum number of tasks in progress at once",
    "chineseDefinition": "在制品限制"
  },
  {
    "id": "w0745",
    "no": 745,
    "topicId": "management-agile",
    "word": "lead time",
    "phonetic": "/liːd taɪm/",
    "englishDefinition": "Time from request to delivery",
    "chineseDefinition": "前置时间"
  },
  {
    "id": "w0746",
    "no": 746,
    "topicId": "management-agile",
    "word": "cycle time",
    "phonetic": "/ˈsaɪkl taɪm/",
    "englishDefinition": "Time from starting work to completion",
    "chineseDefinition": "周期时间"
  },
  {
    "id": "w0747",
    "no": 747,
    "topicId": "management-agile",
    "word": "throughput",
    "phonetic": "/ˈθruːpʊt/",
    "englishDefinition": "The number of items completed per time period",
    "chineseDefinition": "吞吐量"
  },
  {
    "id": "w0748",
    "no": 748,
    "topicId": "management-agile",
    "word": "bottleneck",
    "phonetic": "/ˈbɒtlnek/",
    "englishDefinition": "A point where workflow is constrained",
    "chineseDefinition": "瓶颈"
  },
  {
    "id": "w0749",
    "no": 749,
    "topicId": "management-agile",
    "word": "capacity",
    "phonetic": "/kəˈpæsɪti/",
    "englishDefinition": "The maximum work a team can handle",
    "chineseDefinition": "产能"
  },
  {
    "id": "w0750",
    "no": 750,
    "topicId": "management-agile",
    "word": "allocation",
    "phonetic": "/ˌæləˈkeɪʃn/",
    "englishDefinition": "Distributing resources among tasks",
    "chineseDefinition": "分配"
  },
  {
    "id": "w0751",
    "no": 751,
    "topicId": "ai-machine-learning",
    "word": "artificial intelligence",
    "phonetic": "/ˌɑːrtɪˈfɪʃl ɪnˈtelɪdʒəns/",
    "englishDefinition": "Machines simulating human intelligence",
    "chineseDefinition": "人工智能"
  },
  {
    "id": "w0752",
    "no": 752,
    "topicId": "ai-machine-learning",
    "word": "machine learning",
    "phonetic": "/məˈʃiːn ˈlɜːrnɪŋ/",
    "englishDefinition": "Algorithms that learn from data",
    "chineseDefinition": "机器学习"
  },
  {
    "id": "w0753",
    "no": 753,
    "topicId": "ai-machine-learning",
    "word": "deep learning",
    "phonetic": "/diːp ˈlɜːrnɪŋ/",
    "englishDefinition": "Machine learning using neural networks with many layers",
    "chineseDefinition": "深度学习"
  },
  {
    "id": "w0754",
    "no": 754,
    "topicId": "ai-machine-learning",
    "word": "neural network",
    "phonetic": "/ˈnjʊrəl ˈnetwɜːrk/",
    "englishDefinition": "A computing system inspired by the brain",
    "chineseDefinition": "神经网络"
  },
  {
    "id": "w0755",
    "no": 755,
    "topicId": "ai-machine-learning",
    "word": "model",
    "phonetic": "/ˈmɒdl/",
    "englishDefinition": "A mathematical representation trained on data",
    "chineseDefinition": "模型"
  },
  {
    "id": "w0756",
    "no": 756,
    "topicId": "ai-machine-learning",
    "word": "training",
    "phonetic": "/ˈtreɪnɪŋ/",
    "englishDefinition": "The process of teaching a model using data",
    "chineseDefinition": "训练"
  },
  {
    "id": "w0757",
    "no": 757,
    "topicId": "ai-machine-learning",
    "word": "inference",
    "phonetic": "/ˈɪnfərəns/",
    "englishDefinition": "Using a trained model to make predictions",
    "chineseDefinition": "推理"
  },
  {
    "id": "w0758",
    "no": 758,
    "topicId": "ai-machine-learning",
    "word": "dataset",
    "phonetic": "/ˈdeɪtəset/",
    "englishDefinition": "A collection of data used for training or testing",
    "chineseDefinition": "数据集"
  },
  {
    "id": "w0759",
    "no": 759,
    "topicId": "ai-machine-learning",
    "word": "feature",
    "phonetic": "/ˈfiːtʃər/",
    "englishDefinition": "An input variable used by a model",
    "chineseDefinition": "特征"
  },
  {
    "id": "w0760",
    "no": 760,
    "topicId": "ai-machine-learning",
    "word": "label",
    "phonetic": "/ˈleɪbl/",
    "englishDefinition": "The target value in supervised learning",
    "chineseDefinition": "标签"
  },
  {
    "id": "w0761",
    "no": 761,
    "topicId": "ai-machine-learning",
    "word": "supervised learning",
    "phonetic": "/ˈsuːpərvaɪzd ˈlɜːrnɪŋ/",
    "englishDefinition": "Learning from labeled data",
    "chineseDefinition": "监督学习"
  },
  {
    "id": "w0762",
    "no": 762,
    "topicId": "ai-machine-learning",
    "word": "unsupervised learning",
    "phonetic": "/ˌʌnˈsuːpərvaɪzd ˈlɜːrnɪŋ/",
    "englishDefinition": "Learning from unlabeled data",
    "chineseDefinition": "无监督学习"
  },
  {
    "id": "w0763",
    "no": 763,
    "topicId": "ai-machine-learning",
    "word": "reinforcement learning",
    "phonetic": "/ˌriːɪnˈfɔːrsmənt ˈlɜːrnɪŋ/",
    "englishDefinition": "Learning through trial, error, and rewards",
    "chineseDefinition": "强化学习"
  },
  {
    "id": "w0764",
    "no": 764,
    "topicId": "ai-machine-learning",
    "word": "classification",
    "phonetic": "/ˌklæsɪfɪˈkeɪʃn/",
    "englishDefinition": "Categorizing data into predefined classes",
    "chineseDefinition": "分类"
  },
  {
    "id": "w0765",
    "no": 765,
    "topicId": "ai-machine-learning",
    "word": "regression",
    "phonetic": "/rɪˈɡreʃn/",
    "englishDefinition": "Predicting a continuous value",
    "chineseDefinition": "回归"
  },
  {
    "id": "w0766",
    "no": 766,
    "topicId": "ai-machine-learning",
    "word": "clustering",
    "phonetic": "/ˈklʌstərɪŋ/",
    "englishDefinition": "Grouping similar data points together",
    "chineseDefinition": "聚类"
  },
  {
    "id": "w0767",
    "no": 767,
    "topicId": "ai-machine-learning",
    "word": "overfitting",
    "phonetic": "/ˌoʊvərˈfɪtɪŋ/",
    "englishDefinition": "A model that performs well on training data but poorly on new data",
    "chineseDefinition": "过拟合"
  },
  {
    "id": "w0768",
    "no": 768,
    "topicId": "ai-machine-learning",
    "word": "underfitting",
    "phonetic": "/ˌʌndərˈfɪtɪŋ/",
    "englishDefinition": "A model too simple to capture patterns in data",
    "chineseDefinition": "欠拟合"
  },
  {
    "id": "w0769",
    "no": 769,
    "topicId": "ai-machine-learning",
    "word": "accuracy",
    "phonetic": "/ˈækjərəsi/",
    "englishDefinition": "The proportion of correct predictions",
    "chineseDefinition": "准确率"
  },
  {
    "id": "w0770",
    "no": 770,
    "topicId": "ai-machine-learning",
    "word": "precision",
    "phonetic": "/prɪˈsɪʒn/",
    "englishDefinition": "The proportion of true positives among positive predictions",
    "chineseDefinition": "精确率"
  },
  {
    "id": "w0771",
    "no": 771,
    "topicId": "ai-machine-learning",
    "word": "recall",
    "phonetic": "/rɪˈkɔːl/",
    "englishDefinition": "The proportion of true positives among actual positives",
    "chineseDefinition": "召回率"
  },
  {
    "id": "w0772",
    "no": 772,
    "topicId": "ai-machine-learning",
    "word": "loss function",
    "phonetic": "/lɒs ˈfʌŋkʃn/",
    "englishDefinition": "A function measuring prediction error",
    "chineseDefinition": "损失函数"
  },
  {
    "id": "w0773",
    "no": 773,
    "topicId": "ai-machine-learning",
    "word": "gradient descent",
    "phonetic": "/ˈɡreɪdiənt dɪˈsent/",
    "englishDefinition": "An optimization algorithm minimizing the loss function",
    "chineseDefinition": "梯度下降"
  },
  {
    "id": "w0774",
    "no": 774,
    "topicId": "ai-machine-learning",
    "word": "epoch",
    "phonetic": "/ˈiːpɒk/",
    "englishDefinition": "One complete pass through the training data",
    "chineseDefinition": "训练轮次"
  },
  {
    "id": "w0775",
    "no": 775,
    "topicId": "ai-machine-learning",
    "word": "batch",
    "phonetic": "/bætʃ/",
    "englishDefinition": "A subset of data used in one training iteration",
    "chineseDefinition": "批次"
  },
  {
    "id": "w0776",
    "no": 776,
    "topicId": "ai-machine-learning",
    "word": "learning rate",
    "phonetic": "/ˈlɜːrnɪŋ reɪt/",
    "englishDefinition": "A parameter controlling the step size in gradient descent",
    "chineseDefinition": "学习率"
  },
  {
    "id": "w0777",
    "no": 777,
    "topicId": "ai-machine-learning",
    "word": "hyperparameter",
    "phonetic": "/ˈhaɪpərpəˌræmɪtər/",
    "englishDefinition": "A configuration value set before training begins",
    "chineseDefinition": "超参数"
  },
  {
    "id": "w0778",
    "no": 778,
    "topicId": "ai-machine-learning",
    "word": "embedding",
    "phonetic": "/ɪmˈbedɪŋ/",
    "englishDefinition": "A dense vector representation of data",
    "chineseDefinition": "嵌入向量"
  },
  {
    "id": "w0779",
    "no": 779,
    "topicId": "ai-machine-learning",
    "word": "transformer",
    "phonetic": "/trænsˈfɔːrmər/",
    "englishDefinition": "A neural network architecture using self-attention",
    "chineseDefinition": "Transformer架构"
  },
  {
    "id": "w0780",
    "no": 780,
    "topicId": "ai-machine-learning",
    "word": "attention",
    "phonetic": "/əˈtenʃn/",
    "englishDefinition": "A mechanism allowing models to focus on relevant parts of input",
    "chineseDefinition": "注意力机制"
  },
  {
    "id": "w0781",
    "no": 781,
    "topicId": "ai-machine-learning",
    "word": "token",
    "phonetic": "/ˈtoʊkən/",
    "englishDefinition": "A unit of text processed by a language model",
    "chineseDefinition": "词元/标记"
  },
  {
    "id": "w0782",
    "no": 782,
    "topicId": "ai-machine-learning",
    "word": "fine-tuning",
    "phonetic": "/faɪn ˈtjuːnɪŋ/",
    "englishDefinition": "Adjusting a pre-trained model for a specific task",
    "chineseDefinition": "微调"
  },
  {
    "id": "w0783",
    "no": 783,
    "topicId": "ai-machine-learning",
    "word": "pre-training",
    "phonetic": "/priː ˈtreɪnɪŋ/",
    "englishDefinition": "Initial training of a model on a large dataset",
    "chineseDefinition": "预训练"
  },
  {
    "id": "w0784",
    "no": 784,
    "topicId": "ai-machine-learning",
    "word": "transfer learning",
    "phonetic": "/ˈtrænsfɜːr ˈlɜːrnɪŋ/",
    "englishDefinition": "Applying knowledge from one task to another",
    "chineseDefinition": "迁移学习"
  },
  {
    "id": "w0785",
    "no": 785,
    "topicId": "ai-machine-learning",
    "word": "NLP",
    "phonetic": "/ˌen el ˈpiː/",
    "englishDefinition": "Natural Language Processing",
    "chineseDefinition": "自然语言处理"
  },
  {
    "id": "w0786",
    "no": 786,
    "topicId": "ai-machine-learning",
    "word": "computer vision",
    "phonetic": "/kəmˈpjuːtər ˈvɪʒn/",
    "englishDefinition": "Teaching computers to interpret visual data",
    "chineseDefinition": "计算机视觉"
  },
  {
    "id": "w0787",
    "no": 787,
    "topicId": "ai-machine-learning",
    "word": "generative AI",
    "phonetic": "/ˈdʒenərətɪv eɪ ˈaɪ/",
    "englishDefinition": "AI that creates new content",
    "chineseDefinition": "生成式AI"
  },
  {
    "id": "w0788",
    "no": 788,
    "topicId": "ai-machine-learning",
    "word": "LLM",
    "phonetic": "/ˌel el ˈem/",
    "englishDefinition": "Large Language Model",
    "chineseDefinition": "大语言模型"
  },
  {
    "id": "w0789",
    "no": 789,
    "topicId": "ai-machine-learning",
    "word": "prompt",
    "phonetic": "/prɒmpt/",
    "englishDefinition": "Input text that guides a language model's output",
    "chineseDefinition": "提示词"
  },
  {
    "id": "w0790",
    "no": 790,
    "topicId": "ai-machine-learning",
    "word": "prompt engineering",
    "phonetic": "/prɒmpt ˌendʒɪˈnɪrɪŋ/",
    "englishDefinition": "Crafting effective inputs for AI models",
    "chineseDefinition": "提示词工程"
  },
  {
    "id": "w0791",
    "no": 791,
    "topicId": "ai-machine-learning",
    "word": "RAG",
    "phonetic": "/ræɡ/",
    "englishDefinition": "Retrieval-Augmented Generation",
    "chineseDefinition": "检索增强生成"
  },
  {
    "id": "w0792",
    "no": 792,
    "topicId": "ai-machine-learning",
    "word": "vector database",
    "phonetic": "/ˈvektər ˈdeɪtəbeɪs/",
    "englishDefinition": "A database optimized for storing and querying embeddings",
    "chineseDefinition": "向量数据库"
  },
  {
    "id": "w0793",
    "no": 793,
    "topicId": "ai-machine-learning",
    "word": "hallucination",
    "phonetic": "/həˌluːsɪˈneɪʃn/",
    "englishDefinition": "An AI generating incorrect or fabricated information",
    "chineseDefinition": "AI幻觉"
  },
  {
    "id": "w0794",
    "no": 794,
    "topicId": "ai-machine-learning",
    "word": "bias",
    "phonetic": "/ˈbaɪəs/",
    "englishDefinition": "Systematic errors in model predictions",
    "chineseDefinition": "偏差/偏见"
  },
  {
    "id": "w0795",
    "no": 795,
    "topicId": "ai-machine-learning",
    "word": "fairness",
    "phonetic": "/ˈfeərnɪs/",
    "englishDefinition": "Ensuring AI treats all groups equitably",
    "chineseDefinition": "公平性"
  },
  {
    "id": "w0796",
    "no": 796,
    "topicId": "ai-machine-learning",
    "word": "explainability",
    "phonetic": "/ɪkˌspleɪnəˈbɪlɪti/",
    "englishDefinition": "The ability to understand why a model made a decision",
    "chineseDefinition": "可解释性"
  },
  {
    "id": "w0797",
    "no": 797,
    "topicId": "ai-machine-learning",
    "word": "pipeline",
    "phonetic": "/ˈpaɪplaɪn/",
    "englishDefinition": "A sequence of data processing steps in ML",
    "chineseDefinition": "ML流水线"
  },
  {
    "id": "w0798",
    "no": 798,
    "topicId": "ai-machine-learning",
    "word": "feature engineering",
    "phonetic": "/ˈfiːtʃər ˌendʒɪˈnɪrɪŋ/",
    "englishDefinition": "Creating useful input variables for a model",
    "chineseDefinition": "特征工程"
  },
  {
    "id": "w0799",
    "no": 799,
    "topicId": "ai-machine-learning",
    "word": "data augmentation",
    "phonetic": "/ˈdeɪtə ɔːɡmenˈteɪʃn/",
    "englishDefinition": "Increasing training data through transformations",
    "chineseDefinition": "数据增强"
  },
  {
    "id": "w0800",
    "no": 800,
    "topicId": "ai-machine-learning",
    "word": "cross-validation",
    "phonetic": "/krɒs ˌvælɪˈdeɪʃn/",
    "englishDefinition": "Evaluating a model using different subsets of data",
    "chineseDefinition": "交叉验证"
  },
  {
    "id": "w0801",
    "no": 801,
    "topicId": "ai-machine-learning",
    "word": "confusion matrix",
    "phonetic": "/kənˈfjuːʒn ˈmeɪtrɪks/",
    "englishDefinition": "A table showing prediction results vs actual results",
    "chineseDefinition": "混淆矩阵"
  },
  {
    "id": "w0802",
    "no": 802,
    "topicId": "ai-machine-learning",
    "word": "F1 score",
    "phonetic": "/ef wʌn skɔːr/",
    "englishDefinition": "A metric balancing precision and recall",
    "chineseDefinition": "F1分数"
  },
  {
    "id": "w0803",
    "no": 803,
    "topicId": "ai-machine-learning",
    "word": "ROC curve",
    "phonetic": "/ɑːr oʊ ˈsiː kɜːrv/",
    "englishDefinition": "A graph showing model performance at various thresholds",
    "chineseDefinition": "ROC曲线"
  },
  {
    "id": "w0804",
    "no": 804,
    "topicId": "ai-machine-learning",
    "word": "GPU",
    "phonetic": "/ˌdʒiː piː ˈjuː/",
    "englishDefinition": "Graphics Processing Unit used for parallel computation",
    "chineseDefinition": "图形处理单元"
  },
  {
    "id": "w0805",
    "no": 805,
    "topicId": "ai-machine-learning",
    "word": "TPU",
    "phonetic": "/ˌtiː piː ˈjuː/",
    "englishDefinition": "Tensor Processing Unit designed for ML workloads",
    "chineseDefinition": "张量处理单元"
  },
  {
    "id": "w0806",
    "no": 806,
    "topicId": "ai-machine-learning",
    "word": "model serving",
    "phonetic": "/ˈmɒdl ˈsɜːrvɪŋ/",
    "englishDefinition": "Deploying a trained model for real-time predictions",
    "chineseDefinition": "模型服务"
  },
  {
    "id": "w0807",
    "no": 807,
    "topicId": "ai-machine-learning",
    "word": "MLOps",
    "phonetic": "/ˌem el ˈɒps/",
    "englishDefinition": "Practices for deploying and maintaining ML models",
    "chineseDefinition": "机器学习运维"
  },
  {
    "id": "w0808",
    "no": 808,
    "topicId": "ai-machine-learning",
    "word": "data labeling",
    "phonetic": "/ˈdeɪtə ˈleɪblɪŋ/",
    "englishDefinition": "Annotating data with labels for supervised learning",
    "chineseDefinition": "数据标注"
  },
  {
    "id": "w0809",
    "no": 809,
    "topicId": "ai-machine-learning",
    "word": "tokenizer",
    "phonetic": "/ˈtoʊkənaɪzər/",
    "englishDefinition": "A tool that splits text into tokens",
    "chineseDefinition": "分词器"
  },
  {
    "id": "w0810",
    "no": 810,
    "topicId": "ai-machine-learning",
    "word": "agent",
    "phonetic": "/ˈeɪdʒənt/",
    "englishDefinition": "An AI system that can autonomously take actions",
    "chineseDefinition": "AI代理"
  },
  {
    "id": "w0811",
    "no": 811,
    "topicId": "ui-ux-design",
    "word": "user interface",
    "phonetic": "/ˈjuːzər ˈɪntərfeɪs/",
    "englishDefinition": "The visual layer users interact with",
    "chineseDefinition": "用户界面"
  },
  {
    "id": "w0812",
    "no": 812,
    "topicId": "ui-ux-design",
    "word": "user experience",
    "phonetic": "/ˈjuːzər ɪkˈspɪriəns/",
    "englishDefinition": "The overall feel and usability of a product",
    "chineseDefinition": "用户体验"
  },
  {
    "id": "w0813",
    "no": 813,
    "topicId": "ui-ux-design",
    "word": "usability",
    "phonetic": "/ˌjuːzəˈbɪlɪti/",
    "englishDefinition": "How easy and efficient a product is to use",
    "chineseDefinition": "可用性"
  },
  {
    "id": "w0814",
    "no": 814,
    "topicId": "ui-ux-design",
    "word": "affordance",
    "phonetic": "/əˈfɔːrdəns/",
    "englishDefinition": "A visual cue suggesting how an element can be used",
    "chineseDefinition": "功能可见性"
  },
  {
    "id": "w0815",
    "no": 815,
    "topicId": "ui-ux-design",
    "word": "breadcrumb",
    "phonetic": "/ˈbredkrʌm/",
    "englishDefinition": "A navigation aid showing the user's location",
    "chineseDefinition": "面包屑导航"
  },
  {
    "id": "w0816",
    "no": 816,
    "topicId": "ui-ux-design",
    "word": "tooltip",
    "phonetic": "/ˈtuːltɪp/",
    "englishDefinition": "A small popup providing additional information",
    "chineseDefinition": "工具提示"
  },
  {
    "id": "w0817",
    "no": 817,
    "topicId": "ui-ux-design",
    "word": "modal",
    "phonetic": "/ˈmoʊdl/",
    "englishDefinition": "A dialog box that requires user interaction before continuing",
    "chineseDefinition": "模态框"
  },
  {
    "id": "w0818",
    "no": 818,
    "topicId": "ui-ux-design",
    "word": "dropdown",
    "phonetic": "/ˈdrɒpdaʊn/",
    "englishDefinition": "A list of options that appears when clicked",
    "chineseDefinition": "下拉菜单"
  },
  {
    "id": "w0819",
    "no": 819,
    "topicId": "ui-ux-design",
    "word": "carousel",
    "phonetic": "/ˌkærəˈsel/",
    "englishDefinition": "A rotating display of content items",
    "chineseDefinition": "轮播图"
  },
  {
    "id": "w0820",
    "no": 820,
    "topicId": "ui-ux-design",
    "word": "accordion",
    "phonetic": "/əˈkɔːrdiən/",
    "englishDefinition": "A vertically stacked list of expandable items",
    "chineseDefinition": "手风琴组件"
  },
  {
    "id": "w0821",
    "no": 821,
    "topicId": "ui-ux-design",
    "word": "tab",
    "phonetic": "/tæb/",
    "englishDefinition": "A navigation element for switching between views",
    "chineseDefinition": "标签页"
  },
  {
    "id": "w0822",
    "no": 822,
    "topicId": "ui-ux-design",
    "word": "sidebar",
    "phonetic": "/ˈsaɪdbɑːr/",
    "englishDefinition": "A vertical panel beside the main content",
    "chineseDefinition": "侧边栏"
  },
  {
    "id": "w0823",
    "no": 823,
    "topicId": "ui-ux-design",
    "word": "header",
    "phonetic": "/ˈhedər/",
    "englishDefinition": "The top section of a page or component",
    "chineseDefinition": "页头"
  },
  {
    "id": "w0824",
    "no": 824,
    "topicId": "ui-ux-design",
    "word": "footer",
    "phonetic": "/ˈfʊtər/",
    "englishDefinition": "The bottom section of a page or component",
    "chineseDefinition": "页脚"
  },
  {
    "id": "w0825",
    "no": 825,
    "topicId": "ui-ux-design",
    "word": "pagination",
    "phonetic": "/ˌpædʒɪˈneɪʃn/",
    "englishDefinition": "Dividing content into pages for navigation",
    "chineseDefinition": "分页"
  },
  {
    "id": "w0826",
    "no": 826,
    "topicId": "ui-ux-design",
    "word": "infinite scroll",
    "phonetic": "/ˈɪnfɪnɪt skroʊl/",
    "englishDefinition": "Loading more content as the user scrolls down",
    "chineseDefinition": "无限滚动"
  },
  {
    "id": "w0827",
    "no": 827,
    "topicId": "ui-ux-design",
    "word": "skeleton screen",
    "phonetic": "/ˈskelɪtn skriːn/",
    "englishDefinition": "A placeholder UI shown while content loads",
    "chineseDefinition": "骨架屏"
  },
  {
    "id": "w0828",
    "no": 828,
    "topicId": "ui-ux-design",
    "word": "spinner",
    "phonetic": "/ˈspɪnər/",
    "englishDefinition": "A loading indicator showing a process is running",
    "chineseDefinition": "加载动画"
  },
  {
    "id": "w0829",
    "no": 829,
    "topicId": "ui-ux-design",
    "word": "toast",
    "phonetic": "/toʊst/",
    "englishDefinition": "A brief notification that appears temporarily",
    "chineseDefinition": "轻提示"
  },
  {
    "id": "w0830",
    "no": 830,
    "topicId": "ui-ux-design",
    "word": "snackbar",
    "phonetic": "/ˈsnækbɑːr/",
    "englishDefinition": "A short message displayed at the bottom of the screen",
    "chineseDefinition": "底部提示栏"
  },
  {
    "id": "w0831",
    "no": 831,
    "topicId": "ui-ux-design",
    "word": "form",
    "phonetic": "/fɔːrm/",
    "englishDefinition": "An interface for user data input",
    "chineseDefinition": "表单"
  },
  {
    "id": "w0832",
    "no": 832,
    "topicId": "ui-ux-design",
    "word": "input field",
    "phonetic": "/ˈɪnpʊt fiːld/",
    "englishDefinition": "A UI element for entering text or data",
    "chineseDefinition": "输入框"
  },
  {
    "id": "w0833",
    "no": 833,
    "topicId": "ui-ux-design",
    "word": "checkbox",
    "phonetic": "/ˈtʃekbɒks/",
    "englishDefinition": "A toggleable selection control",
    "chineseDefinition": "复选框"
  },
  {
    "id": "w0834",
    "no": 834,
    "topicId": "ui-ux-design",
    "word": "radio button",
    "phonetic": "/ˈreɪdioʊ ˈbʌtn/",
    "englishDefinition": "A selection control for choosing one option",
    "chineseDefinition": "单选按钮"
  },
  {
    "id": "w0835",
    "no": 835,
    "topicId": "ui-ux-design",
    "word": "toggle",
    "phonetic": "/ˈtɒɡl/",
    "englishDefinition": "A switch between two states",
    "chineseDefinition": "开关"
  },
  {
    "id": "w0836",
    "no": 836,
    "topicId": "ui-ux-design",
    "word": "avatar",
    "phonetic": "/ˈævətɑːr/",
    "englishDefinition": "A visual representation of a user",
    "chineseDefinition": "头像"
  },
  {
    "id": "w0837",
    "no": 837,
    "topicId": "ui-ux-design",
    "word": "badge",
    "phonetic": "/bædʒ/",
    "englishDefinition": "A small label indicating status or count",
    "chineseDefinition": "徽章"
  },
  {
    "id": "w0838",
    "no": 838,
    "topicId": "ui-ux-design",
    "word": "chip",
    "phonetic": "/tʃɪp/",
    "englishDefinition": "A compact element representing an input or attribute",
    "chineseDefinition": "标签芯片"
  },
  {
    "id": "w0839",
    "no": 839,
    "topicId": "ui-ux-design",
    "word": "dark mode",
    "phonetic": "/dɑːrk moʊd/",
    "englishDefinition": "A UI color scheme with dark backgrounds",
    "chineseDefinition": "深色模式"
  },
  {
    "id": "w0840",
    "no": 840,
    "topicId": "ui-ux-design",
    "word": "theme",
    "phonetic": "/θiːm/",
    "englishDefinition": "A set of visual styles applied to an interface",
    "chineseDefinition": "主题"
  },
  {
    "id": "w0841",
    "no": 841,
    "topicId": "ui-ux-design",
    "word": "design system",
    "phonetic": "/dɪˈzaɪn ˈsɪstəm/",
    "englishDefinition": "A collection of reusable components and guidelines",
    "chineseDefinition": "设计系统"
  },
  {
    "id": "w0842",
    "no": 842,
    "topicId": "ui-ux-design",
    "word": "style guide",
    "phonetic": "/staɪl ɡaɪd/",
    "englishDefinition": "A document defining visual standards",
    "chineseDefinition": "样式指南"
  },
  {
    "id": "w0843",
    "no": 843,
    "topicId": "ui-ux-design",
    "word": "whitespace",
    "phonetic": "/ˈwaɪtspeɪs/",
    "englishDefinition": "Empty space in a design for readability",
    "chineseDefinition": "留白"
  },
  {
    "id": "w0844",
    "no": 844,
    "topicId": "ui-ux-design",
    "word": "typography",
    "phonetic": "/taɪˈpɒɡrəfi/",
    "englishDefinition": "The art of arranging type for readability and appeal",
    "chineseDefinition": "排版"
  },
  {
    "id": "w0845",
    "no": 845,
    "topicId": "ui-ux-design",
    "word": "color palette",
    "phonetic": "/ˈkʌlər ˈpælɪt/",
    "englishDefinition": "A set of colors used in a design",
    "chineseDefinition": "调色板"
  },
  {
    "id": "w0846",
    "no": 846,
    "topicId": "ui-ux-design",
    "word": "icon",
    "phonetic": "/ˈaɪkɒn/",
    "englishDefinition": "A small graphic representing a function or concept",
    "chineseDefinition": "图标"
  },
  {
    "id": "w0847",
    "no": 847,
    "topicId": "ui-ux-design",
    "word": "hover",
    "phonetic": "/ˈhʌvər/",
    "englishDefinition": "A state when the cursor is over an element",
    "chineseDefinition": "悬停"
  },
  {
    "id": "w0848",
    "no": 848,
    "topicId": "ui-ux-design",
    "word": "focus",
    "phonetic": "/ˈfoʊkəs/",
    "englishDefinition": "A state indicating which element is selected for input",
    "chineseDefinition": "焦点"
  },
  {
    "id": "w0849",
    "no": 849,
    "topicId": "ui-ux-design",
    "word": "disabled",
    "phonetic": "/dɪsˈeɪbld/",
    "englishDefinition": "A state where an element cannot be interacted with",
    "chineseDefinition": "禁用状态"
  },
  {
    "id": "w0850",
    "no": 850,
    "topicId": "ui-ux-design",
    "word": "placeholder",
    "phonetic": "/ˈpleɪshoʊldər/",
    "englishDefinition": "Temporary text shown in an empty input field",
    "chineseDefinition": "占位符"
  },
  {
    "id": "w0851",
    "no": 851,
    "topicId": "communication-workplace",
    "word": "align",
    "phonetic": "/əˈlaɪn/",
    "englishDefinition": "To bring into agreement or coordination",
    "chineseDefinition": "对齐/统一"
  },
  {
    "id": "w0852",
    "no": 852,
    "topicId": "communication-workplace",
    "word": "sync",
    "phonetic": "/sɪŋk/",
    "englishDefinition": "To synchronize information or schedules",
    "chineseDefinition": "同步"
  },
  {
    "id": "w0853",
    "no": 853,
    "topicId": "communication-workplace",
    "word": "leverage",
    "phonetic": "/ˈlevərɪdʒ/",
    "englishDefinition": "To use something to maximum advantage",
    "chineseDefinition": "利用/借力"
  },
  {
    "id": "w0854",
    "no": 854,
    "topicId": "communication-workplace",
    "word": "iterate",
    "phonetic": "/ˈɪtəreɪt/",
    "englishDefinition": "To repeat and refine a process",
    "chineseDefinition": "迭代/反复"
  },
  {
    "id": "w0855",
    "no": 855,
    "topicId": "communication-workplace",
    "word": "escalate",
    "phonetic": "/ˈeskəleɪt/",
    "englishDefinition": "To raise an issue to a higher level",
    "chineseDefinition": "升级"
  },
  {
    "id": "w0856",
    "no": 856,
    "topicId": "communication-workplace",
    "word": "prioritize",
    "phonetic": "/praɪˈɒrɪtaɪz/",
    "englishDefinition": "To arrange tasks by importance",
    "chineseDefinition": "优先排序"
  },
  {
    "id": "w0857",
    "no": 857,
    "topicId": "communication-workplace",
    "word": "delegate",
    "phonetic": "/ˈdelɪɡeɪt/",
    "englishDefinition": "To assign tasks to others",
    "chineseDefinition": "委派"
  },
  {
    "id": "w0858",
    "no": 858,
    "topicId": "communication-workplace",
    "word": "collaborate",
    "phonetic": "/kəˈlæbəreɪt/",
    "englishDefinition": "To work together toward a common goal",
    "chineseDefinition": "协作"
  },
  {
    "id": "w0859",
    "no": 859,
    "topicId": "communication-workplace",
    "word": "facilitate",
    "phonetic": "/fəˈsɪlɪteɪt/",
    "englishDefinition": "To make a process easier or more productive",
    "chineseDefinition": "促进/协助"
  },
  {
    "id": "w0860",
    "no": 860,
    "topicId": "communication-workplace",
    "word": "implement",
    "phonetic": "/ˈɪmplɪment/",
    "englishDefinition": "To put a plan or decision into action",
    "chineseDefinition": "实施/实现"
  },
  {
    "id": "w0861",
    "no": 861,
    "topicId": "communication-workplace",
    "word": "optimize",
    "phonetic": "/ˈɒptɪmaɪz/",
    "englishDefinition": "To make something as effective as possible",
    "chineseDefinition": "优化"
  },
  {
    "id": "w0862",
    "no": 862,
    "topicId": "communication-workplace",
    "word": "streamline",
    "phonetic": "/ˈstriːmlaɪn/",
    "englishDefinition": "To simplify or improve a process",
    "chineseDefinition": "精简/简化"
  },
  {
    "id": "w0863",
    "no": 863,
    "topicId": "communication-workplace",
    "word": "benchmark",
    "phonetic": "/ˈbentʃmɑːrk/",
    "englishDefinition": "A standard for measuring performance",
    "chineseDefinition": "基准/标杆"
  },
  {
    "id": "w0864",
    "no": 864,
    "topicId": "communication-workplace",
    "word": "bandwidth",
    "phonetic": "/ˈbændwɪdθ/",
    "englishDefinition": "Available capacity to take on more work (figurative)",
    "chineseDefinition": "带宽（喻：精力）"
  },
  {
    "id": "w0865",
    "no": 865,
    "topicId": "communication-workplace",
    "word": "bottleneck",
    "phonetic": "/ˈbɒtlnek/",
    "englishDefinition": "A constraint that limits throughput",
    "chineseDefinition": "瓶颈"
  },
  {
    "id": "w0866",
    "no": 866,
    "topicId": "communication-workplace",
    "word": "trade-off",
    "phonetic": "/ˈtreɪdɒf/",
    "englishDefinition": "A compromise between two desirable things",
    "chineseDefinition": "权衡取舍"
  },
  {
    "id": "w0867",
    "no": 867,
    "topicId": "communication-workplace",
    "word": "feedback",
    "phonetic": "/ˈfiːdbæk/",
    "englishDefinition": "Information about performance used for improvement",
    "chineseDefinition": "反馈"
  },
  {
    "id": "w0868",
    "no": 868,
    "topicId": "communication-workplace",
    "word": "review",
    "phonetic": "/rɪˈvjuː/",
    "englishDefinition": "To examine and assess something",
    "chineseDefinition": "审查/评审"
  },
  {
    "id": "w0869",
    "no": 869,
    "topicId": "communication-workplace",
    "word": "approval",
    "phonetic": "/əˈpruːvl/",
    "englishDefinition": "Official permission or agreement",
    "chineseDefinition": "批准"
  },
  {
    "id": "w0870",
    "no": 870,
    "topicId": "communication-workplace",
    "word": "proposal",
    "phonetic": "/prəˈpoʊzl/",
    "englishDefinition": "A formal suggestion or plan",
    "chineseDefinition": "提案"
  },
  {
    "id": "w0871",
    "no": 871,
    "topicId": "communication-workplace",
    "word": "briefing",
    "phonetic": "/ˈbriːfɪŋ/",
    "englishDefinition": "A meeting for sharing essential information",
    "chineseDefinition": "简报"
  },
  {
    "id": "w0872",
    "no": 872,
    "topicId": "communication-workplace",
    "word": "presentation",
    "phonetic": "/ˌprezənˈteɪʃn/",
    "englishDefinition": "A formal talk to share information with an audience",
    "chineseDefinition": "演示/报告"
  },
  {
    "id": "w0873",
    "no": 873,
    "topicId": "communication-workplace",
    "word": "demo",
    "phonetic": "/ˈdemoʊ/",
    "englishDefinition": "A demonstration of how something works",
    "chineseDefinition": "演示"
  },
  {
    "id": "w0874",
    "no": 874,
    "topicId": "communication-workplace",
    "word": "POC",
    "phonetic": "/ˌpiː oʊ ˈsiː/",
    "englishDefinition": "Proof of Concept — a small test to validate an idea",
    "chineseDefinition": "概念验证"
  },
  {
    "id": "w0875",
    "no": 875,
    "topicId": "communication-workplace",
    "word": "feasibility",
    "phonetic": "/ˌfiːzəˈbɪlɪti/",
    "englishDefinition": "Whether something is practical and achievable",
    "chineseDefinition": "可行性"
  },
  {
    "id": "w0876",
    "no": 876,
    "topicId": "communication-workplace",
    "word": "ETA",
    "phonetic": "/ˌiː tiː ˈeɪ/",
    "englishDefinition": "Estimated Time of Arrival / completion",
    "chineseDefinition": "预计完成时间"
  },
  {
    "id": "w0877",
    "no": 877,
    "topicId": "communication-workplace",
    "word": "ASAP",
    "phonetic": "/ˌeɪ es eɪ ˈpiː/",
    "englishDefinition": "As Soon As Possible",
    "chineseDefinition": "尽快"
  },
  {
    "id": "w0878",
    "no": 878,
    "topicId": "communication-workplace",
    "word": "FYI",
    "phonetic": "/ˌef waɪ ˈaɪ/",
    "englishDefinition": "For Your Information",
    "chineseDefinition": "供参考"
  },
  {
    "id": "w0879",
    "no": 879,
    "topicId": "communication-workplace",
    "word": "TBD",
    "phonetic": "/ˌtiː biː ˈdiː/",
    "englishDefinition": "To Be Determined",
    "chineseDefinition": "待定"
  },
  {
    "id": "w0880",
    "no": 880,
    "topicId": "communication-workplace",
    "word": "WIP",
    "phonetic": "/wɪp/",
    "englishDefinition": "Work In Progress",
    "chineseDefinition": "进行中"
  },
  {
    "id": "w0881",
    "no": 881,
    "topicId": "communication-workplace",
    "word": "EOD",
    "phonetic": "/ˌiː oʊ ˈdiː/",
    "englishDefinition": "End Of Day",
    "chineseDefinition": "今天结束前"
  },
  {
    "id": "w0882",
    "no": 882,
    "topicId": "communication-workplace",
    "word": "heads-up",
    "phonetic": "/ˈhedzʌp/",
    "englishDefinition": "An advance warning or notification",
    "chineseDefinition": "提前通知"
  },
  {
    "id": "w0883",
    "no": 883,
    "topicId": "communication-workplace",
    "word": "touchpoint",
    "phonetic": "/ˈtʌtʃpɔɪnt/",
    "englishDefinition": "A point of interaction or communication",
    "chineseDefinition": "接触点"
  },
  {
    "id": "w0884",
    "no": 884,
    "topicId": "communication-workplace",
    "word": "takeaway",
    "phonetic": "/ˈteɪkəweɪ/",
    "englishDefinition": "The main point or conclusion from a discussion",
    "chineseDefinition": "要点/收获"
  },
  {
    "id": "w0885",
    "no": 885,
    "topicId": "communication-workplace",
    "word": "action item",
    "phonetic": "/ˈækʃn ˈaɪtəm/",
    "englishDefinition": "A task resulting from a meeting",
    "chineseDefinition": "行动项"
  },
  {
    "id": "w0886",
    "no": 886,
    "topicId": "communication-workplace",
    "word": "cross-functional",
    "phonetic": "/krɒs ˈfʌŋkʃənl/",
    "englishDefinition": "Involving people from different departments",
    "chineseDefinition": "跨职能的"
  },
  {
    "id": "w0887",
    "no": 887,
    "topicId": "communication-workplace",
    "word": "ramp up",
    "phonetic": "/ræmp ʌp/",
    "englishDefinition": "To gradually increase activity or production",
    "chineseDefinition": "逐步增加"
  },
  {
    "id": "w0888",
    "no": 888,
    "topicId": "communication-workplace",
    "word": "wind down",
    "phonetic": "/waɪnd daʊn/",
    "englishDefinition": "To gradually reduce activity",
    "chineseDefinition": "逐步减少"
  },
  {
    "id": "w0889",
    "no": 889,
    "topicId": "communication-workplace",
    "word": "pain point",
    "phonetic": "/peɪn pɔɪnt/",
    "englishDefinition": "A specific problem that causes frustration",
    "chineseDefinition": "痛点"
  },
  {
    "id": "w0890",
    "no": 890,
    "topicId": "communication-workplace",
    "word": "use case",
    "phonetic": "/juːs keɪs/",
    "englishDefinition": "A specific scenario describing how a system is used",
    "chineseDefinition": "用例/使用场景"
  },
  {
    "id": "w0891",
    "no": 891,
    "topicId": "communication-workplace",
    "word": "buy-in",
    "phonetic": "/ˈbaɪɪn/",
    "englishDefinition": "Agreement and support from stakeholders",
    "chineseDefinition": "认同/支持"
  },
  {
    "id": "w0892",
    "no": 892,
    "topicId": "communication-workplace",
    "word": "sign off",
    "phonetic": "/saɪn ɒf/",
    "englishDefinition": "To give formal approval",
    "chineseDefinition": "批准/签字确认"
  },
  {
    "id": "w0893",
    "no": 893,
    "topicId": "communication-workplace",
    "word": "due diligence",
    "phonetic": "/djuː ˈdɪlɪdʒəns/",
    "englishDefinition": "Thorough research before making a decision",
    "chineseDefinition": "尽职调查"
  },
  {
    "id": "w0894",
    "no": 894,
    "topicId": "communication-workplace",
    "word": "deep dive",
    "phonetic": "/diːp daɪv/",
    "englishDefinition": "A thorough examination of a topic",
    "chineseDefinition": "深入分析"
  },
  {
    "id": "w0895",
    "no": 895,
    "topicId": "communication-workplace",
    "word": "drill down",
    "phonetic": "/drɪl daʊn/",
    "englishDefinition": "To examine details of a topic or data",
    "chineseDefinition": "下钻/深入"
  },
  {
    "id": "w0896",
    "no": 896,
    "topicId": "communication-workplace",
    "word": "high-level",
    "phonetic": "/haɪ ˈlevl/",
    "englishDefinition": "An overview without details",
    "chineseDefinition": "概括性的"
  },
  {
    "id": "w0897",
    "no": 897,
    "topicId": "communication-workplace",
    "word": "granular",
    "phonetic": "/ˈɡrænjʊlər/",
    "englishDefinition": "Very detailed and specific",
    "chineseDefinition": "细粒度的"
  },
  {
    "id": "w0898",
    "no": 898,
    "topicId": "communication-workplace",
    "word": "scalable",
    "phonetic": "/ˈskeɪləbl/",
    "englishDefinition": "Able to grow without losing performance",
    "chineseDefinition": "可扩展的"
  },
  {
    "id": "w0899",
    "no": 899,
    "topicId": "communication-workplace",
    "word": "robust",
    "phonetic": "/roʊˈbʌst/",
    "englishDefinition": "Strong and able to handle various conditions",
    "chineseDefinition": "健壮的"
  },
  {
    "id": "w0900",
    "no": 900,
    "topicId": "communication-workplace",
    "word": "resilient",
    "phonetic": "/rɪˈzɪliənt/",
    "englishDefinition": "Able to recover quickly from difficulties",
    "chineseDefinition": "有弹性的"
  },
  {
    "id": "w0901",
    "no": 901,
    "topicId": "communication-workplace",
    "word": "maintainable",
    "phonetic": "/meɪnˈteɪnəbl/",
    "englishDefinition": "Easy to update and fix over time",
    "chineseDefinition": "可维护的"
  },
  {
    "id": "w0902",
    "no": 902,
    "topicId": "communication-workplace",
    "word": "extensible",
    "phonetic": "/ɪkˈstensɪbl/",
    "englishDefinition": "Easy to add new features or capabilities",
    "chineseDefinition": "可扩展的"
  },
  {
    "id": "w0903",
    "no": 903,
    "topicId": "communication-workplace",
    "word": "backward compatible",
    "phonetic": "/ˈbækwərd kəmˈpætɪbl/",
    "englishDefinition": "Working with previous versions",
    "chineseDefinition": "向后兼容的"
  },
  {
    "id": "w0904",
    "no": 904,
    "topicId": "communication-workplace",
    "word": "breaking change",
    "phonetic": "/ˈbreɪkɪŋ tʃeɪndʒ/",
    "englishDefinition": "A change that causes existing code to fail",
    "chineseDefinition": "破坏性变更"
  },
  {
    "id": "w0905",
    "no": 905,
    "topicId": "communication-workplace",
    "word": "workaround",
    "phonetic": "/ˈwɜːrkəraʊnd/",
    "englishDefinition": "A temporary solution to a problem",
    "chineseDefinition": "变通方案"
  },
  {
    "id": "w0906",
    "no": 906,
    "topicId": "communication-workplace",
    "word": "blocker",
    "phonetic": "/ˈblɒkər/",
    "englishDefinition": "Something preventing progress",
    "chineseDefinition": "阻碍因素"
  },
  {
    "id": "w0907",
    "no": 907,
    "topicId": "communication-workplace",
    "word": "showstopper",
    "phonetic": "/ˈʃoʊstɒpər/",
    "englishDefinition": "A critical issue that prevents release",
    "chineseDefinition": "严重阻碍问题"
  },
  {
    "id": "w0908",
    "no": 908,
    "topicId": "communication-workplace",
    "word": "edge case",
    "phonetic": "/edʒ keɪs/",
    "englishDefinition": "An unusual scenario at the boundary of normal operation",
    "chineseDefinition": "边界情况"
  },
  {
    "id": "w0909",
    "no": 909,
    "topicId": "communication-workplace",
    "word": "regression",
    "phonetic": "/rɪˈɡreʃn/",
    "englishDefinition": "A previously working feature that is now broken",
    "chineseDefinition": "回归问题"
  },
  {
    "id": "w0910",
    "no": 910,
    "topicId": "communication-workplace",
    "word": "hotfix",
    "phonetic": "/ˈhɒtfɪks/",
    "englishDefinition": "An urgent fix applied to production",
    "chineseDefinition": "紧急修复"
  },
  {
    "id": "w0911",
    "no": 911,
    "topicId": "communication-workplace",
    "word": "technical spike",
    "phonetic": "/ˈteknɪkl spaɪk/",
    "englishDefinition": "A time-boxed investigation to reduce uncertainty",
    "chineseDefinition": "技术探针"
  },
  {
    "id": "w0912",
    "no": 912,
    "topicId": "communication-workplace",
    "word": "code freeze",
    "phonetic": "/koʊd friːz/",
    "englishDefinition": "A period when no new code changes are allowed",
    "chineseDefinition": "代码冻结"
  },
  {
    "id": "w0913",
    "no": 913,
    "topicId": "communication-workplace",
    "word": "feature complete",
    "phonetic": "/ˈfiːtʃər kəmˈpliːt/",
    "englishDefinition": "A state where all planned features are implemented",
    "chineseDefinition": "功能完成"
  },
  {
    "id": "w0914",
    "no": 914,
    "topicId": "communication-workplace",
    "word": "dogfooding",
    "phonetic": "/ˈdɒɡfuːdɪŋ/",
    "englishDefinition": "Using your own product internally",
    "chineseDefinition": "自我试用"
  },
  {
    "id": "w0915",
    "no": 915,
    "topicId": "communication-workplace",
    "word": "tech stack",
    "phonetic": "/tek stæk/",
    "englishDefinition": "The combination of technologies used in a project",
    "chineseDefinition": "技术栈"
  },
  {
    "id": "w0916",
    "no": 916,
    "topicId": "communication-workplace",
    "word": "greenfield",
    "phonetic": "/ˈɡriːnfiːld/",
    "englishDefinition": "A brand new project with no existing code",
    "chineseDefinition": "全新项目"
  },
  {
    "id": "w0917",
    "no": 917,
    "topicId": "communication-workplace",
    "word": "brownfield",
    "phonetic": "/ˈbraʊnfiːld/",
    "englishDefinition": "A project built on existing code or infrastructure",
    "chineseDefinition": "遗留项目"
  },
  {
    "id": "w0918",
    "no": 918,
    "topicId": "communication-workplace",
    "word": "proof of concept",
    "phonetic": "/pruːf əv ˈkɒnsept/",
    "englishDefinition": "A small project to validate feasibility",
    "chineseDefinition": "概念验证"
  },
  {
    "id": "w0919",
    "no": 919,
    "topicId": "communication-workplace",
    "word": "sunset",
    "phonetic": "/ˈsʌnset/",
    "englishDefinition": "To phase out or retire a product or feature",
    "chineseDefinition": "下线/停用"
  },
  {
    "id": "w0920",
    "no": 920,
    "topicId": "communication-workplace",
    "word": "vendor",
    "phonetic": "/ˈvendər/",
    "englishDefinition": "A company providing products or services",
    "chineseDefinition": "供应商"
  },
  {
    "id": "w0921",
    "no": 921,
    "topicId": "communication-workplace",
    "word": "SaaS",
    "phonetic": "/sæs/",
    "englishDefinition": "Software provided as a subscription service",
    "chineseDefinition": "软件即服务"
  },
  {
    "id": "w0922",
    "no": 922,
    "topicId": "communication-workplace",
    "word": "onshore",
    "phonetic": "/ˈɒnʃɔːr/",
    "englishDefinition": "Work done within the same country",
    "chineseDefinition": "境内的"
  },
  {
    "id": "w0923",
    "no": 923,
    "topicId": "communication-workplace",
    "word": "offshore",
    "phonetic": "/ˈɒfʃɔːr/",
    "englishDefinition": "Work done in a different country",
    "chineseDefinition": "离岸的"
  },
  {
    "id": "w0924",
    "no": 924,
    "topicId": "communication-workplace",
    "word": "remote",
    "phonetic": "/rɪˈmoʊt/",
    "englishDefinition": "Working from a location outside the office",
    "chineseDefinition": "远程的"
  },
  {
    "id": "w0925",
    "no": 925,
    "topicId": "communication-workplace",
    "word": "hybrid",
    "phonetic": "/ˈhaɪbrɪd/",
    "englishDefinition": "A mix of remote and in-office work",
    "chineseDefinition": "混合的"
  },
  {
    "id": "w0926",
    "no": 926,
    "topicId": "communication-workplace",
    "word": "standup",
    "phonetic": "/ˈstændʌp/",
    "englishDefinition": "A brief daily synchronization meeting",
    "chineseDefinition": "站会"
  },
  {
    "id": "w0927",
    "no": 927,
    "topicId": "communication-workplace",
    "word": "retro",
    "phonetic": "/ˈretroʊ/",
    "englishDefinition": "Short for retrospective — a team reflection meeting",
    "chineseDefinition": "回顾（缩写）"
  },
  {
    "id": "w0928",
    "no": 928,
    "topicId": "communication-workplace",
    "word": "sync-up",
    "phonetic": "/sɪŋk ʌp/",
    "englishDefinition": "A meeting to align on progress and plans",
    "chineseDefinition": "同步会议"
  },
  {
    "id": "w0929",
    "no": 929,
    "topicId": "communication-workplace",
    "word": "one-on-one",
    "phonetic": "/wʌn ɒn wʌn/",
    "englishDefinition": "A private meeting between two people",
    "chineseDefinition": "一对一会议"
  },
  {
    "id": "w0930",
    "no": 930,
    "topicId": "communication-workplace",
    "word": "pair programming",
    "phonetic": "/peər ˈproʊɡræmɪŋ/",
    "englishDefinition": "Two developers working together on the same code",
    "chineseDefinition": "结对编程"
  },
  {
    "id": "w0931",
    "no": 931,
    "topicId": "performance",
    "word": "architecture",
    "phonetic": "/ˈɑːrkɪtektʃər/",
    "englishDefinition": "The high-level structure of a software system",
    "chineseDefinition": "架构"
  },
  {
    "id": "w0932",
    "no": 932,
    "topicId": "performance",
    "word": "design pattern",
    "phonetic": "/dɪˈzaɪn ˈpætərn/",
    "englishDefinition": "A reusable solution to a common software problem",
    "chineseDefinition": "设计模式"
  },
  {
    "id": "w0933",
    "no": 933,
    "topicId": "performance",
    "word": "monolithic",
    "phonetic": "/ˌmɒnəˈlɪθɪk/",
    "englishDefinition": "A single unified application architecture",
    "chineseDefinition": "单体的"
  },
  {
    "id": "w0934",
    "no": 934,
    "topicId": "performance",
    "word": "microservices",
    "phonetic": "/ˈmaɪkroʊˌsɜːrvɪsɪz/",
    "englishDefinition": "An architecture of small, independent services",
    "chineseDefinition": "微服务架构"
  },
  {
    "id": "w0935",
    "no": 935,
    "topicId": "performance",
    "word": "event sourcing",
    "phonetic": "/ɪˈvent ˈsɔːrsɪŋ/",
    "englishDefinition": "Storing state changes as a sequence of events",
    "chineseDefinition": "事件溯源"
  },
  {
    "id": "w0936",
    "no": 936,
    "topicId": "performance",
    "word": "CQRS",
    "phonetic": "/ˌsiː kjuː ɑːr ˈes/",
    "englishDefinition": "Command Query Responsibility Segregation",
    "chineseDefinition": "命令查询职责分离"
  },
  {
    "id": "w0937",
    "no": 937,
    "topicId": "performance",
    "word": "domain-driven design",
    "phonetic": "/doʊˈmeɪn ˈdrɪvn dɪˈzaɪn/",
    "englishDefinition": "Modeling software around business domains",
    "chineseDefinition": "领域驱动设计"
  },
  {
    "id": "w0938",
    "no": 938,
    "topicId": "performance",
    "word": "bounded context",
    "phonetic": "/ˈbaʊndɪd ˈkɒntekst/",
    "englishDefinition": "A boundary within which a domain model is defined",
    "chineseDefinition": "限界上下文"
  },
  {
    "id": "w0939",
    "no": 939,
    "topicId": "performance",
    "word": "aggregate root",
    "phonetic": "/ˈæɡrɪɡeɪt ruːt/",
    "englishDefinition": "The main entity in a domain aggregate",
    "chineseDefinition": "聚合根"
  },
  {
    "id": "w0940",
    "no": 940,
    "topicId": "performance",
    "word": "hexagonal architecture",
    "phonetic": "/hekˈsæɡənl ˈɑːrkɪtektʃər/",
    "englishDefinition": "An architecture isolating business logic from external concerns",
    "chineseDefinition": "六边形架构"
  },
  {
    "id": "w0941",
    "no": 941,
    "topicId": "performance",
    "word": "clean architecture",
    "phonetic": "/kliːn ˈɑːrkɪtektʃər/",
    "englishDefinition": "An architecture with clear separation of concerns",
    "chineseDefinition": "整洁架构"
  },
  {
    "id": "w0942",
    "no": 942,
    "topicId": "performance",
    "word": "layered architecture",
    "phonetic": "/ˈleɪərd ˈɑːrkɪtektʃər/",
    "englishDefinition": "An architecture organizing code into horizontal layers",
    "chineseDefinition": "分层架构"
  },
  {
    "id": "w0943",
    "no": 943,
    "topicId": "performance",
    "word": "API-first",
    "phonetic": "/ˌeɪ piː ˈaɪ fɜːrst/",
    "englishDefinition": "Designing the API before implementation",
    "chineseDefinition": "API优先"
  },
  {
    "id": "w0944",
    "no": 944,
    "topicId": "performance",
    "word": "contract-first",
    "phonetic": "/ˈkɒntrækt fɜːrst/",
    "englishDefinition": "Defining interfaces before building services",
    "chineseDefinition": "契约优先"
  },
  {
    "id": "w0945",
    "no": 945,
    "topicId": "performance",
    "word": "idempotency",
    "phonetic": "/ˌaɪdemˈpoʊtənsi/",
    "englishDefinition": "The property of producing the same result when repeated",
    "chineseDefinition": "幂等性"
  },
  {
    "id": "w0946",
    "no": 946,
    "topicId": "performance",
    "word": "eventual consistency",
    "phonetic": "/ɪˈventʃuəl kənˈsɪstənsi/",
    "englishDefinition": "Data becoming consistent across nodes over time",
    "chineseDefinition": "最终一致性"
  },
  {
    "id": "w0947",
    "no": 947,
    "topicId": "performance",
    "word": "saga pattern",
    "phonetic": "/ˈsɑːɡə ˈpætərn/",
    "englishDefinition": "Managing distributed transactions as a sequence of steps",
    "chineseDefinition": "Saga模式"
  },
  {
    "id": "w0948",
    "no": 948,
    "topicId": "performance",
    "word": "sidecar pattern",
    "phonetic": "/ˈsaɪdkɑːr ˈpætərn/",
    "englishDefinition": "Deploying a helper process alongside a main service",
    "chineseDefinition": "边车模式"
  },
  {
    "id": "w0949",
    "no": 949,
    "topicId": "performance",
    "word": "strangler pattern",
    "phonetic": "/ˈstræŋɡlər ˈpætərn/",
    "englishDefinition": "Gradually replacing a legacy system with a new one",
    "chineseDefinition": "绞杀者模式"
  },
  {
    "id": "w0950",
    "no": 950,
    "topicId": "performance",
    "word": "backend for frontend",
    "phonetic": "/ˈbækend fɔːr ˈfrʌntend/",
    "englishDefinition": "A backend service tailored for a specific frontend",
    "chineseDefinition": "BFF模式"
  },
  {
    "id": "w0951",
    "no": 951,
    "topicId": "performance",
    "word": "performance",
    "phonetic": "/pərˈfɔːrməns/",
    "englishDefinition": "How fast and efficiently a system operates",
    "chineseDefinition": "性能"
  },
  {
    "id": "w0952",
    "no": 952,
    "topicId": "performance",
    "word": "optimization",
    "phonetic": "/ˌɒptɪmaɪˈzeɪʃn/",
    "englishDefinition": "The process of making something more efficient",
    "chineseDefinition": "优化"
  },
  {
    "id": "w0953",
    "no": 953,
    "topicId": "performance",
    "word": "bottleneck",
    "phonetic": "/ˈbɒtlnek/",
    "englishDefinition": "The part of a system limiting overall performance",
    "chineseDefinition": "瓶颈"
  },
  {
    "id": "w0954",
    "no": 954,
    "topicId": "performance",
    "word": "profiler",
    "phonetic": "/ˈproʊfaɪlər/",
    "englishDefinition": "A tool for measuring where time is spent in code",
    "chineseDefinition": "性能分析器"
  },
  {
    "id": "w0955",
    "no": 955,
    "topicId": "performance",
    "word": "memory leak",
    "phonetic": "/ˈmeməri liːk/",
    "englishDefinition": "Memory that is allocated but never released",
    "chineseDefinition": "内存泄漏"
  },
  {
    "id": "w0956",
    "no": 956,
    "topicId": "performance",
    "word": "garbage collection",
    "phonetic": "/ˈɡɑːrbɪdʒ kəˈlekʃn/",
    "englishDefinition": "Automatic memory management reclaiming unused memory",
    "chineseDefinition": "垃圾回收"
  },
  {
    "id": "w0957",
    "no": 957,
    "topicId": "performance",
    "word": "heap",
    "phonetic": "/hiːp/",
    "englishDefinition": "A region of memory for dynamic allocation",
    "chineseDefinition": "堆内存"
  },
  {
    "id": "w0958",
    "no": 958,
    "topicId": "performance",
    "word": "stack overflow",
    "phonetic": "/stæk ˈoʊvərfloʊ/",
    "englishDefinition": "An error when the call stack exceeds its limit",
    "chineseDefinition": "栈溢出"
  },
  {
    "id": "w0959",
    "no": 959,
    "topicId": "performance",
    "word": "tail recursion",
    "phonetic": "/teɪl rɪˈkɜːrʒn/",
    "englishDefinition": "Recursion optimized to reuse the current stack frame",
    "chineseDefinition": "尾递归"
  },
  {
    "id": "w0960",
    "no": 960,
    "topicId": "performance",
    "word": "lazy evaluation",
    "phonetic": "/ˈleɪzi ɪˌvæljuˈeɪʃn/",
    "englishDefinition": "Delaying computation until the result is needed",
    "chineseDefinition": "惰性求值"
  },
  {
    "id": "w0961",
    "no": 961,
    "topicId": "performance",
    "word": "eager evaluation",
    "phonetic": "/ˈiːɡər ɪˌvæljuˈeɪʃn/",
    "englishDefinition": "Computing results immediately",
    "chineseDefinition": "急切求值"
  },
  {
    "id": "w0962",
    "no": 962,
    "topicId": "performance",
    "word": "connection pooling",
    "phonetic": "/kəˈnekʃn ˈpuːlɪŋ/",
    "englishDefinition": "Reusing database connections to reduce overhead",
    "chineseDefinition": "连接池化"
  },
  {
    "id": "w0963",
    "no": 963,
    "topicId": "performance",
    "word": "indexing",
    "phonetic": "/ˈɪndeksɪŋ/",
    "englishDefinition": "Creating indexes to speed up data retrieval",
    "chineseDefinition": "索引化"
  },
  {
    "id": "w0964",
    "no": 964,
    "topicId": "performance",
    "word": "query optimization",
    "phonetic": "/ˈkwɪri ˌɒptɪmaɪˈzeɪʃn/",
    "englishDefinition": "Improving database query performance",
    "chineseDefinition": "查询优化"
  },
  {
    "id": "w0965",
    "no": 965,
    "topicId": "performance",
    "word": "N+1 problem",
    "phonetic": "/en plʌs wʌn ˈprɒbləm/",
    "englishDefinition": "Executing excessive queries due to lazy loading",
    "chineseDefinition": "N+1查询问题"
  },
  {
    "id": "w0966",
    "no": 966,
    "topicId": "performance",
    "word": "batch processing",
    "phonetic": "/bætʃ ˈprɒsesɪŋ/",
    "englishDefinition": "Processing multiple items together for efficiency",
    "chineseDefinition": "批处理"
  },
  {
    "id": "w0967",
    "no": 967,
    "topicId": "performance",
    "word": "stream processing",
    "phonetic": "/striːm ˈprɒsesɪŋ/",
    "englishDefinition": "Processing data continuously as it arrives",
    "chineseDefinition": "流处理"
  },
  {
    "id": "w0968",
    "no": 968,
    "topicId": "performance",
    "word": "compression",
    "phonetic": "/kəmˈpreʃn/",
    "englishDefinition": "Reducing data size for storage or transmission",
    "chineseDefinition": "压缩"
  },
  {
    "id": "w0969",
    "no": 969,
    "topicId": "performance",
    "word": "CDN",
    "phonetic": "/ˌsiː diː ˈen/",
    "englishDefinition": "Serving content from locations close to users",
    "chineseDefinition": "内容分发网络"
  },
  {
    "id": "w0970",
    "no": 970,
    "topicId": "performance",
    "word": "prefetching",
    "phonetic": "/priːˈfetʃɪŋ/",
    "englishDefinition": "Loading data before it is needed",
    "chineseDefinition": "预取"
  },
  {
    "id": "w0971",
    "no": 971,
    "topicId": "performance",
    "word": "cache invalidation",
    "phonetic": "/kæʃ ɪnˌvælɪˈdeɪʃn/",
    "englishDefinition": "Removing outdated data from the cache",
    "chineseDefinition": "缓存失效"
  },
  {
    "id": "w0972",
    "no": 972,
    "topicId": "performance",
    "word": "TTL",
    "phonetic": "/ˌtiː tiː ˈel/",
    "englishDefinition": "Time To Live — how long cached data remains valid",
    "chineseDefinition": "存活时间"
  },
  {
    "id": "w0973",
    "no": 973,
    "topicId": "performance",
    "word": "warm cache",
    "phonetic": "/wɔːrm kæʃ/",
    "englishDefinition": "A cache that has been populated with data",
    "chineseDefinition": "热缓存"
  },
  {
    "id": "w0974",
    "no": 974,
    "topicId": "performance",
    "word": "cold cache",
    "phonetic": "/koʊld kæʃ/",
    "englishDefinition": "A cache with no preloaded data",
    "chineseDefinition": "冷缓存"
  },
  {
    "id": "w0975",
    "no": 975,
    "topicId": "performance",
    "word": "write-through",
    "phonetic": "/raɪt θruː/",
    "englishDefinition": "Writing data to cache and storage simultaneously",
    "chineseDefinition": "直写缓存"
  },
  {
    "id": "w0976",
    "no": 976,
    "topicId": "performance",
    "word": "write-back",
    "phonetic": "/raɪt bæk/",
    "englishDefinition": "Writing data to cache first, then to storage later",
    "chineseDefinition": "回写缓存"
  },
  {
    "id": "w0977",
    "no": 977,
    "topicId": "performance",
    "word": "sharding",
    "phonetic": "/ˈʃɑːrdɪŋ/",
    "englishDefinition": "Distributing data across multiple databases",
    "chineseDefinition": "数据分片"
  },
  {
    "id": "w0978",
    "no": 978,
    "topicId": "performance",
    "word": "replication lag",
    "phonetic": "/ˌreplɪˈkeɪʃn læɡ/",
    "englishDefinition": "The delay between primary and replica databases",
    "chineseDefinition": "复制延迟"
  },
  {
    "id": "w0979",
    "no": 979,
    "topicId": "performance",
    "word": "read replica",
    "phonetic": "/riːd ˈreplɪkə/",
    "englishDefinition": "A database copy optimized for read operations",
    "chineseDefinition": "只读副本"
  },
  {
    "id": "w0980",
    "no": 980,
    "topicId": "performance",
    "word": "master-slave",
    "phonetic": "/ˈmɑːstər sleɪv/",
    "englishDefinition": "A replication model with one primary and multiple secondaries",
    "chineseDefinition": "主从架构"
  },
  {
    "id": "w0981",
    "no": 981,
    "topicId": "performance",
    "word": "consensus",
    "phonetic": "/kənˈsensəs/",
    "englishDefinition": "Agreement among distributed nodes on a value",
    "chineseDefinition": "共识"
  },
  {
    "id": "w0982",
    "no": 982,
    "topicId": "performance",
    "word": "Raft",
    "phonetic": "/ræft/",
    "englishDefinition": "A consensus algorithm for distributed systems",
    "chineseDefinition": "Raft共识算法"
  },
  {
    "id": "w0983",
    "no": 983,
    "topicId": "performance",
    "word": "Paxos",
    "phonetic": "/ˈpæksɒs/",
    "englishDefinition": "A family of consensus protocols",
    "chineseDefinition": "Paxos协议"
  },
  {
    "id": "w0984",
    "no": 984,
    "topicId": "performance",
    "word": "distributed system",
    "phonetic": "/dɪˈstrɪbjuːtɪd ˈsɪstəm/",
    "englishDefinition": "A system running on multiple networked computers",
    "chineseDefinition": "分布式系统"
  },
  {
    "id": "w0985",
    "no": 985,
    "topicId": "performance",
    "word": "partition tolerance",
    "phonetic": "/pɑːrˈtɪʃn ˈtɒlərəns/",
    "englishDefinition": "The ability to function despite network splits",
    "chineseDefinition": "分区容错"
  },
  {
    "id": "w0986",
    "no": 986,
    "topicId": "performance",
    "word": "fault tolerance",
    "phonetic": "/fɔːlt ˈtɒlərəns/",
    "englishDefinition": "The ability to continue operating after a failure",
    "chineseDefinition": "容错性"
  },
  {
    "id": "w0987",
    "no": 987,
    "topicId": "performance",
    "word": "graceful degradation",
    "phonetic": "/ˈɡreɪsfəl ˌdeɡrəˈdeɪʃn/",
    "englishDefinition": "Maintaining partial functionality when components fail",
    "chineseDefinition": "优雅降级"
  },
  {
    "id": "w0988",
    "no": 988,
    "topicId": "performance",
    "word": "circuit breaker",
    "phonetic": "/ˈsɜːrkɪt ˈbreɪkər/",
    "englishDefinition": "Stopping calls to a failing service to prevent cascading failures",
    "chineseDefinition": "熔断器模式"
  },
  {
    "id": "w0989",
    "no": 989,
    "topicId": "performance",
    "word": "back pressure",
    "phonetic": "/bæk ˈpreʃər/",
    "englishDefinition": "Resisting the flow of data to prevent overload",
    "chineseDefinition": "背压"
  },
  {
    "id": "w0990",
    "no": 990,
    "topicId": "performance",
    "word": "rate limiter",
    "phonetic": "/reɪt ˈlɪmɪtər/",
    "englishDefinition": "A mechanism controlling request frequency",
    "chineseDefinition": "速率限制器"
  },
  {
    "id": "w0991",
    "no": 991,
    "topicId": "performance",
    "word": "observability",
    "phonetic": "/əbˌzɜːrvəˈbɪlɪti/",
    "englishDefinition": "The ability to understand system behavior from external outputs",
    "chineseDefinition": "可观测性"
  },
  {
    "id": "w0992",
    "no": 992,
    "topicId": "performance",
    "word": "distributed tracing",
    "phonetic": "/dɪˈstrɪbjuːtɪd ˈtreɪsɪŋ/",
    "englishDefinition": "Tracking requests across microservices",
    "chineseDefinition": "分布式追踪"
  },
  {
    "id": "w0993",
    "no": 993,
    "topicId": "performance",
    "word": "span",
    "phonetic": "/spæn/",
    "englishDefinition": "A single operation within a distributed trace",
    "chineseDefinition": "跨度/片段"
  },
  {
    "id": "w0994",
    "no": 994,
    "topicId": "performance",
    "word": "correlation ID",
    "phonetic": "/ˌkɒrəˈleɪʃn aɪˈdiː/",
    "englishDefinition": "A unique identifier linking related log entries",
    "chineseDefinition": "关联ID"
  },
  {
    "id": "w0995",
    "no": 995,
    "topicId": "performance",
    "word": "health endpoint",
    "phonetic": "/helθ ˈendpɔɪnt/",
    "englishDefinition": "An API for checking if a service is running",
    "chineseDefinition": "健康检查端点"
  },
  {
    "id": "w0996",
    "no": 996,
    "topicId": "performance",
    "word": "readiness probe",
    "phonetic": "/ˈredɪnɪs proʊb/",
    "englishDefinition": "A check to determine if a service can accept traffic",
    "chineseDefinition": "就绪探针"
  },
  {
    "id": "w0997",
    "no": 997,
    "topicId": "performance",
    "word": "liveness probe",
    "phonetic": "/ˈlaɪvnɪs proʊb/",
    "englishDefinition": "A check to determine if a service is still running",
    "chineseDefinition": "存活探针"
  },
  {
    "id": "w0998",
    "no": 998,
    "topicId": "performance",
    "word": "canary release",
    "phonetic": "/kəˈneri rɪˈliːs/",
    "englishDefinition": "Releasing to a small subset of users before full rollout",
    "chineseDefinition": "金丝雀发布"
  },
  {
    "id": "w0999",
    "no": 999,
    "topicId": "performance",
    "word": "feature toggle",
    "phonetic": "/ˈfiːtʃər ˈtɒɡl/",
    "englishDefinition": "A switch to enable or disable features dynamically",
    "chineseDefinition": "功能开关"
  },
  {
    "id": "w1000",
    "no": 1000,
    "topicId": "performance",
    "word": "technical debt",
    "phonetic": "/ˈteknɪkl det/",
    "englishDefinition": "The accumulated cost of shortcuts in code quality",
    "chineseDefinition": "技术债务"
  }
] satisfies WordEntry[];
