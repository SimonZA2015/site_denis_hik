import React from 'react';
import {BodyPopout} from "./styled";
import {experienceConfig} from "../../configs/experienceConfig";
import {HHIcon, LinkedinIcon} from "../../Icon/Icons";

type Types = {
    visible: boolean;
    onClose: () => void;
    isAdd?: boolean;
}

export const ExperiencePopout: React.FC<Types> = ({
    visible,
    onClose,
    isAdd,
                                                  }) => {

    const open = (url) => () => {
        window.open(url, "_blank");
    }

    return (visible
            ? <BodyPopout onClick={onClose} >
                <div onClick={(e) => e.stopPropagation()} className={'panel'}>
                    {experienceConfig.map((data) => (
                        <div className={'item'} style={{backgroundImage: `url("${data.image}")`}}>
                            <div className={"item-black"} />
                            <div className={"item-title"}>{data.titleCompany}</div>
                            <div className={"item-role"}>{data.role}</div>
                            <div className={"item-date"}>{data.startDate} - {data.endDate}</div>
                        </div>
                    ))}
                    {isAdd && <div className={"block-add"}>
                        <LinkedinIcon onClick={open("https://www.linkedin.com/in/denishik")} size={50} />
                        <HHIcon onClick={open("https://hh.ru/resume/8e5c2758ff089a14f40039ed1f746170327a44")} size={50} />
                    </div>}
                </div>
            </BodyPopout>
            : <div />
    )
}