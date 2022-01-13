import React from "react";
import { Box, Button, Image, Text, Stack } from "@chakra-ui/react";

export const UserCard = ({ img, name, phone, email }) => {
  return (
    <Box
      padding="4"
      bg="gray.100"
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      display="flex"
      alignItems="center"
      mb={10}
    >
      <Image borderRadius="full" boxSize="100px" src={img} alt={name} />

      <Box ml={5} mr={5}>
        <Stack spacing={3}>
          <Text fontSize="sm">Nombre: {name}</Text>
          <Text fontSize="sm">Telefono: {phone}</Text>
          <Text fontSize="sm">E-mail: {email}</Text>
        </Stack>
      </Box>

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
