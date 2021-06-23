import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'popper.js/dist/popper.min.js'
import 'jquery/dist/jquery.min.js';
import './Navbar.css'
import Login from './Signin'
import Signup from './Signup'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
                <Link to="/"><label className="navbar-brand logo">MSITube</label></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto text-center menu">
                        <Link to="/"><li className="nav-item"><HomeIcon /> Home</li></Link>
                        <Link to="/Placements"><li className="nav-item"><BusinessIcon /> Placement</li></Link>
                        {/* <Link to="/Login"><li className="nav-item"><ExitToAppIcon /> Login</li></Link> */}
                        <li className="nav-item" data-toggle="modal" data-target="#myModal"><ExitToAppIcon /> Login</li>
                    </ul>
                </div>  
            </nav>

            {/* Sign In Modal */}
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        
                        <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#signin" data-toggle="tab">
                                        <h3><strong>SIGN</strong><strong className="inup">IN</strong></h3>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#signup" data-toggle="tab"><h3>
                                        <strong>SIGN</strong> <strong className="inup">UP</strong></h3>
                                    </a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div class="tab-pane fade show active" id="signin">
                                    <Login />
                                </div>
                                <div class="tab-pane fade" id="signup">
                                    <Signup />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar