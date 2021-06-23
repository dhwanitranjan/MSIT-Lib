import React, {useState, useEffect } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import Axios from 'axios';

function Settings() {

    const[new_name, setNewName] = useState("");
    const[new_username, setNewUsername] = useState("");

    // var student = window.name

    const update_name = (new_name) =>{
        Axios.put('http://localhost:3001/update/name', {
            student: window.name,
            new_name: new_name,
        });
        window.name = new_name
        alert("Your name is updated")
        window.location.reload(true);

    }

    const update_username = (new_username) =>{
        Axios.put('http://localhost:3001/update/username', {
            student: window.name,
            new_username: new_username,
        });
        // setNew("")
        alert("Your username is updated")
        window.location.reload(true);
        
    }

    return (
        <div className="card m-5">
            <div className="card-header">
                <div className="card-title">
                    <h4>Settings</h4>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">My Profile</h2>
                
                <p><strong>Name:</strong> {window.name}</p>

                <button className="btn btn-primary" data-toggle="modal" data-target="#edit">Edit Profile<EditIcon /></button>
                {/* <p><strong>Username:</strong> {username}</p> */}
            </div>

            <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div className="modal-header">
                            <h2>Edit Profile</h2>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    
                        <div class="modal-body">

                            <form>                            
                                <div className="form-group row">
                                    <input className="col-sm-8 form-control mt-5 ml-5" placeholder="Edit Name" onChange={(e)=>{setNewName(e.target.value)}}></input>
                                    <button id="si" type="button" className="btn col-sm-2 mt-5 ml-3" onClick={()=>update_name(new_name)}>Update</button>
                                    <input className="col-sm-8 form-control mt-5 ml-5" placeholder="Edit Username" onChange={(e)=>{setNewUsername(e.target.value)}}></input>
                                    <button id="si" type="button" className="btn col-sm-2 mt-5 ml-3" onClick={()=>update_username(new_username)}>Update</button>
                                    {/* <input className="col-sm-8 form-control mt-5 ml-5" placeholder="Edit Password"></input>
                                    <button id="si" type="button" className="btn col-sm-2 mt-5 ml-3">Update</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
