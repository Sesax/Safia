import { useEffect } from "react"
import { chakra, Center, Image, InputLeftElement, InputRightElement, Stack, Heading, Box, Flex, Button, InputGroup, FormControl, Avatar, Input } from '@chakra-ui/react'

const Game = () => {

    return (
        <Box width="100vw" height="100vh" overflow="hidden">
            <Image 
                src={require('../assets/image.png')} // Remplacez par le chemin de votre image
                alt="Full Page Image"
                objectFit="cover" // Remplit toute la page tout en maintenant les proportions
                width="100%" 
                height="100%" 
            />
        </Box>
    )
}

export default Game;