import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Auth from "./pages/Auth";
import Buyer from "./pages/Buyer";
import Seller from "./pages/Seller";

function checkLoginStatus(): boolean {
  return false;
}

function App(): JSX.Element {
  const [isLogin, setLogin] = useState<boolean>();

  useEffect(() => {
    const status = checkLoginStatus();
    setLogin(status);
  }, []);

  if (isLogin === undefined) {
    return <h1>Loading..</h1>;
  }

  return (
    <Router>
      <Switch>
        {!isLogin && <Route exact path="/auth" component={Auth} />}
        {!isLogin && <Redirect to="/auth" />}
        <Route path="/dashboard" component={Seller} />
        <Route path="/" component={Buyer} />
      </Switch>
    </Router>
  );
}

export default App;
