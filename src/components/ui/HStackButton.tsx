import React from "react";
import { HStack } from "@chakra-ui/core";

const HStackButton: React.FC = ({ children }) => {
  return (
    <HStack
      w="100%"
      p="15px"
      spacing="2"
      border="1px solid #ddd"
      color="text.gray"
      borderRadius="7px"
    >
      {children}
    </HStack>
  );
};

export default HStackButton;
