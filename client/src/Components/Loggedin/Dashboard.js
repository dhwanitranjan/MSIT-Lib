import React, {useState, useEffect } from 'react'
import Axios from 'axios';
import msitimg from './msitimg.jfif'


function Dashboard() {
    const [searchTerm, setsearch] = useState('')
    const [eList, seteList] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/search").then((response)=>{
            seteList(response.data)
        })
      }, [])


    return (
        <div>
            <form>
                <div className="form-group row mt-4 search">
                    <div className="col-sm"></div>
                    <input type="text" className="col-10 col-sm-6 form-control" placeholder="Search" onChange={(e)=> setsearch(e.target.value)} />
                    <div className="col-sm"></div>
                </div>
            </form>
            <div className="row mr-1 ml-1">
                {eList.filter((val)=>{
                    if (searchTerm == ""){
                        return val
                    } else if (val.Description.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                }).map((val)=>{
                    return (
                        <div className="col-12 col-sm-4 mt-3">                        
                            <div className="card">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src={val.Videourl} title="YouTube video" 
                                        allowfullScreen="allowfullScreen"></iframe>
                                </div>
                                <div className="card-body">
                                    <div className="media">
                                        <img className="align-self-center mr-3" id="Cid" src={msitimg} alt="Card image cap" />
                                        <div className="media-body">
                                            <h5 className="mt-0">
                                                <span className="badge badge-dark course">{val.CourseID}</span> 
                                                <span className="badge badge-info course">{val.module}</span>
                                            </h5>
                                            <p className="of">{val.Description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Dashboard