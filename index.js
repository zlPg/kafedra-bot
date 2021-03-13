const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot("1622938240:AAHtxjPqCko-ezoAUD7h4mhMqPDyu5SHh98")


//  Приветсиве при запуске
const startText = "Тебе вітає  ✈️  НАУ ім. Н.Є. Жуковського ''ХАІ'' \n\nА саме: факультет систем управління літальних апаратів \n\nКафедра інтелектуальних вимірювальних систем та інженерії якості"

// Основное меню и ответы

// 
// Ответы отформатированы с использование стандартных правил форматирования 
// от Telegram в формате HTML
// https://core.telegram.org/bots/api#formatting-options
//

const menus = {
   
    "Кафедра": "<i>Кафедра 303 заснована 21 грудня 1951 на факультеті цивільного повітряного флоту ХАІ.</i> \n\nВикладацький склад кафедри: 3 професорів, лауреата державної премії України, 12 доцентів, 3 старших викладачів і 2 асистента. З яких 2 Доктора Наук. Якщо це прорив в науці і технологіях, ймовірно, в цьому замішані наші викладачі. \n\nКафедра постійно розширює діапазон науково-дослідних робіт, встановлюються зв'язки з зарубіжними організаціями. \n\nКафедра має комп'ютерний клас і 7 лабораторій і філія кафедри на державному підприємстві.  \n\nКафедра має великий досвід підготовки фахівців з приладобудування, проектування вимірювально-обчислювальних комплексів, інформаційно-вимірювальних систем і їх метрологічного забезпечення. \n\nВипускники кафедри постійно затребувані на підприємствах України та за кордоном.  \n\nЗа час існування кафедри було підготовлено понад 3000 висококваліфікованих фахівців. \n\n<i>Більше детальної інформації можна знайти на офіційному сайті</i>  〰️  https://k303.khai.edu/index.html",
    "Спеціальності": "<b>152 «Метрологія та інформаційно-вимірювальна техніка»</b> \n\n<u>Інтелектуальні інформаційні вимірювальні системи</u>  -  студентам надають знання з проектування вимірювальних систем промислового призначення; структури і побудови інформаційно-діагностичних систем; основ автоматизації експериментальних досліджень, патентного пошуку та захисту інтелектуальної власності, основ наукових досліджень, організації та управління виробництвом. \n\n<u>Менеджмент якості товарів та послуг</u>  -  студенти вивчають найсучасніші методи, принципи і вимоги до управління якістю товарів і послуг, серед яких: \n\n - схеми безперервного удосконалення (PDCA, MAIC, DMAIC, RDMAIC, RDMAICSI тощо); \n - сучасні інструменти управління якістю і контролю якості; \n - концепції бездефектної роботи і ощадливого управління: 6σ method; Lean management; Lean 6σ тощо; \n - якість в управлінні проектами (Quality inproject management); \n - правила європейської сертифікації і оцінки відповідності товарів, послуг і систем менеджменту, правила акредитації випробувальних лабораторій; \n - підходи до управління ризиками і реалізації можливостей. \n\n<b>153 «Мікро- та наносистемна техніка»</b> \n\n<u>Мікро- та наносистемна техніка</u>  -  здійснюється підготовка фахівців з розробки, виробництва комп’ютерного моделювання та дослідження пристроів, матеріалів і компонентів мікро- та наноелектроніки різного призначення.\n\nЦе новітня спеціальність, що буде популярною багато десятиріч з гарантією стійкого попиту на фахівців і успішним працевлаштуванням в різних галузях економіки. Мікроелектронні пристрої вже давно витіснили інші технології, а наноелектроніка є новим напрямом в науці. Так, завдяки використанню нанотехнологій вдалося розробити гнучкі екрани, забезпечити біологічну сумісність імплантів з організмом людини, отримати «суху воду», нові матеріали і речовини з унікальними властивостями тощо.\n\n<i>Більше детальної інформації можна знайти на офіційному сайті</i>  〰️  https://k303.khai.edu/index.html",
    "Контакти": "",
    "Працевлаштування": "",
    "Студентське життя": "Стимулююча, підтримуюча і весела спільнота кафедри 303 стає для багатьох студентів другою домівкою. Студенти беруть участь у міжнародних наукових конференціях, стажуваннях, у тому числі закордонних, проходять виробничу практику на сучасних підприємствах, беруть активну участь у студентському житті. \n\n<i>Внесок в науку</i> - На кафедрі проводятся науково-дослідницькі роботи, тематика яких - підвищення техніко-економічних показників сучасних інформаційно-вимірювальних систем за рахунок нових методів проектування, експлуатації і діагностування, а також розробки конкурентноздатних апаратних засобів.  \n\n<i>Наші гуртожитки</i> - це частково розважальний центр, частково мозковий трест, частково система підтримки, що повністю впливає на стан студентів ХАІ. На території студмістечка ХАІ розташовано 8 гуртожитків. Щорічно, протягом літнього періоду в кожному гуртожитку студентського містечка ХАІ проводяться ремонтні роботи з покращення умов проживання. ХАІ, на відміну від багатьох ВНЗ Харкова, може похвалитися тими умовами, в яких проживають студенти. У кожному корпусі ХАІ ви сміливо знайдете їдальню з просторими обідніми залами, великий асортимент страв, а харчування в РК - це смачно. \n\n<i>Профбюро</i> - у кожного студента є можливість розвиватися в нових для себе викликах, які буду чекати на нього в дружньому колективі молоді 303 кафедри за багатьма напрямками. \n\n<i> Мистецтво</i> процвітає в творчій культурі експериментів та інновацій кафедри. Наприклад, профспілковий центр дозвілля Авіа об'єднує всі творчі колективи НАУ ХАІ танцювальний колектив Мрія, Джад, клуби за інтересами: диско клуб Диліжанс, більярдний клуб Фукс і т.д. Головне в Авіа - підтримка ваших ідей щодо вдосконалення та розвитку культури і творчості серед студентів, створення нових колективів, клубів за інтересами. \n\nУспіх в ХАІ означає залишатися здоровим - розумом і руками, тілом і душею. Більше інформації, щоб бути у формі, можна знайти на сайті профкому ХАІ \n\nhttps://profkomstud.khai.edu/",
}

// Перевод меню в кнопки для Telegram
// https://core.telegram.org/bots/api#replykeyboardmarkup
const buttons = Object.keys(menus).map(menu => ({text : menu}))

const keyboard = buttons.reduce((ac, k, i) => {
    const index = Math.floor(i/3)
    if(!ac[index]) {
        ac[index] = []
    }
    ac[index].push(k)

    return ac
}, [])


// Обработка команды запуска бота
bot.onText(/\/start/, async (msg) => {
    const {
        from: {
            id: userId
        }
    } = msg

    await bot.sendMessage(userId, startText, {
        reply_markup: {
            resize_keyboard: true,
            keyboard: keyboard
        }
    })
})

// Обработки остальных сообщений от пользователя
bot.on('message', async (msg) => {
    const {
        text, 
        from: { 
            id: userId 
        }
     } = msg

    // Проверка нажатия на одну из кнопок основного меню
    if(menus[text]) {
        await bot.sendMessage(userId, menus[text], {
            parse_mode: "HTML"
        })
    }
    // Остальные случаи

    if(text == "Працевлаштування") {
        await bot.sendPhoto(userId, "./kafedra303_bot.jpg")
    }

    if(text == "Контакти") {
        await bot.sendPhoto(userId, "./kafedra3033_bot.jpg", {
            caption: "\nАдреса  〰️  вул. Чкалова, 17, м. Харків, 61070, Україна, радіокорпус ХАІ, ауд.322 \n\nТелефон  〰️  \+38 (057) 788-43-03, \+38 (057) 788-47-12 \n\nПошта  〰️  kafedraapi@rambler.ru, kafedraapi@ukr.net  \n\nInstagram  〰️  https://www.instagram.com/sula.khai/?hl=ru \n\nFacebook  〰️  https://www.facebook.com/Kafedra303/?epa=SEARCH_BOX \n\nСайт  〰️  https://k303.khai.edu/index.html"
        })
    }
}) 



;(async () => {
    await bot.startPolling()
    console.log(`Bot is started at ${new Date()}`)
})()
