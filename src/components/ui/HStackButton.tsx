import React from "react";
import { HStack } from "@chakra-ui/core";

type Props = {
  selected?: boolean;
  onClick: () => void;
};
const HStackButton: React.FC<Props> = ({ children, selected, onClick }) => {
  return (
    <HStack
      w="100%"
      p="15px"
      spacing="2"
      color="text.gray"
      borderRadius="7px"
      border={`1px solid ${selected ? "#36a9ae" : "#ddd"}`}
      boxShadow={selected ? "inset 0 0 0 1px #36a9ae" : ""}
      onClick={onClick}
    >
      {children}
    </HStack>
  );
};

export default HStackButton;
