import React from 'react';
import {navbar} from "../config/images";
import {NavLink} from "react-router-dom";
import nav0 from '../media/nav0.png';
import nav1 from '../media/nav1.png';
import nav2 from '../media/nav2.png';

import style from './styles/BottomNavBar.module.css';

const BottomNavBar = (props) => {

    return (
        <div className={style.body + ' NavBar'} >
            <NavLink className={style.nav} to={navbar.urls[0]} ><img alt={'block' + 0} src={nav0}/></NavLink>
            <NavLink className={style.nav} to={navbar.urls[1]} ><img alt={'block' + 1} src={nav1}/></NavLink>
            <NavLink className={style.nav} to={navbar.urls[2]} ><img alt={'block' + 2} src={nav2}/></NavLink>
        </div>
    )
}

export default BottomNavBar;