import React from 'react';
import {Slider, TButton} from "../../components/SliderBlock/Slider";
import {getListProj} from "../../functions/gets_funcs";
import bjProj from "../../media/bg.jpg";
import {listButtonsProjectSlider, titlePages} from "../../configs/text";
import {gitUrl} from "../../configs/urls";
import BodyUI from "../../components/BodyUI";

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