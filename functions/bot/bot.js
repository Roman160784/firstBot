const { Telegraf } = require('telegraf');
const { parse } = require('node-html-parser');
const { message } = require('telegraf/filters');
const axios = require('axios');
const textCommand = require('../../consts')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.replyWithHTML(`<b> Здравcтвуйте ${ctx.message.from.first_name ? ctx.message.from.first_name : ''}, я официальный Бот государственного предприятия Гомельский ЦСМС, я могу подсказать Вам о готовности Вашей квитанции-счёт по её номеру  
❗️ введите номер квитанции-счёт HЕ используя символ '-' 
❗️ Пример 2160011111
</b>`));


bot.on('message', async (ctx) => {
    try {
        const bill = ctx.message.text
        if (bill.length !== 10) {
            ctx.reply(`Наверное неверные данные 😔`)
        } else {
            const url = `https://www.gomelcsms.by/info/scheta.php?nom=${bill}&god=2023`
            const res = await axios.get(url)
            const notFoundBill = res.data.includes('нет в базе')
            const parsed = parse(res.data)
            const text = parsed.querySelectorAll("div[align='center'] font[color='green']").map((e) => e.text).join('')
            const errorText = parsed.querySelectorAll("div[align='center'] font[color='red']").map((e) => e.text).join('')
            await ctx.reply(`${text} 👍`)
            errorText && await ctx.reply(`${errorText} 😔 наши сотрудники делают всё возможное для скорейшего завершения работ 👌`)
            notFoundBill && await ctx.reply('квитаннция-счёт в базе не обнаружена 😔')
        }
    } catch (e) {
        console.error(e)
        e && await ctx.reply('Извините, какие-то неполадки, отпрвьте запрос позже')
    }
})

// AWS event handler syntax (https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)
exports.handler = async event => {
  try {
    await bot.handleUpdate(JSON.parse(event.body))
    return { statusCode: 200, body: "" }
  } catch (e) {
    console.error("error in handler:", e)
    return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
  }
}

// bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
// bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

