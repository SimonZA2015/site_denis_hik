import React from 'react'

import {bgProjUrl} from "../config/images";
import style from './styles/Projects.module.css'


const ProjectsView = () => {

    return (
        <div>
            <div className={style.body} >
                <div className={style.banner} style={{backgroundImage: 'url(' + bgProjUrl + ')'}} />
                <div className={style.bottomStart} ><h1>Проекты</h1></div>
            </div>
        </div>
    )
}

export default ProjectsView;