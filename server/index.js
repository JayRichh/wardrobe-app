const express = require('express');
const bodyParser = require('body-parser'); // to parse the body of the request
const cors = require('cors'); // to help with cross-origin resource sharing

const db = require("./db");
// make sure router we setup for product is working properly
const productRouter = require('./routes/productRouter');

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// make use of product routed
app.use('/api/', productRouter);