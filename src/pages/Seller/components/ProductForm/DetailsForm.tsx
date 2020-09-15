import React, { useState } from "react";
import { Product } from "types";
import { Box, VStack, Heading, Input, Textarea, Flex } from "@chakra-ui/core";
import { Label, ProductCard } from "components/ui";
import SecondaryNavBar from "../SecondaryNavBar/SecondaryNavBar";

type Props = {
  currentProduct: Partial<Product>;
};

const DetailsForm = ({ currentProduct }: Props) => {
  const [state, setState] = useState(currentProduct);
  const { title, description, price } = state;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <Box w="100%" bg="white">
      <SecondaryNavBar tab="Products" />
      <Flex direction="row" justifyContent="flex-start">
        <VStack align="flex-start" p="30px 7%" w="60%">
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
              name="title"
              variant="outline"
              placeholder="Name of product"
              border="1px solid #ddd"
              focusBorderColor="primary.400"
              onChange={handleChange}
              value={title}
            />

            <Label>Description</Label>
            <Textarea
              name="description"
              variant="outline"
              placeholder="Describe your product..."
              border="1px solid #ddd"
              focusBorderColor="primary.400"
              onChange={handleChange}
              multiline
              value={description}
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
              name="content"
              variant="outline"
              placeholder="Meeting link"
              border="1px solid #ddd"
              onChange={handleChange}
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
            <Label>Amount ($)</Label>
            <Input
              name="price"
              variant="outline"
              placeholder="Amount in dollars"
              border="1px solid #ddd"
              focusBorderColor="primary.400"
              onChange={handleChange}
              value={price}
            />
          </>
        </VStack>
        <Box
          flexGrow={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box position="sticky">
            <ProductCard
              title={title || ""}
              price={price || ""}
              cover="assets/images/product-card-image.png"
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default DetailsForm;
