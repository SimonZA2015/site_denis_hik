import React from "react";
import {headerHomeText} from "../../configs/text";

import style from './TitleHomeBlock.module.css';

const TitleHomeBlock = (props) => {

    return (
        <div className={style.body}>
            <h3>{headerHomeText.title}</h3>
            <span>{headerHomeText.span0}<br/> {headerHomeText.span1}</span>
        </div>
    )
};

export default TitleHomeBlock;