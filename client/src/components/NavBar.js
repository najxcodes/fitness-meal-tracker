import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Fitness Meal Tracker
        </Typography>
        <Button component={RouterLink} to="/" color="inherit">
          Login
        </Button>
        <Button component={RouterLink} to="/register" color="inherit">
          Register
        </Button>
        <Button component={RouterLink} to="/dashboard" color="inherit">
          Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
