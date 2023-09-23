import React, { useState } from 'react';
import {
  Box,
  Center,
  Input,
  Button,
  Heading,
  Container,
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('');

  const handleSearch = () => {
    if (language) {
      navigate(`/jobs/${language}`);
    }
  };

  return (
    <Container maxW="xl" centerContent>
      <Stack spacing={8} align="center">
        <Heading as="h1" size="xl">
          Find Your Dream Job
        </Heading>
        <Text fontSize="lg">Enter a programming language to search for job listings:</Text>
        <Box width="100%" maxW="sm">
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <FaSearch color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Enter a programming language..."
              size="lg"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
          </InputGroup>
        </Box>
        <Button colorScheme="teal" size="lg" onClick={handleSearch}>
          Search Jobs
        </Button>
      </Stack>
    </Container>
  );
};

export default LandingPage;
