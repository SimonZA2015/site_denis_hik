import React, {MouseEventHandler, useContext} from "react";
import menuImage from "../../media/menu.png";
import {Link} from "react-router-dom";
import logoMenu from '../../media/-1__1.png'
import logoMenuPhone from '../../media/phone.png'
import {BodyHeader} from "./styled";
import {globalContext} from "../../modal/context";

interface propsI {}

const Header = ({}: propsI) => {

    const {actions} = useContext(globalContext)

    const openPop = () => {
        actions.showMenu && actions.showMenu(true)
    }

    return (
        <BodyHeader>
            <Link className={'logoHeader'} to='/'><img src={logoMenu} alt={'logo header'}/></Link>
            <h4 className={'title-author'}>Denis Hik</h4>
            <img className={'menuHeader'} src={menuImage} height={40} alt={'menu'} onClick={openPop}/>
            <img className={'menuHeaderPhone'} src={logoMenuPhone} height={40} alt={'menu'} onClick={openPop}/>
            {/*<img className={'donatHeader'} src={donatMenu} height={40} alt={'donat'} onClick={onClickDonat} />*/}
        </BodyHeader>
    )
}

export default Header
