import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Box,
} from "@chakra-ui/react";
import { AiOutlineUpload } from "react-icons/ai";

export const Form = ({ handleChange, handleSubmit, user }) => {
  return (
    <FormControl padding="4" mb={5}>
      <form onSubmit={handleSubmit}>
        <Center>
          <Box
            bg="white"
            w="50%"
            p={4}
            border="1px"
            borderRadius="6"
            borderColor="gray.200"
          >
            <Center fontSize="50px">
              <AiOutlineUpload />
            </Center>

            <Input type='file' name="img" onChange={handleChange}/>
          </Box>
        </Center>

        <FormLabel htmlFor="Text">
          {user.id ? "Edita el nombre" : "Nombre Completo"}
        </FormLabel>
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          bg="white.100"
          mb={5}
          value={user.name}
        />
        <FormLabel htmlFor="Text">
          {user.id ? "Edita el telefono" : "Telefono"}
        </FormLabel>
        <Input
          onChange={handleChange}
          type="text"
          name="phone"
          bg="white.100"
          mb={5}
          value={user.phone}
        />
        <FormLabel htmlFor="email">
          {user.id ? "Edita el E-mail" : "E-mai"}
        </FormLabel>
        <Input
          onChange={handleChange}
          type="text"
          name="email"
          id="email"
          type="email"
          bg="white.100"
          mb={10}
          value={user.email}
        />

        <Center>
          <Button type="submit" colorScheme="blue" mb={5}>
            {user.id ? "Editar Info" : "Crear Nuevo Empleado"}
          </Button>
        </Center>
      </form>
    </FormControl>
  );
};
