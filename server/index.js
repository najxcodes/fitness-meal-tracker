const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const seedData = require('./db_init');
var cors = require('cors')

const dotenv = require("dotenv");
dotenv.config();

const initDatabaseConnection = require('./dbConnection.js');

app.use(cors({
  origin:"http://localhost:3000",
  credentials:true
}))

//default port if an error occurred
let port =3020;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser());
// app.use('/images', express.static(__dirname + '/images'));
initDatabaseConnection(process.argv[2]);
require('./routes/session/session')(app);

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


// seedData();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});




