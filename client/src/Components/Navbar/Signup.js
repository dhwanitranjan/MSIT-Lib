import React, {useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
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
import WarningIcon from '@material-ui/icons/Warning';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

function Signup(){

    const[student, setName] = useState('');
    const[username, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[conpassword, setConPassword] = useState('');
    const[user_list, setUserList] = useState([]);
    const[user_flist, setUserFList] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/user/username").then((response)=>{
            setUserFList(response.data)
        })
      }, [])

    const handleSubmit = () =>{
        // user_flist((val)=>{
        //     console.log(val.username)
        //     if (username == val.username){
        //         alert("User already exists.")
        //     } else {
                if (password == conpassword){
                    Axios.post('http://localhost:3001/user/register', {student: student, username: username, password: password})
                    alert("Account created.")
                    setUserList([...user_list, {student: student, username: username, password: password}]);
                    console.log(user_list)
                } else {
                    alert("Please check your password.")
                }
            // }
        // })
        // console.log(user_flist[username])
        // if (user_flist[username].includes(username)){
        //     alert("User already exists.")
        // } else {
            // if (password == conpassword){
            //     Axios.post('http://localhost:3001/user/register', {student: student, username: username, password: password})
            //     alert("Account created.")
            //     setUserList([...user_list, {student: student, username: username, password: password}]);
            //     console.log(user_list)
            // } else {
            //     alert("Please check your password.")
            // }
        // }
    };

    return(
        <div className="login">
            <div className="row">

                <div className="col-12 col-sm-12 signup">
                    <form onSubmit={handleSubmit}>
                        <div className="row form-group">
                            <div className="col-sm"></div>
                            <div className="col-sm-10">
                                <div className="flex">
                                    <div className="icon"><PersonIcon /></div>
                                    <input className="form-control" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}} 
                                    type="text" name="fname" required/>
                                </div>
                                <div className="flex">
                                    <div className="icon"><EmailIcon /></div>
                                    <input className="form-control" placeholder="Username" onChange={(e)=>{setEmail(e.target.value)}} 
                                    type="email" name="email" required/>    
                                </div>
                                <div className="flex">
                                    <div className="icon"><LockIcon /></div>
                                    <input className="form-control" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} 
                                    type="password" name="pw" required/>
                                </div>
                                <div className="flex">
                                    <div className="icon"><WarningIcon /></div>
                                    <input className="form-control" placeholder="Confirm Password" onChange={(e)=>{setConPassword(e.target.value)}} 
                                    type="password" name="pw" required/>
                                </div>
                                <div className="regbtn">
                                    <button className="btn btn-link reg" type="submit">Register</button>
                                </div>
                            </div>
                            <div className="col-sm"></div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
                    
    )                   
}

export default Signup