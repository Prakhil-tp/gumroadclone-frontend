import React from "react";
import { Flex, Image, Text } from "@chakra-ui/core";

type Props = {
  heading: string;
  subheading: string;
  imageUrl: string;
};
const ExploreCard = ({ heading, subheading, imageUrl }: Props) => {
  return (
    <Flex
      direction="column"
      p="20px"
      background="white"
      w="300px"
      h="300px"
      borderRadius="4px"
      flex="0 0 auto"
      borderTop="5px solid #3aa3a7"
    >
      <Image src={imageUrl} alt="category" />
      <Text fontSize="xl" fontWeight="700" color="text.black">
        {heading}
      </Text>
      <Text fontSize="lg" fontWeight="500" color="text.gray">
        {subheading}
      </Text>
      <Flex
        alignItems="center"
        w="100%"
        marginTop="auto"
        color="primary.700"
        justifyContent="space-between"
        cursor="pointer"
      >
        <Text fontWeight="100" color="inherit" fontSize="17px">
          Explore products
        </Text>
        <i className="fas fa-chevron-right" style={{ color: "inherit" }} />
      </Flex>
    </Flex>
  );
};

export default ExploreCard;
