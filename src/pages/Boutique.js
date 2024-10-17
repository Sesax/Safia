import React from "react";
import {
  ChakraProvider,
  Box,
  Image,
  Badge,
  Text,
  Button,
  SimpleGrid,
  Stack,
  Heading,
  Spacer
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SearchBar } from "../components/SearchBar";

const Boutique = () => {
  // Exemple de produits
  const products = [
    {
      id: 1,
      name: "Chapeau pointu",
      price: 59,
      rating: 4.5,
      numReviews: 34
    },
    {
      id: 2,
      name: "Bannière de profile",
      price: 129,
      rating: 4.7,
      numReviews: 28
    },
    {
      id: 3,
      name: "Badge ancien",
      price: 79,
      rating: 4.3,
      numReviews: 18
    },
    {
        id: 4,
        name: "Nouvelles sneakers",
        price: 100000,
        rating: 5.0,
        numReviews: 599
      }
  ];

  return (
    <motion.div
            initial={{ opacity: 0 }} // État initial : invisible
            animate={{ opacity: 1 }} // Animation : apparition avec opacité
            transition={{ duration: 1 }} // Durée de l'animation
            >
      <Box bg="gray.100" minHeight="100vh" p={5}>
        <SearchBar />
        <Box minHeight="30px"></Box>
        {/* Grille de produits */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {products.map((product) => (
            <Box
              key={product.id}
              bg="white"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              _hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out" }}
            >

              <Box p={5}>
                <Stack spacing={3}>
                  {/* Nom du produit */}
                  <Text fontWeight="bold" fontSize="xl">
                    {product.name}
                  </Text>

                  {/* Prix du produit */}
                  <Text color="blue.500" fontSize="2xl">
                    {product.price} points
                  </Text>

                  {/* Note du produit */}
                  <Box d="flex" alignItems="center">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      {product.rating}★
                    </Badge>
                    <Text ml={2} color="gray.600">
                      ({product.numReviews} avis)
                    </Text>
                  </Box>

                  {/* Bouton Ajouter au panier */}
                  <Button colorScheme="blue" variant="solid" width="full">
                    Ajouter au panier
                  </Button>
                </Stack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      </motion.div>
  );
}

export default Boutique;
