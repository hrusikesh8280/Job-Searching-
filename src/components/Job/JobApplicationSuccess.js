import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Box, Text } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const JobApplicationSuccess = () => {
  const navigate = useNavigate();
  const controls = useAnimation();

  useEffect(() => {
    const showSuccessMessage = async () => {
      await controls.start({ opacity: 1 });
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
      controls.start({ opacity: 0 });

   
      setTimeout(() => {
        navigate('/jobs/job'); 
      }, 500);
    };

    showSuccessMessage();
  }, [controls, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <FaCheckCircle size={30} style={{ color: 'green', marginBottom: '10px' }} />
      <Text fontSize="lg" fontWeight="bold" mb="10px">
        Success!
      </Text>
      <Text fontSize="md" mb="20px">
        Your application was submitted successfully. 🎉
      </Text>
    </motion.div>
  );
};

export default JobApplicationSuccess;
