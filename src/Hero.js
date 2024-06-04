import { Flex, Button, Text, Link } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex direction="column" w="full" h="full">
      {/* Header */}
      <Flex
        as="header"
        direction="row"
        bgColor="whitesmoke"
        p="0"
        gap="10"
        alignItems="center"
        justifyContent="space-between"
        fontSize="4xl"
      >
        <Text as="h1" fontSize="4xl" ml="2">
          uifry
        </Text>
        <Flex dir="row" gap="20" as="h2">
          <Link color="black" _hover={{ color: "red" }}>
            Home
          </Link>
          <Link color="black" _hover={{ color: "red" }}>
            About us
          </Link>
          <Link color="black" _hover={{ color: "red" }}>
            Pricing
          </Link>
          <Link color="black" _hover={{ color: "red" }}>
            Features
          </Link>
        </Flex>
        <Button
          bgColor="black"
          textColor="white"
          borderRadius="10"
          textAlign="center"
          w="100px"
          _hover={{ color: "red" }}
        >
          <Text fontFamily="sans-serif" fontSize="xl">
            Download
          </Text>
        </Button>
      </Flex>

      {/* Home */}
      <Flex bgColor="./bg.png" w="full" h="full"></Flex>
    </Flex>
  );
};

export default Hero;
