import React, {useState, useEffect } from 'react'
import Axios from 'axios';
import ids from './ids.png'
import NightsStayIcon from '@material-ui/icons/NightsStay';


function IDS() {
    const [darkTheme, setDarkTheme] = React.useState(false)

    const[url, setURL] = useState('');
    const[duration, setDuration] = useState('');
    const[module, setModule] = useState('');
    const[description, setDescription] = useState('');

    const [idsList, setidsList] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/ids").then((response)=>{
            setidsList(response.data)
        })
      }, [])

    const handleSubmit = () =>{
        Axios.post('http://localhost:3001/ids/insert', {student: window.name, course:"ids", url: url, duration: duration, module: module, description: description})
        alert("Video added")
        setidsList([...idsList, {course:"ids", url: url, duration: duration, module: module, description: description}]);
        console.log(idsList)
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
                            <h5>Introduction to Data Science<button className="dark" data-toggle="tooltip" title="Dark Mode" onClick={() => setDarkTheme(prevTheme => !prevTheme)}><NightsStayIcon /></button></h5>
                        </div>
                        <div className="card-body">
                            <p>Data science is the study and practice of how we can extract insight and knowledge 
                                from large amounts of data. It is a developing field, currently attracting 
                                substantial demand from both academia and industry.</p>
                            <p>This course provides a practical introduction to a data science analysis, including 
                                data collection and processing, data visualization and presentation, statistical 
                                model building using machine learning for scaling these methods.</p>
                        </div>
                        <div className="card-title ml-3">
                            <h5>Course Learning Outcomes</h5>
                        </div>
                        <div className="card-body">
                            <p>After successful completion of this course, you will be able to:</p>
                            <ol>
                                <li>Understand the full data science pipeline, and be familiar with programming tools to accomplish the different portions</li>
                                <li>Use of Python and its modules to scrape, clean, and process data</li>
                                <li>Use of data management techniques to store data</li>
                                <li>Use of statistical methods and visualization to quickly explore data</li>
                                <li>Apply statistics and computational analysis to analyze the data</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="card">
                        <img className="align-self-center w-100 des_img" src={ids} />
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
            {idsList.map((val)=>{
                return (
                    <div className="col-12 col-sm-4 mt-3">                        
                        <div className="card">
                            <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={val.Videourl} title="YouTube video" allowfullScreen="allowfullScreen"></iframe>
                            </div>
                            <div className="card-body">
                                <div className="media">
                                    <img className="align-self-center mr-3" src={ids} alt="Card image cap" />
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

export default IDS
