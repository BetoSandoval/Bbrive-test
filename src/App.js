import { Button } from "@chakra-ui/react";
import { UserListContainer } from "./components/UserListContainer";
import { Routes, Route, Link } from "react-router-dom";
import { UserForm } from "./components/UserForm";

function App() {
  return (
    <>
      <Button colorScheme="teal" size="md">
        + Agregar nuevo empleado
      </Button>

      <Routes>
        <Route path="/" element={<UserListContainer/>} exact />
        <Route path="/add" element={<UserForm/>} />
      </Routes>
    </>
  );
}

export default App;
