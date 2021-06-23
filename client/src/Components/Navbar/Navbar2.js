import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'popper.js/dist/popper.min.js'
import 'jquery/dist/jquery.min.js';
import logo from './logo.jpg'
import './Navbar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink, 
    useHistory
  } from "react-router-dom";

import ExploreIcon from '@material-ui/icons/Explore';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Navbar2() {
    
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
                <Link to="/"><label className="navbar-brand logo">MSITube</label></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto text-center menu">
                        <Link to="/Explore"><li className="nav-item active"><ExploreIcon /> Explore</li></Link>
                        <Link to="/Feedback"><li className="nav-item"><FileCopyIcon /> Feedback</li></Link>
                        <Link to="/"><li className="nav-item"><ExitToAppIcon /> Log Out</li></Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar2