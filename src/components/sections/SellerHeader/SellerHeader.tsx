import React from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Grid,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/core";
import Options from "./Options";

const SellerHeader = () => {
  const history = useHistory();

  return (
    <Grid
      w="100%"
      p="21px 30px 16px 30px"
      bg="background.grey"
      templateColumns={{
        sm: "1fr 4fr 1fr",
        md: "1fr 4fr 1fr",
        lg: "1fr 2fr 1fr",
        xl: "1fr 1.5fr 1fr"
      }}
      templateRows="1"
      borderBottom="1px solid #e3e3e3"
    >
      <Box>
        <img src="/assets/logo.svg" alt="logo" style={{ maxWidth: "24px" }} />
      </Box>
      <Options />
      <Flex direction="row" justifyContent="flex-end">
        <Menu>
          <MenuButton fontSize="30px" color="icon.gray">
            <i className="fa fa-user-circle" style={{ color: "inherit" }} />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => history.goBack()}>
              Switch to buying
            </MenuItem>
            <MenuItem>logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Grid>
  );
};

export default SellerHeader;
