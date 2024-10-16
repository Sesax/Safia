import { useState } from "react"
import { useLogin } from '../hooks/useLogin'
import { FaUserAlt, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { chakra, Center, Link, InputLeftElement, InputRightElement, Stack, Heading, Box, Flex, Button, InputGroup, FormControl, Avatar, Input } from '@chakra-ui/react'

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, isLoading, error } = useLogin()
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="92vh"
            justifyContent="center"
            backgroundColor="gray.200"
            alignItems="center"
        >
        </Flex >
    )
}

export default Signaler