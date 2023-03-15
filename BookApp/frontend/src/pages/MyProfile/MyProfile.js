
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails'
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture'
import './MyProfile.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MyProfile() {
  // const current_ID = JSON.parse(sessionStorage.getItem('user_id'));
  // const current_ID = 1;
  const current_ID = JSON.parse(sessionStorage.getItem('user_info'));

  console.log(current_ID ,"rrrrrrrrrrrrrr")
  const [dataUsers,setDataUsers] = useState([]);

  useEffect(()=>{
      getDataUsers();
     
  },[]);
  const getDataUsers = () => {
    axios.get(`http://localhost/Book/BookApp/backend/user.php/users/${current_ID}`)
    .then((respone)=>{
      setDataUsers([respone.data])
        console.log(respone.data ,"bgbgbg");

    })
    console.log(dataUsers ,"bbbb");

}
  return (

    <>
      
<div className="bookshelves-container">
   <ProfilePicture/>
  <ProfileDetails/>
</div>



    </>
  )
}
