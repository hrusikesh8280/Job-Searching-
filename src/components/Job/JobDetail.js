import React, { useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Center,
  Spinner,
  Button,
  Link as ChakraLink,
} from '@chakra-ui/react';
import {
  FaBriefcase,
  FaLocationArrow,
  FaRegClock,
  FaArrowLeft,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchJobDetails } from '../../redux/actions/jobActions';

const JobDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { language, jobId } = useParams();
  const { job, loading, error } = useSelector((state) => state.job);

  useEffect(() => {
    console.log('Fetching job details...');
    dispatch(fetchJobDetails(jobId));
  }, [dispatch, jobId]);

  const handleApplyClick = () => {
    navigate(`/apply/${jobId}`);
  };

  return (
    <Box p={4}>
      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <>
          <Link to={`/jobs/${language}`} style={{ textDecoration: 'none' }}>
            <ChakraLink color="teal.500" fontSize="lg" mb={4} display="inline-flex" alignItems="center">
              <FaArrowLeft /> Back to Job Listings
            </ChakraLink>
          </Link>
          <Heading as="h2" size="xl" mb={4}>
            Job Details
          </Heading>
          {job ? ( 
            <Box borderWidth="1px" borderRadius="lg" boxShadow="lg" p={4}>
              <Heading as="h3" size="lg" mb={2}>
                {job.title}
              </Heading>
              <Text fontSize="lg" mb={4}>
                {job.company.display_name}
              </Text>
              <Text fontSize="md" mb={4}>
                <FaBriefcase /> {job.contract_type}
              </Text>
              <Text fontSize="md" mb={4}>
                <FaLocationArrow /> {job.location.display_name}
              </Text>
              <Text fontSize="md" mb={4}>
                <FaRegClock /> {job.created}
              </Text>
              <Text fontSize="lg" mb={4}>
                Job Description:
              </Text>
              <Text fontSize="md">{job.description}</Text>
              {job.id && (
                <Button colorScheme="teal" size="lg" mt={4} onClick={handleApplyClick}>
                  Apply for Job
                </Button>
              )}
            </Box>
          ) : (
            <Text>No job details available.</Text>
          )}
        </>
      )}
    </Box>
  );
};

export default JobDetail;
