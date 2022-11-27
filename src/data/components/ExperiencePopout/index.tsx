import React from 'react';
import {BodyPopout} from "./styled";
import {experienceConfig} from "../../configs/experienceConfig";

type Types = {
    visible: boolean;
    onClose: () => void;
}

export const ExperiencePopout: React.FC<Types> = ({
    visible,
    onClose,
                                                  }) => {

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
                </div>
            </BodyPopout>
            : <div />
    )
}