import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../src/App.css";
import "./Navbar.css";
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { history } from '../../helpers/history';
import { logout } from '../../actions/auth';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from '../Login';
import Home from '../Home';
import Register from '../Register';
import Profile from '../Profile';
import BoardUser from '../BoardUser';
import BoardAdmin from '../BoardAdmin';
import { clearMessage } from "../../actions/message";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card";
import Sidebar from "./Sidebar";
import Adresse from '../donneePersonnel/Adresse';


const Navbar = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <BrowserRouter history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark  fixed-top w-100 ">
          <Link to={"/"} className="navbar-brand">
            Les saveurs du vietnam
            </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
                </Link>
            </li>
            <div className="collapse navbar-collapse" id="navbarSupportContent">
              <div className="ml-auto cart">
                <div className="collapse navbar-collapse" id="navbarSupportContent">
                  <div className="d-flex ml-5 ">
                    <input label="Search" icon="search" className="mr-2 col " />
                    <button  className="btn-lg align-self-center">
                      Valider
                  </button>
                  </div>
                </div>
              </div>
            </div>

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                  </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                  </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                  </a>
              </li>
            </div>
          ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    <FontAwesomeIcon icon={faShoppingCart} id="cartNavBar" />
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/product " component={Card} />
            <Route path="adresse " component={Adresse} />
            {/* <Route path="/panier " component={Panier} /> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;