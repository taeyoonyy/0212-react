import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useState, useReducer } from "react";
import classes from "./Join.module.css";
import Button from "../components/ui/Button";
import ErrorModal from "../components/ui/ErrorModal";

const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    return { value: state.val, isValid: action.val.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Join = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(null);
  const [error, setError] = useState(false);

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const joinHandler = (event) => {
    event.preventDefault();
    if (emailIsValid && passwordState.isValid) {
      history.push("/login");
    } else {
      setError(true);
    }
  };

  const changeEmailHandler = (event) => {
    console.log(event);
    setEmail(event.target.value);
  };

  const validateEmailHandler = (event) => {
    setEmailIsValid(event.target.value.includes("@"));
  };

  const errorModalHandler = () => {
    setError(false);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value });
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={"ERROR"}
          message={"Please check input data"}
          onConfirm={errorModalHandler}
        ></ErrorModal>
      )}
      <h1>JOIN PAGE</h1>
      <form onSubmit={joinHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label>E-mail</label>
          <input
            value={email}
            onChange={changeEmailHandler}
            onBlur={validateEmailHandler}
          ></input>
        </div>
        <div className={`${classes.control}`}>
          <label>Password</label>
          <input
            value={passwordState.value}
            onChange={passwordChangeHandler}
          ></input>
        </div>
        <Button type="submit">Join</Button>
      </form>
    </Fragment>
  );
};

export default Join;
