import React from "react";
import { VStack, StackDivider } from "@chakra-ui/core";
import { useProducts } from "contexts/SellerProductContext";
import Product from "./Product";

const ProductList = () => {
  const { products } = useProducts();
  return (
    <VStack
      justifyContent="center"
      w="100%"
      bg="white"
      p="20px 8%"
      divider={<StackDivider borderColor="gray.200" />}
    >
      {products.map(({ id, title, sales, total, price, type }) => (
        <Product
          key={id}
          id={id}
          title={title}
          sales={sales}
          total={total}
          price={price}
          type={type}
        />
      ))}
    </VStack>
  );
};

export default ProductList;
