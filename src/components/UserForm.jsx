import { useState } from 'react';
import { Container, Button } from "@chakra-ui/react";
import { Form } from "./Form";
import { UploadImg } from "./UploadImg";

export const UserForm = () => {
  const [ user, setUser ] = useState( {
    img: '',
    name: '',
    phone: '',
    email: ''
  } )

  const handleChange = ( e ) => {
    setUser( {...user, [e.target.name]: e.target.value } );
  }

  return (
    <Container
      border="1px"
      borderColor="gray.200"
      borderRadius="6"
      bg="gray.100"
      centerContent
    >
      <UploadImg />

      <Form handleChange={handleChange}/>
      
      <Button colorScheme="blue" mb={5}>
        Crear nuevo Empleado
      </Button>
    </Container>
  );
};
