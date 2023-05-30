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

    if (ctx.message.text) {
        let bill = ctx.message.text
        const url = `https://www.gomelcsms.by/info/scheta.php?nom=2160014971&god=2023`
        // const res = await axios.get(url)
        // const parsed = parse(res.data)
        const parsed = parse(html)
       const text= parsed.querySelectorAll("div[align='center'] font[color='green']").map((e) => e.text)
       const errorText= parsed.querySelectorAll("div[align='center'] font[color='red']").map((e) => e.text)
        console.log(text,errorText);
        // ctx.reply(res.data)
    } 

})
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

const html = `




<li>
<a href="/information/">Новости</a>
</li>





<li>
<a href="/administrativnye-protsedury/">Административные процедуры</a>
</li>




<li class="menu-close">
<a class="dd-menu-foot-dropitems" href="/sotsialnaya-sfera/">Социальная сфера <span class="arrowdd">></span></a>                    <ul class="dd-menu-foot-dropsel">






<li>
<a href="/sotsialnaya-sfera/ideologiya/zozh/zozh.php">Здоровый образ жизни</a>
</li>





<li>
<a href="/sotsialnaya-sfera/ideologiya/meropriyatiya/">Мероприятия</a>
</li>





<li>
<a href="/sotsialnaya-sfera/ideologiya/sportivnaya-zhizn/">Спортивная жизнь</a>
</li>





<li>
<a href="/sotsialnaya-sfera/ideologiya/videogalereya/">Видеогалерея</a>
</li>





<li>
<a href="/sotsialnaya-sfera/ideologiya/muzey/">Комната истории предприятия</a>
</li>





<li>
<a href="/sotsialnaya-sfera/stolovaya/">Общественное питание</a>
</li>




</ul></li>
<!--</ul>-->


<!--                <a href="/o-nas/">О нас</a>-->
<!--                <a href="/kontakty/">Контакты</a>-->
<!--                <a href="/information/">Новости</a>-->
</div>
</div>
<div class="container">
<div class="dd-menu-adr">
<span>г. Гомель, ул. Лепешинского 1, 246015</span>
<a rel="nofollow" href="tel:+375 232 26-33-01">+375 232 26-33-01</a>
<a rel="nofollow" href="mailto:mail@gomelcsms.by">mail@gomelcsms.by</a>
</div>
</div>
<div class="dd-menu-foot">




<ul class="dd-menu-foot-items">


<li>
<a href="/">Главная</a>
</li>




<li class="menu-close">
<a class="dd-menu-foot-dropitems" href="/metrol/">Метрологическая служба <span class="arrowdd">></span></a>     
<ul class="dd-menu-foot-dropsel">






<li>
<a href="/metrol/mehan/">Сектор механических измерений</a>
</li>





<li>
<a href="/metrol/geo/">Сектор геометрических измерений</a>
</li>





<li>
<a href="/metrol/teploteh/">Сектор теплотехнических измерений</a>
</li>





<li>
<a href="/metrol/fhi/">Сектор физико-химических измерений</a>
</li>





<li>
<a href="/metrol/emir/">Сектор электромагнитных и радиотехнических измерений</a>
</li>





<li>
<a href="/metrol/ion/">Сектор измерений ионизирующих излучений</a>
</li>





<li>
<a href="/metrol/rmd/">Сектор разработки технической документации и организации программ проверки квалификации</a>
</li>



</ul></li>

<li>
<a href="/isp-centr/">Испытательный центр</a>
</li>





<li>
<a href="/lab/">Отдел по испытаниям</a>
</li>





<li>
<a href="/sys/">Отдел систем менеджмента</a>
</li>





<li>
<a href="/tnpa/">Сектор по стандартизации</a>
</li>





<li>
<a href="/etalon/">Цех по ремонту СИ "Эталон"</a>
</li>





<li>
<a href="/cert/">Отдел по сертификации</a>
</li>





<li>
<a href="/stolovaya/">Столовая</a>
</li>





<li>
<a href="/diagnosticheskaya-stantsiya-251/">Диагностическая станция</a>
</li>





<!--</ul>-->





<ul class="dd-menu-foot-items">


<li>
<a href="/seminary-i-ucheby/">Семинары и учебы</a>
</li>





<li>
<a href="/stoimost-rabot/">Стоимость работ</a>
</li>





<li>
<a href="/si/">Реализация средств измерений</a>
</li>





<li>
<a href="/kpp.php">Входной контроль КПП</a>
</li>





<li>
<a href="/kvok2021/">Конкурсы в области качества</a>
</li>





<!--</ul>-->





<ul class="dd-menu-foot-items">


<li>
<a href="/evraziyskiy-ekonomicheskiy-soyuz/">Евразийский экономический союз</a>
</li>





<li>
<a href="/zakonodatelstvo/">Законодательство</a>
</li>





<li>
<a href="/mgs/">Проекты МГС</a>
</li>





<!--</ul>-->


</div>
</div>

<section class="body">
<div class="container">
<div class="body-treatment">

<div class="body-treatment-item">
<img src="/upload/iblock/f8d/f8dd2d3c3127a56f7cb3d7b394deebd5.svg" alt="">

<a href="/emsg/">Электронные обращения</a>
</div>
<div class="body-treatment-item">
<img src="/upload/iblock/845/8452c1e560f01cf75dbd9937a92ca4f4.svg" alt="">

<a href="/info/">Информация о выполнении заказов</a>
</div>
<div class="body-treatment-item treatment-item-y">
<img src="/upload/iblock/8ed/yct90mgyy5olyefg2auq7xs9nvo3i42j.png" alt="">

<a href="#"class="btn-diag-all">Записаться на технический осмотр транспортных средств</a>
</div>
<div class="body-treatment-item">
<img src="/upload/iblock/d0c/d0c10df00f65d5f4fe4463fd30a760b6.png" alt="">

<a href="https://gomelcsms.by/services/">Межлабораторные сличения</a>
</div>
<div class="body-treatment-item corr">
<img src="/upload/iblock/40a/40a6b80007dae1e5619cd262397fb08d.svg" alt="">

<a href="https://docs.google.com/forms/d/e/1FAIpQLScvq_ra8wZBtd14i9dZ8E5hi99l9gqDY7ObHFGG_RTfUqUNjg/viewform">Анкета оценки удовлетворенности заявителей</a>
</div>
<div class="body-treatment-item">
<img src="/upload/iblock/341/34137c324ed16f212baccc966134d892.jpg" alt="">

<a href="https://gomelcsms.by/borbaskorrup.php">Борьба с коррупцией</a>
</div>


</div>
<div class="body-middle">
<div class="body-middle-left">
<div class="left-fixed-block">




<ul class="body-middle-items">





<li>
<a class="" href="/">Главная</a>
</li>








<li class="lima">
<a href="/metrol/" class="dropitems">Метрологическая служба    </a><div class="ar-wrap newarrowreverse handle-ar"><img class="arrowreverse newarrowreverse" src="/bitrix/templates/csms/img/arrow-select.png" alt=""><img class="arrowreverse newarrowreverse hideimgar" src="/bitrix/templates/csms/img/arrow-selecthov.png" alt=""></div>
<ul class="dropsel" >








<li>
<a class="" href="/metrol/mehan/">Сектор механических измерений</a>
</li>








<li>
<a class="" href="/metrol/geo/">Сектор геометрических измерений</a>
</li>








<li>
<a class="" href="/metrol/teploteh/">Сектор теплотехнических измерений</a>
</li>








<li>
<a class="" href="/metrol/fhi/">Сектор физико-химических измерений</a>
</li>








<li>
<a class="" href="/metrol/emir/">Сектор электромагнитных и радиотехнических измерений</a>
</li>








<li>
<a class="" href="/metrol/ion/">Сектор измерений ионизирующих излучений</a>
</li>








<li>
<a class="" href="/metrol/rmd/">Сектор разработки технической документации и организации программ проверки квалификации</a>
</li>






</ul></li>

<li>
<a class="" href="/isp-centr/">Испытательный центр</a>
</li>








<li>
<a class="" href="/lab/">Отдел по испытаниям</a>
</li>








<li>
<a class="" href="/sys/">Отдел систем менеджмента</a>
</li>








<li>
<a class="" href="/tnpa/">Сектор по стандартизации</a>
</li>








<li>
<a class="" href="/etalon/">Цех по ремонту СИ "Эталон"</a>
</li>








<li>
<a class="" href="/cert/">Отдел по сертификации</a>
</li>








<li>
<a class="" href="/stolovaya/">Столовая</a>
</li>








<li>
<a class="" href="/diagnosticheskaya-stantsiya-251/">Диагностическая станция</a>
</li>





</ul>



<ul class="body-middle-items">


<li><a class="" href="/seminary-i-ucheby/">Семинары и учебы</a></li>


<li><a class="" href="/stoimost-rabot/">Стоимость работ</a></li>


<li><a class="" href="/si/">Реализация средств измерений</a></li>


<li><a class="" href="/kpp.php">Входной контроль КПП</a></li>


<li><a class="" href="/kvok2021/">Конкурсы в области качества</a></li>


</ul>


<ul class="body-middle-items">


<li><a class="" href="/evraziyskiy-ekonomicheskiy-soyuz/">Евразийский экономический союз</a></li>


<li><a class="" href="/zakonodatelstvo/">Законодательство</a></li>


<li><a class="" href="/mgs/">Проекты МГС</a></li>


</ul>

<div class="body-title">
<span>Вакансии</span>
</div>
<div class="body-vacancy">
<div class="body-vacancy-left">
<img src="/bitrix/templates/csms/img/vacancyimg2.png" alt="">
</div>
<div class="body-vacancy-right">
<span>Требуется на работу: </span>
<span>- Инструктор по фитнесу</span>
<span>- Уборщик территории</span>
<span>- электромонтер 4-5 разряда</span>
<span>- Инженер по техническому осмотру транспортных средств</span>
<span>- Слесарь КИПиА</span>
<a href="/o-nas/vakansii/">Читать подробнее...</a>
</div>
</div>


<div class="body-goals">

<a href="https://gosstandart.gov.by/the-goal-of-sustainable-development" rel="nofollow" target="_blank">
<img src="/upload/iblock/3f8/3f8c5101e7443a3a1699457279430bd3.png" alt="">
</a>
</div>
</div>
</div>
<div class="body-middle-right">

<link rel="stylesheet" href="css/styles.css" type="text/css" />
<script type="text/javascript">
function toggle_show(id) {
document.getElementById(id).style.display = document.getElementById(id).style.display == 'none' ? 'block' : 'none';
}
</script>
<div class="txt70">
<a class="class1" href="/info/"> &lt;&lt;Назад</a><br>
</div>
<table width="90%" align="center" class="txt80">
<tbody>
<tr>
<td style="text-align: center;">
<hr>
<p style="text-align: center;">
<b><span style="font-size: 14pt;">Уважаемые заказчики</span>!</b>
</p>
<span style="font-size: 12pt;">Обращаем Ваше внимание, что номер квитанции-счета </span><b><span style="font-size: 12pt;">XXXX-XXXXXX</span></b><span style="font-size: 12pt;">&nbsp;необходимо вводить&nbsp;полностью, но<span style="color: #00aeef;"> <span style="color: #ff0000;">без символа </span></span><b><span style="color: #ff0000; font-size: 14pt;">"-"</span></b>.</span>
<hr>
</td>
</tr>
<tr>
<td align="center" style="text-align: center;">
<br>
<form style="margin: 0px;" action="scheta.php" method="get">
<b>Введите номер квитанции-счета:</b>&nbsp; <input type="text" name="nom" class="formafixic">&nbsp; <br>
<br>
<b>Введите год выписки:</b>&nbsp; <input type="text" name="god" value="2023" MAXLENGTH="4" size="7">  <br>
<br>
<input type="submit" value="Проверить">
</form>
</td>
</tr>
</tbody>
</table>
<tr>       <td>        <br><div align=center></div><br><div align=center><font color=green>Квитанция-счет № <b>2160014971</b> (2023 года выписки) - полностью ОПЛАЧЕНА!<br></font></div><br><div align=center><font color=green> Акт № <b>0000-017013</b> <br></font></div><br><div align=center><font color=green>Работы по квитанции-счету № <b>2160014971</b> (2023 года выписки) - ВЫПОЛНЕНЫ!<br>Дата завершения работ: 29.05.2023</font></div>
<br><br><div align=center> Дополнительную информацию смотрите на нашем <a href=http://gomelcsms.by/index.php?option=com_content&view=article&id=187%3A2009-09-16-07-28-37&catid=83%3A2009-09-15-07-02-39&Itemid=54>сайте</a>.</div>
<br>       </td>      </tr><br>
<!--LiveInternet counter--><script type="text/javascript"><!--
document.write("<a href='http://www.liveinternet.ru/click' "+
"target=_blank><img src='//counter.yadro.ru/hit?t44.11;r"+
escape(document.referrer)+((typeof(screen)=="undefined")?"":
";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
";"+Math.random()+
"' alt='' title='LiveInternet' "+
"border='0' width='1' height='1'><\/a>")
//--></script><!--/LiveInternet-->

</body>
</br>
</br>
</br>
</br>
</br>

</html><br>
<br></div>
</div>
<div class="body-bottom">
<div class="container">
<div class="banners">

<a href="http://gosstandart.gov.by/" rel="nofollow" target="_blank">
<img src="/upload/iblock/6db/6dbf52d40e7d94746a6409f88a1115c1.jpg" alt="">
</a>

<a href="http://www.president.gov.by/" rel="nofollow" target="_blank">
<img src="/upload/iblock/0ea/0ea0f7fd075694e83e57e52334ecc163.png" alt="">
</a>

<a href="http://www.belarus.by/en/" rel="nofollow" target="_blank">
<img src="/upload/iblock/753/753f0a1cf19619025bbe570aa4901604.png" alt="">
</a>

<a href="http://www.government.by/ru/" rel="nofollow" target="_blank">
<img src="/upload/iblock/138/1389d0f976e16240cb20190caa09e2d5.png" alt="">
</a>

<a href="http://www.pravo.by/" rel="nofollow" target="_blank">
<img src="/upload/iblock/32a/32a186361f1b3bf5bd61e047f799fe86.png" alt="">
</a>


</div>
<div class="banners-bottom">
<div class="swiper-container swiper-main-bottom">
<div class="swiper-wrapper">
                                        <div class="swiper-slide">
        <a href="http://www.gomel-region.by/ru/" rel="nofollow" target="_blank">
                <img src="/upload/iblock/00c/00c76c93f6f4b698d0b827d0d7aedec0.jpg" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="http://center.gov.by/debyurokratizatsiya-administrativny-h-p/" rel="nofollow" target="_blank">
                <img src="/upload/iblock/549/5497952d714f7918df8904784a2c21be.png" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="http://center.gov.by/uluchshenie-biznes-klimata-v-respublik/" rel="nofollow" target="_blank">
                <img src="/upload/iblock/469/46946dd122c1cf29b67038295b3ce301.png" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="http://www.gosstandart.gov.by/banner-decret-7" rel="nofollow" target="_blank">     
                <img src="/upload/iblock/cf6/cf608c03012838659f3aecd4e35da5d4.jpg" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="http://belgim.by/" rel="nofollow" target="_blank">
                <img src="/upload/iblock/28f/28f1fd9d3d37b7fae6797f273cd21ca7.png" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="https://belgiss.by/" rel="nofollow" target="_blank">
                <img src="/upload/iblock/41d/41df7f4a70cf4ff744dbbfbf62d929b0.jpg" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="http://bgipk.by/" rel="nofollow" target="_blank">
                <img src="/upload/iblock/7b9/7b942db0d9e60ac579e44ebf4550a716.png" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="http://bsca.by/" rel="nofollow" target="_blank">
                <img src="/upload/iblock/3ea/3ea4e6f5b05b9a0418ee3495d90d9796.png" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="http://tnpa.by/" rel="nofollow" target="_blank">
                <img src="/upload/iblock/a35/a35bb926e3ca93884f25e9ec03ec33ab.jpg" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="http://www.eurasiancommission.org/" rel="nofollow" target="_blank">
                <img src="/upload/iblock/b78/b78279d220f826a2fadf40161d4e9beb.jpg" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="http://gosstandart.gov.by/advising-on-application-of-the-technical-regulations" rel="nofollow" target="_blank">
                <img src="/upload/iblock/bb1/bb1f1ce6ddaae3e1d8db5d7c42d2999a.jpg" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="http://gosstandart.gov.by/registers" rel="nofollow" target="_blank">
                <img src="/upload/iblock/581/58194ff8f4bd0e14d686cae9b1beff11.jpg" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="http://www.nicwto.by/" rel="nofollow" target="_blank">
                <img src="/upload/iblock/84f/84f9f7c79165a98e973a5a9e08b9472e.jpg" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="http://bio.gosstandart.gov.by/" rel="nofollow" target="_blank">
                <img src="/upload/iblock/d56/d5669b17d22173bcc8e9cbccf05294e6.jpg" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="http://www.oei.by/" rel="nofollow" target="_blank">
                <img src="/upload/iblock/8a7/8a76833043c9ee441011f393afea138b.jpg" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="http://www.belta.by/" rel="nofollow" target="_blank">
                <img src="/upload/iblock/db4/db472dc9e2ad3a829bc6df14696d7c33.png" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="http://ilac.org/" rel="nofollow" target="_blank">
                <img src="/upload/iblock/d42/d42516c2e0377cf2ecb6e286d82b754b.png" alt="">
        </a>
</div>

                                        <div class="swiper-slide">
        <a href="http://www.ipps.by:9102/RatingPortal/OrgCardForUser?id=36798" rel="nofollow" target="_blank">
                <img src="/upload/iblock/636/636627d9392d6912c36a975acc208967.jpg" alt="">
        </a>
</div>


</div>
</div>
<div class="swiper-button-next"></div>
<div class="swiper-button-prev"></div>
</div>
</div>
</div>
</div>
</section>

<footer>
<div class="container">
<div class="footer-left">
<span>Республиканское унитарное предприятие </span>
<span>“Гомельский центр стандартизации, метрологии</span>
<span>и сертификации”</span>
<span class="boss">Директор:</span>
<span>Казачок Максим Александрович</span>
</div>
<div class="footer-center">
<a class="filter-icon" href="mailto:mail@gomelcsms.by"><img src="/bitrix/templates/csms/img/newimg6.png" alt="">mail@gomelcsms.by</a>   
<a class="filter-icon" href="tel:+375 232 26-33-01"><img src="/bitrix/templates/csms/img/newimg2.png" alt="">+375 232 26-33-01</a>      
<a class="filter-icon" href="tel:+375 232 26-33-00"><img src="/bitrix/templates/csms/img/newimg5.png" alt="">+375 232 26-33-00</a>      
<a class="filter-icon smart-icon" href="javascript:void(0);"><img src="/bitrix/templates/csms/img/pin.png" alt=""><div><span>Беларусь, г. Гомель,</span><span>ул. Лепешинского 1, 246015</span></div></a>
</div>
<div class="footer-right">
<div class="footer-right-top">
<div class="footer-right-top__left">
<span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
<span></span>
<span></span>
</div>
<div class="footer-right-top__right">
<span></span>
<span></span>
</div>
</div>
<div class="footer-right-middle">
<div class="footer-right-middle__left">
<!--                    <noindex><a href="javascript:void(0);" rel="nofollow"><img src="--><!--/img/sochial1.png" alt=""></a></noindex>-->
<!--                    <noindex><a href="https://www.facebook.com/gomelcsms/" target="_blank" rel="nofollow"><img src="--><!--/img/sochial2.png" alt=""></a></noindex>-->
<!--                    <noindex><a href="https://www.facebook.com/gomelcsms/" target="_blank" rel="nofollow"><img src="--><!--/img/vk.svg" alt=""></a></noindex>-->
<noindex>
<a href="https://www.t.me/gomelcsms/" target="_blank" rel="nofollow"><img src="/bitrix/templates/csms/img/tlgrm.svg" alt=""></a>
</noindex><noindex>
<a href="https://www.facebook.com/gomelcsms/" target="_blank" rel="nofollow"><img src="/bitrix/templates/csms/img/fb.svg" alt=""></a>
</noindex>
<!--                    <noindex><a href="https://www.facebook.com/gomelcsms/" target="_blank" rel="nofollow"><img src="--><!--/img/tw.svg" alt=""></a></noindex>-->
<!--                    <noindex><a href="https://www.facebook.com/gomelcsms/" target="_blank" rel="nofollow"><img src="--><!--/img/mail.svg" alt=""></a></noindex>-->
<!--                    <noindex><a href="javascript:void(0);" rel="nofollow"><img src="--><!--/img/sochial3.png" alt=""></a></noindex>-->
<!--                    <noindex><a href="javascript:void(0);" rel="nofollow"><img src="--><!--/img/sochial4.png" alt=""></a></noindex>-->
</div>
<div class="footer-right-middle__right">
<!-- Yandex.Metrika informer -->
<a href="https://metrika.yandex.ru/stat/?id=49728151&amp;from=informer"
target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/49728151/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" class="ym-advanced-informer" data-cid="49728151" data-lang="ru" /></a>
<!-- /Yandex.Metrika informer -->

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
(function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
                try {
                        w.yaCounter49728151 = new Ya.Metrika2({
                                id:49728151,
                                clickmap:true,
                                trackLinks:true,
                                accurateTrackBounce:true
                        });
                } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/tag.js";

        if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
})(document, window, "yandex_metrika_callbacks2");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/49728151" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
</div>
</div>
<div class="footer-right-bottom">
<a href="/emsg/">
<img src="/bitrix/templates/csms/img/mail.svg" alt="">
<span>Электронное обращение</span>
</a>
</div>
</div>
</div>
<div class="anchor-top">Наверх</div>
</footer>
<script type="text/javascript">
BX.ready(function() {
var oPopup = new BX.PopupWindow("call_feedback", window.body, {
autoHide : true,
offsetLeft: 0,
offsetTop: 0,
overlay : true,
titleBar: true,
closeIcon : true,
closeByEsc : true,
events: {
onPopupClose: function () {
this.setContent("");
}
}
});

BX.bindDelegate(
document.body,
"click",
{
className: "btn-diag-all",
},
BX.proxy(function(e) {
if (!e)
e = window.event;

var title = e.target.dataset.title;

BX.ajax({
url: "/ajax/query_tech.php",
method: "POST",
data: {"AJAX_CALL": "Y"},
dataType: "html",
onsuccess: function (sData) {
sData = sData.trim();

if ((sData == "") || (/^<!/.test(sData))) {
window.location.reload(true);
return;
} else if (sData != "") {
oPopup.setTitleBar({
content: BX.create("div", {
style: {fontWeight: "normal", margin: "7px 30px 7px 5px", whiteSpace: "nowrap"},
text: ""
})
});

oPopup.setContent("<div style=\"padding: 10px;\">" + sData + "</div>");
oPopup.show();
$("input[name=form_text_14]").mask("+375 99 999-99-99");
 $("input[name=form_text_20]").mask("99:99");
}
},
onfailure: function () {
window.location.reload(true);
}
});
return BX.PreventDefault(e);
}, oPopup)
);

BX.addCustomEvent("onAjaxSuccess", function () {
if (oPopup.isShown) {
oPopup.adjustPosition();
if (oPopup.overlay != null)
oPopup.resizeOverlay();
}
});
});
</script>
</body>
</html>
`