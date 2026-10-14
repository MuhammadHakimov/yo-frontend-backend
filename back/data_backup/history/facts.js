const Facts = [
  {
    id: 1,
    year: "1989",
    title: "Идеяи World Wide Web",
    shortDescription: "Идеяи World Wide Web аз ҷониби Тим Бернерс-Ли пешниҳод шуд.",
    category: "Web",
    icon: "Globe",
    content: {
      title: "World Wide Web чӣ гуна оғоз шуд?",
      text: "Соли 1989 Тим Бернерс-Ли дар CERN идеяи системаи иттилоотии ба ҳам пайвастаро пешниҳод кард. Ҳадаф осон кардани мубодилаи маълумот байни муҳаққиқон буд.",
      facts: [
        "CERN маркази байналмилалии таҳқиқоти физикаи зарраҳо мебошад.",
        "Web аз Internet фарқ мекунад.",
        "Гиперпайвандҳо қисми асосии идеяи Web буданд."
      ]
    }
  },

  {
    id: 2,
    year: "1990",
    title: "Аввалин Web Browser",
    shortDescription: "Аввалин browser барои дидани Web аз ҷониби Тим Бернерс-Ли сохта шуд.",
    category: "Browser",
    icon: "Monitor",
    content: {
      title: "Аввалин browser",
      text: "Тим Бернерс-Ли browser-и аввалро дар компютери NeXT таҳия кард. Он на танҳо барои дидани саҳифаҳо, балки барои таҳрири онҳо низ истифода мешуд.",
      facts: [
        "Browser-и аввал WorldWideWeb ном дошт.",
        "Он дар муҳити NeXT сохта шуда буд.",
        "Browser қисми муҳими экосистемаи аввалини Web гардид."
      ]
    }
  },

  {
    id: 3,
    year: "1991",
    title: "Аввалин вебсайт",
    shortDescription: "Аввалин вебсайти ҷаҳон дар CERN ҷойгир шуда буд.",
    category: "Web",
    icon: "Globe2",
    content: {
      title: "Аввалин вебсайти ҷаҳон",
      text: "Аввалин вебсайт маълумотро дар бораи худи World Wide Web пешниҳод мекард. Он бештар ҳамчун дастури истифодаи Web хизмат мекард.",
      facts: [
        "Вебсайт дар CERN ҷойгир буд.",
        "Саҳифаҳои аввал асосан матнӣ буданд.",
        "Web аз ҳамин давра тадриҷан рушд кард."
      ]
    }
  },

  {
    id: 4,
    year: "1993",
    title: "Mosaic Browser",
    shortDescription: "Mosaic барои паҳн шудани Web дар байни корбарони одӣ таъсири калон расонд.",
    category: "Browser",
    icon: "Layout",
    content: {
      title: "Mosaic ва Web-и визуалӣ",
      text: "Mosaic яке аз browser-ҳое буд, ки имкониятҳои Web-ро барои аудиторияи васеътар дастрас кард.",
      facts: [
        "Mosaic соли 1993 бароварда шуд.",
        "Он ба рушди Web-и графикӣ мусоидат кард.",
        "Баъзе таҳиягарони Mosaic баъдтар дар Netscape иштирок карданд."
      ]
    }
  },

  {
    id: 5,
    year: "1994",
    title: "Netscape",
    shortDescription: "Netscape Navigator яке аз browser-ҳои машҳури солҳои аввали Web шуд.",
    category: "Browser",
    icon: "Compass",
    content: {
      title: "Netscape Navigator",
      text: "Netscape Navigator дар солҳои аввали рушди Web яке аз browser-ҳои муҳим буд.",
      facts: [
        "Netscape Navigator соли 1994 пайдо шуд.",
        "Он дар рушди тиҷоратии Web саҳм гузошт.",
        "Рақобати browser-ҳо баъдтар ба Browser Wars овард."
      ]
    }
  },

  {
    id: 6,
    year: "1995",
    title: "JavaScript пайдо шуд",
    shortDescription: "JavaScript барои интерактивӣ кардани вебсаҳифаҳо ба вуҷуд омад.",
    category: "JavaScript",
    icon: "Code2",
    content: {
      title: "JavaScript",
      text: "JavaScript аввал барои илова кардани рафтори динамикӣ ба вебсаҳифаҳо сохта шуд. Бо гузашти вақт он ба яке аз забонҳои асосии Web табдил ёфт.",
      facts: [
        "JavaScript соли 1995 сохта шуд.",
        "Номи аввалини он Mocha буд.",
        "Баъдтар номи LiveScript ва сипас JavaScript истифода шуд."
      ]
    }
  },

  {
    id: 7,
    year: "1996",
    title: "CSS",
    shortDescription: "CSS барои ҷудо кардани дизайн аз сохтори HTML стандартӣ шуд.",
    category: "CSS",
    icon: "Palette",
    content: {
      title: "CSS чӣ тағйир дод?",
      text: "CSS имкон дод, ки намуди вебсаҳифаҳо аз сохтори HTML ҷудо карда шавад.",
      facts: [
        "CSS аввалин стандарти худро соли 1996 гирифт.",
        "CSS барои styling истифода мешавад.",
        "CSS яке аз технологияҳои асосии Frontend мебошад."
      ]
    }
  },

  {
    id: 8,
    year: "1998",
    title: "Google пайдо шуд",
    shortDescription: "Google ҳамчун муҳаррики ҷустуҷӯӣ ба рушди Web таъсири калон расонд.",
    category: "Internet",
    icon: "Search",
    content: {
      title: "Google",
      text: "Google аз як лоиҳаи донишгоҳӣ оғоз шуда, баъдтар ба яке аз бузургтарин хизматрасониҳои Internet табдил ёфт.",
      facts: [
        "Google соли 1998 ҳамчун ширкат таъсис ёфт.",
        "Муассисони он Larry Page ва Sergey Brin буданд.",
        "Ҷустуҷӯ яке аз хизматрасониҳои марказии Web гардид."
      ]
    }
  },

  {
    id: 9,
    year: "2004",
    title: "Web 2.0",
    shortDescription: "Web аз саҳифаҳои статикӣ ба хизматрасониҳои интерактивӣ гузашт.",
    category: "Web",
    icon: "Layers",
    content: {
      title: "Web 2.0",
      text: "Истилоҳи Web 2.0 барои тавсифи насли нави хизматрасониҳои Web истифода шуд, ки корбарон метавонистанд дар онҳо фаъолона иштирок кунанд.",
      facts: [
        "Корбарон метавонистанд content эҷод кунанд.",
        "Social network-ҳо босуръат рушд карданд.",
        "Web application-ҳо аҳамияти бештар гирифтанд."
      ]
    }
  },

  {
    id: 10,
    year: "2005",
    title: "YouTube",
    shortDescription: "Видео ба яке аз қисмҳои муҳими Web табдил ёфт.",
    category: "Web",
    icon: "Play",
    content: {
      title: "YouTube",
      text: "YouTube соли 2005 таъсис ёфт ва мубодилаи видео дар Web-ро барои корбарони одӣ осон кард.",
      facts: [
        "YouTube соли 2005 таъсис ёфт.",
        "Аввалин видео моҳи апрели соли 2005 нашр шуд.",
        "Видео баъдтар қисми муҳими таҷрибаи Web гардид."
      ]
    }
  },

  {
    id: 11,
    year: "2006",
    title: "jQuery",
    shortDescription: "jQuery кор бо DOM ва JavaScript-ро барои таҳиягарон осон кард.",
    category: "JavaScript",
    icon: "Brackets",
    content: {
      title: "jQuery",
      text: "jQuery library-и JavaScript буд, ки кор бо DOM, event-ҳо ва animation-ҳоро содатар мекард.",
      facts: [
        "jQuery соли 2006 бароварда шуд.",
        "Он солҳои зиёд яке аз library-ҳои машҳури JavaScript буд.",
        "jQuery ба рушди Frontend таъсир расонд."
      ]
    }
  },

  {
    id: 12,
    year: "2008",
    title: "Google Chrome",
    shortDescription: "Google Chrome ба бозори browser ворид шуд.",
    category: "Browser",
    icon: "Chrome",
    content: {
      title: "Google Chrome",
      text: "Google Chrome соли 2008 ҳамчун browser-и нави Google баромад.",
      facts: [
        "Chrome соли 2008 бароварда шуд.",
        "Он бо JavaScript engine-и V8 машҳур гардид.",
        "Chrome дар рушди Web Platform нақши муҳим гирифт."
      ]
    }
  },

  {
    id: 13,
    year: "2009",
    title: "Node.js",
    shortDescription: "JavaScript аз browser берун баромад ва дар server низ истифода шуд.",
    category: "JavaScript",
    icon: "Server",
    content: {
      title: "Node.js",
      text: "Node.js муҳити иҷрои JavaScript мебошад, ки JavaScript-ро берун аз browser иҷро мекунад.",
      facts: [
        "Node.js соли 2009 муаррифӣ шуд.",
        "Он дар асоси V8 сохта шудааст.",
        "JavaScript бо Node.js дар backend низ истифода шуд."
      ]
    }
  },

  {
    id: 14,
    year: "2010",
    title: "AngularJS",
    shortDescription: "Framework-ҳо сохтани web application-ҳои калонтарро осон карданд.",
    category: "Framework",
    icon: "Box",
    content: {
      title: "AngularJS",
      text: "AngularJS framework-и JavaScript буд, ки барои сохтани web application-ҳои динамикӣ истифода мешуд.",
      facts: [
        "AngularJS аз ҷониби Google таҳия шуд.",
        "Он data binding пешниҳод мекард.",
        "Баъдтар Angular ҳамчун framework-и нав таҳия гардид."
      ]
    }
  },

  {
    id: 15,
    year: "2013",
    title: "React",
    shortDescription: "React component-based development-ро дар Frontend хеле маъмул кард.",
    category: "React",
    icon: "Atom",
    content: {
      title: "React",
      text: "React library барои сохтани интерфейсҳои корбар мебошад. Он component-based development-ро хеле маъмул кард.",
      facts: [
        "React соли 2013 ҳамчун open-source project бароварда шуд.",
        "Онро Facebook таҳия карда буд.",
        "React имрӯз дар сохтани UI васеъ истифода мешавад."
      ]
    }
  },

  {
    id: 16,
    year: "2014",
    title: "Vue.js",
    shortDescription: "Vue.js ҳамчун framework-и progressive барои UI пайдо шуд.",
    category: "Framework",
    icon: "Layers3",
    content: {
      title: "Vue.js",
      text: "Vue.js framework-и JavaScript мебошад, ки барои сохтани интерфейсҳои интерактивӣ истифода мешавад.",
      facts: [
        "Vue.js соли 2014 бароварда шуд.",
        "Муаллифи асосии он Evan You мебошад.",
        "Vue барои progressive adoption тарҳрезӣ шудааст."
      ]
    }
  },

  {
    id: 17,
    year: "2015",
    title: "TypeScript",
    shortDescription: "TypeScript ба JavaScript системаи static type илова кард.",
    category: "TypeScript",
    icon: "FileCode2",
    content: {
      title: "TypeScript",
      text: "TypeScript superset-и JavaScript мебошад, ки static typing ва имкониятҳои дигарро илова мекунад.",
      facts: [
        "TypeScript аз ҷониби Microsoft таҳия шуд.",
        "Он соли 2012 муаррифӣ шуд.",
        "TypeScript ба JavaScript compile мешавад."
      ]
    }
  },

  {
    id: 18,
    year: "2015",
    title: "ECMAScript 2015",
    shortDescription: "ES6 имкониятҳои нави зиёдеро ба JavaScript овард.",
    category: "JavaScript",
    icon: "Braces",
    content: {
      title: "ES6",
      text: "ECMAScript 2015 яке аз навсозиҳои муҳимтарини стандарти JavaScript буд.",
      facts: [
        "let ва const пайдо шуданд.",
        "Arrow function ба стандарт дохил шуд.",
        "Promise ва module syntax илова шуданд."
      ]
    }
  },

  {
    id: 19,
    year: "2016",
    title: "Next.js",
    shortDescription: "Next.js барои сохтани application-ҳои React-based имкониятҳои иловагӣ дод.",
    category: "React",
    icon: "Layers",
    content: {
      title: "Next.js",
      text: "Next.js framework-и React мебошад, ки routing, rendering ва optimization-ро пешниҳод мекунад.",
      facts: [
        "Next.js соли 2016 пайдо шуд.",
        "Он аз ҷониби Vercel таҳия мешавад.",
        "Next.js барои application-ҳои production истифода мешавад."
      ]
    }
  },

  {
    id: 20,
    year: "2017",
    title: "CSS Grid",
    shortDescription: "CSS Grid сохтани layout-ҳои мураккабро содатар кард.",
    category: "CSS",
    icon: "Grid2X2",
    content: {
      title: "CSS Grid",
      text: "CSS Grid Layout системаи дуандозаи layout барои сохтани интерфейсҳои муосир мебошад.",
      facts: [
        "Grid бо row ва column кор мекунад.",
        "Он барои responsive layout мувофиқ аст.",
        "Grid қисми стандартии CSS мебошад."
      ]
    }
  },

  {
    id: 21,
    year: "2017",
    title: "WebAssembly",
    shortDescription: "WebAssembly иҷрои code-и compiled-ро дар browser имконпазир кард.",
    category: "Web",
    icon: "Cpu",
    content: {
      title: "WebAssembly",
      text: "WebAssembly формати binary instruction барои иҷро дар Web мебошад.",
      facts: [
        "WebAssembly барои иҷрои code-и самаранок дар browser сохта шудааст.",
        "Он метавонад дар баробари JavaScript истифода шавад.",
        "C++, C ва Rust метавонанд барои WebAssembly target шаванд."
      ]
    }
  },

  {
    id: 22,
    year: "2015",
    title: "Visual Studio Code",
    shortDescription: "VS Code ба яке аз editor-ҳои машҳур барои Web Development табдил ёфт.",
    category: "Tools",
    icon: "Code",
    content: {
      title: "Visual Studio Code",
      text: "Visual Studio Code editor-и source code мебошад, ки ecosystem-и калони extension дорад.",
      facts: [
        "VS Code аз ҷониби Microsoft таҳия мешавад.",
        "Он extension-ҳои зиёдеро дастгирӣ мекунад.",
        "Барои HTML, CSS, JavaScript ва TypeScript васеъ истифода мешавад."
      ]
    }
  },

  {
    id: 23,
    year: "2017",
    title: "Tailwind CSS",
    shortDescription: "Utility-first CSS тарзи сохтани интерфейсҳоро тағйир дод.",
    category: "CSS",
    icon: "Wind",
    content: {
      title: "Tailwind CSS",
      text: "Tailwind CSS utility-first framework мебошад, ки styling-ро бо utility class-ҳо месозад.",
      facts: [
        "Tailwind CSS соли 2017 пайдо шуд.",
        "Он utility-first approach истифода мебарад.",
        "Tailwind барои сохтани интерфейсҳои responsive истифода мешавад."
      ]
    }
  },

  {
    id: 24,
    year: "2020",
    title: "Jamstack",
    shortDescription: "Архитектураҳои modern web ба static generation ва API-based development такя карданд.",
    category: "Architecture",
    icon: "Network",
    content: {
      title: "Jamstack",
      text: "Jamstack architecture approach мебошад, ки pre-rendering ва API-ҳоро барои сохтани сайтҳо ва application-ҳои муосир истифода мебарад.",
      facts: [
        "Static generation метавонад performance-ро беҳтар кунад.",
        "API метавонад frontend-ро аз backend ҷудо кунад.",
        "Jamstack барои сохтани web application-ҳо истифода мешавад."
      ]
    }
  },

  {
    id: 25,
    year: "2018",
    title: "Web Components",
    shortDescription: "Web стандартҳо барои сохтани component-ҳои reusable пешниҳод мекунанд.",
    category: "Web",
    icon: "Component",
    content: {
      title: "Web Components",
      text: "Web Components маҷмӯи стандартҳои Web Platform мебошад, ки барои сохтани element-ҳои reusable истифода мешаванд.",
      facts: [
        "Custom Elements қисми Web Components мебошад.",
        "Shadow DOM encapsulation пешниҳод мекунад.",
        "Web Components аз framework вобаста нестанд."
      ]
    }
  },

  {
    id: 26,
    year: "2021",
    title: "React Server Components",
    shortDescription: "React architecture-и нави component rendering-ро инкишоф дод.",
    category: "React",
    icon: "ServerCog",
    content: {
      title: "React Server Components",
      text: "Server Components имкон медиҳанд қисми component tree дар server коркард шавад.",
      facts: [
        "Онҳо бо server rendering architecture алоқаманданд.",
        "Мақсад кам кардани кори unnecessary дар client мебошад.",
        "Framework-ҳо метавонанд онҳоро бо routing ва data fetching муттаҳид кунанд."
      ]
    }
  },

  {
    id: 27,
    year: "2022",
    title: "AI ва Web Development",
    shortDescription: "AI ба воситаи нави кӯмак ба таҳиягарони software табдил ёфт.",
    category: "AI",
    icon: "BrainCircuit",
    content: {
      title: "AI дар Frontend",
      text: "AI дар coding assistance, code generation, debugging ва documentation истифода мешавад.",
      facts: [
        "AI метавонад code пешниҳод кунад.",
        "AI метавонад хатогиҳои code-ро таҳлил кунад.",
        "Developer бояд code ва натиҷаи онро санҷад."
      ]
    }
  },

  {
    id: 28,
    year: "2023",
    title: "Edge Computing",
    shortDescription: "Қисми коркарди Web метавонад ба server-ҳои наздиктар ба корбар интиқол дода шавад.",
    category: "Architecture",
    icon: "Zap",
    content: {
      title: "Edge Computing",
      text: "Edge computing иҷрои баъзе workload-ҳоро ба server-ҳое наздик мекунад, ки ба корбари ниҳоӣ наздиктаранд.",
      facts: [
        "Ин approach метавонад latency-ро кам кунад.",
        "Edge functions дар баъзе web platform-ҳо истифода мешаванд.",
        "Ин model барои application-ҳои distributed муҳим аст."
      ]
    }
  },

  {
    id: 29,
    year: "2024",
    title: "WebGPU",
    shortDescription: "WebGPU барои истифодаи имкониятҳои GPU дар Web API-и муосир пешниҳод мекунад.",
    category: "Web",
    icon: "Gpu",
    content: {
      title: "WebGPU",
      text: "WebGPU Web API мебошад, ки барои истифодаи GPU дар graphics ва computation пешбинӣ шудааст.",
      facts: [
        "WebGPU барои graphics-и муосир тарҳрезӣ шудааст.",
        "Он метавонад барои computation низ истифода шавад.",
        "Он барои 3D ва баъзе workload-ҳои AI истифода шуда метавонад."
      ]
    }
  },

  {
    id: 30,
    year: "2026",
    title: "Frontend дар давраи AI",
    shortDescription: "Frontend ба самти application-ҳои intelligent, interactive ва distributed ҳаракат мекунад.",
    category: "Future",
    icon: "Sparkles",
    content: {
      title: "Ояндаи Frontend",
      text: "Frontend имрӯз UI, data, APIs, server rendering, AI, performance ва таҷрибаи корбарро дар як ecosystem муттаҳид мекунад.",
      facts: [
        "AI-assisted development қисми workflow-и бисёр таҳиягарон шудааст.",
        "Web application-ҳо increasingly complex мешаванд.",
        "Web Platform пайваста API ва capability-ҳои нав мегирад."
      ]
    }
  }
];
export default Facts