import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Link, useLocation } from 'react-router-dom';
import SpaIcon from '@mui/icons-material/Spa';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: 1201, // Set the zIndex value manually
  backgroundColor: '#42b8b2',
  fontFamily: "'Montserrat', sans-serif", // Apply Montserrat font
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const NavBar = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('');

  const isActiveRoute = (route) => {
    return route === location.pathname;
  };

  const handleButtonClick = (route) => {
    setActiveButton(route);
  };

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <Box display="flex" alignItems="center">
          <SpaIcon sx={{ marginRight: '0.5rem' }} /> {/* Add SpaIcon with right margin */}
          <Typography variant="h6" component="div" fontWeight="bold">
            NutriFit
          </Typography>
        </Box>
        <Box>
          <Button
            component={Link}
            to="/login"
            color={isActiveRoute('/login') ? 'secondary' : 'inherit'}
            sx={{
              backgroundColor: activeButton === '/login' ? '#c2e9e7' : 'inherit',
              color: activeButton === '/login' ? '#42b8b2' : 'inherit',
            }}
            onClick={() => handleButtonClick('/login')}
            fontWeight="bold"
          >
            <Typography variant="inherit" fontWeight="bold">
              Login
            </Typography>
          </Button>
          <Button
            component={Link}
            to="/register"
            color={isActiveRoute('/register') ? 'secondary' : 'inherit'}
            sx={{
              backgroundColor: activeButton === '/register' ? '#c2e9e7' : 'inherit',
              color: activeButton === '/register' ? '#42b8b2' : 'inherit',
            }}
            onClick={() => handleButtonClick('/register')}
            fontWeight="bold"
          >
            <Typography variant="inherit" fontWeight="bold">
              Register
            </Typography>
          </Button>
          <Button
            component={Link}
            to="/food"
            color={isActiveRoute('/food') ? 'secondary' : 'inherit'}
            sx={{
              backgroundColor: activeButton === '/food' ? '#c2e9e7' : 'inherit',
              color: activeButton === '/food' ? '#42b8b2' : 'inherit',
            }}
            onClick={() => handleButtonClick('/food')}
            fontWeight="bold"
          >
            <Typography variant="inherit" fontWeight="bold">
              Food
            </Typography>
          </Button>
          <Button
            component={Link}
            to="/exercises"
            color={isActiveRoute('/exercises') ? 'secondary' : 'inherit'}
            sx={{
              backgroundColor: activeButton === '/exercises' ? '#c2e9e7' : 'inherit',
              color: activeButton === '/exercises' ? '#42b8b2' : 'inherit',
            }}
            onClick={() => handleButtonClick('/exercises')}
            fontWeight="bold"
          >
            <Typography variant="inherit" fontWeight="bold">
              Exercises
            </Typography>
          </Button>
          <Button
            component={Link}
            to="/profile"
            color={isActiveRoute('/profile') ? 'secondary' : 'inherit'}
            sx={{
              backgroundColor: activeButton === '/profile' ? '#c2e9e7' : 'inherit',
              color: activeButton === '/profile' ? '#42b8b2' : 'inherit',
            }}
            onClick={() => handleButtonClick('/profile')}
            fontWeight="bold"
          >
            <Typography variant="inherit" fontWeight="bold">
              Profile
            </Typography>
          </Button>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default NavBar;
