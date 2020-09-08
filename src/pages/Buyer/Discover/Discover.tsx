import React from "react";
import { VStack } from "@chakra-ui/core";
import Explore from "./Explore";
import CardHolder from "./CardHolder";

const cards = [
  {
    title: "Make vscode awesome",
    cover: "assets/images/product-card-image.png",
    owner: { name: "Andrew" },
    price: "15"
  },
  {
    title: "Make vscode awesome",
    cover: "assets/images/product-card-image.png",
    owner: { name: "Andrew" },
    price: "15"
  },
  {
    title: "Make vscode awesome",
    cover: "assets/images/product-card-image.png",
    owner: { name: "Andrew" },
    price: "15"
  },
  {
    title: "Make vscode awesome",
    cover: "assets/images/product-card-image.png",
    owner: { name: "Andrew" },
    price: "15"
  },
  {
    title: "Make vscode awesome",
    cover: "assets/images/product-card-image.png",
    owner: { name: "Andrew" },
    price: "15"
  }
];

const Discover = () => {
  return (
    <VStack spacing="20px" p="0 6%" alignItems="flex-start">
      <Explore />
      <CardHolder heading="Best selling in Apps & Software" cards={cards} />
      <CardHolder heading="Best selling in Comics" cards={cards} />
      <CardHolder heading="Best selling in Drawing & Painting" cards={cards} />
    </VStack>
  );
};

export default Discover;
