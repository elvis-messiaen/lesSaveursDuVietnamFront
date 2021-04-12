import React, { Fragment } from "react";
import Adresse from "./components/donneePersonnel/Adresse";
import Navbar from "./components/header-footer/Navbar";
import SideMenu from './components/SideMenu';


const App = (loadCategory) => {
  return(
    <Fragment>
      {/* {<Navbar/>} */}
      <div className="container-fluid">
      <SideMenu loadCategory={loadCategory}/>
      <Adresse/>
      </div>
    </Fragment>
      )  
};

export default App;