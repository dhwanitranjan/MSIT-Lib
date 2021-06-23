import React, {useState, useEffect } from 'react'
import Axios from 'axios';
import dbms from './dbms.png'
import './Vidlib.css'
import NightsStayIcon from '@material-ui/icons/NightsStay';


function DBMS() {
    const [darkTheme, setDarkTheme] = React.useState(false)

    const[url, setURL] = useState('');
    const[duration, setDuration] = useState('');
    const[module, setModule] = useState('');
    const[description, setDescription] = useState('');

    const [dbmsList, setdbmsList] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/dbms").then((response)=>{
            setdbmsList(response.data)
        })
      }, [])

    const handleSubmit = () =>{
        Axios.post('http://localhost:3001/dbms/insert', {student: window.name, course:"DBMS", url: url, duration: duration, module: module, description: description})
        alert("Video added")
        setdbmsList([...dbmsList, {course:"DBMS", url: url, duration: duration, module: module, description: description}]);
        console.log(dbmsList)
        window.location.reload(true);
    };


    return (
        <div className={darkTheme ? 'dark-theme' : 'light-theme'}>

        <div className="course_head">
            <div className="row">
                <div className="col-12 col-sm-8">
                    <div className="card">
                        <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
                        <div className="card-title ml-3">
                            <h5>Database Management Systems<button className="dark" data-toggle="tooltip" title="Dark Mode" onClick={() => setDarkTheme(prevTheme => !prevTheme)}><NightsStayIcon /></button></h5>
                        </div>
                        <div className="card-body">
                            <p>A database is an organized collection of data. A relational database, more restrictively, 
                                is a collection of schemas, tables, queries, reports, views, and other elements. Database 
                                designers typically organize the data to model aspects of reality in a way that supports 
                                processes requiring information, such as (for example) modelling the availability of rooms 
                                in hotels in a way that supports finding a hotel with vacancies.</p>
                            <p>A database-management system (DBMS) is a computer-software application that interacts with 
                                end-users, other applications, and the database itself to capture and analyze data. A 
                                general-purpose DBMS allows the definition, creation, querying, update, and administration 
                                of databases.</p>
                            <p>A database is not generally portable across different DBMSs, but different DBMSs can 
                                interoperate by using standards such as SQL and ODBC or JDBC to allow a single application 
                                to work with more than one DBMS.</p>
                        </div>
                        <div className="card-title ml-3">
                            <h5>Course Learning Outcomes:</h5>
                        </div>
                        <div className="card-body">
                            <p>By the end of this course, students will be able to</p>
                            <ol>
                                <li>Learn Relational Databases</li>
                                <li>Learn Relational Algebra</li>
                                <li>Learn SQL</li>
                                <li>Learn Relational Design Overview</li>
                                <li>Learn Fundamental dependencies</li>
                                <li>Learn Normal Forms</li>
                                <li>Learn Transactions</li>
                                <li>Learn Indexes</li>
                                <li>Learn Constraints</li>
                                <li>Learn Triggers</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="card">
                        <img className="align-self-center w-100 des_img" src={dbms} />
                    </div>
                    <div className="button">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Upload</button>
                    </div>
                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Upload your video</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                
                            <form>
                                <div className="row form-group">
                                    <div className="col-12 col-sm-12">
                                        <input type="text" className="form-control" id="uname" placeholder="Enter Video URL" name="url" onChange={(e)=>{setURL(e.target.value)}} required />
                                    </div>
                                    <div className="col-12 col-sm-12">
                                        <p className="urlAlert">*Enter <strong>Embaded</strong> URL.</p>
                                    </div>                                    

                                    <div className="col-12 col-sm-6 form-group">
                                        <input type="text" className="form-control" id="fname" placeholder="Video length (mins)" name="min" onChange={(e)=>{setDuration(e.target.value)}} required />
                                    </div>

                                    <div className="col-12 col-sm-6 form-group">
                                        <input type="number" className="form-control" id="fname" placeholder="Module" name="min" onChange={(e)=>{setModule(e.target.value)}} required />
                                    </div>

                                    <div className="col-12">
                                        <textarea type="text" className="form-control" id="fb" placeholder="Description" name="des" onChange={(e)=>{setDescription(e.target.value)}} required />
                                    </div>
                                </div>
                            </form>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary" onClick={handleSubmit} data-dismiss="modal">Upload</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
            {dbmsList.map((val)=>{
                return (
                    <div className="col-12 col-sm-4 mt-3">                        
                        <div className="card">
                        <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={val.Videourl} title="YouTube video" allowfullScreen="allowfullScreen"></iframe>
                            </div>
                            <div className="card-body">
                                <div className="media">
                                    <img className="align-self-center mr-3" src={dbms} alt="Card image cap" />
                                    <div className="media-body">
                                        <h5 className="mt-0"><span className="badge badge-dark course">{val.CourseID}</span> <span className="badge badge-info course">{val.module}</span></h5>
                                        <p className="of">{val.Description}</p>
                                        <a href={val.pdf} target="_blank">PDF</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}

export default DBMS
