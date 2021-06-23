import React, {useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from 'jquery';
import './reg.css'
import Axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

function Login(){
    const[usernameSi, setEmailSi] = useState('');
    const[passwordSi, setPasswordSi] = useState('');

    const[loginStatus, setloginStatus] = useState('');

    const handleSignIn = () =>{
        Axios.post('http://localhost:3001/user/login', {username: usernameSi, password: passwordSi}).then((response) =>{
            console.log(response)
            if (response.data.message){
                setloginStatus(response.data.message)
                // alert("Wrong Username or Password")
            } else {
                window.id = response.data[0].id
                window.name = response.data[0].student
                window.username = response.data[0].username
                window.pw = response.data[0].password

                window.location.replace("http://localhost:3000/Explore");
            }
        })
    }

    return(
        <div className="login">
            <div className="row">

                <div className="col-12 col-sm-12">
                    <form>
                        <div className="form-group row">
                            <div className="col-sm"></div>
                            <div className="col-sm-10">
                                <div className="username">
                                    <div className="icon"><EmailIcon /></div>
                                    <input className="form-control" type="email" name="user" placeholder="Username" 
                                    onChange={(e)=>{setEmailSi(e.target.value)}} required/><br/>
                                </div>

                                <div className="password"> 
                                    <div className="icon"><LockIcon /></div>                                                
                                    <input className="form-control" type="password" name="pw" placeholder="Password" 
                                    onChange={(e)=>{setPasswordSi(e.target.value)}} required/><br/>
                                </div>

                                <div className="regbtn">                                 
                                    <button id="si" type="button" className="btn" onClick={handleSignIn}>Sign In</button><br/>
                                </div> 
                            </div>
                            <div className="col-sm"></div>
                        </div>
                    </form>
                    <p class="alert mt-0">{loginStatus}</p>
                </div>

            </div>
        </div>
                    
    )                   
}

export default Login