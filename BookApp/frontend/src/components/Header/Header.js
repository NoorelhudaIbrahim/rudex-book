import React from 'react'
import './Header.css'

import { useNavigate,Link  } from "react-router-dom";




export default function Header() {
  return (
    
    <>
    
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <a href="/">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/gottumukkala/image/upload/v1670324059/Book%20Hub%20Mini%20Project/Group_7731logo_fegx8c.png"
              alt="website logo"
            />
          </a>
          <button type="button" className="nav-mobile-btn">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              color="#000000"
              height={25}
              width={25}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(0, 0, 0)" }}
            >
              <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
            </svg>
          </button>
        </div>
        <div className="nav-bar-large-container">
          <a href="/">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/gottumukkala/image/upload/v1670324059/Book%20Hub%20Mini%20Project/Group_7731logo_fegx8c.png"
              alt="website logo"
            />
          </a>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              {/* <a className="nav-link " href="/"> */}
              <Link to="/home">Home</Link>   
              {/* </a> */}
            </li>
            {/* <li className="nav-menu-item">
              <a aria-current="page" className="nav-link  active" href="/shelf">
                Register
              </a>
            </li> */}
            {/* <li className="nav-menu-item">
              <a className="nav-link " href="/favorites">
                Login
              </a>
            </li> */}
            {/* =======profile========= */}
            {/* <!-- Avatar --> */}
            <li className="nav-item dropdown navbar-nav ms-2">
  <a
    className="nav-link dropdown-toggle d-flex align-items-center"
    href="#"
    id="navbarDropdownMenuLink"
    role="button"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
      className="rounded-circle"
      height={30}
      alt="Portrait of a Woman"
      loading="lazy"
    />
  </a>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    {/* <li onClick={(e) => handleProfile(e)}> */}
    <li><Link to="/profile">My profile</Link></li>
      {/* <a className="dropdown-item" href="/profile"> */}
      {/* </a> */}
    {/* </li> */}
    <li>
      <a className="dropdown-item" href="/login">
        Logout
      </a>
    </li>
  </ul>
</li>

         
            {/* ------------------- */}
          </ul>
          {/* <button type="button" className="logout-btn">
            Logout
          </button> */}

          {/* moon button */}
          {/* <button type="button" className="theme-button">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 20 20"
              color="#64748b"
              height={25}
              width={25}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(100, 116, 139)" }}
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button> */}
        </div>
      </div>
    </nav>

    
    
    </>
    
    
  )
}
