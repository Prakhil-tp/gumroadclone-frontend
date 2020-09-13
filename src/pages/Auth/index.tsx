import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [isRegisterScreen, setRegisterScreen] = useState(false);
  return isRegisterScreen ? (
    <Register setRegisterScreen={setRegisterScreen} />
  ) : (
    <Login setRegisterScreen={setRegisterScreen} />
  );
};

export default Auth;
