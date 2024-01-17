import React, {CSSProperties} from 'react';
import Button from "../ButtonBlock/Button";
import {Body} from "./styled";

export type TSlider = {
    name: string,
    des: string,
    image?: string,
    button?: boolean | null
    gradient?: string
    styled?: {[key: string]: CSSProperties }
}

export type TButton = {
    text: string[],
    image: string[],
    url: string[],
}

const Slider = (props:{list: TSlider[], button?: TButton }) => {

    return (
        <Body>
            {props.list && props.list.map((data, index) => (
                <div className={`item`} style={{background: data.gradient, ...data.styled?.base}}>
                    {data.image && <img style={data.styled?.image} src={data.image} alt={''}/>}
                    {data.name && <div className={"textBlock"}>
                        {data.name && <h4>{data.name}</h4>}
                        {data.des && (data.button
                            ? <div className={"div1"}><span>{data.des}</span></div>
                            : <div className={"div2"}><span>{data.des}</span></div>)
                        }
                        {props.button && props.button.text[index] &&
                        <a target='example' href={props.button.url[index]}><Button
                            className={"buttons"} pos={{position: 'absolute', left: '10px', bottom: '5px'}}
                            image={props.button.image[index]}
                            text={props.button.text[index]}/></a>}
                    </div>}
                </div>
            ))}
        </Body>
    )
};

export {Slider};