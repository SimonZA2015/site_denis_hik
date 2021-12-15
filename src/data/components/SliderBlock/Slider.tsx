import React, {PropsWithChildren} from 'react';
import Button from "../ButtonBlock/Button";

import style from './SliderEquine.module.css'

interface dataI {
    button: any;
    name: string,
    des: string,
    image: string,
    gradient: string,
    
}

interface propsI {
    button: {
        text: string[],
        url: string[],
        image: string[],
    } | null
    list: Array<any>
}

const Slider = (props:propsI) => {

    return (
        <div className={style.contender}>
            {props.list && props.list.map((data:dataI) => (
                <div className={style.body} style={{background: data.gradient}}>
                    {data.image && <img src={data.image} alt={''}/>}
                    {data.name && <div className={style.textBlock}>
                        {data.name && <h4>{data.name}</h4>}
                        {data.des && (data.button ? <div className={style.div1}><span>{data.des}</span></div> :
                            <div className={style.div2}><span>{data.des}</span></div>)}
                        {props.button && props.button.text[props.list.indexOf(data)] &&
                        <a target='example' href={props.button.url[props.list.indexOf(data)]}><Button
                            className={style.buttons} pos={{position: 'absolute', left: '10px', bottom: '5px'}}
                            image={props.button.image[props.list.indexOf(data)]}
                            text={props.button.text[props.list.indexOf(data)]}/></a>}
                    </div>}
                </div>
            ))}
        </div>
    )
};

export {Slider};