import React from 'react';
import {getPCversion, openUrl} from "../functions/func1";
import {gitUrl, instaUrl, vkUrl} from "../config/urls";
import {NavLink} from "react-router-dom";

import style from './styles/popupMenu.module.css';
import {gitImageUrl, instaImageUrl, vkImageUrl} from "../config/images";

let listName = ['Конный спорт', 'Программирование', 'Проекты'];
let styleBg = style.background;

if (getPCversion()) {
    styleBg = style.backgroundPC;
}

const MenuPopup = ({closePopup, openEquine, openProg}) => {

    let listFuncs = [openEquine,0, openProg,1, closePopup,2]
    let listUrls = ['/equine', '/programming', '/project']

    return (
        <div className={styleBg} onClick={closePopup} >
            <div className={style.body} >
                {listName.map((name, i) => {

                    return (
                        <NavLink to={listUrls[i]}><h4 className={style} id={name} >{name}</h4></NavLink>
                    )
                })}
                <div className={style.bodyImagesUrls}>
                    <img src={gitImageUrl} height={'100%'} alt={'gitHub'} onClick={() => openUrl(gitUrl)} />
                    <img src={vkImageUrl} height={'100%'} alt={'VK'} onClick={() => openUrl(vkUrl)} />
                    <img src={instaImageUrl} height={'100%'} alt={'Insta'} onClick={() => openUrl(instaUrl)} />
                </div>
            </div>
        </div>
    )
}

export default MenuPopup;