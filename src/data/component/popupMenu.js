import React from 'react';
import {getPCversion, openUrl} from "../functions/func1";
import {donatUrl, gitUrl, instaUrl, vkUrl} from "../config/urls";
import {NavLink} from "react-router-dom";

import style from './styles/popupMenu.module.css';
import {donatMenu, gitImageUrl, instaImageUrl, vkImageUrl} from "../config/images";

let listName = ['Конный спорт', 'Программирование', 'Проекты'];
let styleBg = style.background;

if (getPCversion()) {
    styleBg = style.backgroundPC;
}

const MenuPopup = ({closePopup}) => {

    let listUrls = ['/equine', '/programming', '/project']

    return (
        <div className={styleBg} onClick={closePopup} >
            <div className={style.body} >
                {listName.map((name, i) => {

                    return (
                        <NavLink className={style.nav}  to={listUrls[i]}><h4 className={style} id={name} >{name}</h4></NavLink>
                    )
                })}
                <div className={style.bodyImagesUrls}>
                    <img src={gitImageUrl} height={'100%'} alt={'gitHub'} onClick={() => openUrl(gitUrl)} />
                    <img src={vkImageUrl} height={'100%'} alt={'VK'} onClick={() => openUrl(vkUrl)} />
                    <img src={instaImageUrl} height={'100%'} alt={'Insta'} onClick={() => openUrl(instaUrl)} />
                    <img src={donatMenu} height={'100%'} alt={'Donat'} onClick={() => openUrl(donatUrl)} />
                </div>
            </div>
        </div>
    )
}

export default MenuPopup;