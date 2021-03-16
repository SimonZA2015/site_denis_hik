import React from 'react';
import style from './styles/SliderEquine.module.css'

const Slider = (props) => {

    return (
        <div className={style.contender}>
            {props.list && props.list.map((data) => (
                <div className={style.body} style={{background: data.gradient}} >
                    {data.image && <img src={data.image} alt={''} /> }
                    <div className={style.textBlock}>
                        {data.name && <h4>{data.name}</h4>}
                        {data.des && <span>{data.des}</span>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export {Slider};