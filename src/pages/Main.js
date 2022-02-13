import React from "react";
import classes from "./Main.module.css";
import { useRef } from "react";

const Main = () => {
  const nameInputRef = useRef();

  const loginHandler = (event) => {
    event.preventDefault();
    console.log("CLICK", nameInputRef.current.value);
  };

  return (
    <React.Fragment>
      <div className={classes.main}>
        <div className={classes.header}> MAIN PAGE</div>
        <form className={classes.form} onSubmit={loginHandler}>
          <label>NAME</label>
          <input id="name" type="text" ref={nameInputRef}></input>
          <button>Login</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Main;
