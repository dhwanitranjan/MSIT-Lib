import React, {useState, useEffect } from 'react'
import Axios from 'axios';
import Cspp from './Cspp.jfif'
import './Vidlib.css'
import NightsStayIcon from '@material-ui/icons/NightsStay';

function CSPP() {
    const [darkTheme, setDarkTheme] = React.useState(false)

    const[url, setURL] = useState('');
    const[duration, setDuration] = useState('');
    const[module, setModule] = useState('');
    const[description, setDescription] = useState('');

    const [CsppList, setCsppList] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/cspp").then((response)=>{
            setCsppList(response.data)
        })
      }, [])

    const handleSubmit = () =>{
        Axios.post('http://localhost:3001/cspp/insert', {student: window.name, course:"CSPP", url: url, duration: duration, module: module, description: description})
        alert("Video added")
        setCsppList([...CsppList, {course:"CSPP", url: url, duration: duration, module: module, description: description}]);
        console.log(CsppList)
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
                            <h5>Computer Science Principles and Programming<button className="dark" data-toggle="tooltip" title="Dark Mode" onClick={() => setDarkTheme(prevTheme => !prevTheme)}><NightsStayIcon /></button></h5>
                        </div>
                        <div className="card-body">
                            <p>A technical introduction to the fundamentals of programming with an emphasis on 
                                producing clear, robust, and reasonably efficient code using top-down design, informal 
                                analysis, and effective testing and debugging. Starting from first principles, we will 
                                cover a large subset of the Python programming language, including its standard 
                                libraries and programming paradigms.</p>
                        </div>
                        <div className="card-title ml-3">
                            <h5>Course Learning Outcomes:</h5>
                        </div>
                        <div className="card-body">
                            <p>By the end of this course, students will be able to</p>
                            <ol>
                                <li>Develop computational problem-solving skills using Python as a tool to be applied to new problems, especially in the student's home academic discipline</li>
                                <li>Produce clear, robust, and efficient code in Python by
                                    <ul>
                                        <li>employing modular, top-down design</li>
                                        <li>using sequential, conditional, and loop statements where appropriate</li>
                                        <li>eusing strings, lists, tuples, and dictionaries where appropriate</li>
                                        <li>using objects and classes where appropriate</li>
                                        <li>integrating recursive functions where appropriateproactively designing and writing test cases to effectively test and debug code</li>
                                    </ul>
                                </li>
                                <li>Develop an effective programming style based on established standards, practices, and guidelines</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="card">
                        <img className="align-self-center w-100 des_img" src={Cspp} />
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
            {CsppList.map((val)=>{
                return (
                    <div className="col-12 col-sm-4 mt-3">                        
                        <div className="card">
                            <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={val.Videourl} title="YouTube video" allowfullScreen="allowfullScreen"></iframe>
                            </div>
                            <div className="card-body">
                                <div className="media">
                                    <img className="align-self-center mr-3" src={Cspp} alt="Card image cap" />
                                    <div className="media-body">
                                        <h5 className="mt-0"><span className="badge badge-dark course">{val.CourseID}</span> <span className="badge badge-info course">{val.module}</span></h5>
                                        <p className="of">{val.Description}</p>
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

export default CSPP