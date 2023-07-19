import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import { getProfile, updateProfile, changePassword, deleteAccount } from '../services/profileService';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    age: '',
    height: '',
    weight: ''
  });
  const [newPassword, setNewPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const fetchedProfile = await getProfile();
      setProfile(fetchedProfile);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleUpdateProfile = async () => {
    try {
      await updateProfile(profile);
      setSuccessMessage('Profile updated successfully.');
    } catch (error) {
      setErrorMessage('Failed to update profile. Please try again.');
    }
  };

  const handleChangePassword = async () => {
    try {
      await changePassword(newPassword);
      setNewPassword('');
      setSuccessMessage('Password changed successfully.');
    } catch (error) {
      setErrorMessage('Failed to change password. Please try again.');
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await deleteAccount();
      // Redirect or perform any additional actions after deleting the account
    } catch (error) {
      setErrorMessage('Failed to delete account. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '5rem' }}>
      <Box mt={4} mb={2}>
        <Typography variant="h4" align="center">
          My Profile
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h6" component="h2" gutterBottom>
          Personal Information
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={profile.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={profile.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          disabled
        />
        <TextField
          label="Age"
          name="age"
          type="number"
          value={profile.age}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Height"
          name="height"
          type="number"
          value={profile.height}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Weight"
          name="weight"
          type="number"
          value={profile.weight}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
      </Box>
      <Box mt={4}>
        <Typography variant="h6" component="h2" gutterBottom>
          Change Password
        </Typography>
        <TextField
          label="New Password"
          name="newPassword"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleChangePassword}>
          Change Password
        </Button>
      </Box>
      <Box mt={4}>
        <Typography variant="h6" component="h2" gutterBottom>
          Actions
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
              Update Profile
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={handleDeleteAccount}>
              Delete Account
            </Button>
          </Grid>
        </Grid>
      </Box>
      {successMessage && (
        <Box mt={2}>
          <Typography variant="body1" color="success" align="center">
            {successMessage}
          </Typography>
        </Box>
      )}
      {errorMessage && (
        <Box mt={2}>
          <Typography variant="body1" color="error" align="center">
            {errorMessage}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Profile;
