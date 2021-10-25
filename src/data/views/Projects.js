import React from 'react';
import {Slider} from "../component/Slider";
import {getListProj} from "../functions/func1";
import Button from "../component/Button";
import {bgProjUrl} from "../config/images";
import {listButtonsProjectSlider} from "../config/text";
import {gitUrl} from "../config/urls";

import style from './styles/Projects.module.css';

let list = getListProj();
let button = listButtonsProjectSlider

const ProjectsView = () => {

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