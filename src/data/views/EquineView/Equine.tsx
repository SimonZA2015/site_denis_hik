import React from 'react';
import {Slider} from "../../components/SliderBlock/Slider";
import bgEquineUrl from "../../media/bgEquine.jpg";
import {getListEquine} from "../../functions/gets_funcs";
import {titlePages} from "../../configs/text";
import BodyUI from "../../components/BodyUI";

let listEquine: {
    name: string,
    des: string,
    image: string,
    gradient: string
}[] = getListEquine();

const Equine = () => {

    return (
        <div>
            {/*<div className={style.body}>*/}
            {/*    <div className={style.banner} style={{backgroundImage: 'url(' + bgEquineUrl + ')'}}/>*/}
            {/*    <div className={style.bottomStart}>*/}
            {/*        <h1>{titlePages.equine}</h1>*/}
            {/*        <div className={style.blockButtons}>*/}
            {/*            <div />*/}
            {/*            <Button className={style.bottomStartButton} url='https://instagram.com/denis_hik'*/}
            {/*                    text='Instagram'/></div>*/}
            {/*    </div>*/}
            {/*    <Slider list={listEquine} button={null} />*/}
            {/*</div>*/}
            <BodyUI
                image={bgEquineUrl}
                title={titlePages.equine}
                button={{name: "Instagram", link: "https://instagram.com/denis_hik"}}
            >
                <Slider list={listEquine} button={null} />
            </BodyUI>
        </div>
    )
}

export default Equine;