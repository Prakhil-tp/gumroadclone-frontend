import React, { useState } from "react";
import { Product } from "types";
import { Box, VStack, Heading, Input, Textarea } from "@chakra-ui/core";
import { Label } from "components/ui";
import SecondaryNavBar from "../SecondaryNavBar/SecondaryNavBar";

type Props = {
  currentProduct: Partial<Product>;
};

const DetailsForm = ({ currentProduct }: Props) => {
  const [state, setState] = useState(currentProduct);

  return (
    <Box w="100%" bg="white">
      <SecondaryNavBar tab="Products" />
      <VStack align="flex-start" p="30px 7%" maxWidth="60%">
        <Heading
          as="h4"
          size="lg"
          fontSize="28px"
          p="10px 0"
          color="text.black"
        >
          What are you creating?
        </Heading>
        <>
          <Label>Name</Label>
          <Input
            variant="outline"
            placeholder="Name of product"
            border="1px solid #ddd"
            focusBorderColor="primary.400"
            value={state.title}
          />

          <Label>Description</Label>
          <Textarea
            variant="outline"
            placeholder="Describe your product..."
            border="1px solid #ddd"
            focusBorderColor="primary.400"
            multiline
            value={state.description}
          />
        </>
        <Heading
          as="h4"
          size="lg"
          fontSize="28px"
          p="10px 0"
          color="text.black"
        >
          Content
        </Heading>
        <>
          <Label>Link</Label>
          <Input
            variant="outline"
            placeholder="Meeting link"
            border="1px solid #ddd"
            focusBorderColor="primary.400"
          />
        </>

        <Heading
          as="h4"
          size="lg"
          fontSize="28px"
          p="10px 0"
          color="text.black"
        >
          Pricing
        </Heading>
        <>
          <Label>Amount</Label>
          <Input
            variant="outline"
            placeholder="Amount in dollars"
            border="1px solid #ddd"
            focusBorderColor="primary.400"
            value={state.price}
          />
        </>
      </VStack>
    </Box>
  );
};

export default DetailsForm;
