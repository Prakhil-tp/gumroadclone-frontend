import React from "react";
import { Box, Flex, Button, Text } from "@chakra-ui/core";
import { useProducts } from "contexts/SellerProductContext";

const SecondaryNavBar = () => {
  const { setCurrentProductId, setCurrentView } = useProducts();

  const handleClick = () => {
    setCurrentProductId(null);
    setCurrentView("form");
  };

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
      <Box>
        <Text fontSize="lg" fontWeight="100" color="text.gray">
          Products
        </Text>
      </Box>
      <Box>
        <Button
          size="md"
          variant="solid"
          colorScheme="primary"
          fontWeight="100"
          onClick={handleClick}
        >
          New product
        </Button>
      </Box>
    </Flex>
  );
};

export default SecondaryNavBar;
