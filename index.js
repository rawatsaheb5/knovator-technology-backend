const express = require("express");
const mongoose = require("mongoose");
const { connectDB } = require("./config/db");
const dotenv = require("dotenv");
const productRoute = require('./route/product')
const orderRoute = require('./route/order')
const cors = require("cors");
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 8000;

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/products', productRoute)
app.use('/place-order', orderRoute)

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});


