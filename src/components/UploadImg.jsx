import {
    Container,
    Box,
    Center,
  } from "@chakra-ui/react";
  import { AiOutlineUpload } from "react-icons/ai";

export const UploadImg = () => {
    return (
        <Container padding="4" centerContent>
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
        </Box>
      </Container>
    )
}
