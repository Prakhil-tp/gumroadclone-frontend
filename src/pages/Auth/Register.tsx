import React from "react";

type Props = {
  setRegisterScreen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Register = ({ setRegisterScreen }: Props): JSX.Element => {
  return (
    <div>
      <h1>Register screen</h1>
      <button type="button" onClick={() => setRegisterScreen(false)}>
        goto login
      </button>
    </div>
  );
};

export default Register;
