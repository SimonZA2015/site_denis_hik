import React from 'react';
import {Slider} from "../component/Slider";
import {getListProj} from "../functions/func1";

import {bgProjUrl} from "../config/images";
import style from './styles/Projects.module.css'
import {listButtonsProjectSlider} from "../config/text";

let list = getListProj();
let Buttons = listButtonsProjectSlider;

const ProjectsView = () => {

    return (
        <div>
            <div className={style.body} >
                <div className={style.banner} style={{backgroundImage: 'url(' + bgProjUrl + ')'}} />
                <div className={style.bottomStart} ><h1>Проекты</h1></div>
                <Slider list={list} button={Buttons} />
            </div>
        </div>
    )
}

export default ProjectsView;