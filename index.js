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
    
    "Кафедра": "<ins>underline</ins>",
    "Спеціальності": "<b>152 «Метрологія та інформаційно-вимірювальна техніка»</b> \n\n<u>* Інтелектуальні інформаційні вимірювальні системи</u>  -  студентам надають знання з проектування вимірювальних систем промислового призначення; структури і побудови інформаційно-діагностичних систем; основ автоматизації експериментальних досліджень, патентного пошуку та захисту інтелектуальної власності, основ наукових досліджень, організації та управління виробництвом. \n\n<u>Менеджмент якості товарів та послуг</u>  -  студенти вивчають найсучасніші методи, принципи і вимоги до управління якістю товарів і послуг, серед яких: \n\n - схеми безперервного удосконалення (PDCA, MAIC, DMAIC, RDMAIC, RDMAICSI тощо); \n - сучасні інструменти управління якістю і контролю якості; \n - концепції бездефектної роботи і ощадливого управління: 6σ method; Lean management; Lean 6σ тощо; \n - якість в управлінні проектами (Quality inproject management); \n - правила європейської сертифікації і оцінки відповідності товарів, послуг і систем менеджменту, правила акредитації випробувальних лабораторій; \n - підходи до управління ризиками і реалізації можливостей. \n\n<b>153 «Мікро- та наносистемна техніка»</b> \n\n<u>Мікро- та наносистемна техніка</u>  -  здійснюється підготовка фахівців з розробки, виробництва комп’ютерного моделювання та дослідження пристроів, матеріалів і компонентів мікро- та наноелектроніки різного призначення.",
    "Контакти": "",
    "Працевлаштування": "",
    "Студентське життя": "<em>italic</em>",
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
            caption: "\nАдреса  〰️  вул. Чкалова, 17, м. Харків, 61070, Україна, радіокорпус ХАІ, ауд.322 \n\nТелефон  〰️  \+38 (057) 788-43-03, \+38 (057) 788-47-12 \n\nПошта  〰️  kafedraapi@rambler.ru, kafedraapi@ukr.net  \n\nInstagram  〰️  https://www.instagram.com/sula.khai/?hl=ru \n\nFacebook  〰️  https://www.facebook.com/Kafedra303/?epa=SEARCH_BOX"
        })
    }
}) 



;(async () => {
    await bot.startPolling()
    console.log(`Bot is started at ${new Date()}`)
})()
