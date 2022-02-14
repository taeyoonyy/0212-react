import { Fragment, useContext } from "react"
import MainNavigation from "../components/layout/MainNavigation";
import UserContext from "../store/user-context";


const Main = () => {
  const userCtx = useContext(UserContext);
  console.log(userCtx)

  return (
    <Fragment>
      <MainNavigation user={userCtx.user}/>
      <h1>MAIN PAGE</h1>
    </Fragment>
  )
}

export default Main;
