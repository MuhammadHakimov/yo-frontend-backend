const figmas = [
{
    id: 7,
    title: "SaaS Pricing Page",
    category: "Landing",
    level: "Junior",
    description:
      "Саҳифаи нархгузорӣ бо нақшаҳои гуногун, муқоисаи имкониятҳо ва CTA-ҳои қавӣ.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    figmaUrl: "https://www.figma.com/community/file/1015229029340844917/saas-pricing-page",
    technologies: ["HTML", "CSS", "Tailwind"],
    xp: 45,
  },
  {
    id: 8,
    title: "Blog Platform UI",
    category: "Content",
    level: "Junior",
    description:
      "Макети платформаи блог бо рӯйхати мақолаҳо, саҳифаи хондан ва категорияҳо.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    figmaUrl: "https://www.figma.com/community/file/1041568944173121816/blog-app-ui-kit-community",
    technologies: ["React", "Tailwind"],
    xp: 55,
  },
  {
    id: 9,
    title: "Admin Panel",
    category: "Dashboard",
    level: "Middle",
    description:
      "Панели идоракунӣ бо ҷадвалҳо, графикҳо, филтрҳо ва идораи корбарон.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    figmaUrl: "https://www.figma.com/community/file/1338165781528249556/free-admin-dashboard",
    technologies: ["React", "Tailwind", "JavaScript"],
    xp: 80,
  },
  {
    id: 10,
    title: "Music Player Interface",
    category: "App UI",
    level: "Junior",
    description:
      "Интерфейси плеери мусиқӣ бо плейлист, контролҳо ва саҳифаи ҷустуҷӯ.",
    image:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff",
    figmaUrl: "https://www.figma.com/community/file/1143115506742537849/musium-music-app-ui",
    technologies: ["React", "CSS"],
    xp: 50,
  },
  {
    id: 11,
    title: "Job Board Website",
    category: "Website",
    level: "Middle",
    description:
      "Сайти ҷустуҷӯи кор бо филтрҳо, кортҳои вакансия ва саҳифаи муфассал.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    figmaUrl: "https://www.figma.com/community/file/1225308519419319279/jobpilot-job-portal-figma-ui-template-community",
    technologies: ["React", "Tailwind", "JavaScript"],
    xp: 75,
  },
  {
    id: 12,
    title: "Weather App UI",
    category: "App UI",
    level: "Beginner",
    description:
      "Макети барномаи обу ҳаво бо пешгӯии ҳафтаина ва ҳолати ҳозира.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9042f9581794",
    figmaUrl: "https://www.figma.com/community/file/1289964365602571637/weather-app",
    technologies: ["HTML", "CSS", "JavaScript"],
    xp: 40,
  },
  {
    id: 13,
    title: "Crypto Dashboard",
    category: "Dashboard",
    level: "Middle",
    description:
      "Панели крипто бо графикҳои нарх, портфел ва рӯйхати асъарҳои рақамӣ.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
    figmaUrl: "https://www.figma.com/community/file/1436420496189660959/crypto-portfolio-dashboards",
    technologies: ["React", "Tailwind"],
    xp: 85,
  },
  {
    id: 14,
    title: "Restaurant Landing Page",
    category: "Landing",
    level: "Beginner",
    description:
      "Саҳифаи асосӣ барои ресторан бо меню, бронкунӣ ва галерея.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    figmaUrl: "https://www.figma.com/community/file/1486090816082996323/restaurant-landing-page",
    technologies: ["HTML", "CSS"],
    xp: 35,
  },
  {
    id: 15,
    title: "Task Management App",
    category: "App UI",
    level: "Junior",
    description:
      "Барномаи идоракунии вазифаҳо бо канбан-борд, приоритетҳо ва дедлайнҳо.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    figmaUrl: "https://www.figma.com/community/file/1291667577858062539/kanban-board-task-management",
    technologies: ["React", "Tailwind", "JavaScript"],
    xp: 65,
  },
  {
    id: 16,
    title: "Fitness Tracking Dashboard",
    category: "Dashboard",
    level: "Junior",
    description:
      "Панели пайгирии фитнес бо омор, ҳадафҳо ва графикҳои пешрафт.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
    figmaUrl: "https://www.figma.com/community/file/1217727163948443074/fitness-tracker-dashboard",
    technologies: ["React", "Tailwind"],
    xp: 60,
  },
  {
    id: 17,
    title: "Real Estate Listing",
    category: "Website",
    level: "Middle",
    description:
      "Сайти амволи ғайриманқул бо ҷустуҷӯ, филтрҳо ва саҳифаи муфассали хона.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    figmaUrl: "https://www.figma.com/community/file/1566207795741681846/real-estate-website-template-figma-ui-free",
    technologies: ["React", "Tailwind", "JavaScript"],
    xp: 70,
  },
  {
    id: 18,
    title: "AI Chat Interface",
    category: "App UI",
    level: "Middle",
    description:
      "Интерфейси чати зеҳни сунъӣ бо таърихи сӯҳбат, паёмҳо ва ҳолати ҷавоб.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    figmaUrl: "https://www.figma.com/community/file/1569991105423787535/discourse-ai-chatbot-ui-kit-free",
    technologies: ["React", "Tailwind", "JavaScript"],
    xp: 90,
  },
];

export default figmas;