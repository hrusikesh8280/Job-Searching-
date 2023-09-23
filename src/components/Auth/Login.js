import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  Text,
  Link as ChakraLink,
  Flex,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user);

  const navigate = useNavigate();

  const handleLogin = () => {
    const credentials = { email, password };
    dispatch(loginUser(credentials))
        navigate('/');
     
  };

  return (
    <Flex align="center" justify="center" minHeight="100vh">
      <Box p={6} borderWidth={1} borderRadius="md" shadow="md" w="300px">
        <Heading size="md" mb={4}>
          Login
        </Heading>
        {error && <Text color="red.500">{error}</Text>}
        <Input
          placeholder="Email"
          mb={2}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          mb={4}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
        <Text mt={2}>
          Don't have an account?{' '}
          <ChakraLink as={RouterLink} to="/signup">
            Sign Up
          </ChakraLink>
        </Text>
      </Box>
    </Flex>
  );
};

export default Login;
