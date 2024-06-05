import { Flex } from "@chakra-ui/react";
import Hero from "./Hero";
import "./bg.png";

function App() {
  return (
    <>
      <Flex
        as="main"
        direction="column"
        backgroundImage="url('./bg.png')"
        w="full"
        h="full"
      >
        <Hero />
      </Flex>
    </>
  );
}

export default App;
