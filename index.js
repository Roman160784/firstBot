const { Telegraf } = require('telegraf');
const { parse } =require('node-html-parser');
const { message } = require('telegraf/filters');
const axios = require('axios');
const textCommand = require('./consts')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.replyWithHTML(`<b> Здравcтвуйте ${ctx.message.from.first_name ? ctx.message.from.first_name : ''}, я официальный Бот государственного предприятия Гомельский ЦСМС, я могу подсказать Вам о готовности Вашей квитанции-счёт по её номеру </b>`));

bot.help((ctx) => ctx.reply(textCommand.commands))

bot.on('message', async (ctx) => {

        console.log(ctx.message.message_id);

    if (ctx.message.text) {
        let bill = ctx.message.text
         const url = `https://www.gomelcsms.by/info/scheta.php?nom=${bill}&god=2023`
         const res = await axios.get(url)
        const parsed = parse(res.data)
        // const parsed = parse(html)
       const text= parsed.querySelectorAll("div[align='center'] font[color='green']").map((e) => e.text).join('')
       const errorText= parsed.querySelectorAll("div[align='center'] font[color='red']").map((e) => e.text).join('')
       ctx.reply(`${text} 👍`)
       errorText && ctx.reply(`${errorText} 😔 наши сотрудники делают всё возможное для скорейшего завершения работ`)
    } 



})
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
// bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
