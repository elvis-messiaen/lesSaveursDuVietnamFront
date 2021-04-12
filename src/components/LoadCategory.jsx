import React from 'react';
import content from './Home';
import SideMenu from './SideMenu';
import List from './List';
import {list} from './data';
import category from './SideMenu'

const LoadCategory = () => {

  return (
  
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
        <div className="row">
          <SideMenu />
          <div className="col-sm">
            <div className="row">
              <List data={list} category = {category}/>
            </div>
            
          </div>
        </div>

      </header>

    </div>
  );
}
  export default LoadCategory;
