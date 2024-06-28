// index.js (backend)
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const passport = require('./passport'); // Import your passport configuration
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const PEPHandler = require("./routes/xacml");

console.log("Getting Here")
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
app.use(passport.initialize()); // Initialize passport middleware

// PEP endpoint
app.use("/api/pep", PEPHandler); // Mount the router for /api/pep

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.post('/api/auth/login/callback', passport.authenticate('saml', { failureRedirect: '/', failureFlash: true }),
    function(req, res) {
        // Successful authentication
        res.send('hello');
    },
    function(err, req, res, next) {
        // Unsuccessful authentication
        res.send('bye');
    }
);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
