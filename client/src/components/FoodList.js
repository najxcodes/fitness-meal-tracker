import React, { useState, useEffect} from 'react';
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
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { getFoods, addFood, deleteFood, updateFood } from '../services/foodService';

const FoodPage = () => {
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
    drink: false
  });

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const fetchedFoods = await getFoods();
      setFoods(fetchedFoods);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewFood((prevFood) => ({
      ...prevFood,
      [name]: value
    }));
  };

  const handleAddFood = async () => {
    try {
      await addFood(newFood);
      fetchFoods();
      setNewFood({
        name: '',
        baseAmount: 0,
        energy: 0,
        fat: 0,
        carbohydrates: 0,
        protein: 0,
        salt: 0,
        fiber: 0,
        drink: false
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleDeleteFood = async (foodId) => {
    try {
      await deleteFood(foodId);
      fetchFoods();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateFood = async (foodId) => {
    try {
      const updatedFoodData = {
        // Provide the updated food data here
      };
      await updateFood(foodId, updatedFoodData);
      fetchFoods();
    } catch (error) {
      console.log(error);
    }
  };

  const updatedFoodData = {
    // Define the updated food data here
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '5rem' }}>
      <Typography variant="h4" gutterBottom align="center">
        Food Page
      </Typography>

      <Box mt={4} mb={2}>
  <Typography variant="h6" gutterBottom>
    Add Food
  </Typography>
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <TextField
        label="Name"
        name="name"
        value={newFood.name}
        onChange={handleInputChange}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        label="Base Amount"
        name="baseAmount"
        type="number"
        value={newFood.baseAmount}
        onChange={handleInputChange}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        label="Energy"
        name="energy"
        type="number"
        value={newFood.energy}
        onChange={handleInputChange}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        label="Fat"
        name="fat"
        type="number"
        value={newFood.fat}
        onChange={handleInputChange}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        label="Carbohydrates"
        name="carbohydrates"
        type="number"
        value={newFood.carbohydrates}
        onChange={handleInputChange}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        label="Protein"
        name="protein"
        type="number"
        value={newFood.protein}
        onChange={handleInputChange}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        label="Salt"
        name="salt"
        type="number"
        value={newFood.salt}
        onChange={handleInputChange}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        label="Fiber"
        name="fiber"
        type="number"
        value={newFood.fiber}
        onChange={handleInputChange}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
  <FormControl fullWidth>
    <InputLabel id="drink-label">Drink</InputLabel>
    <Select
      labelId="drink-label"
      id="drink"
      name="drink"
      value={newFood.drink}
      onChange={handleInputChange}
    >
      <MenuItem value={true}>True</MenuItem>
      <MenuItem value={false}>False</MenuItem>
    </Select>
  </FormControl>
</Grid>
    {/* Add more TextField components for other food properties */}
    <Grid item xs={12}>
      <Button variant="contained" color="primary" onClick={handleAddFood}>
        Add Food
      </Button>
    </Grid>
  </Grid>
</Box>

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
                {/* Add more TableCells for other food properties */}
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {foods.map((food) => (
                <TableRow key={food.id}>
                  <TableCell>{food.name}</TableCell>
                  <TableCell>{food.baseAmount}</TableCell>
                  <TableCell>{food.energy}</TableCell>
                  {/* Add more TableCells for other food properties */}
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleUpdateFood(food.id, updatedFoodData)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDeleteFood(food.id)}
                    >
                      Delete
                    </Button>
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

export default FoodPage;
