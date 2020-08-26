import React from "react";
import { Box, Grid, Flex } from "@chakra-ui/core";
import Options from "./components/Options";
import styles from "./SellerHeader.module.scss";

const SellerHeader = (): JSX.Element => {
  const colors = [
    "#137e83",
    "#006c71",
    "#f4b936",
    "#f29900",
    "#e96b5a",
    "#ed5741",
    "#cb283e",
    "#a71a28",
    "#03949a"
  ];
  const getHeadLiner = () => {
    const boxes = [];
    for (let i = 0; i < 13; i++) {
      const item = <Box key={i} bg={colors[i % colors.length]} />;
      boxes.push(item);
    }
    return boxes;
  };

  return (
    <>
      <Grid w="100%" h="2px" templateColumns="repeat(13,1fr)" templateRows="1">
        {getHeadLiner()}
      </Grid>
      <Grid
        w="100%"
        p="21px 30px"
        bg="#efefe9"
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
          <img src="/assets/logo.svg" alt="logo" className={styles.logo} />
        </Box>
        <Options />
        <Flex direction="row" justifyContent="flex-end">
          <i className="fa fa-user-circle" style={{ fontSize: "30px" }} />
        </Flex>
      </Grid>
    </>
  );
};

export default SellerHeader;
