import React, { Fragment } from "react";
import Adresse from "./components/donneePersonnel/Adresse";
import Navbar from "./components/header-footer/Navbar";
import Sidebar from "./components/header-footer/Sidebar";


const App = (loadCategory) => {
  return (
    <Fragment>
      <Sidebar />
      <Navbar />

      <div className="container-fluid">
        {/* {<SideMenu loadCategory={loadCategory}/>} */}
        {/* {<Adresse/>} */}
      </div>
    </Fragment>
  )
};

export default App;