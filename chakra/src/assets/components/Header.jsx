import React from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";

const Header = () => {
    return (
      <Box
        bgImage="url('https://previews.123rf.com/images/believeinme33/believeinme331408/believeinme33140800017/30471821-mujer-en-bicicleta-de-monta%C3%B1a-que-se-sienta-en-una-bicicleta-al-atardecer.jpg')" 
        b bgSize="cover"
        py={"96"}
        px={"96"}
        css={{
          height: '100vh',
          width: '221vh'
        }}
      >
        <Flex
          maxW="container.xl"
          mx="auto"
          px={4}
          justifyContent="center"
          alignItems="center"
          flexDirection="column" 
          textAlign="center" 
          h="100%"
          bg="rgba(0, 0, 0, 0.5)"
        >
          <Heading color="black" size="lg" mb={6} mt={8}>
            Domina el Terreno
          </Heading>
          <Flex>
            <Button colorScheme="blackAlpha" mr={2}>
              Ver Video
            </Button>
            <Button colorScheme="blackAlpha">Ver Detalles</Button>
          </Flex>
        </Flex>
      </Box>
    );
  };
  
  export default Header;