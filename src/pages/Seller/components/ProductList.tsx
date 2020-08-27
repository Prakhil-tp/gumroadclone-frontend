import React from "react";
import { VStack, StackDivider } from "@chakra-ui/core";
import Product from "./Product";

const ProductList: React.FC = () => {
  return (
    <VStack
      justifyContent="center"
      w="100%"
      bg="white"
      p="20px 8%"
      divider={<StackDivider borderColor="gray.200" />}
    >
      <Product title="Risk Management Course" sales="2" total={39} price={50} />
      <Product title="DevOps Course" sales="15" total={39} price={25} />
    </VStack>
  );
};

export default ProductList;
