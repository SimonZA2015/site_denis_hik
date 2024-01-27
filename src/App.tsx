import React, {useContext, useState} from "react";
import MenuPopup from "./components/Header/components/Menu/popupMenu";
import HomeView from "./components/views/HomeView/Home";
import EquineView from "./components/views/EquineView/Equine";
import ProgrammingView from "./components/views/ProgrammingView/Programming";
import Header from "./components/Header/Header";
import AuthorBlock from "./components/AuthorBlock/AuthorBlock";
import {Redirect, Route} from "react-router-dom";
import ProjectsView from "./components/views/ProjectsView/Projects";
import BottomNavBar from "./components/BottomnavBlock/BottomNavBar";
import {Scrollbars} from 'react-custom-scrollbars-2';
import {globalContext, GlobalContextProvider} from "./modal/context";
import './App.css';

const App: React.FC = () => {
    const {form} = useContext(globalContext)
    return (
            <Scrollbars
                style={{width: '100vw', height: '100vh'}}
                id={'display'}
            >
                <div className="App">
                    <Header />
                    <div>
                        <Route exact path='/' component={HomeView}/>
                        <Route path='/equine' component={EquineView}/>
                        <Route path='/programming' component={ProgrammingView}/>
                        <Route path='/project' component={ProjectsView}/>
                        <Redirect to={'/'}/>
                    </div>
                    {form.menu && <MenuPopup/>}
                    <BottomNavBar
                        showHeight={50}
                        customId={'display'}
                    />
                    <AuthorBlock/>
                </div>
            </Scrollbars>

    );
}

export default () => <GlobalContextProvider>
    <App />
</GlobalContextProvider>;
