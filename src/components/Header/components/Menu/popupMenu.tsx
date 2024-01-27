import {MouseEventHandler, useContext} from 'react';
import {openUrl} from "../../../../modal/functions/gets_funcs";
import {gitUrl, instaUrl, telegramUrl} from "../../../../modal/configs/urls";
import {gitImageUrl, instaImageUrl, telegramImageUrl} from "../../../../modal/configs/images";
import {titlePages} from "../../../../modal/configs/text";
import {BodyPopoutMenu, ButtonLink} from "./styled";
import {globalContext} from "../../../../modal/context";

interface propsI {
}

const listName: Array<string> = [titlePages.equine, titlePages.programming, titlePages.project];
const listUrls: Array<string> = ['/equine', '/programming', '/project']
const MenuPopup = ({}:propsI):JSX.Element => {
    const {actions} = useContext(globalContext)

    const closePopup = () => {
        actions.showMenu && actions.showMenu(false)
    }

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