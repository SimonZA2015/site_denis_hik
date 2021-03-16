import {generateGradient} from "./func2";
import {
    listSpanEquineSlider,
    listSpanProgrammingSlider,
    listTitleEquineSlider,
    listTitleProgramingSlider
} from "../config/text";
import {listBgEquineSliders} from "../config/images";


const getPCversion = () => {

    let h = document.body.clientHeight;
    let w = document.body.clientWidth;
    
    return h < w;
}

const openUrl = (url) => {

    window.open(url,"_blank")
}

const getListEquine = () => {
    let data;
    let listV = [];
    for (let i = 0; i < 3; i++) {
        let gradient = generateGradient();

        data = {
            name: listTitleEquineSlider[i],
            des: listSpanEquineSlider[i],
            image: listBgEquineSliders[i],
            gradient: gradient,
        }

        listV.push(data);
    }

    return listV;
}

const getListProg = () => {
    let data;
    let listP = [];
    for (let i = 0; i < 3; i++) {
        let gradient = generateGradient();

        data = {
            name: listTitleProgramingSlider[i],
            des: listSpanProgrammingSlider[i],
            gradient: gradient,
        }

        listP.push(data);
    }

    return listP;
}

export {getListProg, getListEquine, openUrl, getPCversion}