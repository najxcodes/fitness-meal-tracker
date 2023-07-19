const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const seedData = require('./db_init');
// const User = require('./models/user')
var cors = require('cors')

const dotenv = require("dotenv");
dotenv.config();
console.log(1);


const initDatabaseConnection = require('./dbConnection.js');
console.log(1);

app.use(cors({
  origin:"http://localhost:3000",
  credentials:true
}))
console.log(1);

//default port if an error occurred
let port =3020;
console.log(1);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
console.log(1);

// parse application/json
app.use(bodyParser.json())
app.use(cookieParser());
// app.use('/images', express.static(__dirname + '/images'));
initDatabaseConnection(process.argv[2]);
console.log(1);

require('./routes/session/session')(app);
const routes = {
  fitness: {
    port: 3015,
    path: './routes/fitness/routes',
  },
};
console.log(1);


const selectedRoute = routes[process.argv[2]] || routes.default;
console.log(1);

if (selectedRoute) {
  const { port, path } = selectedRoute;
  console.log(1);

  require(path)(app);
  console.log(1);

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
  console.log(`App Existening at http://localhost:${port}`)
});




