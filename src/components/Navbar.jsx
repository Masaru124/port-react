import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Link,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavLink = ({ href, children, onClick }) => (
  <Link
    px={3}
    py={2}
    rounded={"md"}
    fontWeight="semibold"
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
    }}
    href={href}
    onClick={onClick}
    _focus={{ boxShadow: "outline" }}
  >
    {children}
  </Link>
);

const MotionBox = motion(Box);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const bg = colorMode === "light" ? "whiteAlpha.900" : "blackAlpha.700";
  const color = colorMode === "light" ? "gray.800" : "white";
  const mobileBg = colorMode === "light" ? "gray.100" : "gray.800";

  return (
    <>
      <Box
        bg={bg}
        px={6}
        position="fixed"
        w="100%"
        zIndex={50}
        backdropFilter="saturate(180%) blur(10px)"
        boxShadow="sm"
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          maxW="7xl"
          mx="auto"
        >
          <Box color={color} fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} letterSpacing="wide">
            My Portfolio
          </Box>

          <IconButton
            size={"md"}
            icon={isOpen ? <FaTimes /> : <FaBars />}
            aria-label={"Toggle Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            color={color}
            bg="transparent"
            _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.700" }}
            transition="background-color 0.2s ease"
          />

          <HStack spacing={10} alignItems={"center"} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </HStack>
        </Flex>

        <AnimatePresence>
          {isOpen && (
            <MotionBox
              pb={4}
              display={{ md: "none" }}
              bg={mobileBg}
              rounded="md"
              shadow="md"
              mt={2}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              overflow="hidden"
            >
              <Stack as={"nav"} spacing={3}>
                {Links.map((link) => (
                  <NavLink key={link.label} href={link.href} onClick={onClose}>
                    {link.label}
                  </NavLink>
                ))}
              </Stack>
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>
    </>
  );
};

export default Navbar;
