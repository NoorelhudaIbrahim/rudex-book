import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { name, email, password, confirmPass, signup } from "./actions";
import "./Relo.css";

function Signup() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.register);

  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form
              className="login"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(signup());
              }}
            >
              <div className="login__field">
                <i className="login__icon fas fa-user" />
                <input
                  type="text"
                  className="login__input"
                  placeholder="name"
                  onChange={(e) => dispatch(name(e.target.value))}
                />
                <span>{error.nameError}</span>
              </div>

              <div className="login__field">
                <i className="login__icon fas fa-user" />
                <input
                  type="email"
                  className="login__input"
                  placeholder="email"
                  onChange={(e) => dispatch(email(e.target.value))}
                />
              </div>
              <span>{error.emailError}</span>

              <div className="login__field">
                <i className="login__icon fas fa-lock" />
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  onChange={(e) => dispatch(password(e.target.value))}
                />
              </div>
              <span>{error.passError}</span>

              <div className="login__field">
                <i className="login__icon fas fa-lock" />
                <input
                  type="password"
                  className="login__input"
                  placeholder="Confirm Password"
                  onChange={(e) => dispatch(confirmPass(e.target.value))}
                />
              </div>
              <span>{error.confirmPassError}</span>
              {error.nameError ||
              error.emailError ||
              error.passError ||
              error.confirmPassError ? (
                <button className="button login__submit" disabled>
                  <span className="button__text">Register</span>
                  <i className="button__icon fas fa-chevron-right" />
                </button>
              ) : (
                <button className="button login__submit">
                  <span className="button__text">Register</span>
                  <i className="button__icon fas fa-chevron-right" />
                </button>
              )}
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4" />
            <span className="screen__background__shape screen__background__shape3" />
            <span className="screen__background__shape screen__background__shape2" />
            <span className="screen__background__shape screen__background__shape1" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
