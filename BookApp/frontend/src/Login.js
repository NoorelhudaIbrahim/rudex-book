import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { emailORUsername, login, password } from "./actions";
import './Relo.css';
import {useNavigate} from "react-router-dom";



// Define the Login component
function Login() {
  const nav=useNavigate();
  // Get the dispatch function from the useDispatch hook
  const dispatch=useDispatch();
    
    const errorLog=useSelector(state=>state.login);
    const Fun=(e)=>{
      console.log("good")
        e.preventDefault();
        dispatch(login());
        if (JSON.parse( sessionStorage.getItem("user_info"))){
        nav("/home");}
    }

  return (
    // Render the login form
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login"  onSubmit={
            (e)=>Fun(e)}>
            <div className="login__field">
              <i className="login__icon fas fa-user" />
              <input
                type="email"
                className="login__input"
                placeholder="Email"
                onChange={(e)=>dispatch(emailORUsername(e.target.value))}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                onChange={(e)=>dispatch(password(e.target.value))}
              />
            </div>
            <button className="button login__submit">
              <span className="button__text">Login</span>
              <i className="button__icon fas fa-chevron-right" />
            </button>
          </form>
          <p className="small fw-bold mt-2 pt-1 mb-0">
            Don't have an account?{' '}
            <a href="./Home.js" className="link-danger">
              Register
            </a>
          </p>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4" />
          <span className="screen__background__shape screen__background__shape3" />
          <span className="screen__background__shape screen__background__shape2" />
          <span className="screen__background__shape screen__background__shape1" />
        </div>
      </div>
    </div>
  );
}

// Export the Login component as the default export
export default Login;
