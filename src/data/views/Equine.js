import React from 'react';
import {Slider} from "../components/SliderBlock/Slider";
import bgEquineUrl from "../media/bgEquine.jpg";

import style from './styles/Equine.module.css';
import {getListEquine} from "../functions/gets_funcs";
import Button from "../components/ButtonBlock/Button";

let listEquine = getListEquine();

const Equine = (props) => {

    return (
        <div>
            <div className={style.body}>
                <div className={style.banner} style={{backgroundImage: 'url(' + bgEquineUrl + ')'}}/>
                <div className={style.bottomStart}>
                    <h1>Конная сфера</h1>
                    <div className={style.blockButtons}>
                        <div />
                        <Button className={style.bottomStartButton} url='https://instagram.com/denis_hik'
                                text='Instagram'/></div>
                </div>
                <Slider list={listEquine}/>
            </div>
        </div>
    )
}

export default Equine;