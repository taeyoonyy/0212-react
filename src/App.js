import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Join from "./pages/Join";
import UserProvider from "./store/UserProvider";

function App() {
  return (
    <UserProvider>
      <Switch>
        <Route path="/" exact>
          <Redirect to="login" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/join">
          <Join />
        </Route>
      </Switch>
    </UserProvider>
  );
}

export default App;
