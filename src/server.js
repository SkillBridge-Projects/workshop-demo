const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors()); // Enable CORS to allow requests from your React app

