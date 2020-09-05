import React from "react";
import { Grid, Box, HStack, Input, Flex, Text } from "@chakra-ui/core";
import { BuyerScreens } from "types";

type Props = {
  currentView: BuyerScreens;
  setCurrentView: React.Dispatch<React.SetStateAction<BuyerScreens>>;
};

const BuyerHeader = ({ currentView, setCurrentView }: Props) => {
  return (
    <Grid
      w="100%"
      bg="white"
      p="15px 30px"
      borderTop="2px solid #1b5557"
      borderBottom="1px solid #ddd"
      position="absolute"
      top="0"
      left="0"
      alignItems="center"
      templateRows="1"
      templateColumns="1fr 7fr 4fr 1fr"
    >
      <Box>
        <img src="/assets/logo.svg" alt="logo" style={{ maxWidth: "24px" }} />
      </Box>

      <Box>
        <Input
          placeholder="Search for products"
          border="1px solid #ddd"
          focusBorderColor="primary.300"
        />
      </Box>
      <Flex justifyContent="space-around" p="0 15%" w="100%" fontSize="15px">
        <HStack
          cursor="pointer"
          color={currentView === "Discover" ? "primary.300" : "icon.gray"}
          onClick={() => setCurrentView("Discover")}
        >
          <i className="fas fa-star" style={{ color: "inherit" }} />
          <Text
            fontSize="13px"
            lineHeight="13px"
            fontWeight="700"
            color={currentView === "Discover" ? "primary.300" : "text.gray"}
          >
            Discover
          </Text>
        </HStack>

        <HStack
          cursor="pointer"
          color={currentView === "Library" ? "primary.300" : "icon.gray"}
          onClick={() => setCurrentView("Library")}
        >
          <i className="fas fa-book" style={{ color: "inherit" }} />
          <Text
            fontSize="13px"
            lineHeight="13px"
            fontWeight="700"
            color={currentView === "Library" ? "primary.300" : "text.gray"}
          >
            Library
          </Text>
        </HStack>
      </Flex>
      <Box fontSize="30px" color="icon.gray" cursor="pointer">
        <i className="fa fa-user-circle" style={{ color: "inherit" }} />
      </Box>
    </Grid>
  );
};

export default BuyerHeader;
