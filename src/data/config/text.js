import {playImageUrl} from "./images";
import hbImage from '../media/horsebook.png';

let listTitleEquineSlider = ['Тренер-наездник лошадей','Езда в кс', 'Есть достижения'];
let listSpanEquineSlider = ['Диплом о профиссиональном образовании на Тренера-Наездника лошадей' ,'С лошадью знаком 5-6 лет. Умею прыгать, галоп, рысь, шаг и езда в качалке', 'Участвовал в соревах по конкуру и базовой езде (манежка)', 'Очень заинтресован в помощи,т.к. это опыт!'];

let listTitleProgramingSlider = ['Знаю зыки программинга', 'Frontend-разрабочик', 'Красивый код'];
let listSpanProgrammingSlider = ['Пишу на языках: Java(Android apps), Python, Java-Script(React)', 'Хочу стать профессиональным Frontend-разработчиком', 'Придерживаюсь к красивому и понятному коду' ];

let listTitleProjectSlider = ['Horse Book', '', ''];
let listSpanProjectSlider = ['Нацеленно на обьеденение услуг для лошадей в одном приложении',];
let listImageProjectSlider = [hbImage,]

let listButtonsProjectSlider = {
    text: ['Запустить', ],
    image: [playImageUrl, playImageUrl],
    url: ['https://vk.com/app7683801',]
}

export {listImageProjectSlider, listButtonsProjectSlider, listSpanProjectSlider, listTitleProjectSlider, listSpanProgrammingSlider, listTitleProgramingSlider, listSpanEquineSlider, listTitleEquineSlider};