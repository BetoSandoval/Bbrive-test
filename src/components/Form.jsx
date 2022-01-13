import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export const Form = () => {
  return (
    <FormControl padding="4" mb={5}>
      <FormLabel htmlFor="email">Nombre Completo</FormLabel>
      <Input id="email" type="email" bg="white.100" mb={5} />
      <FormLabel htmlFor="email">Teléfono</FormLabel>
      <Input id="email" type="email" bg="white.100" mb={5} />
      <FormLabel htmlFor="email">Dirección de Email</FormLabel>
      <Input id="email" type="email" bg="white.100" mb={5} />
    </FormControl>
  );
};
