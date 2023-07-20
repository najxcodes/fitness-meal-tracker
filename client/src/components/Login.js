import React from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import the js-cookie library

import backgroundImage from '../assets/images/nature_green.jpg';

const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.4,
    filter: 'blur(8px)',
  },
}));
// #edf9f8
const StyledCard = styled(Card)(({ theme }) => ({
  width: 300,
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
  backdropFilter: 'blur(8px)',
  // backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: '#c2e9e7',

}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const Login = () => {
  const [loginData, setLoginData] = React.useState({
    email: '',
    password: '',
  });
  const [error, setError] = React.useState('');
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
      console.log(response.data);
      console.log("this is log:", response)
      if (response.data === 'successfully signed in!') {
        // const token = Cookies.get(); // Extract the token from the response or wherever it is available
        // console.log("this is cookies:", token)
        // Cookies.set('token', token, { expires: 7 }); // Set the token to expire after 7 days (same as your backend token expiry)
        
        navigate('/food');
      }
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
      <StyledCard>
        <StyledCardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
              InputProps={{
                sx: {
                  backgroundColor: '#def3f2',
                  color: '#3daaa4'  // Set the desired color
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              InputProps={{
                sx: {
                  backgroundColor: '#def3f2',
                  color: '#3daaa4'  // Set the desired color#42b8b2
                },
              }}
            />
            <Button type="submit" variant="contained" color="primary" 
             sx={{
              backgroundColor: '#42b8b2', // Set the desired background color
              color: '#ffffff',
              fontWeight:'bold' // Set the desired text color
            }} >
              Login
            </Button>
            {error && (
              <Typography variant="body1" color="error" align="center">
                {error}
              </Typography>
            )}
          </form>
        </StyledCardContent>
      </StyledCard>
    </StyledContainer>
  );
};

export default Login;
