import React, {useState, useEffect } from 'react'
import Axios from 'axios';
import psc from './psc.jfif'
import NightsStayIcon from '@material-ui/icons/NightsStay';


function PSC() {
    const [darkTheme, setDarkTheme] = React.useState(false)

    const[url, setURL] = useState('');
    const[duration, setDuration] = useState('');
    const[module, setModule] = useState('');
    const[description, setDescription] = useState('');

    const [pscList, setpscList] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/psc").then((response)=>{
            setpscList(response.data)
        })
      }, [])

    const handleSubmit = () =>{
        Axios.post('http://localhost:3001/psc/insert', {student: window.name, course:"PSC", url: url, duration: duration, module: module, description: description})
        alert("Video added")
        setpscList([...pscList, {course:"PSC", url: url, duration: duration, module: module, description: description}]);
        console.log(pscList)
    };


    return (
        <div className={darkTheme ? 'dark-theme' : 'light-theme'}>

        <div className="course_head">
            <div className="row">
                <div className="col-12 col-sm-8">
                    <div className="card">
                    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
                        <div className="card-title ml-3">
                            <h5>Principles of Software Construction<button className="dark" data-toggle="tooltip" title="Dark Mode" onClick={() => setDarkTheme(prevTheme => !prevTheme)}><NightsStayIcon /></button></h5>                      
                        </div>
                        <div className="card-body">
                            <p>Software engineers today are less likely to design data structures and algorithms 
                                from scratch and more likely to build systems from library and framework components. 
                                In this course, students engage with concepts related to the construction of software 
                                systems at scale, building on their understanding of the basic building blocks of 
                                data structures, algorithms, program structures, and computer structures. The course 
                                covers technical topics in four areas:</p>
                            <ol>
                                <li>concepts of design for complex systems</li>
                                <li>object oriented programming</li>
                                <li>techniques for robustness, including testing and static and dynamic analysis for programs</li>
                                <li>concurrent software</li>
                            </ol>
                            <p>Students will gain concrete experience designing and building medium-sized systems. 
                                This course substantially improves its students' ability to apply general computer 
                                science knowledge to real-world problems using real-world tools and techniques.</p>
                        </div>
                        <div className="card-title ml-3">
                            <h5>Course Learning Outcomes:</h5>
                        </div>
                        <div className="card-body">
                            <p>By the end of this course, students will be able to</p>
                            <ol>
                                <li>Be comfortable with object-oriented concepts and with programming in the Java language</li>
                                <li>Have experience designing medium-scale systems with patterns</li>
                                <li>Have experience testing and analyzing software</li>
                                <li>Understand principles of concurrency and be able to build concurrent software</li>
                            </ol>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="card">
                        <img className="align-self-center w-100 des_img" src={psc} />
                    </div>
                    <div className="button">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Upload</button>
                    </div>
                    <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Upload your video</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                
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
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" onClick={handleSubmit} data-dismiss="modal">Upload</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
            {pscList.map((val)=>{
                return (
                    <div className="col-12 col-sm-4 mt-3">                        
                        <div className="card">
                        <div className={darkTheme ? 'dark-theme' : 'light-theme'}>

                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={val.Videourl} title="YouTube video" allowfullScreen="allowfullScreen"></iframe>
                            </div>
                            <div className="card-body">
                                <div className="media">
                                    <img className="align-self-center mr-3" src={psc} alt="Card image cap" />
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

export default PSC
