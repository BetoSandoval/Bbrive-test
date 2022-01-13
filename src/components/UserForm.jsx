import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Container } from "@chakra-ui/react";
import { Form } from "./Form";
import { UploadImg } from "./UploadImg";

export const UserForm = () => {
  const [user, setUser] = useState({
    id: '',
    img: "",
    name: "",
    phone: "",
    email: "",
  });

  const { addUser } = useContext( GlobalContext )

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value } );
    addUser();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };

  return (
    <Container
      border="1px"
      borderColor="gray.200"
      borderRadius="6"
      bg="gray.100"
    >
      <UploadImg />

      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </Container>
  );
};
