import React, { useState } from "react";
import {
  Flex,
  VStack,
  Heading,
  Text,
  Input,
  NumberInput,
  NumberInputField,
  Button
} from "@chakra-ui/core";
import { Label, HStackButton } from "components/ui";
import { useProductForm } from "contexts/ProductFormContext";
import { Product } from "types";

const MembershipForm = () => {
  const { setCurrentForm, updateCurrentProduct } = useProductForm();
  const [type, setType] = useState<Product["type"]>("classic");
  const [state, setState] = useState({
    title: "",
    price: 0
  });

  /**
   * @function handleTypeClick - A click handler function to set the Type of the Product
   * @param {Product['type']} param - (classic / membership)
   */
  const handleTypeClick = (param: Product["type"]) => setType(param);

  /**
   * A generic change handler function for input element.
   * @function handleChange - Helps to set title and price of the product
   * @param {React.ChangeEvent<HTMLInputElement>} e - change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const content = name === "amount" ? +value : value;

    setState({ ...state, [name]: content });
  };

  const handleSubmit = () => {
    const { title, price } = state;

    updateCurrentProduct({
      title,
      price,
      type
    });
    setCurrentForm("DetailsForm");
  };

  return (
    <Flex justifyContent="center" bg="white" w="100%">
      <VStack p="30px 0" maxWidth="470px">
        <Heading as="h4" size="lg" p="10px 0" color="text.black">
          What are you creating?
        </Heading>
        <Text
          color="text.gray"
          p="10 0"
          textAlign="center"
          lineHeight="26px"
          fontSize="17px"
        >
          Make some selections, fill in some boxes, and go live in minutes. Our
          Help Center has everything you need to know.
        </Text>
        <>
          <Label>Type of product</Label>
          <HStackButton
            selected={type === "classic"}
            onClick={() => handleTypeClick("classic")}
          >
            <i className="fas fa-receipt" style={{ fontSize: "20px" }} />
            <Text color="text.black" fontSize="lg" fontWeight="700">
              Classic:
            </Text>
            <Text color="text.black">Start selling today</Text>
          </HStackButton>

          <HStackButton
            selected={type === "membership"}
            onClick={() => handleTypeClick("membership")}
          >
            <i className="fas fa-sync-alt" style={{ fontSize: "20px" }} />
            <Text color="text.black" fontSize="lg" fontWeight="700">
              Membership:
            </Text>
            <Text color="text.black">Charge on a recurring basis</Text>
          </HStackButton>
        </>
        <>
          <Label>Name</Label>
          <Input
            variant="outline"
            name="title"
            placeholder="Name of product"
            border="1px solid #ddd"
            focusBorderColor="primary.400"
            onChange={handleChange}
            value={state.title}
          />
        </>
        <>
          <Label>Amount</Label>
          <NumberInput focusBorderColor="primary.400" w="100%">
            <NumberInputField
              variant="outline"
              name="price"
              placeholder="Amount"
              border="1px solid #ddd"
              onChange={handleChange}
              value={state.price}
            />
          </NumberInput>
        </>
        <VStack p="20px 0" w="100%" spacing="3">
          <Button
            size="md"
            variant="solid"
            colorScheme="primary"
            fontWeight="100"
            w="100%"
            onClick={handleSubmit}
          >
            Next: Customize
          </Button>
          <Button
            size="md"
            variant="solid"
            colorScheme="gray"
            color="text.gray"
            fontWeight="100"
            border="1px solid #ddd"
            w="100%"
          >
            Cancel
          </Button>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default MembershipForm;
