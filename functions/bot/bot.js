const { Telegraf } = require('telegraf');
const { parse } = require('node-html-parser');
const { message } = require('telegraf/filters');
const axios = require('axios');
const textCommand = require('../../consts')
require('dotenv').config();


const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.replyWithHTML(`<b> Здравcтвуйте ${ctx.message.from.first_name ? ctx.message.from.first_name : ''}, я официальный Бот государственного предприятия Гомельский ЦСМС, я могу подсказать Вам о готовности Вашей квитанции-счёт по её номеру  
❗️ введите номер квитанции-счёт HЕ используя символ '-'
❗️ введите год выписки квитанции через ПРОБЕЛ, если квитанция выписана НЕ в текущем году
❗️ Пример 2160011111 2021
</b>`));


bot.help((ctx) => ctx.replyWithHTML(`Приём/выдача приборов с 09:00 до 17:00 (в пятницу с 09:00 до 16:00);
с 11:45 до 12:33 обеденный перерыв (во время обеда принимает и выдает приборы дежурный).
Справки по телефонам 26-33-24, 26-33-26  
<a href='https://gomelcsms.by/info/'> Гомельский ЦСМС</a>`))



bot.on('message', async (ctx) => {
    try {
        let data = ctx.message.text.split(' ').slice(0,2)
        let bill = data[0] 
        let year = data[1] 

        if (year === undefined) {
            year = '2023'
          }
          
        if (bill.length !== 10 || year.length !== 4) {
            ctx.reply(`Проверьте правильность заполнения данных 😔`)
        } else {
            
            const url = `https://www.gomelcsms.by/info/scheta.php?nom=${bill}&god=${year}`
            const res = await axios.get(url)
            const notFoundBill = res.data.includes('нет в базе')
            const parsed = parse(res.data)
            const text = parsed.querySelectorAll("div[align='center'] font[color='green']").map((e) => e.text).join('')
            const errorText = parsed.querySelectorAll("div[align='center'] font[color='red']").map((e) => e.text).join('')
            text && ctx.reply(`${text} 👍`)
            errorText && await ctx.reply(`${errorText} 😔 наши специалисты делают всё возможное для скорейшего завершения работ 👌`)
            notFoundBill && await ctx.reply('Проверьте правильность заполнения данных 😔')  
        }
    } catch (e) {
        console.error(e)
        e && await ctx.reply('Извините, какие-то неполадки, отпрвьте запрос позже')
    }
})


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

