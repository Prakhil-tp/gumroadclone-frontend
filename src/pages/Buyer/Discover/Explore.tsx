import React from "react";
import { Flex, Text, HStack } from "@chakra-ui/core";
import { ExploreCard } from "components/ui";

const Explore = () => {
  return (
    <Flex direction="column" justifyContent="flex-start" w="100%">
      <Text fontSize="sm" color="primary.400" fontWeight="700">
        EXPLORE GUMROAD
      </Text>
      <Text fontSize="44px" fontWeight="700" color="text.black">
        Find the best things to read, watch, make, and more.
      </Text>
      <HStack w="100%" overflowX="auto" spacing="15px" p="70px 0 15px 0">
        <ExploreCard
          imageUrl="assets/images/animation.webp"
          heading="Animation"
          subheading="Tutorials, rigs and assets"
        />
        <ExploreCard
          imageUrl="assets/images/animation.webp"
          heading="Animation"
          subheading="Tutorials, rigs and assets"
        />
        <ExploreCard
          imageUrl="assets/images/animation.webp"
          heading="Animation"
          subheading="Tutorials, rigs and assets"
        />
        <ExploreCard
          imageUrl="assets/images/animation.webp"
          heading="Animation"
          subheading="Tutorials, rigs and assets"
        />
        <ExploreCard
          imageUrl="assets/images/animation.webp"
          heading="Animation"
          subheading="Tutorials, rigs and assets"
        />
        <ExploreCard
          imageUrl="assets/images/animation.webp"
          heading="Animation"
          subheading="Tutorials, rigs and assets"
        />
      </HStack>
    </Flex>
  );
};

export default Explore;
