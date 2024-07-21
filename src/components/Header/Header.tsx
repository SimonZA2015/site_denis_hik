import React, {useContext, useMemo} from "react";
import menuImage from "../../media/menu.png";
import {Link, useLocation} from "react-router-dom";
import logoMenu from '../../media/-1__1.png'
import logoMenuPhone from '../../media/phone.png'
import {BodyHeader} from "./styled";
import {globalContext} from "../../modal/context";

interface propsI {}

const Header = ({}: propsI) => {
    const {actions} = useContext(globalContext)
    const {pathname} = useLocation();

    const openPop = () => {
        actions.showMenu && actions.showMenu(true)
    }

    const show = useMemo(() => {
        return pathname !== "/"
    }, [pathname])

    return (
        <BodyHeader>
            <Link className={'logoHeader'} to='/'><img src={logoMenu} alt={'logo header'}/></Link>
            <h4 className={show ? " title" : ""}>Denis Hik</h4>
            <img className={'menuHeader'} src={menuImage} height={70} alt={'menu'} onClick={openPop}/>
            <img className={'menuHeaderPhone'} src={logoMenuPhone} height={40} alt={'menu'} onClick={openPop}/>
        </BodyHeader>
    )
}

export default Header
