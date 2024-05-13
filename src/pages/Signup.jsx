import { Box, Button, Input, VStack } from "@chakra-ui/react";

function Signup() {
  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Input placeholder="Username" />
      </Box>
      <Box>
        <Input placeholder="Email" />
      </Box>
      <Box>
        <Input placeholder="Password" type="password" />
      </Box>
      <Button colorScheme="teal">Sign Up</Button>
    </VStack>
  );
}

export default Signup;
