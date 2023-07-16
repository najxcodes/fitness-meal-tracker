import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
}));

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  maxWidth: 300,
}));

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3020/login', loginData);
      console.log(response.data); // Handle the response data as needed
      // Redirect to Dashboard upon successful login
      navigate('/dashboard');
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setError('Email or password is incorrect');
        } else if (error.response.status === 404) {
          setError('Email or password is incorrect');
        } else {
          setError('An error occurred');
        }
      } else {
        setError('An error occurred');
      }
    }
  };

  return (
    <StyledContainer>
      <Typography variant="h3" align="center" gutterBottom>
        Login
      </Typography>
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
        {error && (
          <Typography variant="body1" color="error" align="center">
            {error}
          </Typography>
        )}
      </StyledForm>
    </StyledContainer>
  );
};

export default Login;
