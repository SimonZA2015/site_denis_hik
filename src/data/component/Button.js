import React from 'react';

import style from './styles/Button.module.css'

const Button = (props) => {

    return (<a target='example' href={props.url}><div className={style.body + ' ' + props.className} style={props.pos} >
        {props.image && <div style={{backgroundImage: 'url(' + props.image + ')'}} /> || <div/>}
        <h4>{props.text}</h4>
    </div></a>)
}

export default Button;