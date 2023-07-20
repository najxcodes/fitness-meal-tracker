import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { getFoods, deleteFood, updateFood } from '../services/foodService';
import { getExercises, deleteExercise, updateExercise } from '../services/exerciseService';

const DayPage = () => {
  // State for managing food and exercise data
  const [exercises, setExercises] = useState([]);
  const [selectedFood, setSelectedFood] = useState('');
  const [selectedExercise, setSelectedExercise] = useState('');
  const [userData, setUserData] = useState({
    weight: 70,
    height: 175,
    age: 30,
    // Add other necessary data
  });
  const [foods, setFoods] = useState([]);
  const [newFood, setNewFood] = useState({
    name: '',
    baseAmount: 0,
    energy: 0,
    fat: 0,
    carbohydrates: 0,
    protein: 0,
    salt: 0,
    fiber: 0,
    drink: false,
  });

  useEffect(() => {
    // Fetch user data and set it to the state
    // You can fetch this data from your backend or local storage
    const user = {
      weight: 70, // Replace with the actual weight
      height: 175, // Replace with the actual height
      age: 30, // Replace with the actual age
      // Add other necessary data
    };
    setUserData(user);

    // Fetch food data
    fetchFoods();

    // Fetch exercise data
    fetchExercises();
  }, []);

  // Function to fetch food data from the server
  const fetchFoods = async () => {
    try {
      const fetchedFoods = await getFoods();
      setFoods(fetchedFoods);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to fetch exercise data from the server
  const fetchExercises = async () => {
    try {
      const fetchedExercises = await getExercises();
      setExercises(fetchedExercises);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle adding a meal
  const handleAddMeal = () => {
    // Implement the logic to add a meal for the current day
  };

  // Function to handle adding an exercise
  const handleAddExercise = () => {
    // Implement the logic to add an exercise for the current day
  };

  // Function to handle adjusting food amount/time
  const handleAdjustFood = (foodId) => {
    // Implement the logic to adjust food amount/time for the current day
  };

  // Function to handle adjusting exercise time
  const handleAdjustExercise = (exerciseId) => {
    // Implement the logic to adjust exercise time for the current day
  };

  // Function to handle deleting a meal
  const handleDeleteMeal = (foodId) => {
    // Implement the logic to delete a meal for the current day
  };

  // Function to handle deleting an exercise
  const handleDeleteExercise = (exerciseId) => {
    // Implement the logic to delete an exercise for the current day
  };

  // Function to calculate calorie-related metrics for the current day
  const calculateMetrics = () => {
    // Implement the logic to calculate calorie-related metrics for the current day
  };

  // Calculations for calories, protein, carbohydrates, and fat
  const calculateCalories = () => {
    const { weight, height, age } = userData;
    const BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    const calories = BMR; // You can add more calculations if needed
    return calories;
  };

  const calculateProtein = () => {
    const proteinPerKg = 0.793664791;
    const protein = proteinPerKg * userData.weight;
    return protein;
  };

  const calculateCarbohydrates = () => {
    const calories = calculateCalories();
    const carbohydrates = (calories / 2) / 4;
    return carbohydrates;
  };

  const calculateFat = () => {
    const calories = calculateCalories();
    const fatCalories = calories * 0.30;
    const fatInGrams = fatCalories / 9;
    return fatInGrams;
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '5rem' }}>
      <Typography variant="h4" gutterBottom>
        Day Page
      </Typography>

      {/* Add Meal Section */}
      <Box mt={4} mb={2}>
        <Typography variant="h6" gutterBottom>
          Add Meal
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="food-label">Select Food</InputLabel>
              <Select
                labelId="food-label"
                id="food"
                value={selectedFood}
                onChange={(e) => setSelectedFood(e.target.value)}
              >
                {foods.map((food) => (
                  <MenuItem key={food.id} value={food.id}>
                    {food.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Add more input fields for adjusting food amount/time */}
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleAddMeal}>
              Add Meal
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Add Exercise Section */}
      <Box mt={4} mb={2}>
        <Typography variant="h6" gutterBottom>
          Add Exercise
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="exercise-label">Select Exercise</InputLabel>
              <Select
                labelId="exercise-label"
                id="exercise"
                value={selectedExercise}
                onChange={(e) => setSelectedExercise(e.target.value)}
              >
                {exercises.map((exercise) => (
                  <MenuItem key={exercise.id} value={exercise.id}>
                    {exercise.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Add more input fields for adjusting exercise time */}
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleAddExercise}>
              Add Exercise
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Food List Section */}
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Food List
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Base Amount</TableCell>
                <TableCell>Energy</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Render food list here */}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Exercise List Section */}
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Exercise List
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Render exercise list here */}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Calorie Metrics Section */}
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Daily Nutrition Calculations
        </Typography>
        <Typography variant="body1" gutterBottom>
          Caloric Intake: {calculateCalories()} kcal
        </Typography>
        <Typography variant="body1" gutterBottom>
          Protein Intake: {calculateProtein()} g
        </Typography>
        <Typography variant="body1" gutterBottom>
          Carbohydrate Intake: {calculateCarbohydrates()} g
        </Typography>
        <Typography variant="body1" gutterBottom>
          Fat Intake: {calculateFat()} g
        </Typography>
      </Box>
    </Container>
  );
};

export default DayPage;
