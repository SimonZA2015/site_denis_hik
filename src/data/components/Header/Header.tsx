import React, {MouseEventHandler} from "react";
import menuImage from "../../media/menu.png";
import {Link} from "react-router-dom";
import logoMenu from '../../media/-1__1.png'
import {BodyHeader} from "./styled";

interface propsI {
    openPop: MouseEventHandler,
}

const Header = ({openPop}:propsI) => {

    // let pc = getPCversion()

    return (
        <BodyHeader>
            <Link className={'logoHeader'} to='/' ><img src={logoMenu} alt={'logo header'} /></Link>
            <h4 className={'title-author'}>Denis Hik</h4>
            <img className={'menuHeader'} src={menuImage} height={40} alt={'menu'} onClick={openPop} />
            {/*<img className={'donatHeader'} src={donatMenu} height={40} alt={'donat'} onClick={onClickDonat} />*/}
        </BodyHeader>
    )
}

export default Header
