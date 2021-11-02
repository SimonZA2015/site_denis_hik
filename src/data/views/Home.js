import React from 'react';
import style from './styles/Home.module.css';


// let heightBanner = {height: '150vh'};
//
// if (getPCversion()) {
//     heightBanner = {height: '100vh'};
// }

const HomeView = () => {

    return (
        <div
            className={style.body}
            // style={{backgroundImage: 'url(' + (getPCversion() ? bgHomePCUrl : bgHomeUrl) + ')', height: heightBanner.height}}
        />
    )
}

export default HomeView;