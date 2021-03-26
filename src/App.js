import React, {useState} from "react";
import MenuPopup from "./data/component/popupMenu";
import HomeView from "./data/views/Home";

import './App.css';
import EquineView from "./data/views/Equine";
import ProgrammingView from "./data/views/Programming";
import Header from "./data/component/Header";
import AthorBlock from "./data/component/AthorBlock";
import {Route} from "react-router-dom";
import ProjectsView from "./data/views/Projects";
import BottomNavBar from "./data/component/BottomNavBar";
// import ErrorView from "./data/views/Error";

const App = () => {

  const [popupMenu, setPopupMenu] = useState(false);

  function openPop() {
      function closePop() {
          setPopupMenu(false);
      }
      setPopupMenu(<MenuPopup closePopup={closePop} />)
  }

  return (
    <div className="App"  >
      <Header openPop={openPop} />
      <div>
          <Route exact path='/' component={HomeView} />
          <Route path='/equine' component={EquineView} />
          <Route path='/programming' component={ProgrammingView} />
          <Route path='/project' component={ProjectsView} />
          {/*<Route exact path='*' component={ErrorView} />*/}
      </div>
        {popupMenu}
        <BottomNavBar />
        <AthorBlock />
    </div>
  );
}

export default App;
