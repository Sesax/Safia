import React from "react";
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { Container, Box, Button, Spacer, Flex, Image } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <Container maxW='100wh' paddingLeft={20} paddingTop={5} paddingBottom={3} shadow="lg">
            <Flex>
            <Box>
                    {/* Remplacer le Heading par une Image */}
                    <Image src={require('../assets/Safia_full.png')} alt="Logo Safia" width="100px" height="auto" objectFit="contain"/> {/* Ajustez le chemin et la taille */}
                </Box>
                <Spacer />
                <Box>
                            <Link to='/signaler'>
                                <Button size='lg' colorScheme='gray' variant='ghost'>Signaler</Button>
                            </Link>
                            <Link to='/defis'>
                                <Button size='lg' colorScheme='gray' variant='ghost'>Défis</Button>
                            </Link>
                            <Link to='/boutique'>
                                <Button size='lg' colorScheme='gray' variant='ghost'>Boutique points</Button>
                            </Link>
                            <Link to='/login'>
                                <Button size='lg' colorScheme='gray' variant='ghost'>Déconnexion</Button>
                            </Link>
                </Box>
            </Flex>
        </Container >
    )
}

export default Navbar;