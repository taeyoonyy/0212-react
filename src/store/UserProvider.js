import { useReducer } from "react";
import UserContext from "./user-context";

const defaultUserState = {
  user: ""
};

const userReducer = (state, action) => {
  if (action.type === "SET") {
    console.log("here", action)
    return {
      user: action.user
    }
  }
}

const UserProvider = (props) => {
  const [userState, dispatchUserAction] = useReducer(
    userReducer,
    defaultUserState
  );

  const setUserHandler = (user) => {
    dispatchUserAction({type: "SET", user: user})
  }

  const userContext = {
    user: userState.user,
    setUser: setUserHandler
  }

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider;