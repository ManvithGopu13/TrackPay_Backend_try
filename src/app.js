const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const lendingRoutes = require("./routes/lendingRoutes");
app.use("/api/lending", lendingRoutes);

module.exports = app;
