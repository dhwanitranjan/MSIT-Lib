import React, {useState, useEffect } from 'react'
import Axios from 'axios';
import ads from './ads.jfif'
import './Vidlib.css'
import NightsStayIcon from '@material-ui/icons/NightsStay';



function ADS() {
    const [darkTheme, setDarkTheme] = React.useState(false)

    const[url, setURL] = useState('');
    const[duration, setDuration] = useState('');
    const[module, setModule] = useState('');
    const[description, setDescription] = useState('');

    const [adsList, setadsList] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/ads").then((response)=>{
            setadsList(response.data)
        })
      }, [])

    const handleSubmit = () =>{
        Axios.post('http://localhost:3001/ads/insert', {student: window.name, course:"ADS", url: url, duration: duration, module: module, description: description})
        alert("Video added")
        setadsList([...adsList, {course:"ADS" ,url: url, duration: duration, module: module, description: description}]);
        console.log(adsList)
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
                            <h5>Algorithms &amp; Data Structures<button className="dark" data-toggle="tooltip" title="Dark Mode" onClick={() => setDarkTheme(prevTheme => !prevTheme)}><NightsStayIcon /></button></h5>
                        </div>
                        <div className="card-body">
                            <p>The study of algorithms and data structures is fundamental to any computer- science curriculum, 
                                but it is not just for programmers and computer-science students. Everyone who uses a computer 
                                wants it to run faster or to solve larger problems. They have become essential tools in engineering; 
                                and from database systems to internet search engines, they have become essential parts of modern 
                                software systems. And these are but a few examples as the scope of computer applications continues 
                                to grow. This course covers the essential information that every serious programmer needs to know 
                                about algorithms and data structures, with emphasis on applications and scientific performance 
                                analysis of Java implementations which covers elementary data structures, sorting, and searching 
                                algorithms.</p>
                        </div>
                        <div className="card-title ml-3">
                            <h5>Course Learning Outcomes:</h5>
                        </div>
                        <div className="card-body">
                            <p>By the end of this course, students will be able to</p>
                            <ol>
                                <li>Describe Big O notation</li>
                                <li>Describe, Implement and Analyze Stacks and Queues</li>
                                <li>Implement and Analyze Selection, Insertion, Merge and Quick Sort</li>
                                <li>Describe and Implement Priority Queues, symbol Tables, Binary Search Trees and Hash Tables</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="card">
                        <img className="align-self-center w-100 des_img" src={ads} />
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
            {adsList.map((val)=>{
                return (
                    <div className="col-12 col-sm-4 mt-3">                        
                        <div className="card">
                            <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={val.Videourl} title="YouTube video" 
                                    allowfullScreen="allowfullScreen"></iframe>
                            </div>
                            <div className="card-body">
                                <div className="media">
                                    <img className="align-self-center mr-3" src={ads} alt="Card image cap" />
                                    <div className="media-body">
                                        <h5 className="mt-0">
                                            <span className="badge badge-dark course">{val.CourseID}</span> 
                                            <span className="badge badge-info course">{val.module}</span>
                                        </h5>
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

export default ADS
