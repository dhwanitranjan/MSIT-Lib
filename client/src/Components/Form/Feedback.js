import React, {useState, useEffect } from 'react';
import './Feedback.css';
import $ from 'jquery';
import Axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function Feedback() {

    const[user, setName] = useState('');
    const[roll, setRoll] = useState('');
    const[about, setAbout] = useState('');
    const[fb, setFeedback] = useState('');
    const[fb_list, setFBList] = useState([]);

    Axios.defaults.withCredentials = true;

    useEffect(()=>{
        Axios.get("http://localhost:3001/login").then((response)=>{
            console.log(response)
        })
    }, [])

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
  
    useEffect(()=>{
      Axios.get("http://localhost:3001/feedback/get").then((response)=>{
        setFBList(response.data)
      })
    }, [])
  
    const handleSubmit = () =>{
      Axios.post('http://localhost:3001/feedback/insert', {user: window.name, roll: roll, about: about, fb: fb})
      alert("Feedback added")
      setFBList([...fb_list, {user: window.name, roll: roll, about: about, fb: fb}]);
      console.log(fb_list)
    };

    const delete_item = (cmt) =>{
        Axios.delete(`http://localhost:3001/api/delete/${cmt}`);
        window.location.reload(true);
        alert("Feedback deleted")
    }
    
    return (
        <div className="form mr-3 ml-3">
            <div id="accordian">
                <div class="card">
                    <div class="card-header accordian_header" id="headingOne">
                        <h2 class="self-align-left mb-0">
                            <a data-toggle="collapse" data-target="#ff" aria-expanded="true" aria-controls="collapseOne">
                                Feedback Form <ArrowRightIcon />
                            </a>
                        </h2>
                    </div>
                    <div class="collapse" id="ff" aria-labelledby="headingOne" data-parent="#accordian">
                        <div class="card-body">
                            <div class="d-none d-sm-block">
                                <form onSubmit={handleSubmit} className="form_fill">
                                    <div className="row">

                                        <div className="col-12 col-sm-5 form-group roll">
                                            <label>Roll No.</label>
                                            <input type="text" className="form-control" id="fname" placeholder="Enter Roll No." name="roll" onChange={(e)=>{setRoll(e.target.value)}} required />
                                        </div>
                                        <div className="col-12 col-sm-2 form-group">
                                            <label>About</label>
                                            <select name="cars" className="custom-select mb-3" onChange={(e)=>{setAbout(e.target.value)}} required>
                                                <option selected>Choose...</option>
                                                <option value="General">General</option>
                                                <option value="IT">IT</option>
                                                <option value="SS">Soft Skills</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-12 form-group">
                                            <label>Feedback</label>
                                            <textarea type="text" className="form-control" id="fb" placeholder="Feedback..." name="fb" onChange={(e)=>{setFeedback(e.target.value)}} required />
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>

            <div className="card fblist">
                <p>Feedbacks</p>
            </div>

            {fb_list.map((val)=>{
                return (
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <p className="card_name">{val.user} | {val.roll}</p>
                                <div className="del" onClick={()=>delete_item(val.fb)}><DeleteIcon /></div>
                            </div>
                    
                            <div className="card-text">
                                <p>{val.fb}</p>
                                <p className="card_abt">{val.about}</p>
                            </div>
                            
                        </div>
                    </div>
                    )
                })}
            <hr/>
        </div>
    )

}

export default Feedback
