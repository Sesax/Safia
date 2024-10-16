import React from "react";
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from "../hooks/useAuthContext";
import { AiOutlineHome } from "react-icons/ai";
import { Container, Box, Button, Spacer, Flex, Heading } from '@chakra-ui/react'

const Navbar = () => {

    const { user } = useAuthContext()
    const { logout } = useLogout()

    const handleClick = () => {
        logout()
    }
    return (
        <Container maxW='100wh' paddingLeft={20} paddingTop={5} paddingBottom={3} shadow="lg">
            <Flex>
                <Box>
                    <Heading size='lg' paddingTop={1}>Safia</Heading>
                </Box>
                <Spacer />
                <Box>
                    {user && (
                        <div>
                            <Link to='/login'>
                                <Button size='lg' colorScheme='gray' variant='ghost'>Signaler</Button>
                            </Link>
                            <Link to='/signup'>
                                <Button size='lg' colorScheme='gray' variant='ghost'>Défis</Button>
                            </Link>
                            <Link to='/signup'>
                                <Button size='lg' colorScheme='gray' variant='ghost'>Boutique points</Button>
                            </Link>
                            <Button onClick={handleClick} size='lg' colorScheme='gray' variant='ghost'>Déconnexion</Button>
                        </div>
                    )}
                </Box>
            </Flex>
        </Container >
    )
}

export default Navbar;