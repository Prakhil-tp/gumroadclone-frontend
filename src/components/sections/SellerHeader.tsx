import React from "react";
import { Box, Grid, Flex } from "@chakra-ui/core";

const SellerHeader = (): JSX.Element => {
  return (
    <Grid
      w="100%"
      p="10px 10px"
      bg="#efefe9"
      templateColumns="1fr 3fr 1fr"
      templateRows="1"
      borderBottom="1px solid #e3e3e3"
    >
      <Box>Logo</Box>
      <Flex direction="row" justifyContent="center">
        options
      </Flex>
      <Flex direction="row" justifyContent="flex-end">
        user
      </Flex>
    </Grid>
  );
};

export default SellerHeader;
