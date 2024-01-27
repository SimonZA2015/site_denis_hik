import {playImageUrl} from "./images";
import bjProj from "../../media/bg.jpg";

let listTitleEquineSlider = ['Horse Trainer', 'Expirence of Horse', 'Achievements'];
let listSpanEquineSlider = [
    'Diploma of A Professional Degree for Trainer-Equestrian',
    'Expirence of Horse Riding 6-7 years. Skills: Horse Jumping, Galloping, Trotting, Walking and Roller Running',
    'Took part in Contests at Show-Jumping and Basic Riding (dressage tests)',
];

let listTitleProgramingSlider = ['Knowledge of Programming Languages', 'Frontend-Developer', 'Beautiful code'];
let listSpanProgrammingSlider =
    [
        'Composing on Languages: Java (Android Apps), Python, Java-Script(React, TS, Redux), Unity 2019 (C#, U#)',
        'My goal to achive a High Level of Skills in Frontend-Development',
        'I manage a Beautiful and Transparent Code'
    ];
export let headerHomeText = {
    title: "Denis Hik",
    span0: "Project Developer,",
    span1: "Horse Trainer",
}

export const titlePages = {
    equine: "Horseback Riding Sport",
    project: "Projects",
    programming: "Programming"
}
let listTitleProjectSlider = ['Gumroad', 'Projects', 'VRChat'];
let listSpanProjectSlider = ['Gumroad products', 'List of Projects', 'List of Projects for VR Chat'];
let listImageProjectSlider = [
    "https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619fb5686c9b9b5f5a35020e_gumroad-og.png",
    bjProj,
    "https://vrchat.denishik.ru/static/media/worldsBG.d75753825047bca8a2e0.png"
]

let listButtonsProjectSlider = {
    text: ['Redirect', 'Redirect', 'Redirect'],
    image: [
        playImageUrl,
        playImageUrl,
    ],
    url: [
        'https://denishik.gumroad.com/',
        'https://projects.denishik.ru',
        'https://vrchat.denishik.ru',
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