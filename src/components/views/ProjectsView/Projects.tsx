import React from 'react';
import {Slider, TButton} from "../../SliderBlock/Slider";
import {getListProj} from "../../../modal/functions/gets_funcs";
import bjProj from "../../../media/bg.jpg";
import {listButtonsProjectSlider, titlePages} from "../../../modal/configs/text";
import {gitUrl} from "../../../modal/configs/urls";
import BodyUI from "../../BodyUI";

let list = getListProj();
let button: TButton = listButtonsProjectSlider

const ProjectsView = ():JSX.Element => {

    return (
        <BodyUI
            image={bjProj}
            title={titlePages.project}
            button={{name: "Git hub", link: gitUrl}}

        >
            <Slider button={button} list={list}/>
        </BodyUI>
    )
}

export default ProjectsView;