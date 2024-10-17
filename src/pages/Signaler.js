import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Image,
  Heading,
  Stack,
  Text,
  IconButton
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa"; // Import des icônes

// Composant de l'image avec swipe
const MotionImage = motion(Image);

const Signaler = () => {
  // État pour gérer l'image actuelle et son statut
  const [imageIndex, setImageIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState("");

  // Liste des images à signaler
  const images = [
    "https://via.placeholder.com/400", // Remplacez par vos propres URLs d'images
    "https://via.placeholder.com/400/FF5733",
    "https://via.placeholder.com/400/C70039"
  ];

  // Fonction pour valider une image
  const handleApprove = () => {
    setSwipeDirection("right");
    setTimeout(() => {
      setSwipeDirection("");
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); // Durée de l'animation
  };

  // Fonction pour rejeter une image
  const handleReject = () => {
    setSwipeDirection("left");
    setTimeout(() => {
      setSwipeDirection("");
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); // Durée de l'animation
  };

  return (
    <motion.div
            initial={{ opacity: 0 }} // État initial : invisible
            animate={{ opacity: 1 }} // Animation : apparition avec opacité
            transition={{ duration: 1 }} // Durée de l'animation
            >
      <Box bg="gray.100" minHeight="92vh" p={5}>
        <Heading as="h2" textAlign="center" mb={8}>
            Ce type de contenu est-il adapté ?
        </Heading>

        <Box display="flex" justifyContent="center">
          <Stack align="center" bg="white" borderRadius="20px">
            <MotionImage
              src={images[imageIndex]}
              alt="Image à signaler"
              boxSize="400px"
              borderRadius="md"
              animate={{ x: swipeDirection === "right" ? 300 : swipeDirection === "left" ? -300 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={imageIndex}
            />

            <Stack direction="row" spacing={0} width="400px">
              <IconButton
                variant="link"
                borderRadius={0}
                colorScheme="red"
                aria-label="Rejeter"
                icon={<FaTimes size={95} />}
                size="lg"
                flex="1"
                onClick={handleReject}
              />
              <IconButton
                variant="link"
                borderRadius={0}
                colorScheme="black"
                aria-label="Infos"
                icon={<FaInfoCircle size={50} />}
                size="xl"
                flex="1"
              />
              <IconButton
                variant="link"
                borderRadius={0}
                colorScheme="green"
                aria-label="Valider"
                icon={<FaCheck size={90} />}
                size="lg"
                flex="1"
                onClick={handleApprove}
              />
            </Stack>
          </Stack>
        </Box>
      </Box>
      </motion.div>
  );
}

export default Signaler;
