import { Fragment, useContext, useState } from "react";
import MainNavigation from "../components/layout/MainNavigation";
import UserContext from "../store/user-context";
import Modal from "../components/ui/Modal";
import classes from "./Main.module.css";
import Button from "../components/ui/Button";

const Main = () => {
  // const userCtx = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const openModalHandler = () => {
    setModalOpen(true);
  };

  const closeMoodalHandler = () => {
    setModalOpen(false);
  };

  const writeTodoListHandler = (data) => {
    setTodoList((prevData) => {
      return [...prevData, { data: data, id: Math.random().toString() }];
    });
    setModalOpen(false);
  };

  const writtenTodoList = todoList.map((item) => (
    <li key={item.id}>
      {item.data}
      <button>Done</button>
    </li>
  ));

  return (
    <Fragment>
      {/* <MainNavigation user={userCtx.user} /> */}
      <MainNavigation />
      <h1>MAIN PAGE</h1>
      <Button onClick={openModalHandler}>Add Data</Button>
      <Modal
        open={modalOpen}
        close={closeMoodalHandler}
        write={writeTodoListHandler}
        header="WRITE TODO LIST"
      />
      <ul className={classes.todos}>{writtenTodoList}</ul>
    </Fragment>
  );
};

export default Main;
