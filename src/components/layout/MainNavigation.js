import { Fragment } from "react/cjs/react.production.min";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <Fragment>
      <div className={classes.navi}>
        <p>Hello {props.user} !!</p>
      </div>
    </Fragment>
  );
};

export default MainNavigation;
