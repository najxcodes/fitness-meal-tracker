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
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]); // Replace with your actual exercise data

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedExercise, setEditedExercise] = useState('');

  const handleDeleteExercise = (exerciseId) => {
    // Handle delete exercise logic
  };

  const handleOpenEditDialog = (exercise) => {
    setEditedExercise(exercise);
    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
  };

  const handleSaveEditedExercise = () => {
    // Handle save edited exercise logic
    handleCloseEditDialog();
  };

  return (
    <>
      <List>
        {exercises.map((exercise) => (
          <ListItem key={exercise.id}>
            <ListItemText primary={exercise.name} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => handleOpenEditDialog(exercise)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteExercise(exercise.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      <Dialog open={editDialogOpen} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Exercise</DialogTitle>
        <DialogContent>
          <TextField
            label="Exercise Name"
            value={editedExercise.name}
            onChange={(e) => setEditedExercise({ ...editedExercise, name: e.target.value })}
            fullWidth
          />
          {/* Add more input fields for other exercise properties */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveEditedExercise} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ExerciseList;
