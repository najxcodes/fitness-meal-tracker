import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here, e.g., clearing tokens, resetting state, etc.
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Fitness Meal Tracker
        </Typography>
        {loggedIn ? (
          <>
            <Button component={Link} to="/foods" color="inherit">
              Foods
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Button component={Link} to="/register" color="inherit">
              Register
            </Button>
            <Button component={Link} to="/login" color="inherit">
              Sign In
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
