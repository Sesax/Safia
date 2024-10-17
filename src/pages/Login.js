import { useState } from "react"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { chakra, Text, Icon, Stack, Heading, Box, Flex, Button, Link, FormControl, Avatar, Input } from '@chakra-ui/react'
import { motion } from "framer-motion";

const Login = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <motion.div
            initial={{ opacity: 0 }} // État initial : invisible
            animate={{ opacity: 1 }} // Animation : apparition avec opacité
            transition={{ duration: 1 }} // Durée de l'animation
            >
        <Flex
            flexDirection="column"
            width="100wh"
            height="92vh"
            justifyContent="center"
            backgroundColor="gray.200"
            alignItems="center"
        >
            
            <Box
          bg="white"
          p={8}
          borderRadius="20px"
          boxShadow="md"
          width="100%"
          maxWidth="400px"
        >
          <Heading as="h2" mb={6} textAlign="center">
            Connexion
          </Heading>

          {/* Boutons de connexion via réseaux sociaux */}
          <Stack direction="column" spacing={4} justifyContent="center">
            <Link href="/">
            <Button
              leftIcon={<Icon as={FaFacebook} />}
              colorScheme="blue"
              variant="solid"
              width="full"
            >
              Facebook
            </Button>
            </Link>
            <Link href="/">
            <Button
              leftIcon={<Icon as={FaTwitter} />}
              colorScheme="cyan"
              variant="solid"
              width="full"
            >
              Twitter
            </Button>
            </Link>
            <Link href="/">
            <Button
              leftIcon={<Icon as={FaInstagram} />}
              colorScheme="pink"
              variant="solid"
              width="full"
            >
              Instagram
            </Button>
            </Link>
          </Stack>
        </Box>
        
        </Flex >
        </motion.div>
    )
}

export default Login