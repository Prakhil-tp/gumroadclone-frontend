import React from "react";
import { Flex, Grid, Box, Text } from "@chakra-ui/core";
import { Product as Props } from "types";

const Product: React.FC<Props> = ({ title, sales, total, price }) => {
  return (
    <Grid
      templateColumns="5fr 3fr 3fr 2fr"
      h="65px"
      alignItems="center"
      w="100%"
      color="black"
    >
      <Box>
        <Text fontWeight="700" color="gray.800">
          {title}
        </Text>
      </Box>
      <Box>
        <Text color="gray.500">{sales} sales</Text>
      </Box>
      <Box>
        <Text color="gray.500">${total} total</Text>
      </Box>
      <Flex justifyContent="flex-end">
        <Box borderRadius="10px" p="5px" bg="gray.200">
          <Text textAlign="right">${price}</Text>
        </Box>
      </Flex>
    </Grid>
  );
};

export default Product;
