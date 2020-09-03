import React from "react";
import { Flex, Text, HStack } from "@chakra-ui/core";

const SellerFooter: React.FC = () => {
  return (
    <Flex
      w="100%"
      h="auto"
      justifyContent="space-between"
      p="30px"
      fontSize="13px"
      borderTop="1px solid #e3e3e3"
    >
      <HStack color="gray.700">
        <Text color="gray.500">@2020</Text>
        <Text>Vonnue, Inc</Text>
      </HStack>
      <HStack color="gray.500">
        <Text>@vonnue</Text>
        <Text>Help</Text>
        <Text>Privacy Policy</Text>
        <Text>Terms of use</Text>
      </HStack>
    </Flex>
  );
};

export default SellerFooter;
