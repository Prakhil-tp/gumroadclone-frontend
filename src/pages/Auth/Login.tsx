import React from "react";
import { Button } from "@chakra-ui/core";

type Props = {
  setRegisterScreen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({ setRegisterScreen }: Props): JSX.Element => {
  return (
    <div>
      <h1 color="primary.500">Login Screen</h1>
      <Button
        fontWeight="light"
        colorScheme="primary"
        onClick={() => setRegisterScreen(true)}
      >
        go to register
      </Button>
    </div>
  );
};

export default Login;
