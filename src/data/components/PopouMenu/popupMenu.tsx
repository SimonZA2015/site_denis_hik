import {MouseEventHandler} from 'react';
import {getPCversion, openUrl} from "../../functions/gets_funcs";
import {gitUrl, instaUrl, vkUrl} from "../../configs/urls";
import {NavLink} from "react-router-dom";

import style from './popupMenu.module.css';
import {gitImageUrl, instaImageUrl, vkImageUrl} from "../../configs/images";

interface propsI {
    closePopup: MouseEventHandler
}

let listName: Array<string> = ['Конный спорт', 'Программирование', 'Проекты'];
let styleBg: string = style.background;

if (getPCversion()) {
    styleBg = style.backgroundPC;
}

const MenuPopup = ({closePopup}:propsI):JSX.Element => {

    let listUrls: Array<string> = ['/equine', '/programming', '/project']

    return (
        <div className={styleBg} onClick={closePopup} >
            <div className={style.body} >
                {listName.map((name, i) => {

                    return (
                        <NavLink className={style.nav}  to={listUrls[i]}><h4 id={name} >{name}</h4></NavLink>
                    )
                })}
                <div className={style.bodyImagesUrls}>
                    <img src={gitImageUrl} height={'100%'} alt={'gitHub'} onClick={() => openUrl(gitUrl)} />
                    <img src={vkImageUrl} height={'100%'} alt={'VK'} onClick={() => openUrl(vkUrl)} />
                    <img src={instaImageUrl} height={'100%'} alt={'Insta'} onClick={() => openUrl(instaUrl)} />
                    {/*<img src={donatMenu} height={'100%'} alt={'Donat'} onClick={() => openUrl(donatUrl)} />*/}
                </div>
            </div>
        </div>
    )
}

export default MenuPopup;