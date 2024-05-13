import React, { useState } from "react";
import { Container, VStack, HStack, Text, Button, Progress, Box, IconButton, Image } from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaAppleAlt, FaGift } from "react-icons/fa";

const Index = () => {
  const [points, setPoints] = useState(0);

  const handleExercise = () => setPoints(points + 10);
  const handleHealthyMeal = () => setPoints(points + 5);
  const handleRedeem = () => setPoints(points >= 50 ? points - 50 : points);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Fitness Reward App
        </Text>
        <Image src="https://images.unsplash.com/photo-1627483298606-cf54c61779a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxmaXRuZXNzfGVufDB8fHx8MTcxNTYzMzIwOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Fitness" boxSize="200px" borderRadius="full" />
        <Text fontSize="lg">Earn points by exercising and eating healthy meals. Redeem points for rewards!</Text>
        <HStack spacing={4}>
          <IconButton aria-label="Exercise" icon={<FaRunning />} size="lg" onClick={handleExercise} />
          <IconButton aria-label="Healthy Meal" icon={<FaAppleAlt />} size="lg" onClick={handleHealthyMeal} />
        </HStack>
        <Box width="100%" padding={4}>
          <Text fontSize="lg">Points: {points}</Text>
          <Progress value={points} max={50} size="lg" colorScheme="green" />
        </Box>
        <Button leftIcon={<FaGift />} colorScheme="teal" size="lg" onClick={handleRedeem} isDisabled={points < 50}>
          Redeem Reward
        </Button>
        {points >= 50 && (
          <Text fontSize="lg" color="green.500">
            Congratulations! You can redeem your reward now.
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
