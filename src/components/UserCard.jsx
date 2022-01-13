import React from "react";
import { Box, Button, Image, Text, Stack } from "@chakra-ui/react";

export const UserCard = () => {
  return (
      <Box
        padding="4"
        bg="gray.100"
        w='100%' 
        borderWidth="1px"
        borderRadius="lg"
        display='flex'
        alignItems='center'
      >
          <Image
            borderRadius="full"
            boxSize="130px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />

          <Stack spacing={3}>
            <Text fontSize="sm">Nombre: Alberto Sandoval Añorve</Text>
            <Text fontSize="sm">Telefono: 553432323</Text>
            <Text fontSize="sm">E-mail: maria@gmail.com</Text>
          </Stack>

          <Stack direction="row" spacing={4}>
            <Button colorScheme="blue" variant="outline">
              Editar
            </Button>
            <Button colorScheme="pink" variant="solid">
              Eliminar
            </Button>
          </Stack>
          
      </Box>
  );
};
