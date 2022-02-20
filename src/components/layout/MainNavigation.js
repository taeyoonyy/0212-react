import { Fragment, useContext } from "react";
import classes from "./MainNavigation.module.css";
import UserContext from "../../store/user-context";

const MainNavigation = (props) => {
  console.log('aaa', UserContext)
  const userCtx = useContext(UserContext)
  return (
    <Fragment>
      <div className={classes.navi}>
        <p>Hello!! {userCtx.user}</p>
      </div>
    </Fragment>
  );
};

export default MainNavigation;
