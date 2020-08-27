import React, { useState, useCallback } from "react";
import { Box, Flex, Text } from "@chakra-ui/core";
import ClassNames from "classnames";
import styles from "./Options.module.scss";

const Options: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("Products");

  const boxStyle = useCallback((option: string, tab = "Products") => {
    return ClassNames(styles.NavOptions, {
      [styles["NavOptions--active"]]: tab === option
    });
  }, []);

  const handleOptionsClick = (e: React.MouseEvent) => {
    setCurrentTab(e.currentTarget.textContent || "");
  };

  return (
    <Flex
      p="5px 0px 0px 0px"
      direction="row"
      justifyContent="space-evenly"
      fontSize="13px"
      fontWeight="700"
      color="text.100"
      w="100%"
    >
      <Box
        className={boxStyle("Products", currentTab)}
        onClick={handleOptionsClick}
      >
        <i className="fa fa-archive" />
        <Text>Products</Text>
      </Box>
      <Box
        className={boxStyle("Customers", currentTab)}
        onClick={handleOptionsClick}
      >
        <i className="fas fa-user-friends" />
        <Text>Customers</Text>
      </Box>
      <Box
        className={boxStyle("Posts", currentTab)}
        onClick={handleOptionsClick}
      >
        <i className="fa fa-newspaper" />
        <Text>Posts</Text>
      </Box>
      <Box
        className={boxStyle("Analytics", currentTab)}
        onClick={handleOptionsClick}
      >
        <i className="fas fa-chart-bar" />
        <Text>Analytics</Text>
      </Box>
      <Box
        className={boxStyle("Profile", currentTab)}
        onClick={handleOptionsClick}
      >
        <i className="fa fa-store" />
        <Text>Profile</Text>
      </Box>
    </Flex>
  );
};

export default Options;
