import { Container, Button } from "@chakra-ui/react";
import { Form } from "./Form";
import { UploadImg } from "./UploadImg";

export const UserForm = () => {
  return (
    <Container
      border="1px"
      borderColor="gray.200"
      borderRadius="6"
      bg="gray.100"
      centerContent
    >
      <UploadImg />

      <Form/>
      
      <Button colorScheme="blue" mb={5}>
        Crear nuevo Empleado
      </Button>
    </Container>
  );
};
