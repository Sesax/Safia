import React from "react";
import {
  ChakraProvider,
  Box,
  Stack,
  Text,
  Badge,
  Icon,
  SimpleGrid,
  Button,
  Spacer,
  Heading
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"; // Import des icônes

function Defis() {
  // Exemple de défis
  const challenges = [
    {
      id: 1,
      description: "Publie une photo sur Instagram avec notre produit.",
      points: 50,
      social: "Instagram",
      icon: FaInstagram
    },
    {
      id: 2,
      description: "Partage une publication sur Twitter à propos de notre dernière offre.",
      points: 30,
      social: "Twitter",
      icon: FaTwitter
    },
    {
      id: 3,
      description: "Rejoins notre groupe Facebook et commente notre dernier post.",
      points: 40,
      social: "Facebook",
      icon: FaFacebook
    }
  ];

  const getButtonColorScheme = (social) => {
    switch (social) {
      case "Instagram":
        return "pink"; // Couleur rose pour Instagram
      case "Twitter":
        return "cyan"; // Couleur cyan pour Twitter
      case "Facebook":
        return "blue"; // Couleur bleue pour Facebook
      default:
        return "gray"; // Couleur par défaut
    }
  };

  return (
    <motion.div
            initial={{ opacity: 0 }} // État initial : invisible
            animate={{ opacity: 1 }} // Animation : apparition avec opacité
            transition={{ duration: 1 }} // Durée de l'animation
            >
    <Box bg="gray.100" minHeight="100vh" p={5}>
        <Heading as="h1" textAlign="center" mb={8}>
          Défis à Réaliser
        </Heading>

        {/* Liste verticale des défis */}
        <Stack spacing={6} mx="auto">
          {challenges.map((challenge) => (
            <Box
              key={challenge.id}
              bg="white"
              p={5}
              borderRadius="lg"
              boxShadow="md"
              _hover={{ transform: "scale(1.02)", transition: "0.3s ease-in-out" }}
              width="100%"
            >
              <Stack direction="row" align="center" spacing={4}>
                {/* Icône du réseau social */}
                <Icon as={challenge.icon} boxSize={12} color={getButtonColorScheme(challenge.social)} />

                {/* Informations du défi */}
                <Stack spacing={1} flex="1">
                  {/* Description du défi */}
                  <Text fontWeight="bold" fontSize="lg">
                    {challenge.description}
                  </Text>

                  {/* Points à gagner */}
                  <Badge colorScheme={getButtonColorScheme(challenge.social)} fontSize="md">
                    {challenge.points} points à gagner
                  </Badge>

                  {/* Réseau social */}
                  <Text color="gray.500" fontSize="sm">
                    Réseau social : {challenge.social}
                  </Text>
                </Stack>

                {/* Spacer pour pousser le bouton vers la droite */}
                <Spacer />

                {/* Bouton "Participer" */}
                <Button colorScheme={getButtonColorScheme(challenge.social)} size="md">
                  Participer
                </Button>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
      </motion.div>
  );
}

export default Defis;
