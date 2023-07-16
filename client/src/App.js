import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Navbar from './components/NavBar';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import FoodList from './components/FoodList';
import ExerciseList from './components/ExerciseList';
import DayLog from './components/DayLog';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Outlet /> {/* Add the Outlet component here */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/foods" element={<FoodList />} />
        <Route path="/exercises" element={<ExerciseList />} />
        <Route path="/daylog" element={<DayLog />} />
      </Routes>
    </Router>
  );
};

export default App;
