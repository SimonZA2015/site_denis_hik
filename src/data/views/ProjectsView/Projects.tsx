import React from 'react';
import {Slider} from "../../components/SliderBlock/Slider";
import {getListProj} from "../../functions/gets_funcs";
import Button from "../../components/ButtonBlock/Button";
import {bgProjUrl} from "../../configs/images";
import {
    listButtonsProjectSlider
} from "../../configs/text";
import {gitUrl} from "../../configs/urls";
import {MainCard} from "./styled";

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
            <MainCard>
                <div className={'banner'} style={{backgroundImage: 'url(' + bgProjUrl + ')'}}/>
                <div className={"bottomStart"}>
                    <h1>Проекты</h1>
                    <div className={"blockButtons"}>
                        <div/>
                        <Button className={"bottomStartButton"} url={gitUrl} text='Git hub'/>
                    </div>
                </div>
                <Slider button={button} list={list}/>
            </MainCard>
        </div>
    )
}

export default ProjectsView;