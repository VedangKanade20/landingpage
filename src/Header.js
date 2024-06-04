import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  Button,
  List,
  ListItem,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      py="6"
      px="6"
      bg="#171923"
      w="100%"
      pos="fixed"
      top="0"
      left="0"
      zIndex="9999"
      shadow="lg"
      color="white"
      borderRadius="5"
    >
      <Flex direction="row" alignItems="center">
        <Image src="./assets/Frame.png" h="5" />
        <Text as="h1" fontSize="xl" ml="2">
          Crest
        </Text>
      </Flex>
      <List display="flex" gap="5" alignItems="center">
        <ListItem>
          <Link color="white" _hover={{ color: "gray.300" }}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link color="white" _hover={{ color: "gray.300" }}>
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link color="white" _hover={{ color: "gray.300" }}>
            Product
          </Link>
        </ListItem>
        <ListItem>
          <Link color="white" _hover={{ color: "gray.300" }}>
            Screen List
          </Link>
        </ListItem>
      </List>
      {/* <Button
        borderRadius="10"
        textAlign="center"
        _hover={{
          bgGradient: "linear(to-r, purple.600, purple.400)",
          cursor: "pointer",
        }}
      >
        <Text fontFamily="sans-serif" fontSize="xl">
          SignUp
        </Text>
      </Button> */}
    </Box>
  );
};

export default Header;
