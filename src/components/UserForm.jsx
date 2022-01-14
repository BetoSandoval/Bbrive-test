import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from "@chakra-ui/react";
import { Form } from "./Form";

export const UserForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [user, setUser] = useState({
    id: '',
    img: "",
    name: "",
    phone: "",
    email: "",
  });

  const { addUser, users, updateUser } = useContext( GlobalContext )

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value } );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(user.id){
      updateUser(user);
    }else{
      addUser(user);
    }
    navigate("/");
  };

  useEffect( () => {
    const userFound = users.find( user => user.id === params.id );

    if(userFound){
      setUser(userFound)
    }

  }, [params.id, users] );

  return (
    <Container
      border="1px"
      borderColor="gray.200"
      borderRadius="6"
      bg="gray.100"
    >
      <Form handleChange={handleChange} handleSubmit={handleSubmit} user={user}/>
    </Container>
  );
};
