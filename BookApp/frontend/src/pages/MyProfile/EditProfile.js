

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';import Footer from '../../components/Footer/Footer'
import './ProfileDetails.css'
import {  Link  } from "react-router-dom";
// import {  useParams } from 'react-router-dom';

export default function EditProfile() {
    const current_ID = JSON.parse(sessionStorage.getItem('user_info'));

    const {id} = useParams();
    const navigate = useNavigate();
    const [inputs , setInputs] = useState("");
    const [file, setFile] = useState(null);
    const [user , setUser] = useState([]);

    
    useEffect(()=>{
        getUser();
    } , [])

    function getUser(){
        // http://localhost/Book/BookApp/backend/user.php/${id}
        axios.get(`http://localhost/Book/BookApp/backend/user.php/users/${current_ID.id}`)
        .then(response => {
            console.log(response.data);
            setUser([response.data]);
        })
    }
    console.log(user ,"juju");

    const handleEditUser = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs( {...inputs , [name]: value})
      }
  
      const handleEditUserSubmit  = async (e) => {
        e.preventDefault();
    
        const formEditData = new FormData();
  
        formEditData.append("name", inputs['name']);
        formEditData.append("email", inputs['email']);
        formEditData.append("file", file);

        try {
          const response = await axios.post(
            `http://localhost/Book/BookApp/backend/editProfile.php/${current_ID.id}`, formEditData
          );
          console.log(response.data,"kiki");
          console.log(formEditData,"aaa");

        //   navigate(`/profile`);
        //   window.location.assign(`/profile/${id}`);
        } catch (error) {
          console.error(error);
        }
      };


  return (
    <div>
    {user.map((data,index)=>{

return <div key={index}>
    
 <div className="header-and-books-container">

{/*========== Search Section ==========*/}
    {/* <div className="book-shelf-header-container">
      <h1 className="header-heading ">All Books</h1>
      
    </div> */}
{/*====================================*/}

{/*========== Book Item ==========*/}

    <div className="all-books-container">
    <div className="container">
  <div className="row gutters">
    
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          {/* details */}
          <form onSubmit={handleEditUserSubmit}>
          <div className="row gutters">
            {/*  */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h3 className="mb-2 text-primary personal mb-5">Personal Details   <s>ـــــ.</s></h3>
            </div>
            {/*  */}
       

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="form-group">
                <label htmlFor="name" className="TextForDetail">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  defaultValue={data.name} onChange={handleEditUser}
                />
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="form-group">
                <label htmlFor="email" className="TextForDetail">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  defaultValue={data.email} onChange={handleEditUser}
                />
              </div>
            </div>
            <input type="file" style={{border:'none',borderRadius:'0'}}  placeholder="image"   name="file" id="file" onChange={(e) => setFile(e.target.files[0])}/>

          </div>
          {/* tow button */}
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="text-right">
                <button
                  type="submit"
                  id="submit"
                  name="submit"
                  className="btn btn-secondary"
                >
                    <Link to={`/profile`}> Cancel</Link>
                
                </button>
                <button type="submit"
                  id="submit"
                  name="submit"
                  className="btn btn-primary botn">
                  Update
                </button>
              </div>
            </div>
          </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</div>
    </div>
   

    <Footer/>
  </div>

  </div>
        })}
    </div>
  )
}
