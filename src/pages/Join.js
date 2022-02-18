import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import classes from './Join.module.css'
import Button from '../components/ui/Button'

const Join = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(null);

  const joinHandler = (event) => {
    event.preventDefault();
    history.push("/login");
  };

  const changeEmailHandler = (event) => {
    console.log(event);
    setEmail(event.target.value);
  };

  const validateEmailHandler = (event) => {
    setEmailIsValid(event.target.value.includes("@"));
  };

  return (
    <Fragment>
      <h1>JOIN PAGE</h1>
      <form onSubmit={joinHandler}>
        <div className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}>
          <label>E-mail</label>
          <input
            value={email}
            onChange={changeEmailHandler}
            onBlur={validateEmailHandler}
          ></input>
          <Button type="submit">Join</Button>
        </div>
      </form>
    </Fragment>
  );
};

export default Join;
