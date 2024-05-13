import { Box, Button, Input, VStack, Heading, Text, Container, Image } from "@chakra-ui/react";

function Signup() {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgImage="url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfGFsbHwxfHx8fHx8fHwxNjg0MDAwMDAw&ixlib=rb-4.0.3&q=80&w=1080')" bgSize="cover" bgPos="center">
      <Box bg="whiteAlpha.900" p={8} borderRadius="md" boxShadow="lg">
        <VStack spacing={4} align="stretch">
          <Heading as="h1" size="xl" textAlign="center" mb={4}>
            Create Your Account
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={6}>
            Join us and start your fitness journey today!
          </Text>
          <Box>
            <Input placeholder="Username" variant="filled" size="lg" />
          </Box>
          <Box>
            <Input placeholder="Email" variant="filled" size="lg" />
          </Box>
          <Box>
            <Input placeholder="Password" type="password" variant="filled" size="lg" />
          </Box>
          <Button colorScheme="teal" size="lg" mt={4}>
            Sign Up
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}

export default Signup;
