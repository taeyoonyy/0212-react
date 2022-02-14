import { Fragment, useContext, useState } from "react"
import MainNavigation from "../components/layout/MainNavigation";
import UserContext from "../store/user-context";
import Modal from "../components/ui/Modal"
import classes from "./Main.module.css"


const Main = () => {
  const userCtx = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const openModalHandler = () => {
    setModalOpen(true);
  }

  const closeMoodalHandler = () => {
    setModalOpen(false);
  }

  const writeTodoListHandler = (data) => {
    setTodoList((prevData)=> {
      return [...prevData, data]
    })
    setModalOpen(false);
  }

  const writtenTodoList = todoList.map((item) => (
    <li>{item}</li>
  ))


  return (
    <Fragment>
      <MainNavigation user={userCtx.user}/>
      <h1>MAIN PAGE</h1>
      <button onClick={openModalHandler}>Add Data</button>
      <Modal open={modalOpen} close={closeMoodalHandler} write={writeTodoListHandler} header="WRITE TODO LIST"/>
      <ul className={classes.todos}>
        {writtenTodoList}
      </ul>
    </Fragment>
  )
}

export default Main;
