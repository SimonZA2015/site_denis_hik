import React, {useState} from "react";
import MenuPopup from "./data/component/popupMenu";
import HomeView from "./data/views/Home";
import EquineView from "./data/views/Equine";
import ProgrammingView from "./data/views/Programming";
import Header from "./data/component/Header";
import AthorBlock from "./data/component/AthorBlock";
import {Redirect, Route} from "react-router-dom";
import ProjectsView from "./data/views/Projects";
import BottomNavBar from "./data/component/BottomNavBar";
import { Scrollbars } from 'react-custom-scrollbars';


import './App.css';
// import ErrorView from "./data/views/Error";

const App = () => {

    const [popupMenu, setPopupMenu] = useState(false);
    const [navBar, setNavBar]= useState(true);
    const [xS, setxS] = useState(0);
    let top = 0;

    function openPop() {
        function closePop() {
            setPopupMenu(false);
        }

        setPopupMenu(<MenuPopup closePopup={closePop}/>)
    }

    function onChangeScroll(topS) {
        if (top < topS) {
            setNavBar(false);
        }else {
            setNavBar(true);
        }
        top = topS;
    }

    return (
        <Scrollbars
            style={{width: '100vw', height: '100vh'}}
            onScrollFrame={(e) => setxS(e.scrollTop)}
            onScrollStart={() => onChangeScroll(xS)}
            onScrollStop={() => onChangeScroll(xS)}

        >
            <div className="App">
                <Header openPop={openPop}/>
                <div>
                    <Route exact path='/' component={HomeView}/>
                    <Route path='/equine' component={EquineView}/>
                    <Route path='/programming' component={ProgrammingView}/>
                    <Route path='/project' component={ProjectsView}/>
                    {/*<Route exact path='*' component={ErrorView} />*/}
                    <Redirect to={'/'}/>
                </div>
                {popupMenu}
                {navBar ? <BottomNavBar/> : ''}
                <AthorBlock/>
            </div>
        </Scrollbars>

    );
}

export default App;
