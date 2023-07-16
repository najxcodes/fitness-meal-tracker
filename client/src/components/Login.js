import React from 'react';
import {  Container, Typography, TextField, Button} from '@mui/material';
import { styled } from '@mui/system';

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
  return (
    <StyledContainer>
      <Typography variant="h3" align="center" gutterBottom>
        Login
      </Typography>
      <StyledForm>
        <TextField label="Email" variant="outlined" />
        <TextField label="Password" type="password" variant="outlined" />
        <Button variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </StyledForm>
    </StyledContainer>
  );
};

export default Login;