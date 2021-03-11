const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot("1622938240:AAHPfGebzQmbRkj6skdrmaf4h-_FH1wAzwI")


//  Приветсиве при запуске
const startText = "Привіт"

// Основное меню и ответы

// 
// Ответы отформатированы с использование стандартных правил форматирования 
// от Telegram в формате HTML
// https://core.telegram.org/bots/api#formatting-options
//

const menus = {
    "abc5": "<b>abd</b>",
    "dsa6": "<i>daw</i>",
    "abc7": "<b>abd</b>",
    "dsa8": "<i>daw</i>",
    "Працевлаштування": "",
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
        await bot.sendPhoto(userId, "C:/Users/User/Desktop/kafedra303_bot(1).jpg")
    }
}) 



;(async () => {
    await bot.startPolling()
    console.log(`Bot is started at ${new Date()}`)
})()
