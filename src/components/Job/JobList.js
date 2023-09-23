import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Center,
  Spinner,
  Text,
  Button,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchJobsByLanguage } from '../../redux/actions/jobActions';
import JobApplicationForm from './JobApplicationForm';

const JobList = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const { language } = useParams();
  const { jobs, loading, error } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(fetchJobsByLanguage(language));
  }, [dispatch, language]);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  }

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Job Listings for {language}
      </Heading>
      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : jobs.length > 0 ? (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
          {jobs.map((job) => (
            <Box
              key={job.id}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="lg"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.02)' }}
            >
              <Heading as="h3" size="lg" mb={2}>
                {job.title}
              </Heading>
              <Text fontSize="md" mb={2}>
                {job.company.display_name}
              </Text>
              <Text fontSize="sm" color="gray.500" mb={2}>
                <FaBriefcase /> {job.contract_type}
              </Text>
              <Text fontSize="sm" color="gray.500" mb={2}>
                <FaMapMarkerAlt /> {job.location.display_name}
              </Text>
              <Text fontSize="md" mb={2}>
                Job Description: {job.description}
              </Text>
              <Button colorScheme="teal" size="sm" mt={2} as={Link} onClick={() => handleApplyClick(job)}>
                Apply for Job
              </Button>
            </Box>
          ))}
        <JobApplicationForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJob?.title}
      />
        </SimpleGrid>
      ) : (
        <Text>No job listings found for {language}.</Text>
      )}
    </Box>
  );
};

export default JobList;
