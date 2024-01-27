import React from 'react';
import {Slider, TSlider} from "../../SliderBlock/Slider";
import bgEquineUrl from "../../../media/bgEquine.jpg";
import {getListEquine} from "../../../modal/functions/gets_funcs";
import {titlePages} from "../../../modal/configs/text";
import BodyUI from "../../BodyUI";

let listEquine: TSlider[] = getListEquine();

const Equine = () => {

    return (
        <div>
            <BodyUI
                image={bgEquineUrl}
                title={titlePages.equine}
                button={{name: "Instagram", link: "https://instagram.com/denis_hik"}}
            >
                <Slider list={listEquine} />
            </BodyUI>
        </div>
    )
}

export default Equine;