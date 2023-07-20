import axios from 'axios';

const BASE_URL = 'http://localhost:3015/fitness/exercise'; // Update the base URL with your server's API endpoint

// Fetch all exercises
export const getExercises = async () => {
  try {
    const response = await axios.get('http://localhost:3015/fitness/exercises');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add a new exercise
export const addExercise = async (exerciseData) => {
  try {
    const response = await axios.post(BASE_URL, exerciseData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete an exercise by ID
export const deleteExercise = async (exerciseId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${exerciseId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update an exercise by ID
export const updateExercise = async (exerciseId, updatedExerciseData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${exerciseId}`, updatedExerciseData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
