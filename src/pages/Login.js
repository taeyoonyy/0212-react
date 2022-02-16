import React, { useContext, useState } from "react";
import classes from "./Login.module.css";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../store/user-context";
import ErrorModal from "../components/ui/ErrorModal"

const Login = () => {
  const nameInputRef = useRef();
  const history = useHistory();
  const userCtx = useContext(UserContext);
  const [error, setError] = useState();

  const loginHandler = (event) => {
    event.preventDefault();
    console.log("CLICK", nameInputRef.current.value);
    if (!!nameInputRef.current.value) {
      userCtx.setUser(nameInputRef.current.value)
      history.push('/main')
    } else {
      setError({
        title: "Error",
        message: "Please enter the Name"
      });
    }
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <React.Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
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