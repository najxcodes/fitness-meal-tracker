const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const seedData = require('./db_init');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const initDatabaseConnection = require('./dbConnection.js');

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Database connection
initDatabaseConnection(process.argv[2]);

// Session routes
require('./routes/session/session')(app);

// Fitness routes
const routes = {
  fitness: {
    port: 3015,
    path: './routes/fitness/routes',
  },
};

const selectedRoute = routes[process.argv[2]] || routes.default;
if (selectedRoute) {
  const { port, path } = selectedRoute;
  require(path)(app);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} else {
  app.get('/', (req, res) => {
    res.send('Something went wrong');
  });
}

// Seed data
// seedData();

const port = 3020;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
