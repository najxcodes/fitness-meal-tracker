import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

const RegistrationWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: 'linear-gradient(to bottom, #ffffff, #e3f2fd)',
});

const FormWrapper = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '500px',
  padding: '32px',
  background: '#ffffff',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
});

const Title = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '16px',
  textAlign: 'center',
});

const ButtonWrapper = styled(Button)({
  marginTop: '16px',
});

const Registration = () => {
  const [registrationData, setRegistrationData] = useState({
    firstname: '',
    lastname: '',
    street: '',
    postcode: '',
    city: '',
    country: '',
    phone: '',
    password: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3020/signup', registrationData);
      console.log(response.data); // Handle the response data as needed
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <RegistrationWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <Title variant="h5">Registration</Title>
        <TextField
          label="First Name"
          name="firstname"
          value={registrationData.firstname}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Last Name"
          name="lastname"
          value={registrationData.lastname}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Street"
          name="street"
          value={registrationData.street}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Postcode"
          name="postcode"
          value={registrationData.postcode}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="City"
          name="city"
          value={registrationData.city}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Country"
          name="country"
          value={registrationData.country}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Phone"
          name="phone"
          value={registrationData.phone}
          onChange={handleInputChange}
          fullWidth
        />
         <TextField
          label="Password"
          name="password"
          type="password"
          value={registrationData.password}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={registrationData.email}
          onChange={handleInputChange}
          fullWidth
        />
        <ButtonWrapper type="submit" variant="contained" color="primary" fullWidth>
          Register
        </ButtonWrapper>
      </FormWrapper>
    </RegistrationWrapper>
  );
};

export default Registration;
