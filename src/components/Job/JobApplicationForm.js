import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, Input, Textarea, FormControl, FormLabel } from '@chakra-ui/react';
import JobApplicationSuccess from './JobApplicationSuccess';

const JobApplicationForm = ({ isOpen, onClose, jobTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: '',
    resume: null,
  });
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'resume' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
    onClose();
    console.log('Application Data:', formData);
    
    navigate('/success');
  };
  console.log('Is modal open?', isOpen); 

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Apply for {jobTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Cover Letter Note</FormLabel>
              <Textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={4}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Resume (optional)</FormLabel>
              <Input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
              />
            </FormControl>
            <Button type="submit" colorScheme="teal">
              Submit Application
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
      {showSuccessModal && (
        <JobApplicationSuccess onClose={() => setShowSuccessModal(false)} />
      )}
    </Modal>
  );
};

export default JobApplicationForm;
