import React from "react";
import { Flex, Text, HStack } from "@chakra-ui/core";
import { ProductCard } from "components/ui";
import shortid from "shortid";
import { Card } from "types";

type Props = {
  heading: string;
  cards: Array<Card>;
};

const CardHolder = ({ heading, cards }: Props) => {
  return (
    <Flex w="100%" direction="column">
      <Text
        fontSize="22px"
        color="text.black"
        fontWeight="700"
        p="10px 0 20px 0"
      >
        {heading}
      </Text>
      <HStack overflowX="auto" w="100%" p="10px 0" spacing="20px">
        {cards.map(({ title, owner, price, cover }: Card) => (
          <ProductCard
            key={shortid.generate()}
            title={title}
            owner={owner}
            price={price}
            cover={cover}
          />
        ))}
      </HStack>
    </Flex>
  );
};

export default CardHolder;
