import React from "react";
import {headerHomeText} from "../../../../configs/text";
import {BodyTitleHome} from "./styled";

const TitleHomeBlock = ():JSX.Element => {

    return (
        <BodyTitleHome>
            <h3>{headerHomeText.title}</h3>
            <span>{headerHomeText.span0}<br/> {headerHomeText.span1}</span>
        </BodyTitleHome>
    )
};

export default TitleHomeBlock;