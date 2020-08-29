import React from "react";
import {
  Flex,
  VStack,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button
} from "@chakra-ui/core";
import { Label, HStackButton } from "components/ui";

const MembershipForm = () => {
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
          <HStackButton>
            <i className="fas fa-receipt" style={{ fontSize: "20px" }} />
            <Text color="text.black" fontSize="lg" fontWeight="700">
              Classic:
            </Text>
            <Text color="text.black">Start selling today</Text>
          </HStackButton>

          <HStackButton>
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
            placeholder="Name of product"
            border="1px solid #ddd"
          />
        </>
        <>
          <Label>Amount</Label>
          <InputGroup>
            <InputLeftElement color="gray.300" fontSize="1.2em" children="$" />
            <Input placeholder="Amount" border="1px solid #ddd" />
          </InputGroup>
        </>
        <VStack p="20px 0" w="100%" spacing="3">
          <Button
            size="md"
            variant="solid"
            colorScheme="primary"
            fontWeight="100"
            w="100%"
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
