const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot("1622938240:AAHtxjPqCko-ezoAUD7h4mhMqPDyu5SHh98")


//  Приветсиве при запуске
const startText = "Тебе вітає  ✈️  НАУ ім. Н.Є. Жуковського ''ХАІ'' "

// Основное меню и ответы

// 
// Ответы отформатированы с использование стандартных правил форматирования 
// от Telegram в формате HTML
// https://core.telegram.org/bots/api#formatting-options
//

const menus = {
    
    "Кафедра": "<strike>strikethrough</strike>",
    "Спеціальності": "За конкурсною пропозицією <b>«Інтелектуальні інформаційні вимірювальні системи»</b> \nстудентам надають знання з проектування вимірювальних систем промислового призначення; структури і побудови інформаційно-діагностичних систем; основ автоматизації експериментальних досліджень, патентного пошуку та захисту інтелектуальної власності, основ наукових досліджень, організації та управління виробництвом.",
    "Контакти": "",
    "Працевлаштування": "",
    "Студентське життя": "<s>strikethrough</s>",
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
            caption: "text: https://k303.khai.edu/#footer"
        })
    }
}) 



;(async () => {
    await bot.startPolling()
    console.log(`Bot is started at ${new Date()}`)
})()
