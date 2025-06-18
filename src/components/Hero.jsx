import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const Hero = () => {
  return (
    <MotionBox
      as="section"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, blue.600, purple.700)"
      px={4}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box
        textAlign="center"
        maxW="container.md"
        color={useColorModeValue("white", "gray.100")}
      >
        <Heading
          as="h1"
          fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
          fontWeight="bold"
          mb={4}
          lineHeight="shorter"
          letterSpacing="tight"
        >
          Welcome to My Portfolio
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} mb={6} opacity={0.85}>
          Matharishwa.S
        </Text>
        <TypeAnimation
          sequence={["Fullstack Developer", 2000, "Data Analyst", 2000]}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "1.5rem",
            color: "rgba(255, 255, 255, 0.85)",
            marginBottom: "2rem",
            fontWeight: "medium",
          }}
        />
        <Button
          as="a"
          href="#about"
          size="lg"
          px={8}
          py={6}
          bg="whiteAlpha.300"
          color="white"
          _hover={{ bg: "whiteAlpha.500" }}
          borderRadius="lg"
          backdropFilter="blur(10px)"
          transition="background-color 0.3s ease"
        >
          Explore My Work
        </Button>
      </Box>
    </MotionBox>
  );
};

export default Hero;
