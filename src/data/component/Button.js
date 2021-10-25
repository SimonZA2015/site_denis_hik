import React from 'react';

import style from './styles/Button.module.css'

const Button = (props) => {

    return (<a
        style={{textDecoration: 'none'}}
        target='example'
        href={props.url}>
        <div className={style.body + ' ' + props.className} style={props.pos}>
            {/* eslint-disable-next-line no-mixed-operators */}
            {props.image ? <div style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: 'url(' + props.image + ')'
            }}/> : ''}
            <h4>{props.text}</h4>
        </div>
    </a>)
}

export default Button;