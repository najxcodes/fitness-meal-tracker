import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Button, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/system';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Replace with your desired primary color
      contrastText: '#fff', // Replace with the contrasting text color
    },
    // Add more color variants as needed
  },
});

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
}));

const Dashboard = () => {
  const [widgetExpanded, setWidgetExpanded] = useState(false);

  const handleWidgetClick = () => {
    setWidgetExpanded(!widgetExpanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to the Dashboard
        </Typography>

        <StyledCard onClick={handleWidgetClick}>
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
        </StyledCard>

        <Typography variant="body1">
          Here you can add, delete, and edit your meals and exercises.
        </Typography>
        {/* Add more components and functionality as needed */}
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
