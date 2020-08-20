import React from "react";

type Props = {
  setRegisterScreen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({ setRegisterScreen }: Props): JSX.Element => {
  return (
    <div>
      <h1>Login Screen</h1>
      <button type="button" onClick={() => setRegisterScreen(true)}>
        go to register
      </button>
    </div>
  );
};

export default Login;
