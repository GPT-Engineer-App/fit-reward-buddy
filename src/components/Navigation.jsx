import { Link } from "react-router-dom";
import { Box, HStack } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box bg="teal.500" p={4}>
      <HStack spacing={4}>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </HStack>
    </Box>
  );
}

export default Navigation;
