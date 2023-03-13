// import React, { useEffect, useState } from 'react';
// import axios from 'axios';import Footer from '../Footer/Footer'
// import './ProfileDetails.css'

// export default function ProfileDetails() {

//   const current_ID = JSON.parse(sessionStorage.getItem('user_info'));
      
//   console.log(current_ID ,"llllllll")
//   const [dataUsers,setDataUsers] = useState([]);

//   useEffect(()=>{
//       getDataUsers();

//   },[]);
//   const getDataUsers = () => {
//     axios.get(`http://localhost/Book/BookApp/backend/user.php/users/${current_ID.id}`)
//     .then((respone)=>{
//       setDataUsers([respone.data])
//         // console.log(respone.data ,"bgbgbg");
//     })
// }
// console.log(dataUsers,"mkmkk");

//   return (
//     <div>
//     {dataUsers.map((data,index)=>{

// return <div key={index}>
    
//  <div className="header-and-books-container">

// {/*========== Search Section ==========*/}
//     {/* <div className="book-shelf-header-container">
//       <h1 className="header-heading ">All Books</h1>
      
//     </div> */}
// {/*====================================*/}

// {/*========== Book Item ==========*/}
// <form onSubmit={handleEditUserSubmit}>
//     <div className="all-books-container">
//     <div className="container">
//   <div className="row gutters">
    
//     <div className="col">
//       <div className="card h-100">
//         <div className="card-body">
//           {/* details */}
//           <div className="row gutters">
//             {/*  */}
//             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//               <h3 className="mb-2 text-primary personal mb-5">Personal Details   <s>ـــــ.</s></h3>
//             </div>
//             {/*  */}
    

//             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//               <div className="form-group">
//                 <label htmlFor="name" className="TextForDetail">Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="name"
//                   defaultValue={user.name} onChange={handleEditUser}
//                 />
//               </div>
//             </div>
//             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//               <div className="form-group">
//                 <label htmlFor="email" className="TextForDetail">Email</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="email"
//                   defaultValue={user.email} onChange={handleEditUser}
//                 />
//               </div>
//             </div>
//             <input type="file" style={{border:'none',borderRadius:'0'}}  placeholder="image"   name="file" id="file" onChange={(e) => setFile(e.target.files[0])}/>

//           </div>
//           {/* tow button */}
//           <div className="row gutters">
//             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//               <div className="text-right">
//                 <button
//                   type="button"
//                   id="submit"
//                   name="submit"
//                   className="btn btn-secondary"
//                 >
//                   Cancel
//                 </button>
//                 <button type="button"
//                   id="submit"
//                   name="submit"
//                   className="btn btn-primary botn">
//                   Update
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   </div>
// </div>
//     </div>
//     </form>

//     <Footer/>
//   </div>

//   </div>
//         })}
//     </div>
//   )
// }
