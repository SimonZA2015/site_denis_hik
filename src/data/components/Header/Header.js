import React from "react";
import logoMenu from "../../media/logo.ico";
import menuImage from "../../media/menu.png";
import {Link} from "react-router-dom";
// import {getPCversion} from "../functions/func1";
import {donatMenu} from "../../configs/images";
import {donatUrl} from "../../configs/urls";

const Header = ({openPop, openHome}) => {

    // let pc = getPCversion()

    function onClickDonat(data) {
        window.location.href = donatUrl;
    }

    return (
        <header className="App-header">
            <Link className={'logoHeader'} to='/' ><img src={logoMenu} height={40} alt={'logo header'} /></Link>
            <h4>Denis Hik</h4>
            <img className={'menuHeader'} src={menuImage} height={40} alt={'menu'} onClick={openPop} />
            {/*<img className={'donatHeader'} src={donatMenu} height={40} alt={'donat'} onClick={onClickDonat} />*/}
        </header>
    )
}

export default Header
