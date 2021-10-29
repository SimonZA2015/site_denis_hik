import {generateGradient} from "./other_funcs";
import {
    listImageProjectSlider,
    listSpanEquineSlider,
    listSpanProgrammingSlider, listSpanProjectSlider,
    listTitleEquineSlider,
    listTitleProgramingSlider, listTitleProjectSlider
} from "../configs/text";
import {listBgEquineSliders} from "../configs/images";


const getPCversion = () => {
    //preparation display width & height
    let h = document.body.clientHeight;
    let w = document.body.clientWidth;

    return h < w;
}

const openUrl = (url) => {
    //open new tab url
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

const getListProj = () => {
    let data;
    let listProject = [];
    for (let i = 0; i < 3; i++) {

        let gradient = '#f1f1f1';


        if (listTitleProjectSlider[i] !== '') {

            gradient = generateGradient();

        }


        data = {
            name: listTitleProjectSlider[i],
            des: listSpanProjectSlider[i],
            image: listImageProjectSlider[i],
            gradient: gradient,
        }

        listProject.push(data)
    }

    return (listProject)
}

export {getListProj, getListProg, getListEquine, openUrl, getPCversion}