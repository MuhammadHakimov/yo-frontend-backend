export const lessons = {
  HTML: {
    title: "HTML",
    description: "Асосҳои сохтани вебсаҳифа бо HTML",
    lessons: [
      {
        id: "1",
        title: "Дарси 1: Муқаддима ба HTML",
        description:
          "HTML чист ва чӣ гуна сохтори асосии вебсаҳифа сохта мешавад.",
        topics: [
          {
            id: "content_0",
            title: "HTML чист?",
            info: "HTML забони асосии сохтани вебсаҳифаҳо аст. Чизеро, ки шумо дар вебсайт мебинед, мисли тугма, сурат, навиштаҷот, иконка ва логотип, бо ёрии HTML сохта мешавад.",
            explanation:
              "HTML сохтори вебсаҳифаро месозад. CSS барои зебо намудан ва JavaScript барои интерактивӣ кардани саҳифа истифода мешавад.",
            example:
              "Тугма, сурат, навиштаҷот, иконка ва логотип аз элементҳои HTML сохта мешаванд.",
            practice:
              "Муҳаррири кодро кушоед ва аввалин файли index.html-ро созед.",
            video: "https://www.youtube.com/watch?v=_R5a-Kc0pRc",
          },
          {
            id: "content_1",
            title: "HTML, Head ва Body",
            info: "HTML-документ асосан аз се қисми асосӣ иборат аст: html, head ва body.",
            explanation:
              "Дар муҳаррири код файлро бо номи index.html нигоҳ доред ва онро дар браузер кушоед. Ҳамин тавр аввалин вебсаҳифаи худро месозед.",
            example:
              "<html>\n  <head>\n    <title>My Page</title>\n  </head>\n  <body>\n    Hello World\n  </body>\n</html>",
            practice: "Сохтори оссосии HTML-ро дар муҳаррири код нависед.",
            video: "https://www.youtube.com/watch?v=AdC4NraO728",
          },
          {
            id: "content_2",
            title: "Тегҳои сарлавҳа",
            info: "Дар HTML шаш сатҳи сарлавҳа вуҷуд дорад: h1, h2, h3, h4, h5 ва h6.",
            explanation:
              "Одатан h1 барои сарлавҳаи асосӣ истифода мешавад. h2 то h6 барои зерсарлавҳаҳо мебошанд.",
            example:
              "<h1>Сарлавҳаи асосӣ</h1>\n<h2>Зерсарлавҳа</h2>\n<h3>Сарлавҳаи хурдтар</h3>\n<h4>Сарлавҳаи 4</h4>\n<h5>Сарлавҳаи 5</h5>\n<h6>Сарлавҳаи 6</h6>",
            practice: "Ҳамаи тегҳои сарлавҳаро якҷоя истифода баред.",
            video: "https://www.youtube.com/watch?v=k5Js-rFgDJQ",
          },
          {
            id: "content_3",
            title: "Атрибутҳои lang, align ва style",
            info: "Атрибути lang забони ҳуҷҷатро, align ҷойгиршавии элементро ва style намуди элементро муайян мекунад.",
            explanation: "Атрибутҳо дар теги кушодашавӣ навишта мешаванд.",
            example:
              '<html lang="en">\n<body align="center">\n  <h1 style="color: red;">Салом</h1>\n</body>\n</html>',
            practice:
              "Як саҳифа бо истифода аз атрибутҳои lang, align ва style созед.",
            video: "https://www.youtube.com/watch?v=ReS3SVGE0ms",
          },
          {
            id: "content_4",
            title: "Тегҳои div, p ва span",
            info: "Теги div барои гурӯҳбандии элементҳо, p барои параграф ва span барои як қисми хурди матн истифода мешавад.",
            explanation:
              "div одатан ҳамчун контейнер истифода мешавад. p барои матни параграфӣ ва span барои тағйир додани як калима ё қисми матн мувофиқ аст.",
            example:
              "<div>\n  <p>Ин як параграф аст.</p>\n  <p>Ин параграфи дуюм аст.</p>\n  <span>Матни хурд</span>\n</div>",
            practice: "Як div бо ду параграф ва як span созед.",
            video: "https://www.youtube.com/watch?v=LXz5P_-KEYo",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Бо истифода аз тегҳои h1, h2, h3, h4, h5, h6, div, span, p ва атрибутҳои lang, align ва style як вебсаҳифа созед.",
          code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>Home Work</title>\n</head>\n<body align="center">\n  <div style="background-color: lightblue; padding: 20px;">\n    <h1 style="color: red;">Welcome to My Page</h1>\n    <h2 style="color: green;">This is a Subheading</h2>\n    <h3 style="color: blue;">Another Subheading</h3>\n    <p>This is a paragraph of text on my webpage.</p>\n    <p>HTML is fun and easy to learn!</p>\n    <span style="font-weight: bold;">Enjoy coding!</span>\n  </div>\n</body>\n</html>',
        },
      },
      {
        title: "Дарси 2: Форматкунонии матн ва пайвандҳо",
        description: "Омӯзиши тегҳои матнӣ, пайвандҳо, тасвирҳо ва рӯйхатҳо.",
        topics: [
          {
            id: "lesson_2_content_0",
            title: "Тегҳои формати матн",
            info: "Тегҳои strong, b, em, i ва mark барои тағйир додани маъно ё намуди зоҳирии матн истифода мешаванд.",
            explanation:
              "strong матни муҳимро нишон медиҳад, em таъкидро ифода мекунад ва mark матнро бо ранг равшан мекунад.",
            example:
              "<strong>Матни муҳим</strong>\n<b>Матни ғафс</b>\n<em>Матни таъкидшуда</em>\n<i>Матни каҷ</i>\n<mark>Матни равшан</mark>",
            practice:
              "Матнеро бо истифода аз тегҳои strong ва mark тарҳрезӣ кунед.",
            video: "https://www.youtube.com/watch?v=QokojNli-A0",
          },
          {
            id: "lesson_2_content_1",
            title: "Пайвандҳо бо теги <a>",
            info: "Теги <a> барои гузаштан ба саҳифаҳои дигар ё вебсайтҳои беруна истифода мешавад.",
            explanation:
              'Атрибути href суроғаи пайванд ва target="_blank" саҳифаро дар равзанаи нав мекушояд.',
            example:
              '<a href="https://google.com" target="_blank">Ба Google гузар</a>',
            practice:
              "Ду пайванд созед: яке ба сайти беруна ва дигаре ба саҳифаи дохилӣ.",
            video: "https://www.youtube.com/watch?v=09oT2f5aO2A",
          },
          {
            id: "lesson_2_content_2",
            title: "Илова кардани тасвирҳо (<img>)",
            info: "Теги <img> барои нишон додани тасвир дар вебсаҳифа истифода мешавад.",
            explanation:
              "Атрибути src роҳи тасвир ва alt маълумоти иловагӣ (матни алтернативӣ)-ро таъмин мекунанд.",
            example:
              '<img src="https://via.placeholder.com/150" alt="Тасвири намунавӣ" width="150" height="150" />',
            practice:
              "Тасвиреро бо пур кардани атрибутҳои src ва alt илова кунед.",
            video: "https://www.youtube.com/watch?v=sqFwW75Mtu0",
          },
          {
            id: "lesson_2_content_3",
            title: "Рӯйхатҳои тартибдор ва бетартиб",
            info: "Тегҳои <ul> ва <ol> барои сохтани рӯйхатҳо истифода мешаванд.",
            explanation:
              "<ul> рӯйхати бетартиб (бо нуқтаҳо) ва <ol> рӯйхати тартибдор (бо рақамҳо)-ро месозад. Элементҳо дар <li> ҷойгир мешаванд.",
            example:
              "<ul>\n  <li>Олма</li>\n  <li>Банан</li>\n</ul>\n<ol>\n  <li>Қадами аввал</li>\n  <li>Қадами дуюм</li>\n</ol>",
            practice: "Як рӯйхати маҳсулотро бо истифода аз ul ва li созед.",
            video: "https://www.youtube.com/watch?v=ny-ouhU-cCc",
          },
          {
            id: "lesson_2_content_4",
            title: "Тегҳои hr ва br",
            info: "Теги <br> барои ба сатри нав гузаштан ва <hr> барои сохтани хатти уфуқӣ истифода мешавад.",
            explanation: "Ин тегҳо якка мебошанд ва теги басташавӣ надоранд.",
            example:
              "<p>Сатри аввал<br />Сатри дуюм</p>\n<hr />\n<p>Матни зери хат</p>",
            practice: "Дар байни ду параграф хатти уфуқии hr гузоред.",
            video: "https://www.youtube.com/watch?v=EPB0iStlFOE",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Саҳифае созед, ки дорои сарлавҳа, пайванд ба сайти беруна, тасвир ва рӯйхати тартибдор бошад.",
          code: '<!DOCTYPE html>\n<html lang="tg">\n<head>\n  <meta charset="UTF-8" />\n  <title>Lesson 2 Homework</title>\n</head>\n<body>\n  <h1>Саҳифаи шахсии ман</h1>\n  <p>Ман <mark>HTML</mark>-ро бо шавқ меомӯзам.</p>\n  <a href="https://google.com" target="_blank">Ҷустуҷӯ дар Google</a>\n  <hr />\n  <h3>Рӯйхати машғулиятҳои ман:</h3>\n  <ol>\n    <li>Барномасозӣ</li>\n    <li>Китобхонӣ</li>\n  </ol>\n  <br />\n  <img src="https://via.placeholder.com/200" alt="Машғулият" />\n</body>\n</html>',
        },
        id: "2",
      },
      {
        title: "Дарси 3: Ҷадвалҳо ва Мултимедиа",
        description:
          "Сохтани ҷадвалҳо ва илова кардани файлҳои аудио ва видео.",
        topics: [
          {
            id: "lesson_3_content_0",
            title: "Асосҳои ҷадвал бо <table>",
            info: "Теги <table> барои сохтани ҷадвал дар саҳифа истифода мешавад.",
            explanation:
              "tr сатрро, th сарлавҳаи ҷадвалро ва td чашмаки маълумотро ифода мекунад.",
            example:
              '<table border="1">\n  <tr>\n    <th>Ном</th>\n    <th>Синн</th>\n  </tr>\n  <tr>\n    <td>Али</td>\n    <td>20</td>\n  </tr>\n</table>',
            practice: "Ҷадвале созед, ки дорои 2 сатр ва 2 сутун бошад.",
            video: "https://www.youtube.com/watch?v=iDA0kF5lrVk&t=11s",
          },
          {
            id: "lesson_3_content_1",
            title: "Муттаҳидсозии чашмакҳо (colspan, rowspan)",
            info: "Атрибутҳои colspan ва rowspan барои муттаҳид кардани сутунҳо ва сатрҳо хизмат мекунанд.",
            explanation:
              "colspan чашмакҳоро дар самти амудӣ (сутунҳо) ва rowspan дар самти уфуқӣ (сатрҳо) муттаҳид месозад.",
            example:
              '<table border="1">\n  <tr>\n    <th colspan="2">Маълумот</th>\n  </tr>\n  <tr>\n    <td>Али</td>\n    <td>20</td>\n  </tr>\n</table>',
            practice: "Ҷадвале созед, ки сарлавҳаи он ду сутунро фаро гирад.",
            video: "https://www.youtube.com/watch?v=K21yqCmo6Qg",
          },
          {
            id: "lesson_3_content_2",
            title: "Илова кардани Аудио (<audio>)",
            info: "Теги <audio> барои ҷойгир кардани файлҳои аудиоӣ истифода мешавад.",
            explanation:
              "Атрибути controls панели идоракунии аудиоро нишон медиҳад.",
            example:
              '<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n  Браузери шумо аудиоро дастгирӣ намекунад.\n</audio>',
            practice: "Плеери аудиоиро дар саҳифа ҷойгир кунед.",
            video: "https://www.youtube.com/watch?v=uof_zYxtnp0",
          },
          {
            id: "lesson_3_content_3",
            title: "Илова кардани Видео (<video>)",
            info: "Теги <video> барои ҷойгир кардани файлҳои видеоӣ хизмат мекунад.",
            explanation:
              "Бо истифода аз width ва controls шумо метавонед ҳаҷм ва панелро идора кунед.",
            example:
              '<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4">\n</video>',
            practice: "Плеери видеоиро бо атрибути controls созед.",
            video: "https://www.youtube.com/watch?v=BAx2GaMW2qA",
          },
          {
            id: "lesson_3_content_4",
            title: "Фреймҳо бо <iframe>",
            info: "Теги <iframe> барои ворид кардани дигар саҳифаҳо ё видео аз YouTube истифода мешавад.",
            explanation: "Атрибути src суроғаи манбаъро нишон медиҳад.",
            example:
              '<iframe src="https://example.com" width="300" height="200"></iframe>',
            practice: "Видеолоиҳаи YouTube-ро тавассути iframe гузоред.",
            video: "https://www.youtube.com/watch?v=aRGdDy18qfY",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Ҷадвали расмонии бо истифода аз colspan сохташуда ва як плеери видеоиро дар саҳифа ҷойгир кунед.",
          code: '<!DOCTYPE html>\n<html lang="tg">\n<head>\n  <meta charset="UTF-8" />\n  <title>Lesson 3 Homework</title>\n</head>\n<body>\n  <h2>Ҷадвали донишҷӯён</h2>\n  <table border="1" width="100%">\n    <tr>\n      <th colspan="2">Донишҷӯ</th>\n      <th>Балл</th>\n    </tr>\n    <tr>\n      <td>Али</td>\n      <td>Валиев</td>\n      <td>95</td>\n    </tr>\n  </table>\n  <br />\n  <h2>Дарси видеоӣ</h2>\n  <video width="400" controls>\n    <source src="video.mp4" type="video/mp4" />\n  </video>\n</body>\n</html>',
        },
        id: "3",
      },
      {
        title: "Дарси 4: Формаҳо ва воридкунии маълумот",
        description: "Сохтани формаҳо барои ҷамъоварии маълумоти корбарон.",
        topics: [
          {
            id: "lesson_4_content_0",
            title: "Теги <form> ва атрибутҳои он",
            info: "Теги <form> барои сохтани формаҳои HTML хизмат мекунад.",
            explanation:
              "Атрибутҳои action ва method самти фиристодан ва тарзи фиристодани маълумотро муайян мекунанд.",
            example:
              '<form action="/submit" method="POST">\n  <!-- Элементҳои форма -->\n</form>',
            practice: 'Формаи холиро бо атрибути method="POST" созед.',
            video: "https://www.youtube.com/watch?v=_in4LAdxAUA",
          },
          {
            id: "lesson_4_content_1",
            title: "Майдонҳои воридотӣ (<input>)",
            info: "Теги <input> майдонҳои гуногуни воридкуниро месозад.",
            explanation:
              "Намуди майдон аз атрибути type вобаста аст: text, password, email, checkbox, radio ва ғайра.",
            example:
              '<input type="text" placeholder="Номи худро ворид кунед" />\n<input type="password" placeholder="Парол" />',
            practice: "Майдони ворид кардани ном ва паролро созед.",
            video: "https://www.youtube.com/watch?v=ScPhhvz1z5Q",
          },
          {
            id: "lesson_4_content_2",
            title: "Теги <label> ва алоқамандкунӣ",
            info: "Теги <label> барои сохтани навиштаҷот ба майдонҳои воридотӣ истифода мешавад.",
            explanation: "Атрибути for ба id-и теги input пайваст мешавад.",
            example:
              '<label for="username">Номи корбарӣ:</label>\n<input type="text" id="username" name="username" />',
            practice:
              "Пайвасткунии label-ро бо input бо истифода аз for ва id иҷро кунед.",
            video: "https://www.youtube.com/watch?v=ScPhhvz1z5Q",
          },
          {
            id: "lesson_4_content_3",
            title: "Элементҳои <select>, <option> ва <textarea>",
            info: "<select> барои рӯйхати афтода ва <textarea> барои матнҳои калон истифода мешаванд.",
            explanation: "<option> элементҳои рӯйхатро муайян мекунад.",
            example:
              '<select name="city">\n  <option value="dushanbe">Душанбе</option>\n  <option value="khujand">Хуҷанд</option>\n</select>\n<textarea rows="4" cols="50"></textarea>',
            practice: "Рӯйхати изҳор кардани шаҳрҳоро созед.",
            video: "https://www.youtube.com/watch?v=FMjuLXNTPfU",
          },
          {
            id: "lesson_4_content_4",
            title: "Тугмаҳо ва фиристодани форма",
            info: 'Тегҳои <button> ва <input type="submit"> барои фиристодани маълумоти форма истифода мешаванд.',
            explanation: 'Тугмаи type="submit" формаро ба сервер мефиристад.',
            example:
              '<button type="submit">Фиристодан</button>\n<input type="reset" value="Тоза кардан" />',
            practice: "Тугмаи фиристодани маълумотро ба форма илова кунед.",
            video: "https://www.youtube.com/watch?v=scB2C0uNV1s",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Формаи пӯрраи сабти ном (Registration Form) созед, ки дорои ном, парол, шаҳр, ҷинсият ва тугмаи фиристодан бошад.",
          code: '<!DOCTYPE html>\n<html lang="tg">\n<head>\n  <meta charset="UTF-8" />\n  <title>Lesson 4 Homework</title>\n</head>\n<body>\n  <h2>Формаи сабти ном</h2>\n  <form action="#" method="POST">\n    <label for="fullname">Ном ва Насаб:</label><br />\n    <input type="text" id="fullname" required /><br /><br />\n    <label for="email">Почтаи электронӣ:</label><br />\n    <input type="email" id="email" required /><br /><br />\n    <label for="city">Шаҳрро интихоб кунед:</label><br />\n    <select id="city">\n      <option>Душанбе</option>\n      <option>Хуҷанд</option>\n      <option>Бохтар</option>\n    </select><br /><br />\n    <button type="submit">Сабт кардан</button>\n  </form>\n</body>\n</html>',
        },
        id: "4",
      },
      {
        title: "Дарси 5: HTML5 ва сохтори семантикӣ",
        description:
          "Омӯзиши тегҳои семантикӣ барои сохтани сохтори дурусти вебсаҳифа.",
        topics: [
          {
            id: "lesson_5_content_0",
            title: "Тегҳои семантикӣ чист?",
            info: "Тегҳои семантикӣ ба браузер ва муҳаррикон маънои мундариҷаро равшан мефаҳмонанд.",
            explanation:
              "Истифодаи тегҳои семантикӣ барои SEO ва дастрасии сайт (Accessibility) муҳим аст.",
            example:
              "Аз сохторҳои куҳнаи div ба тегҳои <header>, <nav>, <main>, <footer> гузаред.",
            practice: "Сохтори оддиро бе истифодаи div-ҳои зиёдатӣ созед.",
            video: "https://www.youtube.com/watch?v=NUTXZCw64NA",
          },
          {
            id: "lesson_5_content_1",
            title: "Тегҳои <header> ва <nav>",
            info: "<header> қисми болоии сайт ва <nav> панели навигатсияро (пайвандҳо) муайян мекунад.",
            explanation:
              "Одатан логотип ва меню дар <header> ва <nav> ҷойгир мешаванд.",
            example:
              '<header>\n  <h1>Логотип</h1>\n  <nav>\n    <a href="#">Асосӣ</a> |\n    <a href="#">Дар бораи мо</a>\n  </nav>\n</header>',
            practice: "Header-и саҳифаро бо навигатсия созед.",
            video: "https://www.youtube.com/watch?v=NUTXZCw64NA",
          },
          {
            id: "lesson_5_content_2",
            title: "Тегҳои <main>, <article> ва <section>",
            info: "Ин тегҳо барои тақсимоти мундариҷаи асосии саҳифа хизмат мекунанд.",
            explanation:
              "<main> мундариҷаи асосӣ, <section> қисмати мавзӯӣ ва <article> мақолаи мустақилро ифода мекунад.",
            example:
              "<main>\n  <section>\n    <h2>Номи Бахш</h2>\n    <article>\n      <h3>Мақолаи 1</h3>\n      <p>Матни мақола...</p>\n    </article>\n  </section>\n</main>",
            practice:
              "Бахши main созед ва дар он як section ва article ҷой диҳед.",
            video: "https://www.youtube.com/watch?v=C7Sp70_TU40",
          },
          {
            id: "lesson_5_content_3",
            title: "Тегҳои <aside> ва <footer>",
            info: "<aside> барои мундариҷаи иловагӣ (боковка) ва <footer> барои қисми поёнии саҳифа истифода мешавад.",
            explanation:
              "Дар footer маълумот дар бораи ҳуқуқи муаллиф ва тамосҳо ҷойгир мешавад.",
            example:
              "<aside>\n  <h4>Пайвандҳои фоиданок</h4>\n</aside>\n<footer>\n  <p>&copy; 2026 Ҳамаи ҳуқуқҳо ҳифз шудаанд.</p>\n</footer>",
            practice: "Footer-ро барои вебсаҳифаи худ созед.",
            video: "https://www.youtube.com/watch?v=2uKbSQ0mXGA",
          },
          {
            id: "lesson_5_content_4",
            title: "Атрибутҳои HTML5 ва валидатсия",
            info: "Атрибутҳои нав ба монанди required, pattern, placeholder ва type-ҳои нав рафтори саҳифаро беҳтар мекунанд.",
            explanation:
              "Ин атрибутҳо имкон медиҳанд, ки воридоти корбарро бе JavaScript санҷем.",
            example:
              '<input type="email" required placeholder="email@example.com" />',
            practice:
              "Майдони воридоти почтаи электрониро бо атрибутҳои required ва placeholder созед.",
            video: "https://www.youtube.com/watch?v=Lq4tky_6fN0",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Сохтори мукаммали вебсаҳифаро танҳо бо истифода аз тегҳои семантикии HTML5 (header, nav, main, section, article, aside, footer) созед.",
          code: '<!DOCTYPE html>\n<html lang="tg">\n<head>\n  <meta charset="UTF-8" />\n  <title>Lesson 5 Homework</title>\n</head>\n<body>\n  <header>\n    <h1>Вебсайти Омӯзишӣ</h1>\n    <nav>\n      <a href="#">Асосӣ</a> | <a href="#">Дарсҳо</a>\n    </nav>\n  </header>\n  <hr />\n  <main>\n    <section>\n      <h2>Дарси HTML5</h2>\n      <article>\n        <h3>Тегҳои семантикӣ</h3>\n        <p>Сохтори дуруст барои SEO муҳим аст.</p>\n      </article>\n    </section>\n    <aside>\n      <h3>Маълумоти иловагӣ</h3>\n      <p>Дарсҳо ҳар ҳафта нав мешаванд.</p>\n    </aside>\n  </main>\n  <hr />\n  <footer>\n    <p>&copy; 2026 Асосҳои HTML</p>\n  </footer>\n</body>\n</html>',
        },
        id: "5",
      },
    ],
  },
  CSS: {
    title: "CSS",
    description: "Асосҳои зебо кардани вебсаҳифа бо CSS",
    lessons: [
      {
        id: "1",
        title: "Дарси 1: Муқаддима ба CSSSSSSSSSS",
        description:
          "CSS чист, чӣ гуна онро ба HTML пайваст кардан ва асосҳои селекторҳо.",
        topics: [
          {
            id: "content_0",
            title: "CSS чист?",
            info: "CSS (Cascading Style Sheets) забони услубкунии вебсаҳифаҳо аст. Он ба HTML зебоӣ, ранг, андоза ва ҷойгиршавӣ медиҳад.",
            explanation:
              "HTML сохтори саҳифаро месозад, CSS бошад онро зебо мекунад. Бе CSS вебсаҳифаҳо хеле содда ва безеб менамоянд.",
            example:
              "body {\n  background-color: lightblue;\n  color: darkblue;\n}",
            video: "https://www.youtube.com/watch?v=-439WcEL0ek",
          },
          {
            id: "content_1",
            title: "Се роҳи пайваст кардани CSS",
            info: "CSS-ро ба се тарз пайваст кардан мумкин аст: Inline, Internal ва External.",
            explanation:
              "Inline дар дохили тег бо атрибути style, Internal дар теги <style> дар head ва External дар файли алоҳидаи .css бо теги <link>.",
            example:
              '/* External CSS */\n<link rel="stylesheet" href="style.css">\n\n/* Internal CSS */\n<style>\n  h1 { color: red; }\n</style>\n\n/* Inline CSS */\n<h1 style="color: blue;">Салом</h1>',
            practice: "Се роҳи гуногуни пайваст кардани CSS-ро санҷед.",
            video: "https://www.youtube.com/watch?v=-439WcEL0ek",
          },
          {
            id: "content_2",
            title: "Селекторҳои асосӣ",
            info: "Селекторҳо элементҳои HTML-ро интихоб мекунанд, то ба онҳо услуб диҳанд.",
            explanation:
              "Селектори элемент (p), класс (.class), ID (#id) ва селектори универсалӣ (*) мавҷуданд.",
            example:
              "p {\n  color: green;\n}\n\n.title {\n  font-size: 24px;\n}\n\n#header {\n  background: yellow;\n}",
            practice: "Барои h1, .box ва #main селекторҳо нависед.",
            video: "https://www.youtube.com/watch?v=OQ-_ZoTnB4k",
          },
          {
            id: "content_3",
            title: "Рангҳо дар CSS",
            info: "Рангро бо ном, hexadecimal, RGB ва HSL муайян кардан мумкин аст.",
            explanation:
              "color рангро ба матн медиҳад, background-color бошад ба замина. Hex (#ff0000) ва rgb(255,0,0) маъмултаринҳоянд.",
            example:
              "h1 {\n  color: #ff0000;\n  background-color: rgb(200, 230, 255);\n}\n\np {\n  color: blue;\n}",
            video: "https://www.youtube.com/watch?v=-439WcEL0ek",
          },
          {
            id: "content_4",
            title: "Фонт ва матни асосӣ",
            info: "Бо CSS андоза, намуд, ғафсӣ ва ҷойгиршавии матнро танзим кардан мумкин аст.",
            explanation:
              "font-family намуди ҳарф, font-size андоза, font-weight ғафсӣ ва text-align ҷойгиршавиро муайян мекунад.",
            example:
              "p {\n  font-family: Arial, sans-serif;\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n}",
            practice: "Матнро бо font-size, color ва text-align зебо кунед.",
            video: "https://www.youtube.com/watch?v=-439WcEL0ek",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Як файли style.css созед ва онро ба HTML пайваст кунед. Ранги замина, ранг ва андозаи матнҳоро тағйир диҳед.",
          code: '<!DOCTYPE html>\n<html lang="tg">\n<head>\n  <meta charset="UTF-8">\n  <title>Дарси 1 - CSS</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1 class="title">Салом ҷаҳон!</h1>\n  <p id="intro">Ин аввалин саҳифаи ман бо CSS аст.</p>\n</body>\n</html>\n\n/* style.css */\nbody {\n  background-color: #f0f8ff;\n  font-family: Arial, sans-serif;\n}\n\n.title {\n  color: #2c3e50;\n  text-align: center;\n}\n\n#intro {\n  color: #34495e;\n  font-size: 18px;\n}',
        },
      },
      {
        id: "2",
        title: "Дарси 2: Модели қуттӣ (Box Model)",
        description: "Фаҳмидани content, padding, border ва margin.",
        topics: [
          {
            id: "lesson_2_content_0",
            title: "Модели қуттӣ чист?",
            info: "Ҳар як элемент дар HTML ҳамчун қуттӣ дида мешавад, ки аз content, padding, border ва margin иборат аст.",
            explanation:
              "Content мундариҷа, padding фосилаи дохилӣ, border ҳошия ва margin фосилаи берунӣ мебошад.",
            example:
              "div {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid black;\n  margin: 10px;\n}",
            video: "https://rutube.ru/video/24cf065ca601d262568209061a44d016/",
          },
          {
            id: "lesson_2_content_1",
            title: "Padding",
            info: "Padding фосилаи байни мундариҷа ва border-ро муайян мекунад.",
            explanation:
              "Паding-ро барои ҳама тарафҳо ё алоҳида (top, right, bottom, left) танзим кардан мумкин аст.",
            example:
              ".box {\n  padding: 20px;\n  /* ё */\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-bottom: 10px;\n  padding-left: 15px;\n}",
            practice: "Ба як div padding 30px диҳед.",
            video: "https://rutube.ru/video/24cf065ca601d262568209061a44d016/",
          },
          {
            id: "lesson_2_content_2",
            title: "Border",
            info: "Border ҳошияи атрофи элементро месозад.",
            explanation:
              "border-width, border-style ва border-color-ро муайян кардан мумкин аст. border-radius кунҷҳоро мудаввар мекунад.",
            example:
              ".card {\n  border: 3px solid #3498db;\n  border-radius: 10px;\n}",
            video: "https://rutube.ru/video/24cf065ca601d262568209061a44d016/",
          },
          {
            id: "lesson_2_content_3",
            title: "Margin",
            info: "Margin фосилаи берунӣ байни элементҳоро муайян мекунад.",
            explanation:
              "Margin элементҳоро аз якдигар ҷудо мекунад. margin: auto барои марказ кардан истифода мешавад.",
            example:
              ".box {\n  margin: 20px;\n  margin: 10px 20px; /* top-bottom left-right */\n  margin: auto; /* марказ */\n}",
            practice: "Ду қуттӣ бо margin 15px аз ҳам ҷудо кунед.",
            video: "https://rutube.ru/video/24cf065ca601d262568209061a44d016/",
          },
          {
            id: "lesson_2_content_4",
            title: "box-sizing",
            info: "box-sizing муайян мекунад, ки width ва height чӣ гуна ҳисоб карда мешаванд.",
            explanation:
              "Бо content-box (пешфарз) padding ва border ба андоза илова мешаванд. Бо border-box онҳо дар дохили width/height ҳисоб мешаванд.",
            example:
              "* {\n  box-sizing: border-box;\n}\n\n.box {\n  width: 300px;\n  padding: 20px;\n  border: 5px solid black;\n}",
            video: "https://rutube.ru/video/24cf065ca601d262568209061a44d016/",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Се қуттӣ бо padding, border ва margin гуногун созед ва box-sizing: border-box истифода баред.",
          code: '<!DOCTYPE html>\n<html lang="tg">\n<head>\n  <meta charset="UTF-8">\n  <title>Box Model</title>\n  <style>\n    * { box-sizing: border-box; }\n    .box {\n      width: 200px;\n      padding: 20px;\n      border: 4px solid #e74c3c;\n      margin: 15px;\n      background: #f9f9f9;\n    }\n  </style>\n</head>\n<body>\n  <div class="box">Қуттии 1</div>\n  <div class="box">Қуттии 2</div>\n  <div class="box">Қуттии 3</div>\n</body>\n</html>',
        },
      },
      {
        id: "3",
        title: "Дарси 3: Display ва Position",
        description: "Намудҳои намоиш ва ҷойгиркунии элементҳо.",
        topics: [
          {
            id: "lesson_3_content_0",
            title: "Хосияти display",
            info: "display муайян мекунад, ки элемент чӣ гуна намоиш дода мешавад: block, inline, inline-block, none ва ғ.",
            explanation:
              "block тамоми қаторро мегирад, inline дар як қатор меистад, none элементро пинҳон мекунад.",
            example:
              ".block { display: block; }\n.inline { display: inline; }\n.hidden { display: none; }",
            video: "https://www.youtube.com/watch?v=-439WcEL0ek",
          },
          {
            id: "lesson_3_content_1",
            title: "Position: static ва relative",
            info: "position ҷойгиршавии элементро нисбат ба ҷои муқаррариаш ё контейнер танзим мекунад.",
            explanation:
              "static ҳолати пешфарз аст. relative элементро нисбат ба ҷои аслиаш ҷойгир мекунад (top, left, right, bottom).",
            example:
              ".box {\n  position: relative;\n  top: 20px;\n  left: 30px;\n}",
            video: "https://www.youtube.com/watch?v=-439WcEL0ek",
          },
          {
            id: "lesson_3_content_2",
            title: "Position: absolute ва fixed",
            info: "absolute нисбат ба контейнери наздиктарини positioned ҷойгир мешавад. fixed нисбат ба равзанаи браузер.",
            explanation:
              "fixed ҳангоми скролл ҷойи худро нигоҳ медорад (масалан менюи боло).",
            example:
              ".menu {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.popup {\n  position: absolute;\n  top: 50px;\n  right: 20px;\n}",
            practice: "Менюи fixed созед.",
            video: "https://www.youtube.com/watch?v=-439WcEL0ek",
          },
          {
            id: "lesson_3_content_3",
            title: "z-index",
            info: "z-index тартиби қабатҳои элементҳои positioned-ро муайян мекунад.",
            explanation:
              "Рақами калонтар элементро болотар нишон медиҳад. Танҳо барои элементҳои position: relative/absolute/fixed кор мекунад.",
            example:
              ".front {\n  position: absolute;\n  z-index: 10;\n}\n\n.back {\n  position: absolute;\n  z-index: 1;\n}",
            video: "https://www.youtube.com/watch?v=-439WcEL0ek",
          },
          {
            id: "lesson_3_content_4",
            title: "Overflow",
            info: "overflow муайян мекунад, ки мундариҷаи зиёдатӣ чӣ гуна нишон дода шавад.",
            explanation: "visible (пешфарз), hidden, scroll ва auto мавҷуданд.",
            example:
              ".container {\n  width: 200px;\n  height: 100px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}",
            video: "https://www.youtube.com/watch?v=-439WcEL0ek",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Менюи fixed дар боло ва як қуттии absolute дар кунҷ созед.",
          code: '<!DOCTYPE html>\n<html lang="tg">\n<head>\n  <meta charset="UTF-8">\n  <title>Position</title>\n  <style>\n    .navbar {\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      background: #2c3e50;\n      color: white;\n      padding: 15px;\n      z-index: 100;\n    }\n    .box {\n      position: absolute;\n      top: 80px;\n      right: 20px;\n      background: #e74c3c;\n      color: white;\n      padding: 20px;\n    }\n    body { margin-top: 70px; }\n  </style>\n</head>\n<body>\n  <div class="navbar">Менюи асосӣ</div>\n  <div class="box">Қуттии absolute</div>\n  <p>Матни дароз барои скролл...</p>\n</body>\n</html>',
        },
      },
      {
        id: "4",
        title: "Дарси 4: Flexbox",
        description: "Ҷойгиркунии муосир ва чандири элементҳо бо Flexbox.",
        topics: [
          {
            id: "lesson_4_content_0",
            title: "Flexbox чист?",
            info: "Flexbox модели ҷойгиркунии як-ченака аст, ки элементҳоро дар қатор ё сутун ба осонӣ ҷойгир мекунад.",
            explanation:
              "Ба контейнер display: flex медиҳем ва кӯдакон ба flex-item табдил меёбанд.",
            example: ".container {\n  display: flex;\n}",
            video: "https://www.youtube.com/watch?v=Hf__JLlFxpk",
          },
          {
            id: "lesson_4_content_1",
            title: "flex-direction ва justify-content",
            info: "flex-direction самти асосиро муайян мекунад (row, column). justify-content ҷойгиршавии уфуқӣ/асосиро танзим мекунад.",
            explanation:
              "Арзишҳои justify-content: flex-start, flex-end, center, space-between, space-around, space-evenly.",
            example:
              ".container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}",
            practice: "Се қуттӣро дар марказ ҷойгир кунед.",
            video: "https://www.youtube.com/watch?v=Hf__JLlFxpk",
          },
          {
            id: "lesson_4_content_2",
            title: "align-items ва gap",
            info: "align-items ҷойгиршавии амудӣ (cross-axis)-ро танзим мекунад. gap фосила байни элементҳоро медиҳад.",
            explanation:
              "align-items: stretch, flex-start, flex-end, center, baseline.",
            example:
              ".container {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}",
            video: "https://www.youtube.com/watch?v=Hf__JLlFxpk",
          },
          {
            id: "lesson_4_content_3",
            title: "flex-wrap ва flex-grow",
            info: "flex-wrap ба элементҳо иҷозат медиҳад, ки ба қатори нав гузаранд. flex-grow фазои холӣро тақсим мекунад.",
            explanation:
              "flex: 1 ба элемент имкон медиҳад, ки фазои боқимондаро гирад.",
            example:
              ".container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.item {\n  flex: 1;\n}",
            video: "https://www.youtube.com/watch?v=Hf__JLlFxpk",
          },
          {
            id: "lesson_4_content_4",
            title: "Марказ кардани элемент бо Flexbox",
            info: "Яке аз роҳҳои осонтарини марказ кардани элемент истифодаи Flexbox аст.",
            explanation:
              "justify-content: center ва align-items: center якҷоя элементро дар маркази контейнер ҷойгир мекунанд.",
            example:
              ".center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}",
            practice: "Як қуттӣро дар маркази саҳифа ҷойгир кунед.",
            video: "https://www.youtube.com/watch?v=Hf__JLlFxpk",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Бо Flexbox се корти маҳсулот дар як қатор созед ва дар марказ ҷойгир кунед.",
          code: '<!DOCTYPE html>\n<html lang="tg">\n<head>\n  <meta charset="UTF-8">\n  <title>Flexbox</title>\n  <style>\n    .container {\n      display: flex;\n      justify-content: center;\n      gap: 20px;\n      padding: 40px;\n    }\n    .card {\n      flex: 1;\n      max-width: 200px;\n      background: #3498db;\n      color: white;\n      padding: 20px;\n      border-radius: 8px;\n      text-align: center;\n    }\n  </style>\n</head>\n<body>\n  <div class="container">\n    <div class="card">Маҳсулот 1</div>\n    <div class="card">Маҳсулот 2</div>\n    <div class="card">Маҳсулот 3</div>\n  </div>\n</body>\n</html>',
        },
      },
      {
        id: "5",
        title: "Дарси 5: Responsive Design ва Media Queries",
        description: "Сохтани вебсаҳифаҳои мутобиқ ба ҳама андозаи экран.",
        topics: [
          {
            id: "lesson_5_content_0",
            title: "Responsive Design чист?",
            info: "Responsive Design маънои онро дорад, ки вебсаҳифа дар телефон, планшет ва компютер хуб намоиш дода шавад.",
            explanation:
              "Бо истифода аз воҳидҳои чандир (% , vw, vh, rem) ва media queries ин корро анҷом медиҳем.",
            example: "img {\n  max-width: 100%;\n  height: auto;\n}",
            video: "https://www.youtube.com/watch?v=ahYuxTRjY0g",
          },
          {
            id: "lesson_5_content_1",
            title: "Воҳидҳои чандир",
            info: "% , em, rem, vw, vh воҳидҳои чандир мебошанд.",
            explanation:
              "rem нисбат ба font-size-и html, vw нисбат ба паҳнои равзана, vh нисбат ба баландии равзана.",
            example:
              "h1 {\n  font-size: 2rem;\n}\n\n.box {\n  width: 50%;\n  height: 50vh;\n}",
            video: "https://www.youtube.com/watch?v=ahYuxTRjY0g",
          },
          {
            id: "lesson_5_content_2",
            title: "Media Queries",
            info: "Media Queries ба мо имкон медиҳад, ки услубҳоро вобаста ба андозаи экран тағйир диҳем.",
            explanation:
              "@media (max-width: 768px) { ... } барои экранҳои хурдтар аз 768px кор мекунад.",
            example:
              "@media (max-width: 600px) {\n  .container {\n    flex-direction: column;\n  }\n}",
            practice: "Барои телефон flex-direction-ро column кунед.",
            video: "https://www.youtube.com/watch?v=ahYuxTRjY0g",
          },
          {
            id: "lesson_5_content_3",
            title: "Viewport Meta Tag",
            info: "Барои responsive будан дар телефонҳо теги viewport зарур аст.",
            explanation:
              "Бе ин тег телефонҳо саҳифаро ҳамчун версияи десктоп нишон медиҳанд.",
            example:
              '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
            video: "https://www.youtube.com/watch?v=ahYuxTRjY0g",
          },
          {
            id: "lesson_5_content_4",
            title: "Mobile-first Design",
            info: "Mobile-first маънои онро дорад, ки аввал барои телефонҳо дизайн мекунем, баъд барои экранҳои калонтар.",
            explanation:
              "Аввал услубҳои асосӣ, баъд бо min-width media query-ҳо барои планшет ва десктоп илова мекунем.",
            example:
              "/* Mobile first */\n.container { flex-direction: column; }\n\n@media (min-width: 768px) {\n  .container { flex-direction: row; }\n}",
            video: "https://www.youtube.com/watch?v=ahYuxTRjY0g",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Саҳифае созед, ки дар телефон як сутун ва дар компютер се сутун нишон диҳад.",
          code: '<!DOCTYPE html>\n<html lang="tg">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Responsive</title>\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      gap: 15px;\n      padding: 20px;\n    }\n    .card {\n      background: #2ecc71;\n      color: white;\n      padding: 30px;\n      text-align: center;\n      border-radius: 8px;\n    }\n    @media (min-width: 768px) {\n      .container {\n        flex-direction: row;\n      }\n      .card {\n        flex: 1;\n      }\n    }\n  </style>\n</head>\n<body>\n  <div class="container">\n    <div class="card">1</div>\n    <div class="card">2</div>\n    <div class="card">3</div>\n  </div>\n</body>\n</html>',
        },
      },
    ],
  },
  Tailwind: {
    title: "Tailwind CSS",
    description: "Омӯзиши utility-first CSS framework – Tailwind CSS",
    lessons: [
      {
        id: "1",
        title: "Дарси 1: Муқаддима ба Tailwind CSS",
        description:
          "Tailwind чист, чӣ гуна насб кардан ва истифодаи классҳои асосӣ.",
        topics: [
          {
            id: "content_0",
            title: "Tailwind CSS чист?",
            info: "Tailwind CSS як framework-и utility-first аст, ки ба ҷои навиштани CSS-и фармоишӣ, классҳои тайёрро бевосита дар HTML истифода мебаред.",
            explanation:
              'Ба ҷои .btn { background: blue; } шумо class="bg-blue-500" менависед. Ин корро хеле тезтар мекунад ва CSS-и нолозимро кам мекунад.',
            example:
              '<h1 class="text-3xl font-bold text-blue-600">\n  Салом ҷаҳон!\n</h1>',
            video: "https://www.youtube.com/watch?v=lCxcTsOHrjo",
          },
          {
            id: "content_1",
            title: "Насб ва танзими Tailwind",
            info: "Tailwind-ро бо CDN (барои омӯзиш) ё бо npm/Vite насб кардан мумкин аст.",
            explanation:
              "Барои шурӯъи зуд CDN истифода баред. Барои лоиҳаҳои воқеӣ Vite + Tailwind-ро насб кунед.",
            example:
              '<!-- Роҳи осон бо CDN -->\n<script src="https://cdn.tailwindcss.com"></script>\n\n<!-- Ё бо npm -->\nnpm install -D tailwindcss\nnpx tailwindcss init',
            practice: "Як файли HTML бо CDN-и Tailwind созед.",
            video: "https://www.youtube.com/watch?v=9I3JQ1q4IMk",
          },
          {
            id: "content_2",
            title: "Системаи рангҳо",
            info: "Tailwind рангҳои тайёр дорад: gray, red, blue, green, yellow ва ғ. Бо рақамҳои 50 то 950.",
            explanation:
              "bg-blue-500 заминаи кабуд, text-red-600 матни сурх, border-gray-300 ҳошияи хокистарӣ месозад.",
            example:
              '<div class="bg-blue-500 text-white p-4">\n  Қуттии кабуд\n</div>\n\n<p class="text-red-600 font-bold">\n  Матни сурх\n</p>',
            video: "https://www.youtube.com/watch?v=wEM5NdJ-8HY",
          },
          {
            id: "content_3",
            title: "Typography (матн)",
            info: "Классҳои text-sm, text-lg, text-xl, font-bold, font-medium, underline ва ғ. барои матн.",
            explanation:
              "text-center матнро марказ мекунад, tracking-wide фосилаи ҳарфҳоро зиёд мекунад, leading-relaxed баландии қаторро танзим мекунад.",
            example:
              '<h1 class="text-4xl font-bold text-center text-gray-800">\n  Сарлавҳа\n</h1>\n\n<p class="text-lg text-gray-600 leading-relaxed">\n  Ин як параграфи зебо аст.\n</p>',
            practice: "Сарлавҳа ва параграфро бо классҳои Tailwind зебо кунед.",
            video: "https://www.youtube.com/watch?v=9I3JQ1q4IMk",
          },
          {
            id: "content_4",
            title: "Spacing: padding ва margin",
            info: "p-4 (padding), m-4 (margin), px-6 (padding уфуқӣ), py-2 (padding амудӣ), mt-8 (margin-top) ва ғ.",
            explanation:
              "Рақамҳо аз 0 то 96 (0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16...). Ҳар як воҳид 0.25rem аст (p-4 = 1rem).",
            example:
              '<div class="p-6 m-4 bg-gray-100">\n  Бо padding ва margin\n</div>\n\n<div class="px-8 py-4 mt-6">\n  Padding уфуқӣ ва амудӣ\n</div>',
            video: "https://www.youtube.com/watch?v=lCxcTsOHrjo",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Бо CDN-и Tailwind як саҳифаи оддӣ бо сарлавҳа, параграф ва қуттӣ созед. Ранг, андозаи матн ва padding истифода баред.",
          code: '<!DOCTYPE html>\n<html lang="tg">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Tailwind - Дарси 1</title>\n  <script src="https://cdn.tailwindcss.com"></script>\n</head>\n<body class="bg-gray-50">\n  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">\n    <h1 class="text-3xl font-bold text-blue-600 text-center mb-4">\n      Салом Tailwind!\n    </h1>\n    <p class="text-gray-700 text-lg leading-relaxed">\n      Ин аввалин саҳифаи ман бо Tailwind CSS аст.\n    </p>\n  </div>\n</body>\n</html>',
        },
      },
      {
        id: "2",
        title: "Дарси 2: Box, Border ва Shadow",
        description: "Андоза, ҳошия, кунҷҳои мудаввар ва сояҳо.",
        topics: [
          {
            id: "lesson_2_content_0",
            title: "Width ва Height",
            info: "w-full, w-1/2, w-64, h-screen, h-40, min-h-screen ва ғ. барои андоза.",
            explanation:
              "w-full = 100%, w-1/2 = 50%, w-64 = 16rem. max-w-md барои маҳдуд кардани паҳноӣ.",
            example:
              '<div class="w-64 h-40 bg-blue-200">\n  256px × 160px\n</div>\n\n<div class="w-full max-w-lg mx-auto">\n  Паҳнои пурра, аммо максимум\n</div>',
            video: "https://www.youtube.com/watch?v=wEM5NdJ-8HY",
          },
          {
            id: "lesson_2_content_1",
            title: "Border",
            info: "border, border-2, border-blue-500, border-t, border-b ва ғ.",
            explanation:
              "border-2 ғафсии ҳошия, border-red-500 ранги он, rounded-lg кунҷҳои мудаввар.",
            example:
              '<div class="border-2 border-blue-500 rounded-lg p-4">\n  Бо ҳошия ва кунҷҳои мудаввар\n</div>\n\n<button class="border border-gray-300 rounded-full px-4 py-2">\n  Тугма\n</button>',
            practice: "Як корт бо border ва rounded-xl созед.",
            video: "https://www.youtube.com/watch?v=9I3JQ1q4IMk",
          },
          {
            id: "lesson_2_content_2",
            title: "Border Radius",
            info: "rounded, rounded-md, rounded-lg, rounded-xl, rounded-full, rounded-none.",
            explanation:
              "rounded-full барои доира, rounded-xl барои кортҳои зебо, rounded-t-lg танҳо кунҷҳои боло.",
            example:
              '<img class="rounded-full w-24 h-24" src="avatar.jpg">\n\n<div class="rounded-2xl bg-white p-6 shadow">\n  Корти мудаввар\n</div>',
            video: "https://www.youtube.com/watch?v=lCxcTsOHrjo",
          },
          {
            id: "lesson_2_content_3",
            title: "Shadow (соя)",
            info: "shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl, shadow-2xl, shadow-none.",
            explanation:
              "Сояҳо ба элементҳо чуқурӣ медиҳанд. shadow-lg барои кортҳо, shadow-xl барои модалҳо.",
            example:
              '<div class="bg-white p-6 rounded-lg shadow-lg">\n  Корт бо сояи калон\n</div>\n\n<button class="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:shadow-lg">\n  Тугма\n</button>',
            video: "https://www.youtube.com/watch?v=wEM5NdJ-8HY",
          },
          {
            id: "lesson_2_content_4",
            title: "Background ва Gradient",
            info: "bg-gradient-to-r, from-blue-500, to-purple-600 ва ғ.",
            explanation:
              "Градиентҳо аз як ранг ба дигар гузариш месозанд. from-... via-... to-... истифода мешавад.",
            example:
              '<div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl">\n  Градиенти зебо\n</div>',
            practice: "Як banner бо градиент созед.",
            video: "https://www.youtube.com/watch?v=9I3JQ1q4IMk",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Як корти маҳсулот бо shadow, border, rounded ва градиент созед.",
          code: '<!DOCTYPE html>\n<html lang="tg">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Корт</title>\n  <script src="https://cdn.tailwindcss.com"></script>\n</head>\n<body class="bg-gray-100 min-h-screen flex items-center justify-center">\n  <div class="bg-white rounded-2xl shadow-xl p-6 max-w-sm">\n    <div class="h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl mb-4"></div>\n    <h2 class="text-xl font-bold text-gray-800 mb-2">Маҳсулот</h2>\n    <p class="text-gray-600 mb-4">Тавсифи кӯтоҳи маҳсулот.</p>\n    <button class="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600">\n      Харид\n    </button>\n  </div>\n</body>\n</html>',
        },
      },
      {
        id: "3",
        title: "Дарси 3: Flexbox бо Tailwind",
        description: "Ҷойгиркунии элементҳо бо классҳои Flexbox.",
        topics: [
          {
            id: "lesson_3_content_0",
            title: "display: flex",
            info: 'class="flex" ба контейнер display: flex медиҳад.',
            explanation:
              "Пас аз flex, элементҳои дохилӣ ба flex-item табдил меёбанд ва дар як қатор ҷойгир мешаванд.",
            example:
              '<div class="flex gap-4">\n  <div class="bg-blue-200 p-4">1</div>\n  <div class="bg-blue-200 p-4">2</div>\n  <div class="bg-blue-200 p-4">3</div>\n</div>',
            video: "https://www.youtube.com/watch?v=W5EXDOV4oZM",
          },
          {
            id: "lesson_3_content_1",
            title: "flex-direction ва justify",
            info: "flex-row, flex-col, justify-start, justify-center, justify-between, justify-around.",
            explanation:
              "flex-col элементҳоро сутунӣ мекунад. justify-center онҳоро дар марказ ҷойгир мекунад.",
            example:
              '<div class="flex flex-col items-center justify-center min-h-screen">\n  <h1 class="text-2xl">Марказ</h1>\n</div>\n\n<div class="flex justify-between items-center">\n  <span>Лого</span>\n  <nav>Меню</nav>\n</div>',
            practice: "Менюи navbar бо justify-between созед.",
            video: "https://www.youtube.com/watch?v=lCxcTsOHrjo",
          },
          {
            id: "lesson_3_content_2",
            title: "align-items ва gap",
            info: "items-start, items-center, items-end, items-stretch. gap-2, gap-4, gap-8.",
            explanation:
              "items-center элементҳоро амудӣ марказ мекунад. gap фосилаи байни элементҳоро медиҳад.",
            example:
              '<div class="flex items-center gap-6">\n  <img class="w-12 h-12 rounded-full" src="avatar.jpg">\n  <div>\n    <p class="font-bold">Ном</p>\n    <p class="text-sm text-gray-500">Вазифа</p>\n  </div>\n</div>',
            video: "https://www.youtube.com/watch?v=W5EXDOV4oZM",
          },
          {
            id: "lesson_3_content_3",
            title: "flex-1, flex-wrap ва grow",
            info: "flex-1 элементро васеъ мекунад, flex-wrap ба қатори нав мегузаронад.",
            explanation:
              "flex-1 барои тақсим кардани фазои боқимонда. flex-wrap барои responsive.",
            example:
              '<div class="flex flex-wrap gap-4">\n  <div class="flex-1 min-w-[200px] bg-gray-100 p-4">A</div>\n  <div class="flex-1 min-w-[200px] bg-gray-100 p-4">B</div>\n  <div class="flex-1 min-w-[200px] bg-gray-100 p-4">C</div>\n</div>',
            video: "https://www.youtube.com/watch?v=9I3JQ1q4IMk",
          },
          {
            id: "lesson_3_content_4",
            title: "Марказ кардани элемент",
            info: "Яке аз роҳҳои осонтарини марказ кардан: flex + items-center + justify-center.",
            explanation:
              "Барои маркази пурраи саҳифа: min-h-screen + flex + items-center + justify-center.",
            example:
              '<div class="min-h-screen flex items-center justify-center bg-gray-100">\n  <div class="bg-white p-8 rounded-xl shadow-lg">\n    Марказшуда!\n  </div>\n</div>',
            practice: "Як модали марказшуда созед.",
            video: "https://www.youtube.com/watch?v=W5EXDOV4oZM",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Navbar бо logo ва меню, ва се корт дар як қатор бо Flexbox созед.",
          code: '<!DOCTYPE html>\n<html lang="tg">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Flexbox</title>\n  <script src="https://cdn.tailwindcss.com"></script>\n</head>\n<body>\n  <nav class="flex justify-between items-center px-6 py-4 bg-white shadow">\n    <div class="text-xl font-bold text-blue-600">Logo</div>\n    <div class="flex gap-6">\n      <a href="#" class="text-gray-600 hover:text-blue-600">Асосӣ</a>\n      <a href="#" class="text-gray-600 hover:text-blue-600">Дарсҳо</a>\n      <a href="#" class="text-gray-600 hover:text-blue-600">Алоқа</a>\n    </div>\n  </nav>\n\n  <div class="flex gap-6 p-8 max-w-5xl mx-auto">\n    <div class="flex-1 bg-white p-6 rounded-xl shadow">Корт 1</div>\n    <div class="flex-1 bg-white p-6 rounded-xl shadow">Корт 2</div>\n    <div class="flex-1 bg-white p-6 rounded-xl shadow">Корт 3</div>\n  </div>\n</body>\n</html>',
        },
      },
      {
        id: "4",
        title: "Дарси 4: Grid ва Responsive",
        description: "Grid Layout ва дизайн барои ҳама андозаи экран.",
        topics: [
          {
            id: "lesson_4_content_0",
            title: "CSS Grid бо Tailwind",
            info: "grid, grid-cols-1, grid-cols-2, grid-cols-3, grid-cols-4 ва ғ.",
            explanation:
              "grid-cols-3 се сутун месозад. gap-6 фосила байни ҳуҷайраҳоро медиҳад.",
            example:
              '<div class="grid grid-cols-3 gap-6">\n  <div class="bg-blue-100 p-4">1</div>\n  <div class="bg-blue-100 p-4">2</div>\n  <div class="bg-blue-100 p-4">3</div>\n</div>',
            video: "https://www.youtube.com/watch?v=W5EXDOV4oZM",
          },
          {
            id: "lesson_4_content_1",
            title: "col-span ва row-span",
            info: "col-span-2 элементро ба ду сутун васеъ мекунад.",
            explanation:
              "Барои layout-ҳои мураккаб: як элемент 2 сутун, дигаре 1 сутун мегирад.",
            example:
              '<div class="grid grid-cols-3 gap-4">\n  <div class="col-span-2 bg-green-100 p-4">Васеъ</div>\n  <div class="bg-green-100 p-4">Одӣ</div>\n  <div class="col-span-3 bg-green-200 p-4">Пурра</div>\n</div>',
            video: "https://www.youtube.com/watch?v=9I3JQ1q4IMk",
          },
          {
            id: "lesson_4_content_2",
            title: "Responsive Breakpoints",
            info: "sm:, md:, lg:, xl:, 2xl: префиксҳо барои андозаҳои гуногун.",
            explanation:
              "Mobile-first: аввал барои телефон, баъд md: барои планшет, lg: барои компютер.",
            example:
              '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">\n  <div class="bg-purple-100 p-4">1</div>\n  <div class="bg-purple-100 p-4">2</div>\n  <div class="bg-purple-100 p-4">3</div>\n</div>',
            practice: "Се корт: дар телефон 1 сутун, дар md 2, дар lg 3.",
            video: "https://www.youtube.com/watch?v=W5EXDOV4oZM",
          },
          {
            id: "lesson_4_content_3",
            title: "Responsive Typography ва Spacing",
            info: "text-sm md:text-lg lg:text-xl, p-4 md:p-8 ва ғ.",
            explanation:
              "Матн ва фосилаҳо низ метавонанд вобаста ба экран тағйир ёбанд.",
            example:
              '<h1 class="text-2xl md:text-4xl lg:text-5xl font-bold">\n  Сарлавҳаи responsive\n</h1>\n\n<div class="p-4 md:p-8 lg:p-12">\n  Мундариҷа\n</div>',
            video: "https://www.youtube.com/watch?v=lCxcTsOHrjo",
          },
          {
            id: "lesson_4_content_4",
            title: "Hidden ва Block дар responsive",
            info: "hidden md:block — дар телефон пинҳон, аз md намоиш.",
            explanation:
              "Барои менюи мобилӣ: hamburger дар телефон, менюи пурра дар десктоп.",
            example:
              '<div class="hidden md:flex gap-4">\n  Менюи десктоп\n</div>\n\n<button class="md:hidden">\n  ☰ Меню\n</button>',
            video: "https://www.youtube.com/watch?v=W5EXDOV4oZM",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Саҳифаи responsive: navbar, hero ва grid-и 3 корт (дар телефон 1 сутун).",
          code: '<!DOCTYPE html>\n<html lang="tg">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Responsive</title>\n  <script src="https://cdn.tailwindcss.com"></script>\n</head>\n<body class="bg-gray-50">\n  <nav class="flex justify-between items-center px-4 py-4 md:px-8 bg-white shadow">\n    <div class="text-xl font-bold text-blue-600">Logo</div>\n    <div class="hidden md:flex gap-6">\n      <a href="#" class="text-gray-600">Асосӣ</a>\n      <a href="#" class="text-gray-600">Дарсҳо</a>\n    </div>\n    <button class="md:hidden text-2xl">☰</button>\n  </nav>\n\n  <section class="text-center py-12 md:py-20 px-4">\n    <h1 class="text-3xl md:text-5xl font-bold text-gray-800 mb-4">\n      Хуш омадед!\n    </h1>\n    <p class="text-gray-600 text-lg max-w-xl mx-auto">\n      Ин саҳифаи responsive бо Tailwind аст.\n    </p>\n  </section>\n\n  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 pb-12 max-w-6xl mx-auto">\n    <div class="bg-white p-6 rounded-xl shadow">Корт 1</div>\n    <div class="bg-white p-6 rounded-xl shadow">Корт 2</div>\n    <div class="bg-white p-6 rounded-xl shadow">Корт 3</div>\n  </div>\n</body>\n</html>',
        },
      },
      {
        id: "5",
        title: "Дарси 5: Ҳолатҳо, Transitions ва Компонентҳо",
        description:
          "Hover, focus, transition ва сохтани компонентҳои такроршаванда.",
        topics: [
          {
            id: "lesson_5_content_0",
            title: "Hover, Focus ва Active",
            info: "hover:bg-blue-600, focus:ring-2, active:scale-95 ва ғ.",
            explanation:
              "hover: ҳангоми гузоштани муш, focus: ҳангоми интихоб (масалан input), active: ҳангоми пахш.",
            example:
              '<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-6 py-2 rounded-lg transition">\n  Тугма\n</button>\n\n<input class="border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2">',
            video: "https://www.youtube.com/watch?v=9I3JQ1q4IMk",
          },
          {
            id: "lesson_5_content_1",
            title: "Transitions ва Duration",
            info: "transition, duration-300, ease-in-out, transition-colors, transition-transform.",
            explanation:
              "transition гузариши ҳамвор месозад. duration-300 = 300ms.",
            example:
              '<div class="bg-gray-200 hover:bg-blue-500 transition-colors duration-300 p-6 rounded-lg">\n  Hover кунед\n</div>\n\n<button class="hover:scale-105 transition-transform duration-200">\n  Калон мешавад\n</button>',
            practice:
              "Тугмае созед, ки ҳангоми hover рангаш ва андозааш тағйир ёбад.",
            video: "https://www.youtube.com/watch?v=wEM5NdJ-8HY",
          },
          {
            id: "lesson_5_content_2",
            title: "Group ва Peer",
            info: "group ва group-hover: барои таъсир ба кӯдакон. peer барои sibling.",
            explanation:
              "Ҳангоми hover ба parent, кӯдак тағйир меёбад. peer барои input + label.",
            example:
              '<div class="group p-4 bg-white rounded-lg shadow hover:shadow-xl transition">\n  <h3 class="group-hover:text-blue-600 transition">Сарлавҳа</h3>\n  <p class="text-gray-500">Тавсиф</p>\n</div>',
            video: "https://www.youtube.com/watch?v=9I3JQ1q4IMk",
          },
          {
            id: "lesson_5_content_3",
            title: "Сохтани компонентҳо",
            info: "Бо якҷоя кардани классҳо компонентҳои такроршаванда (button, card, badge) месозем.",
            explanation:
              "Як тугмаи асосӣ, як корти маҳсулот ва як badge-ро ҳамчун намуна созед.",
            example:
              '<!-- Button -->\n<button class="bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2.5 rounded-lg shadow transition">\n  Асосӣ\n</button>\n\n<!-- Badge -->\n<span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">\n  Нав\n</span>',
            video: "https://www.youtube.com/watch?v=lCxcTsOHrjo",
          },
          {
            id: "lesson_5_content_4",
            title: "Dark Mode",
            info: "dark:bg-gray-800, dark:text-white — барои ҳолати торик.",
            explanation:
              "Бо class=\"dark\" дар html ё бо media query. Дар CDN: tailwind.config = { darkMode: 'class' }.",
            example:
              '<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">\n  Мундариҷа дар light ва dark mode\n</div>',
            practice: "Як корт бо dark mode созед.",
            video: "https://www.youtube.com/watch?v=wEM5NdJ-8HY",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Саҳифаи пурра: navbar, hero бо тугмаҳои hover, grid-и кортҳо бо transition ва dark-friendly.",
          code: '<!DOCTYPE html>\n<html lang="tg">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Компонентҳо</title>\n  <script src="https://cdn.tailwindcss.com"></script>\n</head>\n<body class="bg-gray-50 text-gray-900">\n  <nav class="flex justify-between items-center px-6 py-4 bg-white shadow">\n    <div class="text-xl font-bold text-blue-600">MyApp</div>\n    <div class="flex gap-4">\n      <a href="#" class="text-gray-600 hover:text-blue-600 transition">Асосӣ</a>\n      <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition shadow">\n        Воридшавӣ\n      </button>\n    </div>\n  </nav>\n\n  <section class="text-center py-16 px-4">\n    <h1 class="text-4xl md:text-5xl font-bold mb-4">Омӯзиши Tailwind</h1>\n    <p class="text-gray-600 text-lg mb-8 max-w-xl mx-auto">\n      Utility-first CSS framework барои сохтани UI-ҳои зебо.\n    </p>\n    <button class="bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white px-8 py-3 rounded-xl shadow-lg transition duration-300">\n      Оғоз кунед\n    </button>\n  </section>\n\n  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 pb-16">\n    <div class="group bg-white p-6 rounded-2xl shadow hover:shadow-xl transition duration-300">\n      <div class="w-12 h-12 bg-blue-100 rounded-xl mb-4 group-hover:bg-blue-500 transition"></div>\n      <h3 class="font-bold text-lg mb-2 group-hover:text-blue-600 transition">Тез</h3>\n      <p class="text-gray-500 text-sm">Сохтани UI хеле тезтар.</p>\n    </div>\n    <div class="group bg-white p-6 rounded-2xl shadow hover:shadow-xl transition duration-300">\n      <div class="w-12 h-12 bg-green-100 rounded-xl mb-4 group-hover:bg-green-500 transition"></div>\n      <h3 class="font-bold text-lg mb-2 group-hover:text-green-600 transition">Responsive</h3>\n      <p class="text-gray-500 text-sm">Дар ҳама дастгоҳҳо хуб кор мекунад.</p>\n    </div>\n    <div class="group bg-white p-6 rounded-2xl shadow hover:shadow-xl transition duration-300">\n      <div class="w-12 h-12 bg-purple-100 rounded-xl mb-4 group-hover:bg-purple-500 transition"></div>\n      <h3 class="font-bold text-lg mb-2 group-hover:text-purple-600 transition">Customizable</h3>\n      <p class="text-gray-500 text-sm">Ба осонӣ танзим мешавад.</p>\n    </div>\n  </div>\n</body>\n</html>',
        },
      },
    ],
  },
  JavaScript: {
    title: "JavaScript",
    description:
      "Асосҳои барномасозӣ ва динамикӣ кардани вебсаҳифаҳо бо JavaScript",
    lessons: [
      {
        id: "1",
        title: "Дарси 1: Муқаддима ба JavaScript ва Мутағайирҳо",
        description:
          "Ошноӣ бо JavaScript, тарзи пайвасткунӣ ва кор бо мутағайирҳо.",
        topics: [
          {
            id: "content_0",
            title: "JavaScript чист?",
            info: "JavaScript забони барномасозӣ мебошад, ки вебсаҳифаҳоро интерактивӣ ва динамикӣ мекунад.",
            explanation:
              "Агар HTML сохтор ва CSS зебоии саҳифа бошад, JavaScript рафтор ва мантиқи саҳифаро (мисли клики тугмаҳо, аниматсия ва фиристодани маълумот) идора мекунад.",
            example:
              "alert('Салом, Ҷаҳон!'); // Паёми огоҳкунанда нишон медиҳад",
            practice: "Дар консоли браузер (F12) фармони alert-ро иҷро кунед.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "content_1",
            title: "Тарзҳои пайваст кардани JS ба HTML",
            info: "Коди JavaScript-ро метавон мустақиман дар HTML ё дар файли алоҳидаи .js навишт.",
            explanation:
              'Барои пайваст кардани файли беруна аз теги <script src="script.js"></script> истифода мешавад.',
            example:
              "<script>\n  console.log('Коди дохилӣ');\n</script>\n<script src=\"app.js\"></script>",
            practice:
              "Файли app.js созед ва онро ба файли HTML-и худ пайваст кунед.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "content_2",
            title: "Мутағайирҳо (let ва const)",
            info: "Мутағайирҳо (Variables) барои нигоҳдории маълумот истифода мешаванд.",
            explanation:
              "let барои қиматҳое, ки тағйир меёбанд ва const барои қиматҳои собит (тағйирнаёбанда) истифода мешавад.",
            example:
              "let age = 20;\nage = 21; // Майдон тағйир ёфт\n\nconst name = 'Али';\n// name = 'Вали'; // Хатогӣ медиҳад!",
            practice:
              "Як мутағайири const барои ном ва let барои синну сол созед.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "content_3",
            title: "Намудҳои маълумот (Data Types)",
            info: "Дар JavaScript намудҳои оссосии маълумот: String, Number, Boolean, Null ва Undefined мебошанд.",
            explanation:
              "String барои матн, Number барои рақамҳо ва Boolean барои қимати мантиқӣ (true/false) истифода мешавад.",
            example:
              'let text = "Салом"; // String\nlet count = 100;    // Number\nlet isOnline = true; // Boolean',
            practice:
              "Се мутағайир бо намудҳои String, Number ва Boolean эълон кунед.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "content_4",
            title: "Амалҳои арифметикӣ ва консол",
            info: "Амалҳои арифметикӣ (+, -, *, /, %) барои ҳисобкуниҳо ва console.log() барои барориши натиҷа хизмат мекунанд.",
            explanation:
              "Оператори console.log() барои пайгирӣ ва санҷиши код дар консоли браузер истифода мешавад.",
            example:
              "let a = 10;\nlet b = 5;\nlet sum = a + b;\nconsole.log('Натиҷа:', sum); // 15",
            practice: "Зарби ду рақамро ҳисоб карда, дар консол нишон диҳед.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Файли index.html ва script.js созед. Дар скрипт соли таваллуди худро эълон карда, синни худро ҳисоб кунед ва ба консол бароред.",
          code: '// script.js\nconst birthYear = 2005;\nlet currentYear = 2026;\nlet myAge = currentYear - birthYear;\n\nconsole.log("Синни ман:", myAge);',
        },
      },
      {
        id: "2",
        title: "Дарси 2: Шартҳо ва ОперанДҳо",
        description:
          "Идоракунии ҷараёни барнома бо истифода аз конструксияҳои шартӣ.",
        topics: [
          {
            id: "lesson_2_content_0",
            title: "Шартҳои if ва else",
            info: "Конструксияи if / else барои иҷрои код вобаста ба дурустии шарт истифода мешавад.",
            explanation:
              "Агар шарти дохили if дуруст (true) бошад, блок иҷро мешавад, вагарна блоку else кор мекунад.",
            example:
              "let age = 18;\nif (age >= 18) {\n  console.log('Шумо калонсол ҳастед');\n} else {\n  console.log('Шумо хурдсол ҳастед');\n}",
            practice:
              "Барномае нависед, ки рақами мусбат ё манфиро муайян кунад.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "lesson_2_content_1",
            title: "Шарти else if",
            info: "Барои санҷидани якчанд шартҳои пайдарпай else if истифода мешавад.",
            explanation:
              "Шартҳо аз боло ба поён санҷида шуда, аввалин шарти дуруст иҷро мешавад.",
            example:
              "let score = 85;\nif (score >= 90) {\n  console.log('Аъло');\n} else if (score >= 70) {\n  console.log('Хуб');\n} else {\n  console.log('Қаноатбахш');\n}",
            practice: "Барои баҳодиҳӣ аз рӯи балл коди else if нависед.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "lesson_2_content_2",
            title: "Муқоиса (== vs ===)",
            info: "Операторҳои муқоиса барои санҷиши баробарии қиматҳо истифода мешаванд.",
            explanation:
              "== танҳо қиматро месанҷад, аммо === ҳам қимат ва ҳам намуди маълумотро (Data Type) муқоиса мекунад.",
            example:
              "console.log(5 == '5');  // true\nconsole.log(5 === '5'); // false (намудҳо фарқ мекунанд)",
            practice: "Дар консол фарқи баробарии сахт (===)-ро санҷед.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "lesson_2_content_3",
            title: "Операторҳои мантиқӣ (&&, ||, !)",
            info: "Операторҳои мантиқӣ имкон медиҳанд, ки якчанд шартро якҷоя кунем.",
            explanation:
              "&& (ВА) - ҳамаи шартҳо бояд true бошанд. || (Ё) - лоақал як шарт true бошад кифоя аст.",
            example:
              "let isAdult = true;\nlet hasTicket = true;\nif (isAdult && hasTicket) {\n  console.log('Хуш омадед!');\n}",
            practice: "Шарт созед, ки ду шартро бо истифода аз && санҷад.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "lesson_2_content_4",
            title: "Оператори тернарӣ (Ternary Operator)",
            info: "Оператори тернарӣ навишти кӯтоҳшудаи if/else мебошад.",
            explanation: "Формати он: шарт ? иҷро_агар_true : иҷро_агар_false.",
            example:
              "let age = 20;\nlet access = age >= 18 ? 'Иҷозат' : 'Манъ';\nconsole.log(access);",
            practice:
              "Шарти оддии if/else-ро ба оператори тернарӣ табдил диҳед.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Барномае созед, ки ҳароратро қабул карда, вобаста ба он паём диҳад (Сард, Гарм, Хеле гарм).",
          code: "let temp = 25;\n\nif (temp < 15) {\n  console.log('Ҳаво сард аст');\n} else if (temp >= 15 && temp <= 30) {\n  console.log('Ҳаво муътадил аст');\n} else {\n  console.log('Ҳаво гарм аст');\n}",
        },
      },
      {
        id: "3",
        title: "Дарси 3: Функсияҳо ва Сиклҳо",
        description:
          "Автоматозатсияи пурра ва такрори код бо истифода аз функсияҳо ва сиклҳо.",
        topics: [
          {
            id: "lesson_3_content_0",
            title: "Асосҳои Функсияҳо (Functions)",
            info: "Функсия блокро коде мебошад, ки барои иҷрои як вазифаи муайян пешбинӣ шудааст.",
            explanation:
              "Функсияро як маротиба навишта, метавонед онро бисёр маротиба даъват (call) кунед.",
            example:
              "function sayHello() {\n  console.log('Салом ба ҳама!');\n}\nsayHello(); // Даъвати функсия",
            practice: "Функсияе созед, ки номи шуморо дар консол чоп кунад.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "lesson_3_content_1",
            title: "Параметрҳо ва Қимати бозгаштӣ (return)",
            info: "Функсияҳо метавонанд маълумотро ҳамчун аргумент қабул ва натиҷаро бо return гардонанд.",
            explanation:
              "Оператори return иҷрои функсияро ба охир расонида, қиматро бармегардонад.",
            example:
              "function sum(a, b) {\n  return a + b;\n}\nlet result = sum(5, 10);\nconsole.log(result); // 15",
            practice:
              "Функсияе нависед, ки зарби ду рақамро ҳисоб карда баргардонад.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "lesson_3_content_2",
            title: "Сикли for",
            info: "Сикли for барои бисёр маротиба такрор кардани блоки код истифода мешавад.",
            explanation:
              "Шумо шуморанда, шарти иҷро ва қадамро дар сикл муайян мекунед.",
            example:
              "for (let i = 1; i <= 5; i++) {\n  console.log('Рақами:', i);\n}",
            practice: "Сикле нависед, ки рақамҳои аз 1 то 10-ро барорад.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "lesson_3_content_3",
            title: "Сикли while",
            info: "Сикли while то он даме, ки шарт true аст, такрор меёбад.",
            explanation:
              "Одатан вақте истифода мешавад, ки шумораи дақиқи такрорҳо пешакӣ маълум нест.",
            example:
              "let i = 1;\nwhile (i <= 3) {\n  console.log('Такрор:', i);\n  i++;\n}",
            practice: "Сикли while созед, ки аз 5 то 1 ақиб шуморадорад.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "lesson_3_content_4",
            title: "Функсияҳои тирӣ (Arrow Functions)",
            info: "Arrow Functions навишти кӯтоҳтару замонавии функсияҳо дар ES6 мебошанд.",
            explanation: "Ба ҷои калимаи function аломати => истифода мешавад.",
            example:
              "const multiply = (x, y) => x * y;\nconsole.log(multiply(4, 5)); // 20",
            practice: "Як функсияи оддиро ба Arrow Function табдил диҳед.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Функсияе нависед, ки ададеро қабул карда, бо истифода аз сикл ҷадвали зарби онро ба консол барорад.",
          code: "function printTable(num) {\n  for (let i = 1; i <= 10; i++) {\n    console.log(`${num} x ${i} = ${num * i}`);\n  }\n}\n\nprintTable(5);",
        },
      },
      {
        id: "4",
        title: "Дарси 4: Массивҳо ва Объектҳо",
        description: "Сохторҳои маълумот барои нигоҳдории маҷмӯи ахбор.",
        topics: [
          {
            id: "lesson_4_content_0",
            title: "Массивҳо (Arrays)",
            info: "Массив барои нигоҳдории рӯйхати қиматҳо дар як мутағайир истифода мешавад.",
            explanation:
              "Элементҳои массив бо индексҳо идора мешаванд (индексатсия аз 0 сар мешавад).",
            example:
              "let fruits = ['Олма', 'Банан', 'Нок'];\nconsole.log(fruits[0]); // Олма",
            practice: "Массиви 3 аломати дӯстдоштаи худро созед.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "lesson_4_content_1",
            title: "Методҳои оссосии Массив",
            info: "Методҳои push, pop, shift ва unshift барои илова ва нест кардани элементҳо хизмат мекунанд.",
            explanation:
              "push() ба охир илова мекунад, pop() аз охир нест мекунад.",
            example:
              "let numbers = [1, 2, 3];\nnumbers.push(4); // [1, 2, 3, 4]\nnumbers.pop();  // [1, 2, 3]",
            practice: "Элементи навро ба массиви худ бо push илова кунед.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "lesson_4_content_2",
            title: "Объектҳо (Objects)",
            info: "Объектҳо барои нигоҳ доштани маълумот дар шакли 'калид: қимат' (key: value) истифода мешаванд.",
            explanation:
              "Объект барои тавсифи объектҳои воқеӣ (мисли корбар, мошин ва с.) олии аст.",
            example:
              "let user = {\n  name: 'Али',\n  age: 25,\n  city: 'Душанбе'\n};\nconsole.log(user.name); // Али",
            practice:
              "Объектеро созед, ки мушаххасоти телефони шуморо нигоҳ дорад.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "lesson_4_content_3",
            title: "Методҳои объект ва this",
            info: "Объектҳо метавонанд функсияҳо (методҳо)-ро дар дохили худ дошта бошанд.",
            explanation: "Калимаи this ба худи ҳамон объект ишора мекунад.",
            example:
              "let person = {\n  name: 'Зариф',\n  greet: function() {\n    console.log('Салом, ман ' + this.name);\n  }\n};\nperson.greet();",
            practice:
              "Ба объекти худ методе илова кунед, ки маълумотро чоп кунад.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "lesson_4_content_4",
            title: "Гузариш аз рӯи массив (forEach)",
            info: "Методи forEach барои пайдарпай иҷро кардани код ба ҳар як элементи массив хизмат мекунад.",
            explanation: "Ин тарзи қулайтар аз сикли оддии for мебошад.",
            example:
              "let colors = ['Сурх', 'Зард', 'Кабуд'];\ncolors.forEach(color => {\n  console.log('Ранг:', color);\n});",
            practice: "Массиви рақамҳоро бо forEach ба консол бароред.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Массиви объектҳои донишҷӯёнро созед (ном ва балл) ва танҳо донишҷӯёнеро, ки баллашон аз 80 боло аст, чоп кунед.",
          code: "let students = [\n  { name: 'Али', score: 85 },\n  { name: 'Вали', score: 65 },\n  { name: 'Солеҳ', score: 92 }\n];\n\nstudents.forEach(student => {\n  if (student.score > 80) {\n    console.log(`${student.name} гузашт бо балли: ${student.score}`);\n  }\n});",
        },
      },
      {
        id: "5",
        title: "Дарси 5: DOM ва Ҳодисаҳо (Events)",
        description: "Кор бо элементҳои HTML ва вокуниш ба амалҳои корбар.",
        topics: [
          {
            id: "lesson_5_content_0",
            title: "DOM чист?",
            info: "DOM (Document Object Model) сохтори дарахтмонанди вебсаҳифа мебошад, ки ба JS имкони тағйир додани онро медиҳад.",
            explanation:
              "Тавассути DOM шумо метавонед матнҳо, стилҳо ва элементҳои HTML-ро тағйир диҳед.",
            example: "document.title = 'Номи нави саҳифа';",
            practice: "Дар консол сарлавҳаи саҳифаро тағйир диҳед.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "lesson_5_content_1",
            title: "Ҷустуҷӯи элементҳо (querySelector)",
            info: "Методҳои document.querySelector ва document.getElementById барои ёфтани элементҳо истифода мешаванд.",
            explanation:
              "querySelector селекторҳои CSS-ро (.class, #id, tag) қабул мекунад.",
            example:
              "const title = document.querySelector('#main-title');\nconsole.log(title.textContent);",
            practice: "Элементро бо ID аз HTML дар JS интихоб кунед.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "lesson_5_content_2",
            title: "Тағйир додани матн ва CSS",
            info: "Свойстваҳои textContent ва style имкон медиҳанд, ки мундариҷа ва намуди элементро тағйир диҳем.",
            explanation:
              "style.color ё style.backgroundColor барои тағйири ранг истифода мешавад.",
            example:
              "const box = document.querySelector('.box');\nbox.textContent = 'Матни нав';\nbox.style.color = 'blue';",
            practice: "Ранги матни сарлавҳаро ба сурх табдил диҳед.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "lesson_5_content_3",
            title: "Идоракунии Ҳодисаҳо (addEventListener)",
            info: "addEventListener барои пайгирии амалҳои корбар (клик, ворид кардани матн ва с.) истифода мешавад.",
            explanation:
              "Вонкуниш ба клик кардани тугмаҳо яке аз истифодаҳои аслии он аст.",
            example:
              "const btn = document.querySelector('button');\nbtn.addEventListener('click', () => {\n  alert('Тугма пахш шуд!');\n});",
            practice: "Ҳодисаи 'click'-ро ба тугмаи саҳифа илова кунед.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            id: "lesson_5_content_4",
            title: "Сохтани элементҳои нав",
            info: "Методи document.createElement барои сохтани тегҳои нави HTML тавассути JS хизмат мекунад.",
            explanation:
              "Элементи сохташуда бо appendChild ба саҳифа илова карда мешавад.",
            example:
              "const newDiv = document.createElement('div');\nnewDiv.textContent = 'Контейнери нав';\ndocument.body.appendChild(newDiv);",
            practice: "Параграфи навро сохта ба body илова кунед.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Як тугма ва як теги h1 созед. Бо ҳар як клик кардани тугма рақами дар h1 бударо 1 адад зиёд кунед (Программаи Counter/Шумора).",
          code: '<!DOCTYPE html>\n<html lang="tg">\n<head>\n  <meta charset="UTF-8">\n  <title>JS Counter</title>\n</head>\n<body>\n  <h1 id="count">0</h1>\n  <button id="btn">Зиёд кардан</button>\n\n  <script>\n    let counter = 0;\n    const countEl = document.querySelector(\'#count\');\n    const btnEl = document.querySelector(\'#btn\');\n\n    btnEl.addEventListener(\'click\', () => {\n      counter++;\n      countEl.textContent = counter;\n    });\n  </script>\n</body>\n</html>',
        },
      },
    ],
  },
  React: {
    title: "React",
    description:
      "Асосҳои сохтани интерфейсҳои муосири веб бо истифода аз китобхонаи React",
    lessons: [
      {
        id: "1",
        title: "Дарси 1: Муқаддима ба React ва JSX",
        description: "React чист, насби муҳит ва ошноӣ бо синтаксиси JSX.",
        topics: [
          {
            id: "content_0",
            title: "React чист?",
            info: "React китобхонаи JavaScript аз ширкати Meta мебошад, ки барои сохтани интерфейсҳои корбарӣ (UI) истифода мешавад.",
            explanation:
              "React бар равиши компонентӣ (Component-Based) асос ёфтааст. Шумо интерфейсро ба қисмҳои хурд ва мустақил тақсим мекунед.",
            example: "function App() {\n  return <h1>Салом, React!</h1>;\n}",
            practice: "Аввалин лоиҳаи худро бо Vite ё Create React App созед.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "content_1",
            title: "Синтаксиси JSX",
            info: "JSX (JavaScript XML) имкон медиҳад, ки коди HTML-ро дар дохили JavaScript нависем.",
            explanation:
              "Дар JSX ҳамаи тегҳо бояд баста шаванд ва ба ҷои class атрибути className истифода мешавад.",
            example:
              'const element = <h1 className="title">Матни сарлавҳа</h1>;',
            practice: "Як элементи JSX бо className ва теги басташуда созед.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "content_2",
            title: "Компонентҳои функсионалӣ",
            info: "Компонентҳо блокҳои асосии сохтории React мебошанд.",
            explanation:
              "Компоненти функсионалӣ ин функсияи оддии JS мебошад, ки JSX-ро бармегардонад (return мекунад).",
            example:
              "function Header() {\n  return <header><h2>Логотипи сайт</h2></header>;\n}\nexport default Header;",
            practice:
              "Компоненти Header ва Footer-ро созед ва дар App.jsx истифода баред.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "content_3",
            title: "Вграждании дастрасӣ дар JSX",
            info: "Дар дохили JSX метавон мутағайирҳо ва ифодаҳои JavaScript-ро истифода бурд.",
            explanation:
              "Барои истифодаи коди JS дар дохили JSX аз қавсҳои мавҷнок {} истифода мешавад.",
            example:
              "function User() {\n  const name = 'Али';\n  return <h3>Имзо: {name.toUpperCase()}</h3>;\n}",
            practice:
              "Мутағайир сохта онро дар дохили теги p бо қавсҳои {} нишон диҳед.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "content_4",
            title: "Фрагментҳо дар React (<>...</>)",
            info: "React Фрагментҳо имкон медиҳанд, ки якчанд элементро бе илова кардани div-и зиёдатӣ баргардонем.",
            explanation:
              "Ба ҷои бастани элементҳо дар <div>, аз тегҳои холии <> ... </> истифода мебаранд.",
            example:
              "function Content() {\n  return (\n    <>\n      <h1>Сарлавҳа</h1>\n      <p>Параграф</p>\n    </>\n  );\n}",
            practice:
              "Компонентеро нависед, ки ду элементро дар дохили React.Fragment баргардонад.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Лоиҳаи нави React созед ва 3 компоненти алоҳида (Header, MainContent, Footer) эҷод карда, онҳоро дар App.jsx ҷамъ кунед.",
          code: "// Header.jsx\nexport function Header() {\n  return <header><h1>Сайти ман</h1></header>;\n}\n\n// App.jsx\nimport { Header } from './Header';\n\nexport default function App() {\n  return (\n    <>\n      <Header />\n      <main><p>Хуш омадед ба React!</p></main>\n    </>\n  );\n}",
        },
      },
      {
        id: "2",
        title: "Дарси 2: Props ва Интиқоли Маълумот",
        description:
          "Гузаронидани маълумот байни компонентҳо бо истифода аз Props.",
        topics: [
          {
            id: "lesson_2_content_0",
            title: "Props чист?",
            info: "Props (хосиятҳо) барои интиқоли маълумот аз компоненти соҳиб (Parent) ба компоненти фарзанд (Child) хизмат мекунанд.",
            explanation:
              "Props танҳо барои хондан (read-only) мебошанд ва онҳоро дар дохили компоненти фарзанд тағйир додан мумкин нест.",
            example:
              'function Greeting(props) {\n  return <h2>Салом, {props.name}!</h2>;\n}\n// Истифода: <Greeting name="Аҳмад" />',
            practice:
              "Компоненти Greeting созед ва ба он пропи name бифристонед.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "lesson_2_content_1",
            title: "Деструктуризатсияи Props",
            info: "Барои соддатар навиштани код, props-ро бевосита дар аргументи функсия деструктуризатсия мекунанд.",
            explanation:
              "Ба ҷои props.name, шумо метавонед мустақиман { name, age }-ро қабул кунед.",
            example:
              "function UserCard({ name, age }) {\n  return <div>{name} - {age} сола</div>;\n}",
            practice:
              "Компонентеро созед, ки props-ро бо деструктуризатсия қабул кунад.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "lesson_2_content_2",
            title: "Қиматҳои пешфарз (Default Props)",
            info: "Шумо метавонед барои props қимати пешфарз (Default) муайян кунед, то дар сурати нафиристодани он хатогӣ рух надиҳад.",
            explanation:
              "Қимати пешфарз бевосита дар параметрҳои деструктуризатсия дода мешавад.",
            example:
              "function Button({ text = 'Тугма' }) {\n  return <button>{text}</button>;\n}",
            practice:
              "Тугмае созед, ки агар ба он проп наояд, матни 'Интихоб'-ро нишон диҳад.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "lesson_2_content_3",
            title: "Prop-и махсуси props.children",
            info: "props.children ҳама он мундариҷаеро, ки дар байни теги кушодашавӣ ва басташавии компонент навишта мешавад, мегирад.",
            explanation:
              "Ин барои сохтани компонентҳои контейнерӣ (мисли Карточкаҳо ё Модалҳо) хеле муфид аст.",
            example:
              'function Card({ children }) {\n  return <div className="card">{children}</div>;\n}',
            practice:
              "Компоненти Card созед ва дар дохили он матн ва тугма гузоред.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "lesson_2_content_4",
            title: "Рендеринги шартӣ (Conditional Rendering)",
            info: "Пешниҳоди мундариҷаи гуногун дар асоси шартҳо тавассути оператори тернарӣ ё &&.",
            explanation:
              "Агар шарт true бошад, компоненти дилхоҳ рендер мешавад.",
            example:
              "function Status({ isOnline }) {\n  return <div>{isOnline ? 'Дар шабака' : 'Офлайн'}</div>;\n}",
            practice:
              "Шарте созед, ки агар isLogged true бошад, номи корбарро нишон диҳад.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Компоненти ProductCard созед, ки номи маҳсулот, нарх ва ҳолати мавҷудиятро (In Stock) тавассути props қабул карда, намоиш диҳад.",
          code: "function ProductCard({ title, price, inStock }) {\n  return (\n    <div style={{ border: '1px solid #ccc', padding: '10px' }}>\n      <h3>{title}</h3>\n      <p>Нарх: {price} сомонӣ</p>\n      <p>{inStock ? 'Дар нигаҳдорӣ ҳаст' : 'Нест'}</p>\n    </div>\n  );\n}\n\nexport default function App() {\n  return <ProductCard title=\"Телефон\" price={3000} inStock={true} />;\n}",
        },
      },
      {
        id: "3",
        title: "Дарси 3: Ҳолат (State) ва Хуки useState",
        description:
          "Идоракунии динамикии маълумоти дохилии компонент бо useState.",
        topics: [
          {
            id: "lesson_3_content_0",
            title: "State (Ҳолат) чист?",
            info: "State аломати дохилии компонент мебошад, ки метавонад бо гузашти вақт ва амали корбар тағйир ёбад.",
            explanation:
              "Вақте ки State тағйир меёбад, React компонентро аз нав рендер (re-render) мекунад, то тағйирот намоён шавад.",
            example: "// Маълумоте, ки бо клики корбар тағйир меёбад",
            practice:
              "Фаҳмед, ки чаро мутағайири оддӣ дар React ҷои State-ро гирифта наметавонад.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "lesson_3_content_1",
            title: "Хуки useState",
            info: "useState хуки асосии React барои илова кардани state ба компоненти функсионалӣ мебошад.",
            explanation:
              "useState массиверо бо ду элемент бармегардонад: қимати ҷорӣ ва функсия барои афзоиш/тағйири он.",
            example:
              "import { useState } from 'react';\n\nconst [count, setCount] = useState(0);",
            practice:
              "Хуки useState-ро дар компоненти худ импорт ва эълон кунед.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "lesson_3_content_2",
            title: "Сохтани Шумора (Counter)",
            info: "Мисоли классикии истифодаи useState ин сохтани ҳисобкунаки кликҳо мебошад.",
            explanation:
              "Бо пахши тугма функсияи setCount даъват шуда, рақамро 1 адад зиёд мекунад.",
            example:
              "function Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Кликҳо: {count}\n    </button>\n  );\n}",
            practice:
              "Шумораи созед, ки тугмаҳои 'Зиёд' ва 'Кам' карданро дошта бошад.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "lesson_3_content_3",
            title: "Идоракунии формаҳо бо State",
            info: "Барои гирифтани маълумот аз майдонҳои input аз State истифода бурда мешавад (Controlled Components).",
            explanation:
              "Ҳодисаи onChange барои навсозии State бо value-и нав хизмат мекунад.",
            example:
              "const [text, setText] = useState('');\n<input value={text} onChange={(e) => setText(e.target.value)} />",
            practice:
              "Майдони воридотие созед, ки матни онро дар зераш якҷоя нишон диҳад.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "lesson_3_content_4",
            title: "Идоракунии пайвастҳои булевӣ (Toggle State)",
            info: "Аваз кардани ҳолати true/false (мисли кушодан/бастани меню ё модал).",
            explanation: "Бо истифода аз ! (НЕ) метавон ҳолатро баръакс кард.",
            example:
              "const [isOpen, setIsOpen] = useState(false);\nconst toggle = () => setIsOpen(!isOpen);",
            practice:
              "Тугмае созед, ки бо пахши он матн пайдо ва пинҳон шавад.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Формаи соддаи воридшавӣ (Login Form) созед, ки логин ва паролро дар State нигоҳ дошта, бо пахши тугма онҳоро дар экран нишон диҳад.",
          code: "import { useState } from 'react';\n\nexport default function LoginForm() {\n  const [email, setEmail] = useState('');\n\n  return (\n    <div>\n      <input \n        type=\"email\" \n        placeholder=\"Email\" \n        value={email} \n        onChange={(e) => setEmail(e.target.value)} \n      />\n      <p>Почтаи шумо: {email}</p>\n    </div>\n  );\n}",
        },
      },
      {
        id: "4",
        title: "Дарси 4: Кор бо Рӯйхатҳо ва Рендери Массивҳо",
        description:
          "Пайваст ва намоиш додани рӯйхати маълумотҳо бо методи map().",
        topics: [
          {
            id: "lesson_4_content_0",
            title: "Методи map() дар React",
            info: "Барои баргардонидани рӯйхати элементҳои JSX аз массиви маълумотҳо методи map() истифода мешавад.",
            explanation:
              "map() ҳар як элементи массивро гирифта, онро ба компоненти JSX табдил медиҳад.",
            example:
              "const items = ['Аппел', 'Банан', 'Олма'];\nconst list = items.map((item, index) => <li key={index}>{item}</li>);",
            practice: "Массиви рангҳоро бо map() ба рӯйхати <ul> намоиш диҳед.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "lesson_4_content_1",
            title: "Аҳамияти пропи key",
            info: "Ҳангоми рендери рӯйхатҳо, ба ҳар як элемент бояд пропи ягонаи key дода шавад.",
            explanation:
              "Key ба React кӯмак мекунад, ки қайд кунад, кадом элементҳо тағйир ёфтаанд, илова ё нест шудаанд.",
            example:
              "const users = [{ id: 1, name: 'Али' }, { id: 2, name: 'Вали' }];\nusers.map(user => <div key={user.id}>{user.name}</div>);",
            practice: "Ба элементи рӯйхат ID-и ягонаро ҳамчун key гузоред.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "lesson_4_content_2",
            title: "Филтркунии Массивҳо дар React",
            info: "Истифодаи методи filter() якҷоя бо map() барои намоиши танҳо баъзе элементҳои зарурӣ.",
            explanation:
              "Аввал маълумот филтр карда шуда, баъд ба map() дода мешавад.",
            example:
              "const numbers = [1, 2, 3, 4, 5];\nconst even = numbers.filter(n => n % 2 === 0).map(n => <span key={n}>{n} </span>);",
            practice:
              "Массиви ададҳоро созед ва танҳо ададҳои аз 10 калонро нишон диҳед.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "lesson_4_content_3",
            title: "Илова кардани элементи нав ба State",
            info: "Тарзи дурусти илова кардани элементи нав ба массиви дохили State бе мутатсияи мустақим.",
            explanation:
              "Истифодаи оператори Spread (...) барои сохтани нусхаи нави массив зарур аст.",
            example:
              "const [items, setItems] = useState(['Элементи 1']);\nconst addItem = () => setItems([...items, `Элементи ${items.length + 1}`]);",
            practice:
              "Функсияе созед, ки бо пахши тугма элементи навро ба рӯйхат илова кунад.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "lesson_4_content_4",
            title: "Нест кардани элемент аз рӯйхат",
            info: "Удалить кардани элемент аз State бо истифода аз методи filter().",
            explanation:
              "Фиристодани ID-и элемент ва сохтани массиви нав бе он ID.",
            example:
              "const removeItem = (id) => {\n  setItems(items.filter((_, index) => index !== id));\n};",
            practice:
              "Дар паҳлӯи ҳар як элементи рӯйхат тугмаи 'Нест кардан' гузоред.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Барномаи оддии Todo List (Рӯйхати вазифаҳо) созед, ки имкони илова кардан ва нест кардани вазифаҳоро дошта бошад.",
          code: "import { useState } from 'react';\n\nexport default function TodoApp() {\n  const [todos, setTodos] = useState([]);\n  const [input, setInput] = useState('');\n\n  const addTodo = () => {\n    if (input) {\n      setTodos([...todos, input]);\n      setInput('');\n    }\n  };\n\n  return (\n    <div>\n      <input value={input} onChange={(e) => setInput(e.target.value)} />\n      <button onClick={addTodo}>Илова кардан</button>\n      <ul>\n        {todos.map((todo, index) => (\n          <li key={index}>{todo}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}",
        },
      },
      {
        id: "5",
        title: "Дарси 5: Сайд-эффектҳо ва Хуки useEffect",
        description:
          "Кор бо хуки useEffect ва дастрас кардани маълумот аз API (Data Fetching).",
        topics: [
          {
            id: "lesson_5_content_0",
            title: "useEffect ва Сайд-эффектҳо чист?",
            info: "useEffect барои иҷрои амалҳое, ки ба рендери олии компонент таъсир мерасонанд (Side Effects) истифода мешавад.",
            explanation:
              "Мисолҳо: гирифтани маълумот аз сервер (API), таймерҳо ва навсозии мустақими DOM.",
            example:
              "import { useEffect } from 'react';\n\nuseEffect(() => {\n  console.log('Компонент рендер шуд!');\n});",
            practice:
              "useEffect-ро импорт карда, паёми оддиро дар консол бароред.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "lesson_5_content_1",
            title: "Массиви вобастагиҳо (Dependency Array)",
            info: "Аргументи дуюми useEffect массиви вобастагиҳо мебошад, ки чанд маротиба иҷро шудани эффектро муайян мекунад.",
            explanation:
              "Массиви холӣ [] маънои онро дорад, ки эффект танҳо як маротиба ҳангоми сохта шудани компонент (Mount) иҷро мешавад.",
            example:
              "useEffect(() => {\n  // Танҳо 1 маротиба ҳангоми пайдо шудан иҷро мешавад\n}, []);",
            practice: "useEffect-ро бо массиви холии вобастагиҳо нависед.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "lesson_5_content_2",
            title: "Пайгирии тағйироти State дар useEffect",
            info: "Агар мутағайири State-ро ба массиви вобастагиҳо дохил кунед, эффект бо ҳар тағйири он иҷро мешавад.",
            explanation:
              "Ин барои пайгирии тағйирот дар воридоти корбар ё санҷишҳо қулай аст.",
            example:
              "useEffect(() => {\n  document.title = `Шумора: ${count}`;\n}, [count]);",
            practice:
              "useEffect созед, ки бо тағйири count сарлавҳаи саҳифаро (document.title) тағйир диҳад.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "lesson_5_content_3",
            title: "Гирифтани маълумот аз API (Fetch Data)",
            info: "Истифодаи fetch API дар дохили useEffect барои бори аввал овардани маълумот аз сервер.",
            explanation:
              "Маълумоти гирифташуда ба дохили State сабт мешавад ва саҳифа нав мегардад.",
            example:
              "useEffect(() => {\n  fetch('https://jsonplaceholder.typicode.com/posts')\n    .then(res => res.json())\n    .then(data => setData(data));\n}, []);",
            practice:
              "Дастрас кардани рӯйхати постҳоро аз API-и ройгон иҷро кунед.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            id: "lesson_5_content_4",
            title: "Тозакунӣ дар Эффект (Cleanup Function)",
            info: "Баргардонидани функсия аз useEffect барои нест кардани таймерҳо ё пайвастшавиҳо (Unmount).",
            explanation:
              "Ин барои пешгирӣ аз хатогиҳои хотира (Memory Leaks) зарур аст.",
            example:
              "useEffect(() => {\n  const timer = setInterval(() => console.log('Тик'), 1000);\n  return () => clearInterval(timer); // Тозакунӣ\n}, []);",
            practice: "Таймере созед, ки ҳангоми бастан тоза карда шавад.",
            video: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
        ],
        homework: {
          title: "Вазифаи хонагӣ",
          description:
            "Барномае созед, ки ҳангоми кушода шудан аз API-и JSONPlaceholder рӯйхати корбаронро (users) гирифта, номи онҳоро дар экран намоиш диҳад.",
          code: "import { useState, useEffect } from 'react';\n\nexport default function UsersList() {\n  const [users, setUsers] = useState([]);\n\n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/users')\n      .then((res) => res.json())\n      .then((data) => setUsers(data));\n  }, []);\n\n  return (\n    <div>\n      <h2>Рӯйхати Корбарон</h2>\n      <ul>\n        {users.map((user) => (\n          <li key={user.id}>{user.name} ({user.email})</li>\n        ))}\n      </ul>\n    </div>\n  );\n}",
        },
      },
    ],
  },
};
