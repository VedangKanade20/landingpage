import { Flex } from "@chakra-ui/react";
import Hero from "./Hero";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <Flex
        as="main"
        mt="72px"
        direction="column"
        py="3"
        px="3"
        bgColor="WhiteAlpha.900"
        w="full"
        h="full"
      >
        <Hero />
      </Flex>
    </>
  );
}

export default App;
