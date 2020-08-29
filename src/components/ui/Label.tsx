import React from "react";
import { Text } from "@chakra-ui/core";

const Label: React.FC = ({ children }) => {
  return (
    <Text
      alignSelf="flex-start"
      fontSize="13px"
      lineHeight="13px"
      paddingTop="10px"
      fontWeight="700"
      color="text.gray"
    >
      {children}
    </Text>
  );
};

export default Label;
