import { Box, Button, Input, VStack } from "@chakra-ui/react";

function Signin() {
  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Input placeholder="Email" />
      </Box>
      <Box>
        <Input placeholder="Password" type="password" />
      </Box>
      <Button colorScheme="teal">Sign In</Button>
    </VStack>
  );
}

export default Signin;
