import React, {useState, useEffect } from 'react';
import './Sidebar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import Axios from 'axios';
import $ from 'jquery';

function Sidebar() {
    const[student, setStudent] = useState('');
    const [user, userList] = useState([])
    const[loginStatus, setloginStatus] = useState('');

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

    // $('.bstooltip').mouseenter(function(){
    //     var that = $(this)
    //     that.tooltip('show');
    //     setTimeout(function(){
    //         that.tooltip('hide');
    //     }, 2000);
    // });
    
    // $('.bstooltip').mouseleave(function(){
    //     $(this).tooltip('hide');
    // });

    console.log(window.username)

    const date = new Date();

    const Currnetdate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()

    const time = date.getHours() + ":" + date.getMinutes();
        
    return (
        <div className="sidebar">
            <p id="user">Welcome <strong>{window.name}</strong></p>
            <p id="date">{time} Hrs | {Currnetdate}</p>
            <Link to="/Settings"><p id="settings">Settings</p></Link>
    
            <ul className="list-unstyled text-center sidemenu">
                <Link to="/itw"><li data-toggle="tooltip" data-placement="right" tabindex="0" data-trigger="focus" title="Information Technology Workshop">IT</li></Link>
                <Link to="/Cspp"><li data-toggle="tooltip" data-placement="right" tabindex="0" data-trigger="focus" title="Computer Science Principles and Programming">CSPP</li></Link>
                <Link to="/ids"><li data-toggle="tooltip" data-placement="right" tabindex="0" data-trigger="focus" title="Introduction to Data Science">IDS</li></Link>
                <Link to="/psc"><li data-toggle="tooltip" data-placement="right" tabindex="0" data-trigger="focus" title="Principles of Software Construction">PSC</li></Link>
                <Link to="/ads"><li data-toggle="tooltip" data-placement="right" tabindex="0" data-trigger="focus" title="Algorithms &amp; Data Structures">ADS</li></Link>
                <Link to="/cnf"><li data-toggle="tooltip" data-placement="right" tabindex="0" data-trigger="focus" title="Computer Network Foundations">CNF</li></Link>
                <Link to="/dbms"><li data-toggle="tooltip" data-placement="right" tabindex="0" data-trigger="focus" title="Database Management Systems">DBMS</li></Link>
            </ul>
        </div>
    )
}

export default Sidebar
