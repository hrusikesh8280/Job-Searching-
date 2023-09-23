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
import { signupUser } from '../../redux/actions/authActions';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user);

  const handleSignup = () => {
    const userData = { name, email, password };
    dispatch(signupUser(userData));
  };

  return (
    <Flex align="center" justify="center" minHeight="100vh">
      <Box p={6} borderWidth={1} borderRadius="md" shadow="md" w="300px">
        <Heading size="md" mb={4}>
          Sign Up
        </Heading>
        {error && <Text color="red.500">{error}</Text>}
        {user && (
          <Text color="green.500" mb={4}>
            Registration successful! Welcome, {user.name}!
          </Text>
        )}
        <Input
          placeholder="Name"
          mb={2}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button colorScheme="blue" onClick={handleSignup}>
          Sign Up
        </Button>
        <Text mt={2}>
          Already have an account?{' '}
          <ChakraLink as={RouterLink} to="/login">
            Log In
          </ChakraLink>
        </Text>
      </Box>
    </Flex>
  );
};

export default Signup;
