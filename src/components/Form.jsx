import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";

export const Form = ({ handleChange }) => {
  return (
    <FormControl padding="4" mb={5}>
      <FormLabel htmlFor="email">Nombre Completo</FormLabel>
      <Input
        onChange={handleChange}
        type="text"
        name="name"
        id="email"
        type="email"
        bg="white.100"
        mb={5}
      />
      <FormLabel htmlFor="email">Teléfono</FormLabel>
      <Input
        onChange={handleChange}
        type="text"
        name="phone"
        id="email"
        type="email"
        bg="white.100"
        mb={5}
      />
      <FormLabel htmlFor="email">Dirección de Email</FormLabel>
      <Input
        onChange={handleChange}
        type="text"
        name="email"
        id="email"
        type="email"
        bg="white.100"
        mb={10}
      />

      <Center>
        <Button colorScheme="blue" mb={5}>
          Crear nuevo Empleado
        </Button>
      </Center>
    </FormControl>
  );
};
