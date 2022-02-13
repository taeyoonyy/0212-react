import React from "react";
import classes from "./Login.module.css";
import { useRef } from "react";

const Login = () => {
  const nameInputRef = useRef();

  const loginHandler = (event) => {
    event.preventDefault();
    console.log("CLICK", nameInputRef.current.value);
  };

  return (
    <React.Fragment>
      <div className={classes.login}>
        <div className={classes.header}> LOGIN PAGE</div>
        <form className={classes.form} onSubmit={loginHandler}>
          <label>NAME</label>
          <input id="name" type="text" ref={nameInputRef}></input>
          <button>Login</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;