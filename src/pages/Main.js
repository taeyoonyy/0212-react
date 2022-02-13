import React from 'react';
import classes from './Main.module.css'

const main = () => {
  return (
    <React.Fragment>
      <div className={classes.header}> MAIN PAGE</div>
      <form className={classes.form}>
        <label>NAME</label>
        <input id="name" type="text"></input>
        <button>Login</button>
      </form>
    </React.Fragment>
  )
}

export default main;