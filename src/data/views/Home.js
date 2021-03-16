import React from 'react';
import style from './styles/Home.module.css';
import {bgHomeUrl} from "../config/images";
import {getPCversion} from "../functions/func1";


let heightBanner = {height: '150vh'};

if (getPCversion()) {
    heightBanner = {height: '100vh'};
}

const HomeView = () => {

    return (
        <div className={style.body} style={{backgroundImage: 'url(' + bgHomeUrl + ')', height: heightBanner.height}} />
    )
}

export default HomeView;