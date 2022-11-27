import React from 'react';

import style from './Programming.module.css';
import bgProgUrl from "../../media/bgProg.jpg";
import {Slider} from "../../components/SliderBlock/Slider";
import {getListProg} from "../../functions/gets_funcs";
import {listSpanEquineSlider, listTitleEquineSlider} from "../../configs/text";
import {listBgEquineSliders} from "../../configs/images";

let listProg: {
    name: string,
    des: string,
    gradient: string,
}[] = getListProg();

const ProgrammingView = () => {

    return(
        <div>
            <div className={style.body}>
                <div className={style.banner} style={{backgroundImage: 'url(' + bgProgUrl + ')'}} />
                <div className={style.bottomStart} ><h1>Программирование</h1></div>
                <Slider list={listProg} button={null}/>
            </div>
        </div>
    )
}

export default ProgrammingView;