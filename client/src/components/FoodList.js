import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

const FoodList = () => {
  const [foods, setFoods] = useState([]); // Replace with your actual food data

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedFood, setEditedFood] = useState({});

  const handleDeleteFood = (foodId) => {
    // Handle delete food logic
  };

  const handleOpenEditDialog = (food) => {
    setEditedFood(food);
    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
  };

  const handleSaveEditedFood = () => {
    // Handle save edited food logic
    handleCloseEditDialog();
  };

  return (
    <>
      <Typography variant="h6">Food List</Typography>
      <List>
        {foods.map((food) => (
          <ListItem key={food.id}>
            <ListItemText primary={food.name} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => handleOpenEditDialog(food)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteFood(food.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      <Dialog open={editDialogOpen} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Food</DialogTitle>
        <DialogContent>
          <TextField
            label="Food Name"
            value={editedFood.name || ''}
            onChange={(e) => setEditedFood({ ...editedFood, name: e.target.value })}
            fullWidth
          />
          {/* Add more input fields for other food properties */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveEditedFood} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FoodList;
