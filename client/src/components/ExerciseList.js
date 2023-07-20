import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState({
    name: '',
    duration: 0,
    caloriesBurned: 0,
  });

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    try {
      const response = await axios.get('http://localhost:3015/fitness/exercises/');
      setExercises(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewExercise((prevExercise) => ({
      ...prevExercise,
      [name]: value,
    }));
  };

  const handleAddExercise = async () => {
    try {
      await axios.post('http://localhost:3015/fitness/exercise', newExercise, { withCredentials: true });
      fetchExercises();
      setNewExercise({
        name: '',
        duration: 0,
        caloriesBurned: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteExercise = async (exerciseId) => {
    try {
      await axios.delete(`http://localhost:3015/fitness/exercise/`);
      fetchExercises();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditExercise = async (exerciseId, updatedExerciseData) => {
    try {
      await axios.put(`http://localhost:3015/fitness/exercise/${exerciseId}`, updatedExerciseData);
      fetchExercises();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '5rem' }}>
      <Typography variant="h4" gutterBottom align="center">
        Exercise Page
      </Typography>

      <Box mt={4} mb={2}>
        <Typography variant="h6" gutterBottom>
          Add Exercise
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Exercise Name"
              name="name"
              value={newExercise.name}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Duration (minutes)"
              name="duration"
              type="number"
              value={newExercise.duration}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Calories Burned"
              name="caloriesBurned"
              type="number"
              value={newExercise.caloriesBurned}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleAddExercise}>
              Add Exercise
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Exercise List
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Duration (minutes)</TableCell>
                <TableCell>Calories Burned</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.map((exercise) => (
                <TableRow key={exercise._id}>
                  <TableCell>{exercise.name}</TableCell>
                  <TableCell>{exercise.duration}</TableCell>
                  <TableCell>{exercise.caloriesBurned}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleEditExercise(exercise._id)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleDeleteExercise(exercise._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default ExerciseList;
