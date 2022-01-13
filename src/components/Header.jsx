import { Box, Button, Flex, Container, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Container mt={50} maxW="container.xl">

      <Link to="/">
      <Box p="2" justify="left">
        <Heading size="md">Lista de Empleados App</Heading>
      </Box>
      </Link>

      <Flex justify="right">
        <Box>
          <Link to="/add">
            <Button colorScheme="teal" size="md">
              + Agregar nuevo empleado
            </Button>
          </Link>
        </Box>
      </Flex>
    </Container>
  );
};
