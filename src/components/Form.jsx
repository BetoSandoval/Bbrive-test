import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import { UploadImg } from "./UploadImg";

export const Form = ({ handleChange, handleSubmit, user }) => {
  return (
    <FormControl padding="4" mb={5}>
      <form onSubmit={handleSubmit}>

        <UploadImg />

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
