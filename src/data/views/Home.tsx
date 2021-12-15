import React from 'react';
import style from './styles/Home.module.css';
import TitleHomeBlock from "../components/TitleHomeBlock/TitleHomeBlock";



const HomeView = () => {

    return (
        <div
            className={style.body}
        >
            <TitleHomeBlock />
        </div>
    )
}

export default HomeView;