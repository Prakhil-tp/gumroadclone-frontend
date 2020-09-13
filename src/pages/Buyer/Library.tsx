import React from "react";
import { Grid } from "@chakra-ui/core";
import { ProductCard } from "components/ui";

const Library = () => {
  return (
    <Grid
      paddingTop="50px"
      gap={6}
      templateColumns="repeat(auto-fit,minmax(300px,300px))"
    >
      <ProductCard
        key="3"
        title="this is titile"
        owner={{ name: "babu" }}
        price="34"
        cover="assets/images/product-card-image.png"
      />
      <ProductCard
        key="5"
        title="this is titile"
        owner={{ name: "babu" }}
        price="34"
        cover="assets/images/product-card-image.png"
      />
      <ProductCard
        key="8"
        title="this is titile"
        owner={{ name: "babu" }}
        price="34"
        cover="assets/images/product-card-image.png"
      />
      <ProductCard
        key="4"
        title="this is titile"
        owner={{ name: "babu" }}
        price="34"
        cover="assets/images/product-card-image.png"
      />
      <ProductCard
        key="7"
        title="this is titile"
        owner={{ name: "babu" }}
        price="34"
        cover="assets/images/product-card-image.png"
      />
      <ProductCard
        key="6"
        title="this is titile"
        owner={{ name: "babu" }}
        price="34"
        cover="assets/images/product-card-image.png"
      />
    </Grid>
  );
};

export default Library;
