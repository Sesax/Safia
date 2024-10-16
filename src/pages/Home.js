import { useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { chakra, Center, Link, InputLeftElement, InputRightElement, Stack, Heading, Box, Flex, Button, InputGroup, FormControl, Avatar, Input } from '@chakra-ui/react'

const Home = () => {
    const { user } = useAuthContext()

    useEffect(() => {

    }, [user])

    return (
        <Flex
            width="100wh"
            height="92vh"
            justifyContent="center"
            backgroundColor="gray.200">

        </Flex>
    )
}

export default Home;