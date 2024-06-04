import { Flex } from "@chakra-ui/react";
import Hero from "./Hero";
import Header from "./Header";
import "./bg.png";

function App() {
  return (
    <>
      <Flex as="main" direction="column" bgImage="./bg.png" w="full" h="full">
        <Hero />
      </Flex>
    </>
  );
}

export default App;
