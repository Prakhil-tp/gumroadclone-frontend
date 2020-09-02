import React, { useState } from "react";
import { Box, HStack, Text, Button } from "@chakra-ui/core";
import { useProducts } from "contexts/SellerProductContext";

type CurrentTab = "Products" | "Share";

const ProductTabNav = () => {
  const { setCurrentProductId, setCurrentView, currentView } = useProducts();
  const [currentTab, setCurrentTab] = useState<CurrentTab>("Products");

  const handleNewProductClick = () => {
    setCurrentProductId(null);
    setCurrentView("form");
  };

  const handlePublishClick = () => {
    setCurrentView("list");
  };

  return (
    <>
      <HStack spacing="10">
        {currentView === "form" ? (
          <>
            <Text
              fontSize="lg"
              fontWeight="100"
              cursor="pointer"
              color={currentTab === "Products" ? "primary.400" : "text.gray"}
              onClick={() => setCurrentTab("Products")}
            >
              Products
            </Text>
            <Text
              fontSize="lg"
              fontWeight="100"
              cursor="pointer"
              color={currentTab === "Share" ? "primary.400" : "text.gray"}
              onClick={() => setCurrentTab("Share")}
            >
              Share
            </Text>
          </>
        ) : (
          <Text fontSize="lg" fontWeight="100" color="text.gray">
            Products
          </Text>
        )}
      </HStack>
      <Box>
        {currentView === "list" ? (
          <Button
            size="md"
            variant="solid"
            colorScheme="primary"
            fontWeight="100"
            onClick={handleNewProductClick}
          >
            New product
          </Button>
        ) : (
          <Button
            size="md"
            variant="solid"
            colorScheme="primary"
            fontWeight="100"
            onClick={handlePublishClick}
          >
            Publish
          </Button>
        )}
      </Box>
    </>
  );
};

export default ProductTabNav;
