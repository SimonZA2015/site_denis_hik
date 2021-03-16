import React from 'react';

import style from './styles/LanguageSelect.module.css'
import {langENGImage, langRUSImage} from "../config/images";

const LanguageSelect = ({onClose}) => {

    function selLang(str) {
        localStorage.setItem('lang', str)
        onClose()
    }

    return (
        <div className={style.background}>
            <div className={style.body} >
                <div className={style.button} style={{background: 'url(' + langENGImage + ')'}} onClick={() => selLang('ENG')} />
                <div className={style.button} style={{background: 'url(' + langRUSImage + ')'}} onClick={() => selLang('RUS')} />
            </div>
        </div>

    )
}

export default LanguageSelect;