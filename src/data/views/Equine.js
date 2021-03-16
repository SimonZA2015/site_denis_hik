import React from 'react';
import {Slider} from "../component/Slider";
import {bgEquineUrl} from "../config/images";

import style from './styles/Equine.module.css';
import {getListEquine} from "../functions/func1";

let listEquine = getListEquine();

const Equine = () => {

    return (
        <div>
            <div className={style.body} >
                <div className={style.Banner} style={{backgroundImage: 'url(' + bgEquineUrl + ')'}} />
                <div className={style.bottomStart}><h1>Конная сфера</h1></div>
                <Slider list={listEquine} />
            </div>
        </div>
    )
}

export default Equine;