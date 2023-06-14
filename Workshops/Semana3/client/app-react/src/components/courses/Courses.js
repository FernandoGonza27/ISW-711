import useFetch from "../hooks/useFetch";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Courses = () => {
    const navigate = useNavigate();
    const { data, loading, error } = useFetch("http://localhost:3001/api/courses");
    
    const deleteCourse = (e,id)=>{
        e.preventDefault();
        console.log(id);        
        axios.delete(`http://localhost:3001/api/courses/${id}`)
        .then(res =>{
            alert(res.data.message);
            
        })
        .catch( err =>{
            alert(err.message)
        })
        
        
        
    }
    const courseDetaills = data.map((iteam, index) => {

        return (
            <tr key={index}>
                <td>{iteam._id}</td>
                <td>{iteam.name}</td>
                <td>{iteam.credits}</td>
                <td>{iteam.teacher}</td>
                <td><Link to={`/update/${iteam._id}`}><button>Edit</button></Link></td>
                <td><button onClick={e =>{deleteCourse(e,iteam._id)}}>Delete</button></td>                
            </tr>
        );
    })
    return (
        <div className="App-header">
            {loading ? ("Loading please wait") : (
                <div>
                    <div>
                        <h2>Table of Courses</h2>
                        <Link to="/create"><button>Add Course</button></Link>
                    </div>
                    <div>
                        <table  id="courses">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Credits</th>
                                    <th>Teacher</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            {courseDetaills}
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            )}
        </div>
    );

}


export default Courses;