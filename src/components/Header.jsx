import { Box, Button, Flex, Heading, Spacer, Container } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Container mt={50} maxW='container.xl'>
      <Flex justify='right'>
        <Box>
          <Button colorScheme="teal" size="md">
            + Agregar nuevo empleado
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};
