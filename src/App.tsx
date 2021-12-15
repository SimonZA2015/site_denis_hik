import React, {useState} from "react";
import MenuPopup from "./data/components/PopouMenu/popupMenu";
import HomeView from "./data/views/Home";
import EquineView from "./data/views/Equine";
import ProgrammingView from "./data/views/Programming";
import Header from "./data/components/Header/Header";
import AthorBlock from "./data/components/AthorBlock/AthorBlock";
import {Redirect, Route} from "react-router-dom";
import ProjectsView from "./data/views/Projects";
import BottomNavBar from "./data/components/BottomnavBlock/BottomNavBar";
import { Scrollbars } from 'react-custom-scrollbars';


import './App.css';
// import ErrorView from "./data/views/Error";

const App:React.FC = () => {
//React.FC = React.FunctionComponent

    const [popupMenu, setPopupMenu] = useState<JSX.Element | boolean>(false);
    const [navBar, setNavBar]= useState(true);
    const [xS, setxS] = useState<number>(0);
    let top: number = 0;

    function openPop():void {
        function closePop() {
            setPopupMenu(false);
        }

        setPopupMenu(<MenuPopup closePopup={closePop}/>)
    }

    function onChangeScroll(topS: number):void {
        //чекается когда меняется скролл
        if (top < topS) {
            //прячет навбар
            setNavBar(false);
        }else {
            //наоборот
            setNavBar(true);
        }
        top = topS;
    }

    return (
        <Scrollbars
            style={{width: '100vw', height: '100vh'}}
            onScrollFrame={(e: any) => {
                setxS(e.scrollTop);
                // console.log(xS);
            }}
            onScrollStart={() => onChangeScroll(xS)}
            onScrollStop={() => onChangeScroll(xS)}
            onUpdate={console.log}
        >
            <div className="App">
                <Header openPop={openPop}/>
                <div>
                    <Route exact path='/' component={HomeView}/>
                    <Route path='/equine' component={EquineView}/>
                    <Route path='/programming' component={ProgrammingView}/>
                    <Route path='/project' component={ProjectsView}/>
                    {/*<Route exact path='*' components={ErrorView} />*/}
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
