import {MouseEventHandler} from 'react';
import {openUrl} from "../../functions/gets_funcs";
import {gitUrl, instaUrl, telegramUrl} from "../../configs/urls";
import {gitImageUrl, instaImageUrl, telegramImageUrl} from "../../configs/images";
import {titlePages} from "../../configs/text";
import {BodyPopoutMenu, ButtonLink} from "./styled";

interface propsI {
    closePopup: MouseEventHandler
}

let listName: Array<string> = [titlePages.equine, titlePages.programming, titlePages.project];

const MenuPopup = ({closePopup}:propsI):JSX.Element => {

    let listUrls: Array<string> = ['/equine', '/programming', '/project']

    return (
        <BodyPopoutMenu onClick={closePopup} >
            <div className={"body"} >
                {listName.map((name, i) => (
                    <ButtonLink  to={listUrls[i]}><h4 id={name} >{name}</h4></ButtonLink>
                ))}
                <div className={"bodyImagesUrls"}>
                    <img src={gitImageUrl} height={'100%'} alt={'gitHub'} onClick={() => openUrl(gitUrl)} />
                    <img src={telegramImageUrl} height={'100%'} alt={'VK'} onClick={() => openUrl(telegramUrl)} />
                    <img src={instaImageUrl} height={'100%'} alt={'Insta'} onClick={() => openUrl(instaUrl)} />
                </div>
            </div>
        </BodyPopoutMenu>
    )
}

export default MenuPopup;