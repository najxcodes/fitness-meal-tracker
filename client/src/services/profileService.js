import axios from 'axios';

// Fetch user's profile
export const getProfile = async () => {
  try {
    const response = await axios.get('/api/profile');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Update user's profile
export const updateProfile = async (updatedProfile) => {
  try {
    const response = await axios.put('/api/profile', updatedProfile);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Change user's password
export const changePassword = async (newPassword) => {
  try {
    const response = await axios.put('/api/profile/password', { newPassword });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Delete user's account
export const deleteAccount = async () => {
  try {
    const response = await axios.delete('/api/profile');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
