import {
  Flex,
  Button,
  Text,
  Link,
  Image,
  Heading,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";
import bgImage from "./bg.png";
import phoneOne from "./assets/1stphones.png";
import zigzagOne from "./assets/1stzigzag.png";

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
        w="full"
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
          mr="3"
        >
          <Text fontFamily="sans-serif" fontSize="xl" mr="2">
            Download
          </Text>
        </Button>
      </Flex>

      {/* Home */}
      <Flex direction="row" w="full" h="full" bgImage={bgImage}>
        <Flex
          direction="row"
          justifyContent="space-between"
          gap="30%"
          alignContent="center"
          // w="100%"
          pl="7%"
        >
          <Flex
            direction="column"
            w="50%"
            h="90vh"
            textAlign="center"
            gap="10%"
          >
            <Heading bgColor="white" as="h1" textAlign="center" mb="0">
              <Box fontSize="5xl" as="span" display="grid" mt="70px ">
                Make the Best
              </Box>{" "}
              <Box fontSize="5xl" as="span" display="grid">
                Financial Decisions
              </Box>{" "}
            </Heading>
            <Text fontSize="3xl" as="h3">
              <Box fontSize="3xl" as="span" display="grid">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Box>{" "}
            </Text>
            {/* <Heading mt="0" bgColor="white" as="h1" textAlign="center">
              {" "}
            </Heading> */}
            <Image src={zigzagOne} objectFit="fit" mb="0" />
          </Flex>
          <Flex gap="10%" alignContent="center" justifyContent="center">
            <Image src={phoneOne} />
          </Flex>
        </Flex>

        {/* <Image src={bgImage} alt="Background" objectFit="cover" w="100%" /> */}
        {/* <Grid templateRows="1fr " templateColumns="1fr 1fr" gap={4} m="2"> */}
        {/* <GridItem w="50%" h="50%" bg="tomato" p={4}>
            <Heading> Make the best financial Decisions</Heading>
          </GridItem>
          <GridItem w="50%" h="50%" bg="papayawhip" p={4} justifyContent="end">
            <Image src={phoneOne} />
          </GridItem>
          <GridItem w="50%" h="50%" bg="tomato" p={4}>
            {/* Content for row 2, column 1 */}
        {/* </GridItem> */}
        {/* </Grid> */}
      </Flex>

      {/* {/* About us */}
      <Flex w="100vw" h="full">
        <Image src={bgImage} alt="Background" objectFit="cover" w="100%" />
      </Flex>

      {/* Pricing */}
      <Flex w="100vw" h="full">
        <Image src={bgImage} alt="Background" objectFit="cover" w="100%" />
      </Flex>

      {/* Features */}
      <Flex w="100vw" h="full">
        <Image src={bgImage} alt="Background" objectFit="cover" w="100%" />
      </Flex>

      {/* Home */}
      <Flex w="100vw" h="full">
        <Image src={bgImage} alt="Background" objectFit="cover" w="100%" />
      </Flex> */}
    </Flex>
  );
};

export default Hero;
