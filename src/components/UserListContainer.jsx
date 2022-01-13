import React from "react";
import { UserCard } from "./UserCard";
import { Container } from "@chakra-ui/react";

export const UserListContainer = () => {
  return (
    <>
      <Container maxW="xl" centerContent>
          <UserCard/>
      </Container>
    </>
  );
};
