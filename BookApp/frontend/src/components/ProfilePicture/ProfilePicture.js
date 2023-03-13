import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfilePicture.css'
import { Link  } from "react-router-dom";

export default function ProfilePicture(props) {

  const current_ID = JSON.parse(sessionStorage.getItem('user_info'));
      
  console.log(current_ID ,"llllllll")
  const [dataUsers,setDataUsers] = useState([]);

  useEffect(()=>{
      getDataUsers();

  },[]);
  const getDataUsers = () => {
    axios.get(`http://localhost/Book/BookApp/backend/user.php/users/${current_ID.id}`)
    .then((respone)=>{
      setDataUsers([respone.data])
        // console.log(respone.data ,"bgbgbg");
    })
}
console.log(dataUsers,"mkmkk");

  return (
    <>
    {/* <h1>HELLO</h1> */}
{/* {console.log(dataUsers,"return")} */}
{dataUsers.map((data,index)=>{

return( <div key={index}>
 <div className="shelves-container">
 
  <div className="ProfileSec">
    {/* Profile picture card*/}
      {/* <h1 className="mb-2 mt-0 bookshelves-text ">Profile Picture</h1> */}
    
        {/* Profile picture image*/}
        <img
          className="img-account-profile rounded-circle mb-2"
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
          alt=""
        />
        {/* Profile picture help block*/}
        <div className="small font-italic text-muted mb-4">
       <h3>{data.name}</h3> 
        {/* <h3> {data.email} </h3>  */}
        
        </div>
        <button className="find-books-desktop-btn botn" type="submit"><Link to={`/profile/${data.id}/edit`}>edit</Link></button>

        {/* <a href={`/profile/${data.id}/edit`}><button className="find-books-desktop-btn botn" type="button">edit
        </button></a> */}
        {/* Profile picture upload button*/}
        {/* <button className="find-books-desktop-btn botn" type="button">
          Upload new image
        </button> */}
  </div>
    </div>

    
    {/* <h1 className="bookshelves-text ">Bookshelves</h1>
    <ul className="shelf-items-container">
      <li className="shelf-item">
        <button type="button" className="shelf-button active-shelf ">
          All
        </button>
      </li>
      <li className="shelf-item">
        <button type="button" className="shelf-button  ">
          Read
        </button>
      </li>
      <li className="shelf-item">
        <button type="button" className="shelf-button  ">
          Currently Reading
        </button>
      </li>
      <li className="shelf-item">
        <button type="button" className="shelf-button  ">
          Want to Read
        </button>
      </li>
    </ul> */}
      </div>)
        })}
    </>
  )
}
