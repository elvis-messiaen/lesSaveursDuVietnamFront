import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCartAlt } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import { URL_ADRESSE, URL_HOME, URL_PANIER } from '../../urls/urlConstants';

const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false)
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
  }
  useEffect(() => {
    if (!menuCollapse === true) {
      console.log("open de la navBar", menuCollapse);
    } else {
      console.log("close de la navBar", menuCollapse);
    }
  })

  return (
    <Router>
      <div id="header"  >
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>

            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <FiArrowRightCircle />
              ) : (
                  <FiArrowLeftCircle />
                )}
            </div>
          </SidebarHeader>
          <SidebarContent >
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                <Link className="text-dark" to={URL_HOME}>Accueil</Link>
              </MenuItem>

              <MenuItem icon={<FaList />}>
                <Link className="text-dark" to={URL_HOME}>Café</Link>
              </MenuItem>

              <MenuItem icon={<FaRegHeart />}>
                <Link className="text-dark" to={URL_ADRESSE}>Thé</Link>
              </MenuItem>

              <MenuItem icon={<RiPencilLine />}>
                <Link className="text-dark" to={URL_ADRESSE}>Accesoires</Link>
              </MenuItem>
              <MenuItem icon={<BiCartAlt />}>
                <Link className="text-dark" to={URL_PANIER}>Panier</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </Router>
  );
};

export default Sidebar;