import React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/core";
import customTheme from "./theme";

type Props = {
  children: React.ReactNode;
};

const ChakraUIProvider = ({ children }: Props): JSX.Element => (
  <ChakraProvider theme={customTheme}>
    <CSSReset />
    {children}
  </ChakraProvider>
);

export default ChakraUIProvider;
