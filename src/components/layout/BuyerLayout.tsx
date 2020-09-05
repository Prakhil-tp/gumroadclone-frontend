import React, { useState } from "react";
import { Flex, Box } from "@chakra-ui/core";
import { BuyerScreens } from "types";
import Header from "../sections/BuyerHeader";
import Footer from "../sections/Footer";

type Props = {
  children: JSX.Element[];
};

const BuyerLayout: React.FC<Props> = ({ children }) => {
  const [currentView, setCurrentView] = useState<BuyerScreens>("Discover");
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1980px" }} m="0 auto">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <Box p="100px 50px" w="100%">
        {currentView === "Discover" && children[0]}
        {currentView === "Search" && children[1]}
        {currentView === "Library" && children[2]}
      </Box>
      <Footer />
    </Flex>
  );
};
export default BuyerLayout;
