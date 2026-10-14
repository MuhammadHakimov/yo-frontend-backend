const tasks = {
  "HTML": [
    {
      "id": 1,
      "title": "Менюи вебсайт",
      "description": "Меню созед, ки дар он Home, About, Services ва Contact ҷойгир бошанд.",
      "requirements": [
        "Истифодаи nav",
        "Истифодаи ul ва li",
        "Истифодаи a"
      ],
      "answer": "<nav> <ul> <li><a href=\"/\">Home</a></li> <li><a href=\"/about\">About</a></li> <li><a href=\"/services\">Services</a></li> <li><a href=\"/contact\">Contact</a></li> </ul> </nav>",
      "xp": 20
    },
    {
      "id": 2,
      "title": "Формаи бақайдгирӣ",
      "description": "Формаи бақайдгирӣ созед, ки номи корбар, email ва password қабул кунад.",
      "requirements": [
        "Истифодаи form",
        "Истифодаи label",
        "Истифодаи input",
        "Истифодаи button"
      ],
      "answer": "<form> <label for=\"name\">Ном:</label> <input type=\"text\" id=\"name\" name=\"name\" /> <label for=\"email\">Email:</label> <input type=\"email\" id=\"email\" name=\"email\" /> <label for=\"password\">Парол:</label> <input type=\"password\" id=\"password\" name=\"password\" /> <button type=\"submit\">Бақайдгирӣ</button> </form>",
      "xp": 20
    },
    {
      "id": 3,
      "title": "Саҳифаи мақола",
      "description": "Саҳифаи мақола созед, ки сарлавҳа, сана, муаллиф ва матни мақола дошта бошад.",
      "requirements": [
        "Истифодаи article",
        "Истифодаи h1 ё h2",
        "Истифодаи time",
        "Истифодаи p"
      ],
      "answer": "<article> <h1>Омӯзиши Frontend</h1> <p>Муаллиф: Muhammad</p> <time datetime=\"2026-09-21\"> 21 сентябри 2026 </time> <p> Frontend қисми намоёни вебсайт мебошад. </p> </article>",
      "xp": 20
    },
    {
      "id": 4,
      "title": "Рӯйхати маҳсулот",
      "description": "Рӯйхати се маҳсулот созед. Барои ҳар маҳсулот ном, нарх ва тавсиф нишон диҳед.",
      "requirements": [
        "Истифодаи section",
        "Истифодаи h2",
        "Истифодаи p",
        "Истифодаи div"
      ],
      "answer": "<section> <h1>Маҳсулот</h1> <div> <h2>Ноутбук</h2> <p>Нарх: 5000 сомонӣ</p> <p>Ноутбуки босифат барои омӯзиш.</p> </div> <div> <h2>Телефон</h2> <p>Нарх: 2500 сомонӣ</p> <p>Телефони замонавӣ.</p> </div> <div> <h2>Гӯшмонак</h2> <p>Нарх: 300 сомонӣ</p> <p>Гӯшмонаки бесим.</p> </div> </section>",
      "xp": 20
    },
    {
      "id": 5,
      "title": "Сарлавҳаҳои HTML",
      "description": "Саҳифае созед, ки ҳамаи сатҳҳои сарлавҳа аз h1 то h6 дошта бошад.",
      "requirements": [
        "Истифодаи h1",
        "Истифодаи h2",
        "Истифодаи h3",
        "Истифодаи h4, h5 ва h6"
      ],
      "answer": "<h1>Сарлавҳаи 1</h1> <h2>Сарлавҳаи 2</h2> <h3>Сарлавҳаи 3</h3> <h4>Сарлавҳаи 4</h4> <h5>Сарлавҳаи 5</h5> <h6>Сарлавҳаи 6</h6>",
      "xp": 20
    },
    {
      "id": 6,
      "title": "Рӯйхати малакаҳо",
      "description": "Рӯйхати малакаҳои frontend developer созед.",
      "requirements": [
        "Истифодаи ul",
        "Истифодаи li",
        "Истифодаи h2"
      ],
      "answer": "<section> <h2>Малакаҳои ман</h2> <ul> <li>HTML</li> <li>CSS</li> <li>JavaScript</li> <li>React</li> </ul> </section>",
      "xp": 20
    },
    {
      "id": 7,
      "title": "Рӯйхати рақамдор",
      "description": "Қадамҳои омӯзиши frontend-ро ҳамчун рӯйхати рақамдор нишон диҳед.",
      "requirements": [
        "Истифодаи ol",
        "Истифодаи li",
        "Истифодаи h2"
      ],
      "answer": "<section> <h2>Қадамҳои омӯзиш</h2> <ol> <li>HTML омӯзед</li> <li>CSS омӯзед</li> <li>JavaScript омӯзед</li> <li>React омӯзед</li> </ol> </section>",
      "xp": 20
    },
    {
      "id": 8,
      "title": "Пайванди беруна",
      "description": "Саҳифае созед, ки ба Google, YouTube ва GitHub пайванд дошта бошад.",
      "requirements": [
        "Истифодаи a",
        "Истифодаи href",
        "Истифодаи target"
      ],
      "answer": "<h2>Пайвандҳои муфид</h2> <a href=\"https://google.com\" target=\"_blank\">Google</a> <br /> <a href=\"https://youtube.com\" target=\"_blank\">YouTube</a> <br /> <a href=\"https://github.com\" target=\"_blank\">GitHub</a>",
      "xp": 20
    },
    {
      "id": 9,
      "title": "Саҳифаи портфолио",
      "description": "Саҳифаи одии портфолио созед.",
      "requirements": [
        "Истифодаи header",
        "Истифодаи main",
        "Истифодаи section",
        "Истифодаи footer"
      ],
      "answer": "<header> <h1>Muhammad</h1> <p>Frontend Developer</p> </header> <main> <section> <h2>Дар бораи ман</h2> <p>Ман frontend development меомӯзам.</p> </section> <section> <h2>Лоиҳаҳо</h2> <p>Ё-фронтенд</p> </section> </main> <footer> <p>© 2026 Muhammad</p> </footer>",
      "xp": 20
    },
    {
      "id": 10,
      "title": "Маълумоти тамос",
      "description": "Қисми Contact созед, ки email, телефон ва шаҳрро нишон диҳад.",
      "requirements": [
        "Истифодаи section",
        "Истифодаи h2",
        "Истифодаи p",
        "Истифодаи a"
      ],
      "answer": "<section> <h2>Тамос</h2> <p>Шаҳр: Душанбе</p> <p>Телефон: +992 900000000</p> <p> Email: <a href=\"mailto:test@example.com\"> test@example.com </a> </p> </section>",
      "xp": 20
    },
    {
      "id": 11,
      "title": "Формаи Contact",
      "description": "Формаи тамос созед, ки ном, email ва паёмро қабул кунад.",
      "requirements": [
        "Истифодаи form",
        "Истифодаи input",
        "Истифодаи textarea",
        "Истифодаи button"
      ],
      "answer": "<form> <label for=\"name\">Ном:</label> <input id=\"name\" type=\"text\" /> <label for=\"email\">Email:</label> <input id=\"email\" type=\"email\" /> <label for=\"message\">Паём:</label> <textarea id=\"message\"></textarea> <button type=\"submit\">Фиристодан</button> </form>",
      "xp": 20
    },
    {
      "id": 12,
      "title": "Интихоби технология",
      "description": "Select созед, ки корбар аз байни HTML, CSS, JavaScript ва React интихоб кунад.",
      "requirements": [
        "Истифодаи select",
        "Истифодаи option",
        "Истифодаи label"
      ],
      "answer": "<label for=\"technology\"> Технологияро интихоб кунед: </label> <select id=\"technology\"> <option value=\"html\">HTML</option> <option value=\"css\">CSS</option> <option value=\"javascript\">JavaScript</option> <option value=\"react\">React</option> </select>",
      "xp": 20
    },
    {
      "id": 13,
      "title": "Radio Button",
      "description": "Форма созед, ки ҷинс ё варианти интихобиро бо radio button қабул кунад.",
      "requirements": [
        "Истифодаи input",
        "type=radio",
        "Истифодаи label"
      ],
      "answer": "<form> <p>Интихоб кунед:</p> <label> <input type=\"radio\" name=\"type\" value=\"student\" /> Донишҷӯ </label> <label> <input type=\"radio\" name=\"type\" value=\"developer\" /> Developer </label> </form>",
      "xp": 20
    },
    {
      "id": 14,
      "title": "Checkbox",
      "description": "Форма созед, ки корбар якчанд малака интихоб карда тавонад.",
      "requirements": [
        "Истифодаи checkbox",
        "Истифодаи label",
        "Истифодаи input"
      ],
      "answer": "<form> <p>Малакаҳоро интихоб кунед:</p> <label> <input type=\"checkbox\" name=\"skill\" value=\"html\" /> HTML </label> <label> <input type=\"checkbox\" name=\"skill\" value=\"css\" /> CSS </label> <label> <input type=\"checkbox\" name=\"skill\" value=\"react\" /> React </label> </form>",
      "xp": 20
    },
    {
      "id": 15,
      "title": "Видео",
      "description": "Ба саҳифа видеои омӯзишӣ илова кунед.",
      "requirements": [
        "Истифодаи video",
        "Истифодаи controls",
        "Истифодаи source"
      ],
      "answer": "<video width=\"500\" controls> <source src=\"lesson.mp4\" type=\"video/mp4\" /> Браузери шумо video-ро дастгирӣ намекунад. </video>",
      "xp": 20
    },
    {
      "id": 16,
      "title": "Audio",
      "description": "Ба саҳифа файли аудио илова кунед.",
      "requirements": [
        "Истифодаи audio",
        "Истифодаи controls",
        "Истифодаи source"
      ],
      "answer": "<audio controls> <source src=\"lesson.mp3\" type=\"audio/mpeg\" /> Браузери шумо audio-ро дастгирӣ намекунад. </audio>",
      "xp": 20
    },
    {
      "id": 17,
      "title": "Figure ва Caption",
      "description": "Расмро бо тавсифи он дар figure ҷойгир кунед.",
      "requirements": [
        "Истифодаи figure",
        "Истифодаи img",
        "Истифодаи figcaption"
      ],
      "answer": "<figure> <img src=\"frontend.jpg\" alt=\"Frontend development\" width=\"400\" /> <figcaption> Омӯзиши Frontend Development </figcaption> </figure>",
      "xp": 20
    },
    {
      "id": 18,
      "title": "FAQ",
      "description": "Қисми саволу ҷавоб созед.",
      "requirements": [
        "Истифодаи section",
        "Истифодаи details",
        "Истифодаи summary"
      ],
      "answer": "<section> <h2>Саволҳои маъмул</h2> <details> <summary>HTML чист?</summary> <p>HTML барои сохтани сохтори вебсаҳифа истифода мешавад.</p> </details> <details> <summary>CSS чист?</summary> <p>CSS барои ороиш ва дизайн истифода мешавад.</p> </details> </section>",
      "xp": 20
    },
    {
      "id": 19,
      "title": "Саҳифаи курс",
      "description": "Саҳифаи курси омӯзишӣ созед, ки номи курс, тавсиф ва рӯйхати мавзӯъҳо дошта бошад.",
      "requirements": [
        "Истифодаи main",
        "Истифодаи h1",
        "Истифодаи p",
        "Истифодаи ol"
      ],
      "answer": "<main> <h1>Курси Frontend</h1> <p> Дар ин курс асосҳои frontend омӯхта мешаванд. </p> <h2>Мавзӯъҳо</h2> <ol> <li>HTML</li> <li>CSS</li> <li>JavaScript</li> <li>React</li> </ol> </main>",
      "xp": 20
    },
    {
      "id": 20,
      "title": "Card-и хабар",
      "description": "Корти хабар созед, ки унвон, сана ва матни хабар дошта бошад.",
      "requirements": [
        "Истифодаи article",
        "Истифодаи h2",
        "Истифодаи time",
        "Истифодаи p"
      ],
      "answer": "<article> <h2>Оғози курси нав</h2> <time datetime=\"2026-09-21\"> 21 сентябри 2026 </time> <p> Курси нави омӯзиши frontend оғоз шуд. </p> </article>",
      "xp": 20
    },
    {
      "id": 21,
      "title": "Блоги шахсӣ",
      "description": "Саҳифаи блоги шахсӣ бо се мақола созед.",
      "requirements": [
        "Истифодаи main",
        "Истифодаи article",
        "Истифодаи h2",
        "Истифодаи p"
      ],
      "answer": "<main> <h1>Блоги ман</h1> <article> <h2>Омӯзиши HTML</h2> <p>HTML асоси сохтани вебсаҳифа мебошад.</p> </article> <article> <h2>Омӯзиши CSS</h2> <p>CSS барои ороиши вебсаҳифа истифода мешавад.</p> </article> <article> <h2>Омӯзиши JavaScript</h2> <p>JavaScript ба сайт интерактивӣ илова мекунад.</p> </article> </main>",
      "xp": 20
    },
    {
      "id": 22,
      "title": "Нархи хизматрасонӣ",
      "description": "Саҳифаи хизматрасонӣ бо се нақшаи нарх созед.",
      "requirements": [
        "Истифодаи section",
        "Истифодаи div",
        "Истифодаи h2",
        "Истифодаи button"
      ],
      "answer": "<section> <h1>Нақшаҳои хизматрасонӣ</h1> <div> <h2>Basic</h2> <p>100 сомонӣ</p> <button>Интихоб кардан</button> </div> <div> <h2>Pro</h2> <p>250 сомонӣ</p> <button>Интихоб кардан</button> </div> <div> <h2>Premium</h2> <p>500 сомонӣ</p> <button>Интихоб кардан</button> </div> </section>",
      "xp": 20
    },
    {
      "id": 23,
      "title": "Header ва Navigation",
      "description": "Header созед, ки логотип ва менюи навигатсия дошта бошад.",
      "requirements": [
        "Истифодаи header",
        "Истифодаи nav",
        "Истифодаи ul",
        "Истифодаи a"
      ],
      "answer": "<header> <h1>Ё-фронтенд</h1> <nav> <ul> <li><a href=\"/\">Асосӣ</a></li> <li><a href=\"/lessons\">Дарсҳо</a></li> <li><a href=\"/tasks\">Масъалаҳо</a></li> <li><a href=\"/tests\">Тестҳо</a></li> </ul> </nav> </header>",
      "xp": 20
    },
    {
      "id": 24,
      "title": "Footer",
      "description": "Footer созед, ки copyright ва пайвандҳои иҷтимоӣ дошта бошад.",
      "requirements": [
        "Истифодаи footer",
        "Истифодаи p",
        "Истифодаи a"
      ],
      "answer": "<footer> <p>© 2026 Ё-фронтенд</p> <nav> <a href=\"#\">Telegram</a> <a href=\"#\">Instagram</a> <a href=\"#\">YouTube</a> </nav> </footer>",
      "xp": 20
    },
    {
      "id": 25,
      "title": "Breadcrumb",
      "description": "Навигатсияи breadcrumb барои саҳифаи дарс созед.",
      "requirements": [
        "Истифодаи nav",
        "Истифодаи ol",
        "Истифодаи li",
        "Истифодаи a"
      ],
      "answer": "<nav aria-label=\"Breadcrumb\"> <ol> <li> <a href=\"/\">Асосӣ</a> </li> <li> <a href=\"/lessons\">Дарсҳо</a> </li> <li> <a href=\"/lessons/html\">HTML</a> </li> <li>HTML Tags</li> </ol> </nav>",
      "xp": 20
    },
    {
      "id": 26,
      "title": "Search Form",
      "description": "Формаи ҷустуҷӯ созед.",
      "requirements": [
        "Истифодаи form",
        "Истифодаи input",
        "type=search",
        "Истифодаи button"
      ],
      "answer": "<form> <label for=\"search\"> Ҷустуҷӯ: </label> <input id=\"search\" type=\"search\" placeholder=\"Ҷустуҷӯ кунед...\" /> <button type=\"submit\"> Ҷустуҷӯ </button> </form>",
      "xp": 20
    },
    {
      "id": 27,
      "title": "Профили омӯзанда",
      "description": "Профили донишҷӯ созед, ки ном, XP, level ва технологияи интихобкардаро нишон диҳад.",
      "requirements": [
        "Истифодаи section",
        "Истифодаи h1",
        "Истифодаи p",
        "Истифодаи img"
      ],
      "answer": "<section> <img src=\"avatar.jpg\" alt=\"Аватари корбар\" width=\"120\" /> <h1>Muhammad</h1> <p>XP: 1250</p> <p>Level: Beginner</p> <p>Technology: React</p> </section>",
      "xp": 20
    },
    {
      "id": 28,
      "title": "Саҳифаи пурраи Frontend",
      "description": "Як саҳифаи пурраи омӯзиши Frontend созед, ки header, main, sections, article ва footer дошта бошад.",
      "requirements": [
        "Истифодаи header",
        "Истифодаи nav",
        "Истифодаи main",
        "Истифодаи section",
        "Истифодаи article",
        "Истифодаи footer"
      ],
      "answer": "<header> <h1>Ё-фронтенд</h1> <nav> <a href=\"/\">Асосӣ</a> <a href=\"/lessons\">Дарсҳо</a> <a href=\"/tests\">Тестҳо</a> <a href=\"/tasks\">Масъалаҳо</a> </nav> </header> <main> <section> <h2>Омӯзиши Frontend</h2> <p> HTML, CSS, JavaScript ва React-ро омӯзед. </p> </section> <section> <h2>Дарсҳои охирин</h2> <article> <h3>HTML Tags</h3> <p>Бо тегҳои асосии HTML шинос шавед.</p> </article> <article> <h3>CSS Basics</h3> <p>Асосҳои CSS-ро омӯзед.</p> </article> </section> </main> <footer> <p>© 2026 Ё-фронтенд</p> </footer>",
      "xp": 20
    },
    {
      "id": 29,
      "title": "Рангҳо ва градиент",
      "description": "Барои заминаи саҳифа градиенти зебо созед ва рангҳои матнро мувофиқ кунед.",
      "requirements": [
        "background: linear-gradient",
        "color",
        "text-align",
        "min-height"
      ],
      "answer": "body { min-height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; }",
      "xp": 20
    },
    {
      "id": 30,
      "title": "Стил додани корти шахсӣ",
      "description": "Корти шахсии HTML-ро бо CSS зебо кунед. Ранги замина, ҳошия, соя ва радиуси кунҷҳоро истифода баред.",
      "requirements": [
        "Истифодаи class",
        "background-color",
        "border-radius",
        "box-shadow",
        "padding"
      ],
      "answer": ".card { width: 300px; padding: 20px; background-color: #f8f9fa; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); text-align: center; }",
      "xp": 20
    },
    {
      "id": 150,
      "title": "Корти шахсӣ",
      "description": "Бо HTML корти шахсӣ созед. Дар он ном, синну сол, шаҳр ва маълумоти кӯтоҳ ҷойгир кунед.",
      "requirements": [
        "Истифодаи h1",
        "Истифодаи p",
        "Истифодаи img",
        "Истифодаи section ё div"
      ],
      "answer": "<section> <h1>Muhammad</h1> <p>Синну сол: 17</p> <p>Шаҳр: Душанбе</p> <img src=\"profile.jpg\" alt=\"Расми шахсӣ\" width=\"150\" /> </section>",
      "xp": 20
    }
  ],
  "CSS": [
    {
      "id": 31,
      "title": "Навигацияи горизонталӣ",
      "description": "Менюи горизонталӣ созед. Элементҳоро бо flex ҷойгир кунед ва эффекти hover илова кунед.",
      "requirements": [
        "display: flex",
        "list-style: none",
        "gap",
        "hover",
        "transition"
      ],
      "answer": "nav ul { display: flex; list-style: none; gap: 24px; margin: 0; padding: 0; } nav a { text-decoration: none; color: #333; transition: color 0.3s; } nav a:hover { color: #0d6efd; }",
      "xp": 20
    },
    {
      "id": 32,
      "title": "Box Model асосӣ",
      "description": "Ба як div padding, margin, border ва width-ро дуруст танзим кунед.",
      "requirements": [
        "padding",
        "margin",
        "border",
        "width",
        "box-sizing: border-box"
      ],
      "answer": ".box { width: 250px; padding: 20px; margin: 30px auto; border: 2px solid #333; box-sizing: border-box; }",
      "xp": 20
    },
    {
      "id": 33,
      "title": "Стил додани тугмаҳо",
      "description": "Тугмаҳои зебо бо ранг, ҳошия, hover ва transition созед.",
      "requirements": [
        "background-color",
        "border: none",
        "border-radius",
        "padding",
        "hover",
        "transition"
      ],
      "answer": ".btn { background-color: #0d6efd; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; transition: background-color 0.3s; } .btn:hover { background-color: #0b5ed7; }",
      "xp": 20
    },
    {
      "id": 34,
      "title": "Flexbox – марказ кардани элемент",
      "description": "Як элементро дар маркази саҳифа бо истифодаи Flexbox ҷойгир кунед.",
      "requirements": [
        "display: flex",
        "justify-content: center",
        "align-items: center",
        "height: 100vh"
      ],
      "answer": ".container { display: flex; justify-content: center; align-items: center; height: 100vh; }",
      "xp": 20
    },
    {
      "id": 35,
      "title": "Flexbox – кортҳои паҳлӯ ба паҳлӯ",
      "description": "Се кортро бо Flexbox дар як қатор ҷойгир кунед ва фосила гузоред.",
      "requirements": [
        "display: flex",
        "gap",
        "flex-wrap: wrap",
        "justify-content"
      ],
      "answer": ".cards { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; } .card { flex: 1 1 250px; }",
      "xp": 20
    },
    {
      "id": 36,
      "title": "CSS Grid – галерея",
      "description": "Галереяи суратҳоро бо CSS Grid созед (3 сутун).",
      "requirements": [
        "display: grid",
        "grid-template-columns",
        "gap",
        "border-radius"
      ],
      "answer": ".gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; } .gallery img { width: 100%; border-radius: 8px; }",
      "xp": 20
    },
    {
      "id": 37,
      "title": "Эффекти Hover барои корт",
      "description": "Вақте ки муш рӯи корт меояд, он каме калон шавад ва сояаш зиёд гардад.",
      "requirements": [
        "transition",
        "transform: scale",
        "box-shadow",
        "hover"
      ],
      "answer": ".card { transition: transform 0.3s, box-shadow 0.3s; } .card:hover { transform: scale(1.05); box-shadow: 0 12px 24px rgba(0,0,0,0.2); }",
      "xp": 20
    },
    {
      "id": 38,
      "title": "Transition ва Transform",
      "description": "Ба як элемент эффекти гардиш (rotate) ва калоншавӣ ҳангоми hover илова кунед.",
      "requirements": [
        "transition",
        "transform",
        "rotate",
        "scale",
        "hover"
      ],
      "answer": ".box { width: 100px; height: 100px; background: #0d6efd; transition: transform 0.4s; } .box:hover { transform: rotate(15deg) scale(1.2); }",
      "xp": 20
    },
    {
      "id": 39,
      "title": "Аниматсия бо @keyframes",
      "description": "Як элементро бо аниматсия аз чап ба рост ҳаракат диҳед.",
      "requirements": [
        "@keyframes",
        "animation",
        "transform: translateX",
        "infinite"
      ],
      "answer": "@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { animation: move 2s infinite alternate; }",
      "xp": 20
    },
    {
      "id": 40,
      "title": "Media Query – Responsive",
      "description": "Дар экранҳои хурд (то 768px) менюро вертикалӣ кунед.",
      "requirements": [
        "@media",
        "max-width",
        "flex-direction: column",
        "display: flex"
      ],
      "answer": "nav ul { display: flex; gap: 20px; } @media (max-width: 768px) { nav ul { flex-direction: column; } }",
      "xp": 20
    },
    {
      "id": 41,
      "title": "Pseudo-classes",
      "description": "Ба рӯйхат эффекти :hover, :first-child ва :last-child илова кунед.",
      "requirements": [
        ":hover",
        ":first-child",
        ":last-child",
        "background-color"
      ],
      "answer": "li:hover { background-color: #e9ecef; } li:first-child { font-weight: bold; } li:last-child { color: #dc3545; }",
      "xp": 20
    },
    {
      "id": 42,
      "title": "Pseudo-elements",
      "description": "Бо ::before ва ::after ба унвон хатҳои зебо илова кунед.",
      "requirements": [
        "::before",
        "::after",
        "content",
        "display: block",
        "background"
      ],
      "answer": "h2::before, h2::after { content: \"\"; display: block; width: 60px; height: 3px; background: #0d6efd; margin: 8px auto; }",
      "xp": 20
    },
    {
      "id": 43,
      "title": "CSS Variables",
      "description": "Рангҳои асосиро бо CSS Variables эълон кунед ва дар якчанд ҷо истифода баред.",
      "requirements": [
        ":root",
        "--primary-color",
        "var()",
        "background-color"
      ],
      "answer": ":root { --primary: #0d6efd; --dark: #212529; } .btn { background-color: var(--primary); } body { color: var(--dark); }",
      "xp": 20
    },
    {
      "id": 44,
      "title": "Position – Absolute ва Relative",
      "description": "Нишонро (badge) дар кунҷи рости болои корт ҷойгир кунед.",
      "requirements": [
        "position: relative",
        "position: absolute",
        "top",
        "right"
      ],
      "answer": ".card { position: relative; } .badge { position: absolute; top: 10px; right: 10px; background: red; color: white; padding: 4px 8px; border-radius: 12px; }",
      "xp": 20
    },
    {
      "id": 45,
      "title": "Sticky Header",
      "description": "Header-ро ҳангоми скролл кардан дар болои саҳифа часпонед.",
      "requirements": [
        "position: sticky",
        "top: 0",
        "background",
        "z-index"
      ],
      "answer": "header { position: sticky; top: 0; background: white; z-index: 100; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }",
      "xp": 20
    },
    {
      "id": 46,
      "title": "Стил додани форма",
      "description": "Input ва button-ро зебо кунед (ҳошия, focus, padding).",
      "requirements": [
        "border",
        "border-radius",
        "padding",
        "outline",
        ":focus"
      ],
      "answer": "input { border: 1px solid #ced4da; border-radius: 6px; padding: 10px 14px; outline: none; } input:focus { border-color: #0d6efd; box-shadow: 0 0 0 3px rgba(13,110,253,0.25); }",
      "xp": 20
    },
    {
      "id": 47,
      "title": "Стил додани ҷадвал",
      "description": "Ҷадвалро зебо кунед: ҳошияҳо, рангҳои қаторҳо ва header.",
      "requirements": [
        "border-collapse",
        "th, td",
        "background-color",
        "nth-child"
      ],
      "answer": "table { border-collapse: collapse; width: 100%; } th, td { border: 1px solid #dee2e6; padding: 12px; } th { background-color: #0d6efd; color: white; } tr:nth-child(even) { background-color: #f8f9fa; }",
      "xp": 20
    },
    {
      "id": 48,
      "title": "Text Effects",
      "description": "Ба матн соя, фосилаи ҳарфҳо ва эффекти зебо илова кунед.",
      "requirements": [
        "text-shadow",
        "letter-spacing",
        "text-transform",
        "font-weight"
      ],
      "answer": "h1 { text-shadow: 2px 2px 4px rgba(0,0,0,0.3); letter-spacing: 2px; text-transform: uppercase; font-weight: 700; }",
      "xp": 20
    },
    {
      "id": 49,
      "title": "Градиентҳои мураккаб",
      "description": "Барои тугма ва замина градиентҳои гуногун созед.",
      "requirements": [
        "linear-gradient",
        "radial-gradient",
        "background-size"
      ],
      "answer": ".btn { background: linear-gradient(90deg, #ff6b6b, #feca57); } .hero { background: radial-gradient(circle, #667eea, #764ba2); }",
      "xp": 20
    },
    {
      "id": 50,
      "title": "Сояҳо ва умқ",
      "description": "Ба кортҳо сояҳои гуногун (оддӣ ва layered) илова кунед.",
      "requirements": [
        "box-shadow",
        "якчанд соя",
        "hover"
      ],
      "answer": ".card { box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08); transition: box-shadow 0.3s; } .card:hover { box-shadow: 0 20px 25px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.04); }",
      "xp": 20
    },
    {
      "id": 51,
      "title": "Dark Mode бо Variables",
      "description": "Бо CSS Variables режими торикро созед ва бо class иваз кунед.",
      "requirements": [
        ":root",
        "[data-theme='dark']",
        "var()",
        "background-color",
        "color"
      ],
      "answer": ":root { --bg: #ffffff; --text: #212529; } [data-theme=\"dark\"] { --bg: #121212; --text: #e0e0e0; } body { background-color: var(--bg); color: var(--text); }",
      "xp": 20
    },
    {
      "id": 52,
      "title": "Loading Spinner",
      "description": "Бо CSS як spinner-и даврзананда созед.",
      "requirements": [
        "@keyframes",
        "border",
        "border-radius: 50%",
        "animation"
      ],
      "answer": ".spinner { width: 40px; height: 40px; border: 4px solid #e9ecef; border-top-color: #0d6efd; border-radius: 50%; animation: spin 0.8s linear infinite; } @keyframes spin { to { transform: rotate(360deg); } }",
      "xp": 20
    },
    {
      "id": 53,
      "title": "Modal бо CSS only",
      "description": "Модали оддиро танҳо бо CSS (бо :target) созед.",
      "requirements": [
        ":target",
        "position: fixed",
        "display",
        "background: rgba"
      ],
      "answer": ".modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); } .modal:target { display: flex; justify-content: center; align-items: center; }",
      "xp": 20
    },
    {
      "id": 54,
      "title": "Sidebar Layout",
      "description": "Саҳифаро бо sidebar ва қисми асосӣ бо Flexbox ё Grid созед.",
      "requirements": [
        "display: flex",
        "width",
        "min-height: 100vh",
        "flex-grow"
      ],
      "answer": ".layout { display: flex; min-height: 100vh; } .sidebar { width: 250px; background: #212529; color: white; } .main { flex-grow: 1; padding: 20px; }",
      "xp": 20
    },
    {
      "id": 55,
      "title": "Gallery бо Grid ва Aspect Ratio",
      "description": "Галереяро бо Grid созед ва ҳамаи суратҳоро квадратӣ нигоҳ доред.",
      "requirements": [
        "display: grid",
        "aspect-ratio",
        "object-fit: cover",
        "gap"
      ],
      "answer": ".gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; } .gallery img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 8px; }",
      "xp": 20
    },
    {
      "id": 56,
      "title": "Advanced Flexbox",
      "description": "Бо flex-grow, flex-shrink ва order элементҳоро идора кунед.",
      "requirements": [
        "flex-grow",
        "flex-shrink",
        "order",
        "display: flex"
      ],
      "answer": ".container { display: flex; } .item1 { flex-grow: 2; } .item2 { flex-shrink: 0; order: -1; }",
      "xp": 20
    },
    {
      "id": 57,
      "title": "Transform-ҳои гуногун",
      "description": "Ба элементҳо skew, rotate, scale ва translate илова кунед.",
      "requirements": [
        "transform",
        "rotate",
        "scale",
        "translate",
        "skew"
      ],
      "answer": ".box1 { transform: rotate(10deg); } .box2 { transform: scale(1.2) translateX(20px); } .box3 { transform: skewX(-10deg); }",
      "xp": 20
    },
    {
      "id": 58,
      "title": "Landing Page – Стилҳои пурра",
      "description": "Барои як саҳифаи landing (header, hero, cards, footer) стильҳои пурра нависед.",
      "requirements": [
        "Flexbox ё Grid",
        "Media Query",
        "Variables",
        "Transition",
        "Hover effects"
      ],
      "answer": ":root { --primary: #0d6efd; } header { display: flex; justify-content: space-between; padding: 16px 32px; } .hero { text-align: center; padding: 80px 20px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; } .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; padding: 40px 20px; } @media (max-width: 768px) { header { flex-direction: column; gap: 12px; } }",
      "xp": 20
    }
  ],
  "Tailwind": [
    {
      "id": 59,
      "title": "Корти шахсӣ бо Tailwind",
      "description": "Корти шахсиро пурра бо utility-классҳои Tailwind созед (акс, ном, синну сол, шаҳр).",
      "requirements": [
        "max-w-sm",
        "rounded-xl",
        "shadow-lg",
        "p-6",
        "text-center"
      ],
      "answer": "<div class=\"max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6 text-center\">\n  <img class=\"w-24 h-24 rounded-full mx-auto object-cover\" src=\"profile.jpg\" alt=\"Акс\">\n  <h1 class=\"text-2xl font-bold mt-4\">Муҳаммад</h1>\n  <p class=\"text-gray-600\">17 сол • Душанбе</p>\n</div>",
      "xp": 20
    },
    {
      "id": 60,
      "title": "Навигацияи горизонталӣ",
      "description": "Менюи горизонталӣ бо Tailwind созед. Элементҳоро бо flex ҷойгир кунед ва hover илова кунед.",
      "requirements": [
        "flex",
        "items-center",
        "gap-6",
        "hover:text-blue-600",
        "transition"
      ],
      "answer": "<nav class=\"flex items-center justify-between px-6 py-4 bg-white shadow\">\n  <div class=\"text-xl font-bold\">Logo</div>\n  <ul class=\"flex gap-6\">\n    <li><a href=\"#\" class=\"text-gray-700 hover:text-blue-600 transition\">Асосӣ</a></li>\n    <li><a href=\"#\" class=\"text-gray-700 hover:text-blue-600 transition\">Дар бораи</a></li>\n    <li><a href=\"#\" class=\"text-gray-700 hover:text-blue-600 transition\">Тамос</a></li>\n  </ul>\n</nav>",
      "xp": 20
    },
    {
      "id": 61,
      "title": "Тугмаҳои зебо",
      "description": "Се намуди тугма (асосӣ, дуюмдараҷа ва хатарнок) бо Tailwind созед.",
      "requirements": [
        "bg-blue-600",
        "hover:bg-blue-700",
        "rounded-lg",
        "px-5 py-2.5",
        "transition"
      ],
      "answer": "<div class=\"flex gap-4\">\n  <button class=\"bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition\">Асосӣ</button>\n  <button class=\"bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2.5 rounded-lg transition\">Дуюм</button>\n  <button class=\"bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg transition\">Хатар</button>\n</div>",
      "xp": 20
    },
    {
      "id": 62,
      "title": "Hero Section",
      "description": "Қисми hero-ро бо унвон, матн ва тугма созед. Заминаи градиентӣ истифода баред.",
      "requirements": [
        "bg-gradient-to-r",
        "from-blue-600 to-purple-600",
        "text-white",
        "text-center",
        "py-20"
      ],
      "answer": "<section class=\"bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-20 px-4\">\n  <h1 class=\"text-4xl md:text-5xl font-bold mb-4\">Хуш омадед!</h1>\n  <p class=\"text-lg mb-8 max-w-2xl mx-auto\">Ин як саҳифаи зебо бо Tailwind CSS аст.</p>\n  <button class=\"bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition\">Оғоз кунед</button>\n</section>",
      "xp": 20
    },
    {
      "id": 63,
      "title": "Grid – кортҳои маҳсулот",
      "description": "Се корти маҳсулотро бо Grid дар як қатор ҷойгир кунед.",
      "requirements": [
        "grid",
        "grid-cols-1 md:grid-cols-3",
        "gap-6",
        "rounded-xl",
        "shadow"
      ],
      "answer": "<div class=\"grid grid-cols-1 md:grid-cols-3 gap-6 p-6\">\n  <div class=\"bg-white rounded-xl shadow p-5\">\n    <h3 class=\"font-bold text-lg\">Маҳсулот 1</h3>\n    <p class=\"text-gray-600 mt-2\">Тавсифи кӯтоҳ</p>\n    <p class=\"text-blue-600 font-bold mt-3\">120 с</p>\n  </div>\n  <div class=\"bg-white rounded-xl shadow p-5\">\n    <h3 class=\"font-bold text-lg\">Маҳсулот 2</h3>\n    <p class=\"text-gray-600 mt-2\">Тавсифи кӯтоҳ</p>\n    <p class=\"text-blue-600 font-bold mt-3\">90 с</p>\n  </div>\n  <div class=\"bg-white rounded-xl shadow p-5\">\n    <h3 class=\"font-bold text-lg\">Маҳсулот 3</h3>\n    <p class=\"text-gray-600 mt-2\">Тавсифи кӯтоҳ</p>\n    <p class=\"text-blue-600 font-bold mt-3\">150 с</p>\n  </div>\n</div>",
      "xp": 20
    },
    {
      "id": 64,
      "title": "Форма бо Tailwind",
      "description": "Формаи бақайдгирӣ бо input, label ва тугма созед.",
      "requirements": [
        "space-y-4",
        "w-full",
        "border",
        "rounded-lg",
        "focus:ring-2"
      ],
      "answer": "<form class=\"max-w-md mx-auto space-y-4 p-6 bg-white rounded-xl shadow\">\n  <div>\n    <label class=\"block text-sm font-medium mb-1\">Ном</label>\n    <input type=\"text\" class=\"w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500\">\n  </div>\n  <div>\n    <label class=\"block text-sm font-medium mb-1\">Email</label>\n    <input type=\"email\" class=\"w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500\">\n  </div>\n  <button class=\"w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg transition\">Бақайдгирӣ</button>\n</form>",
      "xp": 20
    },
    {
      "id": 65,
      "title": "Badge ва Tag-ҳо",
      "description": "Якчанд badge бо рангҳои гуногун созед.",
      "requirements": [
        "inline-flex",
        "px-3 py-1",
        "rounded-full",
        "text-sm",
        "font-medium"
      ],
      "answer": "<div class=\"flex flex-wrap gap-2\">\n  <span class=\"inline-flex px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800\">Асосӣ</span>\n  <span class=\"inline-flex px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800\">Муваффақ</span>\n  <span class=\"inline-flex px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800\">Хатар</span>\n  <span class=\"inline-flex px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800\">Огоҳӣ</span>\n</div>",
      "xp": 20
    },
    {
      "id": 66,
      "title": "Карточкаи профил бо hover",
      "description": "Корти профилро созед, ки ҳангоми hover каме калон шавад ва сояаш зиёд гардад.",
      "requirements": [
        "transition",
        "hover:scale-105",
        "hover:shadow-xl",
        "duration-300"
      ],
      "answer": "<div class=\"max-w-xs bg-white rounded-xl shadow-md p-6 text-center transition duration-300 hover:scale-105 hover:shadow-xl\">\n  <img class=\"w-20 h-20 rounded-full mx-auto object-cover\" src=\"profile.jpg\" alt=\"Акс\">\n  <h2 class=\"text-xl font-bold mt-3\">Зарина</h2>\n  <p class=\"text-gray-500\">Frontend Developer</p>\n</div>",
      "xp": 20
    },
    {
      "id": 67,
      "title": "Responsive Navbar",
      "description": "Navbar-ро созед, ки дар мобилка меню пинҳон шавад (танҳо дизайн, бе JS).",
      "requirements": [
        "flex",
        "justify-between",
        "hidden md:flex",
        "px-4 py-3"
      ],
      "answer": "<nav class=\"flex items-center justify-between px-4 py-3 bg-white shadow\">\n  <div class=\"text-xl font-bold\">Logo</div>\n  <ul class=\"hidden md:flex gap-6\">\n    <li><a href=\"#\" class=\"hover:text-blue-600\">Асосӣ</a></li>\n    <li><a href=\"#\" class=\"hover:text-blue-600\">Хизматҳо</a></li>\n    <li><a href=\"#\" class=\"hover:text-blue-600\">Тамос</a></li>\n  </ul>\n  <button class=\"md:hidden text-2xl\">☰</button>\n</nav>",
      "xp": 20
    },
    {
      "id": 68,
      "title": "Pricing Cards",
      "description": "Се нақшаи нархгузориро бо Grid созед. Яке аз онҳоро «маъмул» нишон диҳед.",
      "requirements": [
        "grid md:grid-cols-3",
        "border-2 border-blue-600",
        "scale-105",
        "relative"
      ],
      "answer": "<div class=\"grid grid-cols-1 md:grid-cols-3 gap-6 p-6\">\n  <div class=\"bg-white rounded-xl shadow p-6 text-center\">\n    <h3 class=\"font-bold text-lg\">Basic</h3>\n    <p class=\"text-3xl font-bold mt-2\">$9</p>\n  </div>\n  <div class=\"bg-white rounded-xl shadow-lg p-6 text-center border-2 border-blue-600 relative scale-105\">\n    <span class=\"absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full\">Маъмул</span>\n    <h3 class=\"font-bold text-lg\">Pro</h3>\n    <p class=\"text-3xl font-bold mt-2\">$29</p>\n  </div>\n  <div class=\"bg-white rounded-xl shadow p-6 text-center\">\n    <h3 class=\"font-bold text-lg\">Enterprise</h3>\n    <p class=\"text-3xl font-bold mt-2\">$99</p>\n  </div>\n</div>",
      "xp": 20
    },
    {
      "id": 69,
      "title": "Alert Messages",
      "description": "Чор намуди паём (success, error, warning, info) бо Tailwind созед.",
      "requirements": [
        "bg-green-100",
        "border-l-4",
        "p-4",
        "rounded"
      ],
      "answer": "<div class=\"space-y-3\">\n  <div class=\"bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded\">Муваффақият!</div>\n  <div class=\"bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded\">Хатогӣ рух дод</div>\n  <div class=\"bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded\">Огоҳӣ</div>\n  <div class=\"bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded\">Маълумот</div>\n</div>",
      "xp": 20
    },
    {
      "id": 70,
      "title": "Testimonial Card",
      "description": "Корти шарҳи муштариро бо акс, ном ва матн созед.",
      "requirements": [
        "flex",
        "items-center",
        "gap-4",
        "rounded-xl",
        "shadow"
      ],
      "answer": "<div class=\"max-w-md bg-white rounded-xl shadow p-6\">\n  <p class=\"text-gray-600 italic\">\"Хизмати аъло ва дастгирии зуд. Тавсия медиҳам!\"</p>\n  <div class=\"flex items-center gap-4 mt-4\">\n    <img class=\"w-12 h-12 rounded-full object-cover\" src=\"user.jpg\" alt=\"Акс\">\n    <div>\n      <h4 class=\"font-bold\">Алишер</h4>\n      <p class=\"text-sm text-gray-500\">Муштарӣ</p>\n    </div>\n  </div>\n</div>",
      "xp": 20
    },
    {
      "id": 71,
      "title": "Stats Section",
      "description": "Қисми оморро бо 4 рақами калон созед.",
      "requirements": [
        "grid grid-cols-2 md:grid-cols-4",
        "text-center",
        "text-3xl font-bold"
      ],
      "answer": "<div class=\"grid grid-cols-2 md:grid-cols-4 gap-6 py-12 text-center\">\n  <div>\n    <p class=\"text-3xl font-bold text-blue-600\">1200+</p>\n    <p class=\"text-gray-600 mt-1\">Муштариён</p>\n  </div>\n  <div>\n    <p class=\"text-3xl font-bold text-blue-600\">98%</p>\n    <p class=\"text-gray-600 mt-1\">Қаноатмандӣ</p>\n  </div>\n  <div>\n    <p class=\"text-3xl font-bold text-blue-600\">50+</p>\n    <p class=\"text-gray-600 mt-1\">Лоиҳаҳо</p>\n  </div>\n  <div>\n    <p class=\"text-3xl font-bold text-blue-600\">24/7</p>\n    <p class=\"text-gray-600 mt-1\">Дастгирӣ</p>\n  </div>\n</div>",
      "xp": 20
    },
    {
      "id": 72,
      "title": "Dark Mode Card",
      "description": "Кортеро созед, ки дар режими торик низ зебо намояд (бо dark: классҳо).",
      "requirements": [
        "dark:bg-gray-800",
        "dark:text-white",
        "bg-white",
        "rounded-xl"
      ],
      "answer": "<div class=\"max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6\">\n  <h2 class=\"text-xl font-bold text-gray-900 dark:text-white\">Корти торик</h2>\n  <p class=\"mt-2 text-gray-600 dark:text-gray-300\">Ин корт дар ҳар ду режим зебо аст.</p>\n</div>",
      "xp": 20
    },
    {
      "id": 73,
      "title": "Modal Design",
      "description": "Дизайни модалро бо Tailwind созед (бе функсия, танҳо UI).",
      "requirements": [
        "fixed inset-0",
        "bg-black/50",
        "flex items-center justify-center",
        "rounded-xl"
      ],
      "answer": "<div class=\"fixed inset-0 bg-black/50 flex items-center justify-center p-4\">\n  <div class=\"bg-white rounded-xl shadow-xl max-w-md w-full p-6\">\n    <h2 class=\"text-xl font-bold mb-3\">Модал</h2>\n    <p class=\"text-gray-600 mb-6\">Ин як модали оддӣ бо Tailwind аст.</p>\n    <div class=\"flex justify-end gap-3\">\n      <button class=\"px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300\">Бекор</button>\n      <button class=\"px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700\">Тасдиқ</button>\n    </div>\n  </div>\n</div>",
      "xp": 20
    },
    {
      "id": 74,
      "title": "Sidebar Layout",
      "description": "Саҳифаро бо sidebar ва қисми асосӣ созед.",
      "requirements": [
        "flex",
        "min-h-screen",
        "w-64",
        "flex-1"
      ],
      "answer": "<div class=\"flex min-h-screen\">\n  <aside class=\"w-64 bg-gray-900 text-white p-6\">\n    <h2 class=\"text-xl font-bold mb-6\">Меню</h2>\n    <ul class=\"space-y-3\">\n      <li><a href=\"#\" class=\"hover:text-blue-400\">Асосӣ</a></li>\n      <li><a href=\"#\" class=\"hover:text-blue-400\">Профил</a></li>\n      <li><a href=\"#\" class=\"hover:text-blue-400\">Танзимот</a></li>\n    </ul>\n  </aside>\n  <main class=\"flex-1 p-8 bg-gray-50\">\n    <h1 class=\"text-2xl font-bold\">Мундариҷа</h1>\n  </main>\n</div>",
      "xp": 20
    },
    {
      "id": 75,
      "title": "Image Gallery",
      "description": "Галереяи суратҳоро бо Grid ва aspect-ratio созед.",
      "requirements": [
        "grid grid-cols-2 md:grid-cols-4",
        "aspect-square",
        "object-cover",
        "rounded-lg"
      ],
      "answer": "<div class=\"grid grid-cols-2 md:grid-cols-4 gap-3 p-4\">\n  <img src=\"1.jpg\" class=\"w-full aspect-square object-cover rounded-lg\" alt=\"\">\n  <img src=\"2.jpg\" class=\"w-full aspect-square object-cover rounded-lg\" alt=\"\">\n  <img src=\"3.jpg\" class=\"w-full aspect-square object-cover rounded-lg\" alt=\"\">\n  <img src=\"4.jpg\" class=\"w-full aspect-square object-cover rounded-lg\" alt=\"\">\n</div>",
      "xp": 20
    },
    {
      "id": 76,
      "title": "Loading Spinner",
      "description": "Spinner-и даврзанандаро танҳо бо Tailwind созед.",
      "requirements": [
        "animate-spin",
        "rounded-full",
        "border-4",
        "border-t-blue-600"
      ],
      "answer": "<div class=\"flex justify-center items-center h-40\">\n  <div class=\"w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin\"></div>\n</div>",
      "xp": 20
    },
    {
      "id": 77,
      "title": "Footer",
      "description": "Footer-и пурра бо лого, истинодҳо ва ҳуқуқи муаллиф созед.",
      "requirements": [
        "bg-gray-900",
        "text-white",
        "grid md:grid-cols-3",
        "py-12"
      ],
      "answer": "<footer class=\"bg-gray-900 text-white py-12 px-6\">\n  <div class=\"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8\">\n    <div>\n      <h3 class=\"text-xl font-bold mb-3\">Logo</h3>\n      <p class=\"text-gray-400\">Тавсифи кӯтоҳи ширкат.</p>\n    </div>\n    <div>\n      <h4 class=\"font-semibold mb-3\">Истинодҳо</h4>\n      <ul class=\"space-y-2 text-gray-400\">\n        <li><a href=\"#\" class=\"hover:text-white\">Асосӣ</a></li>\n        <li><a href=\"#\" class=\"hover:text-white\">Дар бораи</a></li>\n      </ul>\n    </div>\n    <div>\n      <h4 class=\"font-semibold mb-3\">Тамос</h4>\n      <p class=\"text-gray-400\">info@example.com</p>\n    </div>\n  </div>\n  <div class=\"text-center text-gray-500 mt-8 pt-6 border-t border-gray-800\">\n    © 2026 Ҳамаи ҳуқуқҳо ҳифз шудаанд.\n  </div>\n</footer>",
      "xp": 20
    },
    {
      "id": 78,
      "title": "Progress Bar",
      "description": "Наворҳои пешрафтро бо фоизҳои гуногун созед.",
      "requirements": [
        "bg-gray-200",
        "rounded-full",
        "h-3",
        "bg-blue-600"
      ],
      "answer": "<div class=\"space-y-4 max-w-md\">\n  <div>\n    <div class=\"flex justify-between text-sm mb-1\"><span>HTML</span><span>90%</span></div>\n    <div class=\"w-full bg-gray-200 rounded-full h-3\">\n      <div class=\"bg-blue-600 h-3 rounded-full\" style=\"width: 90%\"></div>\n    </div>\n  </div>\n  <div>\n    <div class=\"flex justify-between text-sm mb-1\"><span>CSS</span><span>75%</span></div>\n    <div class=\"w-full bg-gray-200 rounded-full h-3\">\n      <div class=\"bg-blue-600 h-3 rounded-full\" style=\"width: 75%\"></div>\n    </div>\n  </div>\n</div>",
      "xp": 20
    },
    {
      "id": 79,
      "title": "Team Members",
      "description": "Кортҳои аъзои дастаро бо Grid созед.",
      "requirements": [
        "grid md:grid-cols-3",
        "text-center",
        "rounded-full",
        "object-cover"
      ],
      "answer": "<div class=\"grid grid-cols-1 md:grid-cols-3 gap-8 p-6\">\n  <div class=\"text-center\">\n    <img src=\"team1.jpg\" class=\"w-32 h-32 rounded-full mx-auto object-cover\" alt=\"\">\n    <h3 class=\"font-bold mt-3\">Аҳмад</h3>\n    <p class=\"text-gray-500\">Frontend</p>\n  </div>\n  <div class=\"text-center\">\n    <img src=\"team2.jpg\" class=\"w-32 h-32 rounded-full mx-auto object-cover\" alt=\"\">\n    <h3 class=\"font-bold mt-3\">Зарина</h3>\n    <p class=\"text-gray-500\">Designer</p>\n  </div>\n  <div class=\"text-center\">\n    <img src=\"team3.jpg\" class=\"w-32 h-32 rounded-full mx-auto object-cover\" alt=\"\">\n    <h3 class=\"font-bold mt-3\">Ҷамшед</h3>\n    <p class=\"text-gray-500\">Backend</p>\n  </div>\n</div>",
      "xp": 20
    },
    {
      "id": 80,
      "title": "Feature Section",
      "description": "Се хусусияти маҳсулотро бо икона ва матн нишон диҳед.",
      "requirements": [
        "grid md:grid-cols-3",
        "text-center",
        "p-6",
        "rounded-xl"
      ],
      "answer": "<div class=\"grid grid-cols-1 md:grid-cols-3 gap-6 p-8\">\n  <div class=\"text-center p-6 bg-white rounded-xl shadow\">\n    <div class=\"text-4xl mb-3\">⚡</div>\n    <h3 class=\"font-bold text-lg\">Зуд</h3>\n    <p class=\"text-gray-600 mt-2\">Суръати баланд</p>\n  </div>\n  <div class=\"text-center p-6 bg-white rounded-xl shadow\">\n    <div class=\"text-4xl mb-3\">🔒</div>\n    <h3 class=\"font-bold text-lg\">Амният</h3>\n    <p class=\"text-gray-600 mt-2\">Ҳифзи пурра</p>\n  </div>\n  <div class=\"text-center p-6 bg-white rounded-xl shadow\">\n    <div class=\"text-4xl mb-3\">📱</div>\n    <h3 class=\"font-bold text-lg\">Responsive</h3>\n    <p class=\"text-gray-600 mt-2\">Дар ҳама дастгоҳҳо</p>\n  </div>\n</div>",
      "xp": 20
    },
    {
      "id": 81,
      "title": "Blog Cards",
      "description": "Кортҳои блогро бо акс, унвон ва сана созед.",
      "requirements": [
        "grid md:grid-cols-3",
        "overflow-hidden",
        "rounded-xl",
        "object-cover"
      ],
      "answer": "<div class=\"grid grid-cols-1 md:grid-cols-3 gap-6 p-6\">\n  <article class=\"bg-white rounded-xl shadow overflow-hidden\">\n    <img src=\"blog1.jpg\" class=\"w-full h-48 object-cover\" alt=\"\">\n    <div class=\"p-5\">\n      <p class=\"text-sm text-gray-500\">12 сентябр 2026</p>\n      <h3 class=\"font-bold text-lg mt-1\">Унвони мақола</h3>\n      <p class=\"text-gray-600 mt-2 text-sm\">Тавсифи кӯтоҳи мақола...</p>\n    </div>\n  </article>\n</div>",
      "xp": 20
    },
    {
      "id": 82,
      "title": "Input Group",
      "description": "Майдони ҷустуҷӯро бо тугмаи паҳлӯ созед.",
      "requirements": [
        "flex",
        "rounded-lg",
        "overflow-hidden",
        "border"
      ],
      "answer": "<div class=\"flex max-w-md border border-gray-300 rounded-lg overflow-hidden\">\n  <input type=\"text\" placeholder=\"Ҷустуҷӯ...\" class=\"flex-1 px-4 py-2 outline-none\">\n  <button class=\"bg-blue-600 text-white px-5 hover:bg-blue-700 transition\">Ҷустуҷӯ</button>\n</div>",
      "xp": 20
    },
    {
      "id": 83,
      "title": "Timeline",
      "description": "Хатти вақтро (timeline) бо Tailwind созед.",
      "requirements": [
        "border-l-2",
        "pl-6",
        "relative",
        "space-y-8"
      ],
      "answer": "<div class=\"border-l-2 border-blue-600 pl-6 space-y-8 ml-4\">\n  <div class=\"relative\">\n    <div class=\"absolute -left-[31px] w-4 h-4 bg-blue-600 rounded-full\"></div>\n    <h3 class=\"font-bold\">2024</h3>\n    <p class=\"text-gray-600\">Оғози лоиҳа</p>\n  </div>\n  <div class=\"relative\">\n    <div class=\"absolute -left-[31px] w-4 h-4 bg-blue-600 rounded-full\"></div>\n    <h3 class=\"font-bold\">2025</h3>\n    <p class=\"text-gray-600\">Нашри версияи 1.0</p>\n  </div>\n  <div class=\"relative\">\n    <div class=\"absolute -left-[31px] w-4 h-4 bg-blue-600 rounded-full\"></div>\n    <h3 class=\"font-bold\">2026</h3>\n    <p class=\"text-gray-600\">Рушди ҷорӣ</p>\n  </div>\n</div>",
      "xp": 20
    },
    {
      "id": 84,
      "title": "Pricing Toggle Design",
      "description": "Тугмаҳои ивазкунандаи нарх (моҳона/солона) созед.",
      "requirements": [
        "inline-flex",
        "bg-gray-200",
        "rounded-full",
        "p-1"
      ],
      "answer": "<div class=\"inline-flex bg-gray-200 rounded-full p-1\">\n  <button class=\"px-5 py-2 rounded-full bg-white shadow text-sm font-medium\">Моҳона</button>\n  <button class=\"px-5 py-2 rounded-full text-sm font-medium text-gray-600\">Солона</button>\n</div>",
      "xp": 20
    },
    {
      "id": 85,
      "title": "Notification Bell",
      "description": "Иконаи огоҳӣ бо нишон (badge) созед.",
      "requirements": [
        "relative",
        "absolute",
        "-top-1 -right-1",
        "bg-red-500",
        "rounded-full"
      ],
      "answer": "<div class=\"relative inline-block\">\n  <span class=\"text-2xl\">🔔</span>\n  <span class=\"absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full\">3</span>\n</div>",
      "xp": 20
    },
    {
      "id": 86,
      "title": "Avatar Group",
      "description": "Гурӯҳи аватарҳоро бо ҳамшаклӣ (overlap) созед.",
      "requirements": [
        "flex -space-x-3",
        "rounded-full",
        "ring-2 ring-white"
      ],
      "answer": "<div class=\"flex -space-x-3\">\n  <img class=\"w-10 h-10 rounded-full ring-2 ring-white object-cover\" src=\"a1.jpg\" alt=\"\">\n  <img class=\"w-10 h-10 rounded-full ring-2 ring-white object-cover\" src=\"a2.jpg\" alt=\"\">\n  <img class=\"w-10 h-10 rounded-full ring-2 ring-white object-cover\" src=\"a3.jpg\" alt=\"\">\n  <div class=\"w-10 h-10 rounded-full ring-2 ring-white bg-gray-200 flex items-center justify-center text-sm font-medium\">+5</div>\n</div>",
      "xp": 20
    },
    {
      "id": 87,
      "title": "Empty State",
      "description": "Ҳолати холӣ (вақте маълумот нест) бо икона ва тугма созед.",
      "requirements": [
        "text-center",
        "py-16",
        "text-gray-400",
        "rounded-xl"
      ],
      "answer": "<div class=\"text-center py-16\">\n  <div class=\"text-6xl mb-4\">📭</div>\n  <h3 class=\"text-xl font-semibold text-gray-700\">Ҳеҷ чиз ёфт нашуд</h3>\n  <p class=\"text-gray-500 mt-2 mb-6\">Ҳоло ягон маълумот мавҷуд нест.</p>\n  <button class=\"bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition\">Илова кардан</button>\n</div>",
      "xp": 20
    },
    {
      "id": 88,
      "title": "Landing Page – Пурра",
      "description": "Як саҳифаи landing-ро бо header, hero, features, ва footer бо Tailwind созед.",
      "requirements": [
        "Истифодаи grid ва flex",
        "Responsive (md: ва lg:)",
        "hover ва transition",
        "gradient",
        "shadow ва rounded"
      ],
      "answer": "<!-- Header -->\n<nav class=\"flex items-center justify-between px-6 py-4 bg-white shadow\">\n  <div class=\"text-xl font-bold\">Brand</div>\n  <ul class=\"hidden md:flex gap-6\">\n    <li><a href=\"#\" class=\"hover:text-blue-600\">Асосӣ</a></li>\n    <li><a href=\"#\" class=\"hover:text-blue-600\">Хизматҳо</a></li>\n  </ul>\n</nav>\n\n<!-- Hero -->\n<section class=\"bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-20 px-4\">\n  <h1 class=\"text-4xl md:text-5xl font-bold mb-4\">Хуш омадед ба лоиҳаи мо</h1>\n  <p class=\"text-lg mb-8 max-w-2xl mx-auto opacity-90\">Тавсифи кӯтоҳи маҳсулот ё хизмат.</p>\n  <button class=\"bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition\">Оғоз кунед</button>\n</section>\n\n<!-- Features -->\n<section class=\"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-16 px-4\">\n  <div class=\"bg-white p-6 rounded-xl shadow text-center\">\n    <div class=\"text-3xl mb-3\">🚀</div>\n    <h3 class=\"font-bold\">Зуд</h3>\n    <p class=\"text-gray-600 mt-2\">Суръати баланд</p>\n  </div>\n  <div class=\"bg-white p-6 rounded-xl shadow text-center\">\n    <div class=\"text-3xl mb-3\">🎨</div>\n    <h3 class=\"font-bold\">Зебо</h3>\n    <p class=\"text-gray-600 mt-2\">Дизайни замонавӣ</p>\n  </div>\n  <div class=\"bg-white p-6 rounded-xl shadow text-center\">\n    <div class=\"text-3xl mb-3\">📱</div>\n    <h3 class=\"font-bold\">Responsive</h3>\n    <p class=\"text-gray-600 mt-2\">Дар ҳама дастгоҳҳо</p>\n  </div>\n</section>",
      "xp": 20
    }
  ],
  "JavaScript": [
    {
      "id": 89,
      "title": "Ҷамъи ду адад",
      "description": "Барномаи JavaScript созед, ки ду ададро гирифта ҷамъашонро нишон диҳад.",
      "requirements": [
        "Истифодаи input",
        "Истифодаи Number",
        "Истифодаи function",
        "Нишон додани натиҷа"
      ],
      "answer": "function addNumbers() {\n  const a = Number(document.getElementById(\"a\").value);\n  const b = Number(document.getElementById(\"b\").value);\n\n  const result = a + b;\n\n  document.getElementById(\"result\").textContent = result;\n}",
      "xp": 30
    },
    {
      "id": 90,
      "title": "Counter",
      "description": "Counter созед, ки бо пахши тугма рақам зиёд шавад.",
      "requirements": [
        "Истифодаи let",
        "Истифодаи function",
        "Истифодаи addEventListener",
        "Тағйир додани textContent"
      ],
      "answer": "let count = 0;\n\nconst button = document.getElementById(\"btn\");\nconst result = document.getElementById(\"result\");\n\nbutton.addEventListener(\"click\", () => {\n  count++;\n  result.textContent = count;\n});",
      "xp": 30
    },
    {
      "id": 91,
      "title": "Адад ҷуфт ё тоқ",
      "description": "Барнома созед, ки муайян кунад адади воридшуда ҷуфт аст ё тоқ.",
      "requirements": [
        "Истифодаи if",
        "Истифодаи %",
        "Истифодаи input",
        "Нишон додани натиҷа"
      ],
      "answer": "function checkNumber() {\n  const number = Number(document.getElementById(\"number\").value);\n\n  if (number % 2 === 0) {\n    document.getElementById(\"result\").textContent = \"Адад ҷуфт аст\";\n  } else {\n    document.getElementById(\"result\").textContent = \"Адад тоқ аст\";\n  }\n}",
      "xp": 30
    },
    {
      "id": 92,
      "title": "Ҳисобкунаки синну сол",
      "description": "Барнома созед, ки аз соли таваллуд синну соли корбарро ҳисоб кунад.",
      "requirements": [
        "Истифодаи Date",
        "Истифодаи input",
        "Истифодаи function",
        "Истифодаи оператори ҳисоб"
      ],
      "answer": "function calculateAge() {\n  const birthYear = Number(document.getElementById(\"year\").value);\n  const currentYear = new Date().getFullYear();\n\n  const age = currentYear - birthYear;\n\n  document.getElementById(\"result\").textContent =\n    \"Синну соли шумо: \" + age;\n}",
      "xp": 30
    },
    {
      "id": 93,
      "title": "Тағйири матн",
      "description": "Бо пахши тугма матни элементро тағйир диҳед.",
      "requirements": [
        "Истифодаи getElementById",
        "Истифодаи addEventListener",
        "Истифодаи textContent"
      ],
      "answer": "const button = document.getElementById(\"btn\");\n\nbutton.addEventListener(\"click\", () => {\n  document.getElementById(\"text\").textContent =\n    \"Матн тағйир ёфт!\";\n});",
      "xp": 30
    },
    {
      "id": 94,
      "title": "Ранги тасодуфӣ",
      "description": "Бо пахши тугма background-и саҳифаро ба ранги тасодуфӣ иваз кунед.",
      "requirements": [
        "Истифодаи Math.random",
        "Истифодаи Math.floor",
        "Истифодаи addEventListener",
        "Истифодаи style"
      ],
      "answer": "const button = document.getElementById(\"btn\");\n\nbutton.addEventListener(\"click\", () => {\n  const color = \"#\" + Math.floor(Math.random() * 16777215)\n    .toString(16);\n\n  document.body.style.backgroundColor = color;\n});",
      "xp": 30
    },
    {
      "id": 95,
      "title": "Миқдори символҳо",
      "description": "Шумораи символҳои матни input-ро ҳисоб кунед.",
      "requirements": [
        "Истифодаи input",
        "Истифодаи length",
        "Истифодаи addEventListener"
      ],
      "answer": "const input = document.getElementById(\"text\");\nconst result = document.getElementById(\"result\");\n\ninput.addEventListener(\"input\", () => {\n  result.textContent = \"Символҳо: \" + input.value.length;\n});",
      "xp": 30
    },
    {
      "id": 96,
      "title": "Uppercase ва Lowercase",
      "description": "Матни воридшударо ба ҳарфи калон ва хурд табдил диҳед.",
      "requirements": [
        "Истифодаи toUpperCase",
        "Истифодаи toLowerCase",
        "Истифодаи input"
      ],
      "answer": "function changeText() {\n  const text = document.getElementById(\"text\").value;\n\n  document.getElementById(\"upper\").textContent =\n    text.toUpperCase();\n\n  document.getElementById(\"lower\").textContent =\n    text.toLowerCase();\n}",
      "xp": 30
    },
    {
      "id": 97,
      "title": "Reverse String",
      "description": "Барнома созед, ки матнро баръакс нишон диҳад.",
      "requirements": [
        "Истифодаи split",
        "Истифодаи reverse",
        "Истифодаи join"
      ],
      "answer": "function reverseText() {\n  const text = document.getElementById(\"text\").value;\n\n  const result = text\n    .split(\"\")\n    .reverse()\n    .join(\"\");\n\n  document.getElementById(\"result\").textContent = result;\n}",
      "xp": 30
    },
    {
      "id": 98,
      "title": "Калкулятор",
      "description": "Калкулятори оддӣ барои ҷамъ, тарҳ, зарб ва тақсим созед.",
      "requirements": [
        "Истифодаи function",
        "Истифодаи if ё switch",
        "Истифодаи input",
        "Истифодаи операторҳои математикӣ"
      ],
      "answer": "function calculate(operator) {\n  const a = Number(document.getElementById(\"a\").value);\n  const b = Number(document.getElementById(\"b\").value);\n\n  let result;\n\n  switch (operator) {\n    case \"+\":\n      result = a + b;\n      break;\n    case \"-\":\n      result = a - b;\n      break;\n    case \"*\":\n      result = a * b;\n      break;\n    case \"/\":\n      result = b !== 0 ? a / b : \"Ба сифр тақсим кардан мумкин нест\";\n      break;\n  }\n\n  document.getElementById(\"result\").textContent = result;\n}",
      "xp": 30
    },
    {
      "id": 99,
      "title": "Миқдори ададҳо дар Array",
      "description": "Аз array шумораи элементҳоро муайян кунед.",
      "requirements": [
        "Истифодаи array",
        "Истифодаи length",
        "Нишон додани натиҷа"
      ],
      "answer": "const numbers = [10, 20, 30, 40, 50];\n\nconst result = numbers.length;\n\nconsole.log(\"Миқдори элементҳо:\", result);",
      "xp": 30
    },
    {
      "id": 100,
      "title": "Ҷамъи Array",
      "description": "Ҷамъи ҳамаи ададҳои array-ро ҳисоб кунед.",
      "requirements": [
        "Истифодаи array",
        "Истифодаи reduce",
        "Нишон додани натиҷа"
      ],
      "answer": "const numbers = [10, 20, 30, 40, 50];\n\nconst sum = numbers.reduce((total, number) => {\n  return total + number;\n}, 0);\n\nconsole.log(sum);",
      "xp": 30
    },
    {
      "id": 101,
      "title": "Адади калонтарин",
      "description": "Калонтарин ададро аз array пайдо кунед.",
      "requirements": [
        "Истифодаи Math.max",
        "Истифодаи spread operator",
        "Истифодаи array"
      ],
      "answer": "const numbers = [15, 42, 8, 91, 23];\n\nconst max = Math.max(...numbers);\n\nconsole.log(\"Калонтарин адад:\", max);",
      "xp": 30
    },
    {
      "id": 102,
      "title": "Адади хурдтарин",
      "description": "Хурдтарин ададро аз array пайдо кунед.",
      "requirements": [
        "Истифодаи Math.min",
        "Истифодаи spread operator",
        "Истифодаи array"
      ],
      "answer": "const numbers = [15, 42, 8, 91, 23];\n\nconst min = Math.min(...numbers);\n\nconsole.log(\"Хурдтарин адад:\", min);",
      "xp": 30
    },
    {
      "id": 103,
      "title": "Filter кардани ададҳои ҷуфт",
      "description": "Аз array танҳо ададҳои ҷуфтро гирифта нишон диҳед.",
      "requirements": [
        "Истифодаи filter",
        "Истифодаи %",
        "Истифодаи array"
      ],
      "answer": "const numbers = [1, 2, 3, 4, 5, 6, 7, 8];\n\nconst evenNumbers = numbers.filter(number => {\n  return number % 2 === 0;\n});\n\nconsole.log(evenNumbers);",
      "xp": 30
    },
    {
      "id": 104,
      "title": "Map кардани номҳо",
      "description": "Бо map аз array-и номҳо рӯйхати нави салом сохта диҳед.",
      "requirements": [
        "Истифодаи map",
        "Истифодаи array",
        "Истифодаи template literal"
      ],
      "answer": "const names = [\"Muhammad\", \"Ali\", \"Ahmad\"];\n\nconst messages = names.map(name => {\n  return `Салом, ${name}!`;\n});\n\nconsole.log(messages);",
      "xp": 30
    },
    {
      "id": 105,
      "title": "Ҷустуҷӯи корбар",
      "description": "Дар array-и объектҳо корбарро аз рӯи ID пайдо кунед.",
      "requirements": [
        "Истифодаи array of objects",
        "Истифодаи find",
        "Истифодаи id"
      ],
      "answer": "const users = [\n  { id: 1, name: \"Muhammad\" },\n  { id: 2, name: \"Ali\" },\n  { id: 3, name: \"Ahmad\" }\n];\n\nconst user = users.find(user => user.id === 2);\n\nconsole.log(user);",
      "xp": 30
    },
    {
      "id": 106,
      "title": "Todo List",
      "description": "Todo List созед, ки корбар метавонад вазифаи нав илова кунад.",
      "requirements": [
        "Истифодаи array",
        "Истифодаи push",
        "Истифодаи input",
        "Истифодаи createElement",
        "Истифодаи addEventListener"
      ],
      "answer": "const tasks = [];\n\nconst input = document.getElementById(\"taskInput\");\nconst button = document.getElementById(\"addBtn\");\nconst list = document.getElementById(\"list\");\n\nbutton.addEventListener(\"click\", () => {\n  const task = input.value.trim();\n\n  if (!task) return;\n\n  tasks.push(task);\n\n  const li = document.createElement(\"li\");\n  li.textContent = task;\n\n  list.appendChild(li);\n\n  input.value = \"\";\n});",
      "xp": 30
    },
    {
      "id": 107,
      "title": "Delete кардани элемент",
      "description": "Тугма созед, ки элементро аз DOM нест кунад.",
      "requirements": [
        "Истифодаи remove",
        "Истифодаи addEventListener",
        "Истифодаи DOM"
      ],
      "answer": "const button = document.getElementById(\"deleteBtn\");\nconst item = document.getElementById(\"item\");\n\nbutton.addEventListener(\"click\", () => {\n  item.remove();\n});",
      "xp": 30
    },
    {
      "id": 108,
      "title": "Show / Hide",
      "description": "Бо пахши тугма элементро нишон диҳед ё пинҳон кунед.",
      "requirements": [
        "Истифодаи classList",
        "Истифодаи toggle",
        "Истифодаи addEventListener"
      ],
      "answer": "const button = document.getElementById(\"btn\");\nconst text = document.getElementById(\"text\");\n\nbutton.addEventListener(\"click\", () => {\n  text.classList.toggle(\"hidden\");\n});",
      "xp": 30
    },
    {
      "id": 109,
      "title": "Dark Mode",
      "description": "Барои саҳифа dark mode созед.",
      "requirements": [
        "Истифодаи classList",
        "Истифодаи toggle",
        "Истифодаи addEventListener"
      ],
      "answer": "const button = document.getElementById(\"darkMode\");\n\nbutton.addEventListener(\"click\", () => {\n  document.body.classList.toggle(\"dark\");\n});",
      "xp": 30
    },
    {
      "id": 110,
      "title": "Digital Clock",
      "description": "Соати рақамӣ созед, ки вақти ҳозираро нишон диҳад.",
      "requirements": [
        "Истифодаи Date",
        "Истифодаи setInterval",
        "Истифодаи textContent"
      ],
      "answer": "function updateClock() {\n  const now = new Date();\n\n  const time = now.toLocaleTimeString();\n\n  document.getElementById(\"clock\").textContent = time;\n}\n\nsetInterval(updateClock, 1000);\n\nupdateClock();",
      "xp": 30
    },
    {
      "id": 111,
      "title": "Countdown",
      "description": "Countdown созед, ки аз 10 то 0 ҳисоб кунад.",
      "requirements": [
        "Истифодаи setInterval",
        "Истифодаи let",
        "Истифодаи clearInterval"
      ],
      "answer": "let count = 10;\n\nconst interval = setInterval(() => {\n  document.getElementById(\"result\").textContent = count;\n\n  count--;\n\n  if (count < 0) {\n    clearInterval(interval);\n    document.getElementById(\"result\").textContent = \"Тамом шуд!\";\n  }\n}, 1000);",
      "xp": 30
    },
    {
      "id": 112,
      "title": "Random Number",
      "description": "Бо пахши тугма адади тасодуфӣ аз 1 то 100 нишон диҳед.",
      "requirements": [
        "Истифодаи Math.random",
        "Истифодаи Math.floor",
        "Истифодаи addEventListener"
      ],
      "answer": "const button = document.getElementById(\"btn\");\nconst result = document.getElementById(\"result\");\n\nbutton.addEventListener(\"click\", () => {\n  const number = Math.floor(Math.random() * 100) + 1;\n\n  result.textContent = number;\n});",
      "xp": 30
    },
    {
      "id": 113,
      "title": "Password Generator",
      "description": "Барномаи одии сохтани пароли тасодуфӣ созед.",
      "requirements": [
        "Истифодаи string",
        "Истифодаи Math.random",
        "Истифодаи loop",
        "Истифодаи function"
      ],
      "answer": "function generatePassword() {\n  const chars =\n    \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n\n  let password = \"\";\n\n  for (let i = 0; i < 8; i++) {\n    const index = Math.floor(Math.random() * chars.length);\n\n    password += chars[index];\n  }\n\n  document.getElementById(\"password\").textContent = password;\n}",
      "xp": 30
    },
    {
      "id": 114,
      "title": "Form Validation",
      "description": "Form созед, ки email ва password-ро санҷад.",
      "requirements": [
        "Истифодаи submit",
        "Истифодаи preventDefault",
        "Истифодаи if",
        "Санҷиши input"
      ],
      "answer": "const form = document.getElementById(\"form\");\n\nform.addEventListener(\"submit\", event => {\n  event.preventDefault();\n\n  const email = document.getElementById(\"email\").value;\n  const password = document.getElementById(\"password\").value;\n\n  if (!email || !password) {\n    document.getElementById(\"result\").textContent =\n      \"Ҳамаи майдонҳоро пур кунед\";\n    return;\n  }\n\n  if (password.length < 6) {\n    document.getElementById(\"result\").textContent =\n      \"Парол бояд камаш 6 символ дошта бошад\";\n    return;\n  }\n\n  document.getElementById(\"result\").textContent =\n    \"Form дуруст пур карда шуд\";\n});",
      "xp": 30
    },
    {
      "id": 115,
      "title": "LocalStorage",
      "description": "Номи корбарро дар LocalStorage нигоҳ доред ва баъд нишон диҳед.",
      "requirements": [
        "Истифодаи localStorage.setItem",
        "Истифодаи localStorage.getItem",
        "Истифодаи input"
      ],
      "answer": "function saveName() {\n  const name = document.getElementById(\"name\").value;\n\n  localStorage.setItem(\"username\", name);\n\n  showName();\n}\n\nfunction showName() {\n  const name = localStorage.getItem(\"username\");\n\n  document.getElementById(\"result\").textContent =\n    name || \"Ном сабт нашудааст\";\n}\n\nshowName();",
      "xp": 30
    },
    {
      "id": 116,
      "title": "Array Sort",
      "description": "Array-и ададҳоро аз хурд ба калон sort кунед.",
      "requirements": [
        "Истифодаи sort",
        "Истифодаи function",
        "Истифодаи array"
      ],
      "answer": "const numbers = [50, 10, 80, 20, 5];\n\nnumbers.sort((a, b) => a - b);\n\nconsole.log(numbers);",
      "xp": 30
    },
    {
      "id": 117,
      "title": "Object ва Destructuring",
      "description": "Аз object номи корбар ва сатҳи ӯро бо destructuring гиред.",
      "requirements": [
        "Истифодаи object",
        "Истифодаи destructuring",
        "Истифодаи console.log"
      ],
      "answer": "const user = {\n  name: \"Muhammad\",\n  level: \"Junior\",\n  xp: 2500\n};\n\nconst { name, level, xp } = user;\n\nconsole.log(name);\nconsole.log(level);\nconsole.log(xp);",
      "xp": 30
    },
    {
      "id": 118,
      "title": "Mini Quiz",
      "description": "Як тест-системаи хурд созед, ки ҷавоби дурустро санҷад ва хол диҳад.",
      "requirements": [
        "Истифодаи array of objects",
        "Истифодаи if",
        "Истифодаи function",
        "Истифодаи score",
        "Истифодаи DOM"
      ],
      "answer": "const questions = [\n  {\n    question: \"JavaScript барои чӣ истифода мешавад?\",\n    answer: \"Web\"\n  },\n  {\n    question: \"React чист?\",\n    answer: \"Library\"\n  },\n  {\n    question: \"HTML барои чӣ истифода мешавад?\",\n    answer: \"Structure\"\n  }\n];\n\nlet score = 0;\n\nfunction checkAnswer(index, userAnswer) {\n  if (userAnswer === questions[index].answer) {\n    score += 10;\n  }\n\n  document.getElementById(\"score\").textContent =\n    \"XP: \" + score;\n}",
      "xp": 30
    }
  ],
  "React": [
    {
      "id": 119,
      "title": "Counter бо useState",
      "description": "Бо React Counter созед, ки бо пахши тугма рақам зиёд шавад.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи button",
        "Истифодаи onClick",
        "Тағйир додани state"
      ],
      "answer": "import { useState } from \"react\";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <h1>{count}</h1>\n\n      <button onClick={() => setCount(count + 1)}>\n        Зиёд кардан\n      </button>\n    </div>\n  );\n}\n\nexport default Counter;",
      "xp": 30
    },
    {
      "id": 120,
      "title": "Кам кардани Counter",
      "description": "Counter созед, ки рақамро зиёд ва кам карда тавонад.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи ду button",
        "Истифодаи onClick"
      ],
      "answer": "import { useState } from \"react\";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <h1>{count}</h1>\n\n      <button onClick={() => setCount(count + 1)}>\n        +\n      </button>\n\n      <button onClick={() => setCount(count - 1)}>\n        -\n      </button>\n    </div>\n  );\n}\n\nexport default Counter;",
      "xp": 30
    },
    {
      "id": 121,
      "title": "Рӯйхати номҳо",
      "description": "Array-и номҳоро бо map дар React нишон диҳед.",
      "requirements": [
        "Истифодаи array",
        "Истифодаи map",
        "Истифодаи key",
        "Истифодаи JSX"
      ],
      "answer": "function NamesList() {\n  const names = [\"Muhammad\", \"Ali\", \"Ahmad\"];\n\n  return (\n    <ul>\n      {names.map((name, index) => (\n        <li key={index}>{name}</li>\n      ))}\n    </ul>\n  );\n}\n\nexport default NamesList;",
      "xp": 30
    },
    {
      "id": 122,
      "title": "UserCard бо Props",
      "description": "Компоненти UserCard созед, ки маълумоти корбарро аз props гирад.",
      "requirements": [
        "Истифодаи component",
        "Истифодаи props",
        "Истифодаи JSX"
      ],
      "answer": "function UserCard({ name, age, city }) {\n  return (\n    <div>\n      <h2>{name}</h2>\n      <p>Синну сол: {age}</p>\n      <p>Шаҳр: {city}</p>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <UserCard\n      name=\"Muhammad\"\n      age={17}\n      city=\"Hisor\"\n    />\n  );\n}\n\nexport default App;",
      "xp": 30
    },
    {
      "id": 123,
      "title": "Input бо useState",
      "description": "Input созед, ки арзиши он дар state нигоҳ дошта шавад.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи input",
        "Истифодаи onChange",
        "Истифодаи value"
      ],
      "answer": "import { useState } from \"react\";\n\nfunction App() {\n  const [name, setName] = useState(\"\");\n\n  return (\n    <div>\n      <input\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n        placeholder=\"Номи худро ворид кунед\"\n      />\n\n      <p>Ном: {name}</p>\n    </div>\n  );\n}\n\nexport default App;",
      "xp": 30
    },
    {
      "id": 124,
      "title": "Show / Hide",
      "description": "Бо пахши тугма матнро нишон диҳед ё пинҳон кунед.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи onClick",
        "Истифодаи шарт"
      ],
      "answer": "import { useState } from \"react\";\n\nfunction App() {\n  const [show, setShow] = useState(true);\n\n  return (\n    <div>\n      <button onClick={() => setShow(!show)}>\n        {show ? \"Пинҳон кардан\" : \"Нишон додан\"}\n      </button>\n\n      {show && <p>Ин матн нишон дода шудааст.</p>}\n    </div>\n  );\n}\n\nexport default App;",
      "xp": 30
    },
    {
      "id": 125,
      "title": "Login Form",
      "description": "Form-и Login созед, ки email ва password-ро аз state идора кунад.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи form",
        "Истифодаи input",
        "Истифодаи onSubmit"
      ],
      "answer": "import { useState } from \"react\";\n\nfunction Login() {\n  const [email, setEmail] = useState(\"\");\n  const [password, setPassword] = useState(\"\");\n\n  function handleSubmit(e) {\n    e.preventDefault();\n\n    console.log({\n      email,\n      password\n    });\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type=\"email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        placeholder=\"Email\"\n      />\n\n      <input\n        type=\"password\"\n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n        placeholder=\"Password\"\n      />\n\n      <button type=\"submit\">\n        Ворид шудан\n      </button>\n    </form>\n  );\n}\n\nexport default Login;",
      "xp": 30
    },
    {
      "id": 126,
      "title": "Todo List",
      "description": "Дар React Todo List созед, ки вазифаи нав илова кунад.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи array",
        "Истифодаи map",
        "Истифодаи push ё spread"
      ],
      "answer": "import { useState } from \"react\";\n\nfunction Todo() {\n  const [task, setTask] = useState(\"\");\n  const [tasks, setTasks] = useState([]);\n\n  function addTask() {\n    if (!task.trim()) return;\n\n    setTasks([...tasks, task]);\n    setTask(\"\");\n  }\n\n  return (\n    <div>\n      <input\n        value={task}\n        onChange={(e) => setTask(e.target.value)}\n        placeholder=\"Вазифа\"\n      />\n\n      <button onClick={addTask}>\n        Илова кардан\n      </button>\n\n      <ul>\n        {tasks.map((item, index) => (\n          <li key={index}>{item}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nexport default Todo;",
      "xp": 30
    },
    {
      "id": 127,
      "title": "Delete Todo",
      "description": "Ба Todo List имконияти нест кардани вазифаро илова кунед.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи filter",
        "Истифодаи map"
      ],
      "answer": "import { useState } from \"react\";\n\nfunction Todo() {\n  const [tasks, setTasks] = useState([\n    \"HTML омӯзидан\",\n    \"CSS омӯзидан\",\n    \"React омӯзидан\"\n  ]);\n\n  function deleteTask(index) {\n    setTasks(tasks.filter((_, i) => i !== index));\n  }\n\n  return (\n    <ul>\n      {tasks.map((task, index) => (\n        <li key={index}>\n          {task}\n\n          <button onClick={() => deleteTask(index)}>\n            Нест кардан\n          </button>\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nexport default Todo;",
      "xp": 30
    },
    {
      "id": 128,
      "title": "Product List",
      "description": "Рӯйхати маҳсулотро аз array бо map нишон диҳед.",
      "requirements": [
        "Истифодаи array of objects",
        "Истифодаи map",
        "Истифодаи key",
        "Истифодаи JSX"
      ],
      "answer": "function Products() {\n  const products = [\n    { id: 1, name: \"Телефон\", price: 2500 },\n    { id: 2, name: \"Ноутбук\", price: 6000 },\n    { id: 3, name: \"Гӯшмонак\", price: 300 }\n  ];\n\n  return (\n    <div>\n      {products.map((product) => (\n        <div key={product.id}>\n          <h2>{product.name}</h2>\n          <p>{product.price} сомонӣ</p>\n        </div>\n      ))}\n    </div>\n  );\n}\n\nexport default Products;",
      "xp": 30
    },
    {
      "id": 129,
      "title": "Search Filter",
      "description": "Ҷустуҷӯ созед, ки маҳсулотро аз рӯи ном filter кунад.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи filter",
        "Истифодаи input",
        "Истифодаи includes"
      ],
      "answer": "import { useState } from \"react\";\n\nfunction Products() {\n  const [search, setSearch] = useState(\"\");\n\n  const products = [\n    \"Телефон\",\n    \"Ноутбук\",\n    \"Гӯшмонак\",\n    \"Клавиатура\"\n  ];\n\n  const filteredProducts = products.filter((product) =>\n    product.toLowerCase().includes(search.toLowerCase())\n  );\n\n  return (\n    <div>\n      <input\n        value={search}\n        onChange={(e) => setSearch(e.target.value)}\n        placeholder=\"Ҷустуҷӯ...\"\n      />\n\n      {filteredProducts.map((product, index) => (\n        <p key={index}>{product}</p>\n      ))}\n    </div>\n  );\n}\n\nexport default Products;",
      "xp": 30
    },
    {
      "id": 130,
      "title": "useEffect",
      "description": "Бо useEffect ҳангоми кушода шудани component паёмро дар console нишон диҳед.",
      "requirements": [
        "Истифодаи useEffect",
        "Истифодаи component",
        "Истифодаи console.log"
      ],
      "answer": "import { useEffect } from \"react\";\n\nfunction App() {\n  useEffect(() => {\n    console.log(\"Component кушода шуд\");\n  }, []);\n\n  return <h1>Ё-фронтенд</h1>;\n}\n\nexport default App;",
      "xp": 30
    },
    {
      "id": 131,
      "title": "Clock бо useEffect",
      "description": "Соати рақамиро бо useState ва useEffect созед.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи useEffect",
        "Истифодаи setInterval",
        "Истифодаи Date"
      ],
      "answer": "import { useEffect, useState } from \"react\";\n\nfunction Clock() {\n  const [time, setTime] = useState(\n    new Date().toLocaleTimeString()\n  );\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setTime(new Date().toLocaleTimeString());\n    }, 1000);\n\n    return () => clearInterval(interval);\n  }, []);\n\n  return <h1>{time}</h1>;\n}\n\nexport default Clock;",
      "xp": 30
    },
    {
      "id": 132,
      "title": "Toggle Theme",
      "description": "Бо React имконияти тағйир додани theme байни light ва dark созед.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи className",
        "Истифодаи onClick"
      ],
      "answer": "import { useState } from \"react\";\n\nfunction App() {\n  const [dark, setDark] = useState(false);\n\n  return (\n    <div\n      className={\n        dark\n          ? \"bg-gray-900 text-white min-h-screen p-6\"\n          : \"bg-white text-black min-h-screen p-6\"\n      }\n    >\n      <button onClick={() => setDark(!dark)}>\n        {dark ? \"Light Mode\" : \"Dark Mode\"}\n      </button>\n\n      <h1 className=\"text-3xl mt-5\">\n        Ё-фронтенд\n      </h1>\n    </div>\n  );\n}\n\nexport default App;",
      "xp": 30
    },
    {
      "id": 133,
      "title": "Select ва State",
      "description": "Select созед ва арзиши интихобшударо нишон диҳед.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи select",
        "Истифодаи onChange"
      ],
      "answer": "import { useState } from \"react\";\n\nfunction App() {\n  const [technology, setTechnology] = useState(\"\");\n\n  return (\n    <div>\n      <select\n        value={technology}\n        onChange={(e) => setTechnology(e.target.value)}\n      >\n        <option value=\"\">Интихоб кунед</option>\n        <option value=\"HTML\">HTML</option>\n        <option value=\"CSS\">CSS</option>\n        <option value=\"React\">React</option>\n      </select>\n\n      <p>Технология: {technology}</p>\n    </div>\n  );\n}\n\nexport default App;",
      "xp": 30
    },
    {
      "id": 134,
      "title": "Checkbox",
      "description": "Checkbox созед ва ҳолати интихоб шуданашро нишон диҳед.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи checkbox",
        "Истифодаи checked",
        "Истифодаи onChange"
      ],
      "answer": "import { useState } from \"react\";\n\nfunction App() {\n  const [accepted, setAccepted] = useState(false);\n\n  return (\n    <div>\n      <label>\n        <input\n          type=\"checkbox\"\n          checked={accepted}\n          onChange={(e) => setAccepted(e.target.checked)}\n        />\n\n        Қоидаҳоро қабул мекунам\n      </label>\n\n      <p>\n        {accepted ? \"Қабул шуд\" : \"Қабул нашуд\"}\n      </p>\n    </div>\n  );\n}\n\nexport default App;",
      "xp": 30
    },
    {
      "id": 135,
      "title": "Component-и Button",
      "description": "Component-и универсалии Button созед, ки text ва onClick-ро аз props гирад.",
      "requirements": [
        "Истифодаи component",
        "Истифодаи props",
        "Истифодаи onClick"
      ],
      "answer": "function Button({ text, onClick }) {\n  return (\n    <button onClick={onClick}>\n      {text}\n    </button>\n  );\n}\n\nfunction App() {\n  function handleClick() {\n    alert(\"Тугма пахш шуд\");\n  }\n\n  return (\n    <Button\n      text=\"Пахш кунед\"\n      onClick={handleClick}\n    />\n  );\n}\n\nexport default App;",
      "xp": 30
    },
    {
      "id": 136,
      "title": "Card Component",
      "description": "Component-и Card созед, ки title ва description-ро аз props гирад.",
      "requirements": [
        "Истифодаи props",
        "Истифодаи component",
        "Истифодаи JSX"
      ],
      "answer": "function Card({ title, description }) {\n  return (\n    <div>\n      <h2>{title}</h2>\n      <p>{description}</p>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      <Card\n        title=\"HTML\"\n        description=\"HTML сохтори вебсайтро месозад.\"\n      />\n\n      <Card\n        title=\"React\"\n        description=\"React барои сохтани UI истифода мешавад.\"\n      />\n    </div>\n  );\n}\n\nexport default App;",
      "xp": 30
    },
    {
      "id": 137,
      "title": "Children Props",
      "description": "Component созед, ки content-ро тавассути children қабул кунад.",
      "requirements": [
        "Истифодаи children",
        "Истифодаи component",
        "Истифодаи JSX"
      ],
      "answer": "function Card({ children }) {\n  return (\n    <div className=\"border p-4 rounded\">\n      {children}\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <Card>\n      <h2>Салом!</h2>\n      <p>Ин маълумот дар дохили Card мебошад.</p>\n    </Card>\n  );\n}\n\nexport default App;",
      "xp": 30
    },
    {
      "id": 138,
      "title": "React Form",
      "description": "Form созед, ки ном ва email-ро қабул кунад ва баъд нишон диҳад.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи form",
        "Истифодаи onSubmit",
        "Истифодаи preventDefault"
      ],
      "answer": "import { useState } from \"react\";\n\nfunction Form() {\n  const [name, setName] = useState(\"\");\n  const [email, setEmail] = useState(\"\");\n  const [result, setResult] = useState(null);\n\n  function handleSubmit(e) {\n    e.preventDefault();\n\n    setResult({\n      name,\n      email\n    });\n  }\n\n  return (\n    <div>\n      <form onSubmit={handleSubmit}>\n        <input\n          value={name}\n          onChange={(e) => setName(e.target.value)}\n          placeholder=\"Ном\"\n        />\n\n        <input\n          value={email}\n          onChange={(e) => setEmail(e.target.value)}\n          placeholder=\"Email\"\n        />\n\n        <button type=\"submit\">\n          Сабт кардан\n        </button>\n      </form>\n\n      {result && (\n        <div>\n          <p>Ном: {result.name}</p>\n          <p>Email: {result.email}</p>\n        </div>\n      )}\n    </div>\n  );\n}\n\nexport default Form;",
      "xp": 30
    },
    {
      "id": 139,
      "title": "Score System",
      "description": "Системаи хол созед, ки бо пахши ҷавоби дуруст 10 хол илова кунад.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи function",
        "Истифодаи onClick",
        "Илова кардани XP"
      ],
      "answer": "import { useState } from \"react\";\n\nfunction Quiz() {\n  const [score, setScore] = useState(0);\n\n  function correctAnswer() {\n    setScore(score + 10);\n  }\n\n  return (\n    <div>\n      <h2>XP: {score}</h2>\n\n      <button onClick={correctAnswer}>\n        Ҷавоби дуруст\n      </button>\n    </div>\n  );\n}\n\nexport default Quiz;",
      "xp": 30
    },
    {
      "id": 140,
      "title": "Question Component",
      "description": "Component барои саволи тест созед, ки question ва options-ро аз props гирад.",
      "requirements": [
        "Истифодаи props",
        "Истифодаи map",
        "Истифодаи key",
        "Истифодаи button"
      ],
      "answer": "function Question({ question, options }) {\n  return (\n    <div>\n      <h2>{question}</h2>\n\n      {options.map((option, index) => (\n        <button key={index}>\n          {option}\n        </button>\n      ))}\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <Question\n      question=\"React чист?\"\n      options={[\n        \"Library\",\n        \"Database\",\n        \"Operating System\",\n        \"Browser\"\n      ]}\n    />\n  );\n}\n\nexport default App;",
      "xp": 30
    },
    {
      "id": 141,
      "title": "Conditional Rendering",
      "description": "Агар корбар login шуда бошад Profile ва агар login нашуда бошад Login нишон диҳед.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи шарт",
        "Истифодаи conditional rendering"
      ],
      "answer": "import { useState } from \"react\";\n\nfunction App() {\n  const [isLoggedIn, setIsLoggedIn] = useState(false);\n\n  return (\n    <div>\n      {isLoggedIn ? (\n        <h1>Profile</h1>\n      ) : (\n        <h1>Login</h1>\n      )}\n\n      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>\n        Тағйир додан\n      </button>\n    </div>\n  );\n}\n\nexport default App;",
      "xp": 30
    },
    {
      "id": 142,
      "title": "User Profile",
      "description": "Profile созед, ки ном, email, level ва XP-и корбарро нишон диҳад.",
      "requirements": [
        "Истифодаи object",
        "Истифодаи props",
        "Истифодаи JSX"
      ],
      "answer": "function Profile({ user }) {\n  return (\n    <div>\n      <h1>{user.name}</h1>\n      <p>Email: {user.email}</p>\n      <p>Level: {user.level}</p>\n      <p>XP: {user.xp}</p>\n    </div>\n  );\n}\n\nfunction App() {\n  const user = {\n    name: \"Muhammad\",\n    email: \"muhammad@example.com\",\n    level: \"Junior\",\n    xp: 2500\n  };\n\n  return <Profile user={user} />;\n}\n\nexport default App;",
      "xp": 30
    },
    {
      "id": 143,
      "title": "useMemo",
      "description": "Бо useMemo натиҷаи ҳисобкунии қиматро нигоҳ доред.",
      "requirements": [
        "Истифодаи useMemo",
        "Истифодаи useState",
        "Истифодаи function"
      ],
      "answer": "import { useMemo, useState } from \"react\";\n\nfunction App() {\n  const [number, setNumber] = useState(5);\n  const [count, setCount] = useState(0);\n\n  const squared = useMemo(() => {\n    return number * number;\n  }, [number]);\n\n  return (\n    <div>\n      <h2>Натиҷа: {squared}</h2>\n\n      <button onClick={() => setNumber(number + 1)}>\n        Тағйири адад\n      </button>\n\n      <button onClick={() => setCount(count + 1)}>\n        Count: {count}\n      </button>\n    </div>\n  );\n}\n\nexport default App;",
      "xp": 30
    },
    {
      "id": 144,
      "title": "useRef",
      "description": "Бо useRef ба input дастрасӣ пайдо кунед ва онро focus кунед.",
      "requirements": [
        "Истифодаи useRef",
        "Истифодаи useEffect ё onClick",
        "Истифодаи focus"
      ],
      "answer": "import { useRef } from \"react\";\n\nfunction App() {\n  const inputRef = useRef(null);\n\n  function focusInput() {\n    inputRef.current.focus();\n  }\n\n  return (\n    <div>\n      <input\n        ref={inputRef}\n        placeholder=\"Нависед...\"\n      />\n\n      <button onClick={focusInput}>\n        Focus\n      </button>\n    </div>\n  );\n}\n\nexport default App;",
      "xp": 30
    },
    {
      "id": 145,
      "title": "Context API",
      "description": "Бо Context API номи корбарро ба component-и дигар интиқол диҳед.",
      "requirements": [
        "Истифодаи createContext",
        "Истифодаи useContext",
        "Истифодаи Provider"
      ],
      "answer": "import {\n  createContext,\n  useContext\n} from \"react\";\n\nconst UserContext = createContext();\n\nfunction Profile() {\n  const user = useContext(UserContext);\n\n  return <h1>Салом, {user.name}</h1>;\n}\n\nfunction App() {\n  const user = {\n    name: \"Muhammad\"\n  };\n\n  return (\n    <UserContext.Provider value={user}>\n      <Profile />\n    </UserContext.Provider>\n  );\n}\n\nexport default App;",
      "xp": 30
    },
    {
      "id": 146,
      "title": "Fetch API",
      "description": "Аз API маълумот гирифта, рӯйхати корбаронро нишон диҳед.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи useEffect",
        "Истифодаи fetch",
        "Истифодаи map"
      ],
      "answer": "import { useEffect, useState } from \"react\";\n\nfunction Users() {\n  const [users, setUsers] = useState([]);\n\n  useEffect(() => {\n    fetch(\"https://jsonplaceholder.typicode.com/users\")\n      .then((response) => response.json())\n      .then((data) => setUsers(data));\n  }, []);\n\n  return (\n    <div>\n      {users.map((user) => (\n        <p key={user.id}>\n          {user.name}\n        </p>\n      ))}\n    </div>\n  );\n}\n\nexport default Users;",
      "xp": 30
    },
    {
      "id": 147,
      "title": "Loading State",
      "description": "Ҳангоми гирифтани маълумот аз API ҳолати Loading нишон диҳед.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи useEffect",
        "Истифодаи fetch",
        "Истифодаи conditional rendering"
      ],
      "answer": "import { useEffect, useState } from \"react\";\n\nfunction Users() {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    fetch(\"https://jsonplaceholder.typicode.com/users\")\n      .then((response) => response.json())\n      .then((data) => {\n        setUsers(data);\n        setLoading(false);\n      });\n  }, []);\n\n  if (loading) {\n    return <h2>Loading...</h2>;\n  }\n\n  return (\n    <div>\n      {users.map((user) => (\n        <p key={user.id}>{user.name}</p>\n      ))}\n    </div>\n  );\n}\n\nexport default Users;",
      "xp": 30
    },
    {
      "id": 148,
      "title": "Mini Test System",
      "description": "Бо React системаи хурди тест созед, ки савол, вариантҳо, хол ва натиҷаи охиринро нишон диҳад.",
      "requirements": [
        "Истифодаи useState",
        "Истифодаи array of objects",
        "Истифодаи map",
        "Истифодаи conditional rendering",
        "Истифодаи score",
        "Истифодаи button"
      ],
      "answer": "import { useState } from \"react\";\n\nfunction Quiz() {\n  const questions = [\n    {\n      question: \"React чист?\",\n      options: [\n        \"Library\",\n        \"Database\",\n        \"Browser\",\n        \"Operating System\"\n      ],\n      answer: \"Library\"\n    },\n    {\n      question: \"Кадом Hook state-ро идора мекунад?\",\n      options: [\n        \"useState\",\n        \"useHTML\",\n        \"useCSS\",\n        \"useButton\"\n      ],\n      answer: \"useState\"\n    },\n    {\n      question: \"JSX дар куҷо истифода мешавад?\",\n      options: [\n        \"React\",\n        \"SQL\",\n        \"MySQL\",\n        \"Git\"\n      ],\n      answer: \"React\"\n    }\n  ];\n\n  const [index, setIndex] = useState(0);\n  const [score, setScore] = useState(0);\n  const [finished, setFinished] = useState(false);\n\n  function checkAnswer(option) {\n    if (option === questions[index].answer) {\n      setScore(score + 10);\n    }\n\n    if (index + 1 < questions.length) {\n      setIndex(index + 1);\n    } else {\n      setFinished(true);\n    }\n  }\n\n  if (finished) {\n    return (\n      <div>\n        <h1>Тест тамом шуд!</h1>\n        <h2>XP: {score}</h2>\n      </div>\n    );\n  }\n\n  return (\n    <div>\n      <h2>\n        {questions[index].question}\n      </h2>\n\n      {questions[index].options.map((option) => (\n        <button\n          key={option}\n          onClick={() => checkAnswer(option)}\n        >\n          {option}\n        </button>\n      ))}\n    </div>\n  );\n}\n\nexport default Quiz;",
      "xp": 30
    },
    {
      "id": 149,
      "title": "Ҷадвали донишҷӯён",
      "description": "Ҷадвал созед, ки номи донишҷӯ, синну сол ва натиҷаи ӯро нишон диҳад.",
      "requirements": [
        "Истифодаи table",
        "Истифодаи thead",
        "Истифодаи tbody",
        "Истифодаи tr ва td"
      ],
      "answer": "<table border=\"1\"> <thead> <tr> <th>Ном</th> <th>Синну сол</th> <th>Натиҷа</th> </tr> </thead> <tbody> <tr> <td>Muhammad</td> <td>17</td> <td>95</td> </tr> <tr> <td>Ali</td> <td>16</td> <td>88</td> </tr> </tbody> </table>",
      "xp": 20
    }
  ]
};

export default tasks;
