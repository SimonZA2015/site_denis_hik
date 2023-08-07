import React from 'react';
import {Slider} from "../../components/SliderBlock/Slider";
import {getListProj} from "../../functions/gets_funcs";
import bjProj from "../../media/bg.jpg";
import {listButtonsProjectSlider, titlePages} from "../../configs/text";
import {gitUrl} from "../../configs/urls";
import BodyUI from "../../components/BodyUI";

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
        // <div>
        //     <MainCard>
        //         <div className={'banner'} style={{backgroundImage: 'url(' + bjProj + ')'}}/>
        //         <div className={"bottomStart"}>
        //             <h1>{titlePages.project}</h1>
        //             <div className={"blockButtons"}>
        //                 <div/>
        //                 <Button className={"bottomStartButton"} url={gitUrl} text='Git hub'/>
        //             </div>
        //         </div>
        //         <Slider button={button} list={list}/>
        //     </MainCard>
        // </div>
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