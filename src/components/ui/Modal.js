import React from "react";
import classes from "./Modal.module.css";
import { useRef } from "react";

const Modal = (props) => {
  const openModalClasses = `${classes.openModal} ${classes.modal}`;
  const todoListRef = useRef();
  const writeHandler = () => {
    console.log(todoListRef.current.value)
    props.write(todoListRef.current.value);
  }

  return (
    <div className={props.open ? openModalClasses : classes.modal}>
      {props.open ? (
        <section>
          <header>{props.header}</header>
          <main>
            <input ref={todoListRef}></input>
          </main>
          <footer>
            <button className={classes.close} onClick={writeHandler}>
              Write
            </button>
            <button className={classes.close} onClick={props.close}>
              Close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
