const mongoose = require('mongoose');
const dayModel = require('./models/day');
const exerciseModel = require('./models/exercise');
const foodModel = require('./models/food');
const profileModel = require('./models/profile');

// Additional schema imports if needed

// Register the models with Mongoose
const models = {
  Day: dayModel,
  Exercise: exerciseModel,
  Food: foodModel,
  Profile: profileModel,
  // Additional models if needed
};

module.exports = models;
