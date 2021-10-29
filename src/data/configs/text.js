import {bgProjSlider, playImageUrl} from "./images";
import hbImage from '../media/horsebook.png';

let listTitleEquineSlider = ['Тренер-наездник лошадей', 'Езда в кс', 'Есть достижения'];
let listSpanEquineSlider = ['Диплом о профиссиональном образовании на Тренера-Наездника лошадей', 'С лошадью знаком 5-6 лет. Умею прыгать, галоп, рысь, шаг и езда в качалке', 'Участвовал в соревах по конкуру и базовой езде (манежка)', 'Очень заинтресован в помощи,т.к. это опыт!'];

let listTitleProgramingSlider = ['Знаю зыки программинга', 'Frontend-разрабочик', 'Красивый код'];
let listSpanProgrammingSlider =
    ['Пишу на языках: Java(Android apps), Python, Java-Script(React)', 'Стремлюсь стать профессиональным Frontend-разработчиком', 'Придерживаюсь красивого и понятного кода'];

let listTitleProjectSlider = ['Horse Book', 'ЧК Ворон', 'Узнать больше'];
let listSpanProjectSlider = ['Нацеленно на обьеденение услуг для лошадей в одном приложении',
    'Сайт конюшни ЧК Ворон', 'Список проектов'];
let listImageProjectSlider = [
    hbImage,
    bgProjSlider,
    "https://lh3.googleusercontent.com/fife/AAWUweUw30hQsg5BPKoXL7EdEOffYln67kbzOptgCM73w_FJ1avy4-L6OdhZfVzoOsrXj-H5f5AGJ_HpS91EXuOnj5miu1e5yg4_k3tC7Ap4uUfegI8_fEJINpIgvIkP-mD_vcSa-0v-LewNB8zqWe2tJ6s1WXCrbCsZmiyy9IqQEj5mW5ZRd8UEBuB_4_qqUtVj4WAu15TK_ojv8vpUivXX2dDFt2iSSSCJNE4x_X-_EvSq1cOXyQkzs5JuJJRUkqWezQdvyGVD444NolX2LyoUuE0W4sfQdDYxDwg83QrXOOKGl7J8N_LrquXThEpRmF5qnELJENtwU7djKQIfoVLoig0al6a_ix_7u273T5csghV_vvtkPv4VBfuV1y6N5zoGp7lcfnhYLqUfxvdoQ3GwxqsLRbwMlgGFS8AsMqYjQkjF2lxkjjhG4H3ik37BZcjlsPhv_q1Q_55sTx5oI_BT-TjIySj-KCht1MrNcyRNp1rJEkl5CrhFfNLeAGrOvvYOmjM5c0jPnF93EzuyTI5EdB9vGWgboPX3b9gIKiXcEhisUdM2Ak45WHc1zye9HorgUjVrAIOBhRFVHk2hTpvoOHBFln4i-1Y0cKZQsIRXlBd0inTYxjJs_eheb8fOpNRtLt5VsIiIkIz99gPl0t_PlDAUYs3mDGLH7oxNOr3gXNGxrAvKq19ST3MBhAM1h8J4gkCG0Zllx1tTp2R-oGtQQO-gSbniZTPqin0=w1920-h947-ft"
]

let listButtonsProjectSlider = {
    text: ['Запустить', 'Перейти', 'Перейти'],
    image: [
        playImageUrl,
        playImageUrl,
    ],
    url: [
        'https://vk.com/app7683801',
        'https://voron.denishik.ru',
        'https://projects.denishik.ru'
    ]
}

export {
    listImageProjectSlider,
    listButtonsProjectSlider,
    listSpanProjectSlider,
    listTitleProjectSlider,
    listSpanProgrammingSlider,
    listTitleProgramingSlider,
    listSpanEquineSlider,
    listTitleEquineSlider
};