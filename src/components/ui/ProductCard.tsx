import React from "react";
import { Flex, Image, Text, Box, Avatar, Grid } from "@chakra-ui/core";
import { Card } from "types";

const ProductCard = ({ title, cover, owner, price }: Card) => {
  return (
    <Flex
      direction="column"
      bg="white"
      w="300px"
      h="460px"
      borderRadius="4px"
      flex="0 0 auto"
    >
      <Image
        src={cover}
        alt="product"
        borderRadius="4px 4px 0 0"
        w="300px"
        h="290px"
        fit="cover"
      />
      <Flex
        justifyContent="space-between"
        direction="column"
        p="20px"
        flex="1 0 auto"
      >
        <Text fontSize="lg" color="text.black" fontWeight="700">
          {title}
        </Text>
        <Grid templateColumns="1fr 3fr 1fr" alignItems="center">
          <Avatar
            h="35px"
            w="35px"
            name={owner?.name}
            src="https://bit.ly/dan-abramov"
          />
          <Text>{owner?.name}</Text>
          <Flex
            h="32px"
            justifyContent="space-between"
            alignItems="center"
            p="5px 0 5px 10px"
            bg="#fdce71"
          >
            <Text>${price}</Text>
            <Box
              w="0"
              h="0"
              borderTop="13px solid transparent"
              borderBottom="13px solid transparent"
              borderRight="10px solid white"
            />
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
