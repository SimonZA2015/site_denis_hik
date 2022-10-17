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
import { Scrollbars } from 'react-custom-scrollbars-2';


import './App.css';
// import ErrorView from "./data/views/Error";

const App:React.FC = () => {
//React.FC = React.FunctionComponent

    const [popupMenu, setPopupMenu] = useState<JSX.Element | boolean>(false);
    const [navBar, setNavBar]= useState(true);

    function openPop():void {
        function closePop() {
            setPopupMenu(false);
        }

        setPopupMenu(<MenuPopup closePopup={closePop}/>)
    }


    return (
        <Scrollbars
            style={{width: '100vw', height: '100vh'}}
            onScrollFrame={(e: any) => {
                // console.log(xS);
            }}
            id={'display'}
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
