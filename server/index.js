// index.js (backend)
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const PEPHandler = require("./routes/xacml");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// PEP endpoint
app.use("/api/pep", PEPHandler); // Mount the router for /api/pep

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
