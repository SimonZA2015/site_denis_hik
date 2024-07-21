import {
    listImageProjectSlider,
    listSpanEquineSlider,
    listSpanProgrammingSlider,
    listSpanProjectSlider,
    listTitleEquineSlider,
    listTitleProgramingSlider,
    listTitleProjectSlider
} from "../configs/text";
import {listBgEquineSliders} from "../configs/images";
import img from "../../media/langa.png"
import {TSlider} from "../../components/SliderBlock/Slider";
import {CSSProperties} from "react";
import {generateGradient} from "../../components/SliderBlock/supply/generateGradient";

const styledSlider: { [key: string]: CSSProperties } = {
    image: {objectFit: "contain", bottom: 0, top: "unset", left: 0, height: "auto"},
    base: {overflow: "hidden"}
}

const openUrl = (url: string) => {
    //open new tab url
    window.open(url,"_blank")
}

const getListEquine = ():Array<any> => new Array(3).fill("").map((_v, index) => ({
    name: listTitleEquineSlider[index],
    des: listSpanEquineSlider[index],
    image: listBgEquineSliders[index],
    gradient: generateGradient(),
})) as TSlider[]

const getListProg = (): TSlider[] => new Array(3).fill("").map((_v, index) => ({
    name: listTitleProgramingSlider[index],
    des: listSpanProgrammingSlider[index],
    image:index === 0 ? img : undefined,
    styled: index === 0 ? styledSlider : undefined,
    gradient: generateGradient(),
})) as TSlider[];

const getListProj = (): TSlider[] =>  new Array(3).fill("").map((_v, index) => ({
    name: listTitleProjectSlider[index],
    des: listSpanProjectSlider[index],
    image: listImageProjectSlider[index],
    gradient: generateGradient(),
})) as TSlider[];


export {getListProj, getListProg, getListEquine, openUrl}