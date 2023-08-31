import React, {useEffect, useState} from "react";
import MenuPopup from "./data/components/PopouMenu/popupMenu";
import HomeView from "./data/views/HomeView/Home";
import EquineView from "./data/views/EquineView/Equine";
import ProgrammingView from "./data/views/ProgrammingView/Programming";
import Header from "./data/components/Header/Header";
import AthorBlock from "./data/components/AthorBlock/AthorBlock";
import {Redirect, Route} from "react-router-dom";
import ProjectsView from "./data/views/ProjectsView/Projects";
import BottomNavBar from "./data/components/BottomnavBlock/BottomNavBar";
import { Scrollbars } from 'react-custom-scrollbars-2';


import './App.css';
import {REQUEST_SERVER} from "./data/configs/backend";
// import ErrorView from "./data/views/Error";

const App:React.FC = () => {
//React.FC = React.FunctionComponent

    const [popupMenu, setPopupMenu] = useState<JSX.Element | boolean>(false);

    function openPop():void {
        function closePop() {
            setPopupMenu(false);
        }

        setPopupMenu(<MenuPopup closePopup={closePop}/>)
    }

    useEffect(() => {
        const statictic = localStorage.getItem("statistic")

        if (!statictic) {
            fetch(`${REQUEST_SERVER}analytics`, {method: "GET", mode: "cors", headers: {"Access-Control-Allow-Origin": "*"}})
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    if (data?.status.indexOf("success") > -1) {
                        localStorage.setItem("statistic", "1")
                    } else {

                    }
                })
                .catch(function (error) {

                });
        }
    }, []);


    return (
        <Scrollbars
            style={{width: '100vw', height: '100vh'}}
            id={'display'}
        >
            <div className="App">
                <Header openPop={openPop}/>
                <div>
                    <Route exact path='/' component={HomeView}/>
                    <Route path='/equine' component={EquineView}/>
                    <Route path='/programming' component={ProgrammingView}/>
                    <Route path='/project' component={ProjectsView}/>
                    <Redirect to={'/'}/>
                </div>
                {popupMenu}
                <BottomNavBar
                    showHeight={50}
                    customId={'display'}
                />
                <AthorBlock/>
            </div>
        </Scrollbars>
    );
}

export default App;
