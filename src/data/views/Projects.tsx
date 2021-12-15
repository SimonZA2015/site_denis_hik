import React from 'react';
import {Slider} from "../components/SliderBlock/Slider";
import {getListProj} from "../functions/gets_funcs";
import Button from "../components/ButtonBlock/Button";
import {bgProjUrl} from "../configs/images";
import {
    listButtonsProjectSlider
} from "../configs/text";
import {gitUrl} from "../configs/urls";

import style from './styles/Projects.module.css';

let list: {
    name: string,
    des: string,
    image: string | boolean,
    gradient: string
}[] = getListProj();
let button: {
    text: string[]
    image: string[]
    url: string[]
} = listButtonsProjectSlider

const ProjectsView = ():JSX.Element => {

    return (
        <div>
            <div className={style.body}>
                <div className={style.banner} style={{backgroundImage: 'url(' + bgProjUrl + ')'}}/>
                <div className={style.bottomStart}>
                    <h1>Проекты</h1>
                    <div className={style.blockButtons}>
                        <div/>
                        <Button className={style.bottomStartButton} url={gitUrl} text='Git hub'/>
                    </div>
                </div>
                <Slider button={button} list={list}/>
            </div>
        </div>
    )
}

export default ProjectsView;