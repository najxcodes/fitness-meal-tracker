const mongoose = require('mongoose');
const dayModel = require('./models/fitness/day');
const exerciseModel = require('./models/fitness/exercise');
const foodModel = require('./models/fitness/food');
const profileModel = require('./models/fitness/profile');
const profileUser = require('./models/fitness/user');

// Additional schema imports if needed

// Register the models with Mongoose
const models = {
  Day: dayModel,
  Exercise: exerciseModel,
  Food: foodModel,
  Profile: profileModel,
  Users : profileUser
  // Additional models if needed
};

module.exports = models;
