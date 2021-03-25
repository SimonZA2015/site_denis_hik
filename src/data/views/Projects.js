import React from 'react';
import {Slider} from "../component/Slider";
import {getListProj} from "../functions/func1";

import {bgProjUrl} from "../config/images";
import style from './styles/Projects.module.css'
import Button from "../component/Button";

let list = getListProj();

const ProjectsView = () => {

    return (
        <div>
            <div className={style.body} >
                <div className={style.banner} style={{backgroundImage: 'url(' + bgProjUrl + ')'}} />
                <div className={style.bottomStart} ><h1>Проекты</h1><div className={style.blockButtons}><div /><Button className={style.bottomStartButton} url='https://github.com/SimonZA2015/' text='Git hub' /></div></div>
                <Slider list={list} />
            </div>
        </div>
    )
}

export default ProjectsView;