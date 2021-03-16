import React from "react";

import logoMenu from "../media/logo.ico";
import menuImage from "../media/menu.png";
import {Link} from "react-router-dom";

const Header = ({openPop, openHome}) => {

    return (
        <header className="App-header">
            <Link className={'logoHeader'} to='/' ><img src={logoMenu} height={40} alt={'logo header'} onClick={openHome} /></Link>
            <h4>Denis Hik</h4>
            <img className={'menuHeader'} src={menuImage} height={40} alt={'menu'} onClick={openPop} />
        </header>
    )
}

export default Header
