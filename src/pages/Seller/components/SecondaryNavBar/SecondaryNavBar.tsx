import React from "react";
import { Flex } from "@chakra-ui/core";
import ProductTabNav from "./ProductTabNav";

type Props = {
  tab: "Products" | "Customers";
};

const SecondaryNavBar = ({ tab }: Props) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      w="100%"
      h="65px"
      p="0 7%"
      borderBottom="1px solid #e3e3e3"
    >
      {tab === "Products" && <ProductTabNav />}
    </Flex>
  );
};

export default SecondaryNavBar;
