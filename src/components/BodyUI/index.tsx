import React from "react";
import {Body, ImageDiv} from "./styled";
import {titlePages} from "../../modal/configs/text";
import style from "../views/EquineView/Equine.module.css";
import Button from "../ButtonBlock/Button";

type BodyUIType = {
    image?: string;
    title?: string;
    button?: {name: string, onClick?: () => void, link?: string}
}

const BodyUI: React.FC<BodyUIType> = ({children, image, title, button = null}) => {

    return (
        <Body>
            {image && <img src={image} /> }
            <div className={"bottomDiv"}>
                {title && <h1>{title}</h1>}
                {button && <div className={"blockButtons"}>
                    <div/>
                    <Button
                        className={"button"}
                        url={button.link}
                        onClick={button?.onClick}
                        text={button?.name}
                    />
                </div>}
            </div>
            {children}
        </Body>
    )
};

export default BodyUI;