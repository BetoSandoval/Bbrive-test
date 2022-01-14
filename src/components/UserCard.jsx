import React from "react";
import { Box, Button, Image, Text, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const UserCard = ({ img, name, phone, email, id, deleteUser }) => {
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
        <Link to={`/edit/${id}`}>
          <Button colorScheme="blue" variant="outline">
            Editar
          </Button>
        </Link>
        <Button onClick={() => deleteUser(id)} colorScheme="pink" variant="solid">
          Eliminar
        </Button>
      </Stack>
    </Box>
  );
};
