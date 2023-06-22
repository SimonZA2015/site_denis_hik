import React, {useState} from 'react';

import style from './Programming.module.css';
import bgProgUrl from "../../media/bgProg.jpg";
import {Slider} from "../../components/SliderBlock/Slider";
import {getListProg} from "../../functions/gets_funcs";
import Button from "../../components/ButtonBlock/Button";
import {ExperiencePopout} from "../../components/ExperiencePopout";
import {titlePages} from "../../configs/text";

let listProg: {
    name: string,
    des: string,
    gradient: string,
}[] = getListProg();

const ProgrammingView = () => {
    const [visible, setVisible] = useState(false);

    return(
        <div>
            <div className={style.body}>
                <div className={style.banner} style={{backgroundImage: 'url(' + bgProgUrl + ')'}} />
                <div className={style.bottomStart} >
                    <h1>{titlePages.programming}</h1>
                    <div className={style.blockButtons}>
                        <div />
                        <Button
                            className={style.bottomStartButton}
                            text='Experience'
                            onClick={() => {
                                setVisible(!visible)
                            }}
                        />
                    </div>
                </div>
                <Slider list={listProg} button={null}/>
            </div>
            <ExperiencePopout onClose={() => setVisible(!visible)} visible={visible} />
        </div>
    )
}

export default ProgrammingView;