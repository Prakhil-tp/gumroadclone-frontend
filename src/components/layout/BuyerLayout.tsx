import React from "react";
import { Flex } from "@chakra-ui/core";
import Header from "../sections/BuyerHeader";
import Footer from "../sections/Footer";

const BuyerLayout: React.FC = ({ children }) => (
  <Flex direction="column" align="center" maxW={{ xl: "1980px" }} m="0 auto">
    <Header />
    {children}
    <Footer />
  </Flex>
);
export default BuyerLayout;
