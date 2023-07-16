import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { styled } from '@mui/system';
const useStyles = styled((theme) => ({
  widgetBox: {
    display: 'inline-block',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
  },
}));

const Dashboard = () => {
  const [widgetExpanded, setWidgetExpanded] = useState(false);
  const classes = useStyles();

  const handleWidgetClick = () => {
    setWidgetExpanded(!widgetExpanded);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to the Dashboard
      </Typography>

      <Card className={classes.widgetBox} onClick={handleWidgetClick}>
        <Typography variant="h5" align="center">
          Food Options
        </Typography>

        {widgetExpanded && (
          <CardContent>
            <Button variant="contained" color="primary" fullWidth>
              Add Food
            </Button>
            <Button variant="contained" color="secondary" fullWidth>
              Remove Food
            </Button>
            <Button variant="contained" color="primary" fullWidth>
              Edit Food
            </Button>
            <Button variant="contained" color="primary" fullWidth>
              Show Food
            </Button>
          </CardContent>
        )}
      </Card>

      <Typography variant="body1">
        Here you can add, delete, and edit your meals and exercises.
      </Typography>
      {/* Add more components and functionality as needed */}
    </Container>
  );
};

export default Dashboard;
