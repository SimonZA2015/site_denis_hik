import React from 'react';

import style from './styles/Button.module.css'

const Button = (props) => {

    return (<div className={style.body} style={props.pos} >
        {props.image && <div style={{backgroundImage: 'url(' + props.image + ')'}} />}
        <h4>{props.text}</h4>
    </div>)
}

export default Button;