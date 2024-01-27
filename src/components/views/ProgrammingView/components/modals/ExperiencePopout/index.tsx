import React, {useContext} from 'react';
import {BodyPopout} from "./styled";
import {experienceConfig} from "../../../../../../modal/configs/experienceConfig";
import {Icon} from "../../../../../../media/Icon/Icons";
import {globalContext} from "../../../../../../modal/context";

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

    const {dataResume} = useContext(globalContext)

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
                    {isAdd && !!dataResume?.length && <div className={"block-add"}>
                        {dataResume.map((item, index) =>
                            <Icon src={item.logo} onClick={open(item.url)} size={50} />
                        )}

                    </div>}
                </div>
            </BodyPopout>
            : <div />
    )
}