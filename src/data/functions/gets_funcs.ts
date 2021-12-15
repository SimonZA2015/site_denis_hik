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
    let h:number = document.body.clientHeight;
    let w:number = document.body.clientWidth;

    return h < w;
}

const openUrl = (url: string) => {
    //open new tab url
    window.open(url,"_blank")
}

const getListEquine = ():Array<any> => {
    let data:{name: string, des: string, image: string, gradient: string} ;
    let listV:Array<{name: string, des: string, image: string, gradient: string}> = [];

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
    let data:{name: string, des: string, gradient: string} ;
    let listP:Array<{name: string, des: string, gradient: string}>  = [];
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
    let data:{name: string, des: string, image: string | boolean, gradient: string} ;
    let listProject:Array<{name: string, des: string, image: string | boolean, gradient: string}>  = [];
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