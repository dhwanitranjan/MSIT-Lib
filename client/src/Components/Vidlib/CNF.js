import React, {useState, useEffect } from 'react'
import Axios from 'axios';
import cnf from './cnf.jfif'
import NightsStayIcon from '@material-ui/icons/NightsStay';



function CNF() {
    const [darkTheme, setDarkTheme] = React.useState(false)

    const[url, setURL] = useState('');
    const[duration, setDuration] = useState('');
    const[module, setModule] = useState('');
    const[description, setDescription] = useState('');

    const [cnfList, setcnfList] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/cnf").then((response)=>{
            setcnfList(response.data)
        })
      }, [])

    const handleSubmit = () =>{
        Axios.post('http://localhost:3001/cnf/insert', {student: window.name, course:"CN",url: url, duration: duration, module: module, description: description})
        alert("Video added")
        setcnfList([...cnfList, {course:"CN", url: url, duration: duration, module: module, description: description}]);
        console.log(cnfList)
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
                            <h5>Computer Network Foundations<button className="dark" data-toggle="tooltip" title="Dark Mode" onClick={() => setDarkTheme(prevTheme => !prevTheme)}><NightsStayIcon /></button></h5>
                        </div>
                        <div className="card-body">
                            <p>This course aims to introduce the fundamentals concepts of data communication 
                                and networking protocols, and routing technologies. Students will learn to 
                                design, install and manage networks and develop socket programming</p>
                        </div>
                        <div className="card-title ml-3">
                            <h5>Course Learning Outcomes:</h5>
                        </div>
                        <div className="card-body">
                            <p>On completion of the module, the students will be able to:</p>
                            <ol>
                                <li>Define key concepts of networking.</li>
                                <li>Identify and label networking equipment.</li>
                                <li>Compare the ISO-OSI and TCP/IP protocol stacks.</li>
                                <li>Build network using different transmission media such as fiber, twister pair, and wireless media.</li>
                                <li>Configure, verify, and troubleshoot IPv4 and IPv6 addressing and subnetting for a given network.</li>
                                <li>Describe key routing concepts and interpret a given routing table.</li>
                                <li>Use networking commands to determine network status.</li>
                                <li>Write programs using the socket API to test TCP and UDP protocols.</li>
                                <li>Construct a client/server network architecture for a given networking application</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="card">
                        <img className="align-self-center w-100 des_img" src={cnf} />
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
            {cnfList.map((val)=>{
                return (
                    <div className="col-12 col-sm-4 mt-3">                        
                        <div className="card">
                            <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={val.Videourl} title="YouTube video" allowfullScreen="allowfullScreen"></iframe>
                            </div>
                            <div className="card-body">
                                <div className="media">
                                    <img className="align-self-center mr-3" src={cnf} alt="Card image cap" />
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

export default CNF
