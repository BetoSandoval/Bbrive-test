import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalContext";
import { UserCard } from "./UserCard";
import { Container } from "@chakra-ui/react";

export const UserListContainer = () => {

  const {users} = useContext(GlobalContext);

  return (
    <>
      <Container maxW="xl" mt={50} centerContent>
        { users.map( user => {
          return (
          <UserCard
            key={user.id}
            img={user.img}
            name={user.name}
            phone={user.phone}
            email={user.email}
          />
          )
        } ) }
      </Container>
    </>
  );
};
