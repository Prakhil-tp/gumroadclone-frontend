import React, { useState, useCallback } from "react";
import { Box, Text, HStack } from "@chakra-ui/core";
import ClassNames from "classnames";
import styles from "./Options.module.scss";

const Options = () => {
  const [currentTab, setCurrentTab] = useState("Products");

  const boxStyle = useCallback((option: string, tab = "Products") => {
    return ClassNames(styles.NavOptions, {
      [styles["NavOptions--active"]]: tab === option
    });
  }, []);

  const handleOptionsClick = (e: React.MouseEvent) => {
    setCurrentTab(e.currentTarget.textContent || "");
  };

  return (
    <HStack
      p="0px 0px 0px 0px"
      spacing="28px"
      justifyContent="center"
      fontSize="13px"
      fontWeight="700"
      color="text.gray"
      w="100%"
    >
      <Box
        className={boxStyle("Products", currentTab)}
        role="tab"
        onClick={handleOptionsClick}
      >
        <i className="fa fa-archive" />
        <Text>Products</Text>
      </Box>
      <Box
        className={boxStyle("Customers", currentTab)}
        role="tab"
        onClick={handleOptionsClick}
      >
        <i className="fas fa-user-friends" />
        <Text>Customers</Text>
      </Box>
      <Box
        className={boxStyle("Posts", currentTab)}
        role="tab"
        onClick={handleOptionsClick}
      >
        <i className="fa fa-newspaper" />
        <Text>Posts</Text>
      </Box>
      <Box
        className={boxStyle("Analytics", currentTab)}
        role="tab"
        onClick={handleOptionsClick}
      >
        <i className="fas fa-chart-bar" />
        <Text>Analytics</Text>
      </Box>
      <Box
        className={boxStyle("Profile", currentTab)}
        role="tab"
        onClick={handleOptionsClick}
      >
        <i className="fa fa-store" />
        <Text>Profile</Text>
      </Box>
    </HStack>
  );
};

export default Options;
