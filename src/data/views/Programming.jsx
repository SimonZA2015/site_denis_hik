import React from 'react';

import style from './styles/Programming.module.css';
import bgProgUrl from "../media/bgProg.jpg";
import {Slider} from "../components/SliderBlock/Slider";
import {getListProg} from "../functions/gets_funcs";

let listProg = getListProg();

const ProgrammingView = () => {

    return(
        <div>
            <div className={style.body}>
                <div className={style.banner} style={{backgroundImage: 'url(' + bgProgUrl + ')'}} />
                <div className={style.bottomStart} ><h1>Программирование</h1></div>
                <Slider list={listProg} />
            </div>
        </div>
    )
}

export default ProgrammingView;