import { Button } from "@chakra-ui/react";
import { UserListContainer } from "./components/UserListContainer";

function App() {
  return (
    <>
      <Button colorScheme="teal" size="md">
        + Agregar nuevo empleado
      </Button>

      <UserListContainer/>
    </>
  );
}

export default App;
