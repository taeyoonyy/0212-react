import React, { useContext } from "react";
import classes from "./Login.module.css";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

import UserContext from "../store/user-context";

const Login = () => {
  const nameInputRef = useRef();
  const history = useHistory();

  const userCtx = useContext(UserContext);

  const loginHandler = (event) => {
    event.preventDefault();
    console.log("CLICK", nameInputRef.current.value);
    if (!!nameInputRef.current.value) {
      userCtx.setUser(nameInputRef.current.value)
      history.push('/main')
    }
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