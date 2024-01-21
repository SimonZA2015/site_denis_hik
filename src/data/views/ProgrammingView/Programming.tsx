import React, {useState} from 'react';
import bgProgUrl from "../../media/bgProg.jpg";
import {Slider} from "../../components/SliderBlock/Slider";
import {getListProg} from "../../functions/gets_funcs";
import {ExperiencePopout} from "../../components/ExperiencePopout";
import {titlePages} from "../../configs/text";
import BodyUI from "../../components/BodyUI";

let listProg = getListProg();

const ProgrammingView = () => {
    const [visible, setVisible] = useState(false);

    return(
        <div>
            <BodyUI button={{name: "Experience", onClick: () => setVisible(!visible)}} image={bgProgUrl} title={titlePages.programming}>
                <Slider list={listProg}/>
            </BodyUI>
            <ExperiencePopout isAdd onClose={() => setVisible(!visible)} visible={visible} />
        </div>
    )
}

export default ProgrammingView;