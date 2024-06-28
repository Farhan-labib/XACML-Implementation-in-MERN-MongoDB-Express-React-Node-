require("dotenv").config();
const express = require("express");
const session = require("express-session");
const https = require("https");
const fs = require("fs");
const cors = require("cors");
const passport = require('./passport');
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const PEPHandler = require("./routes/xacml");

const app = express();

console.log("Getting Here");
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// Use express-session middleware with SameSite and Secure attributes
app.use(session({
  secret: 'wso2carbon', // Replace with your own secret
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true, // Ensures the cookie is only used over HTTPS
    httpOnly: false, // Ensures the cookie is sent only over HTTP(S), not client JavaScript
    sameSite: 'None' // Ensures the cookie is sent in cross-site requests
  }
}));

app.use(passport.initialize()); // Initialize passport middleware
app.use(passport.session()); // Use session middleware for persistent login sessions

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

// Read the SSL certificate and key
const httpsOptions = {
  key: fs.readFileSync('./secuirity/key.pem'), // Path to your key.pem
  cert: fs.readFileSync('./secuirity/cert.pem') // Path to your cert.pem
};

// Create HTTPS server
https.createServer(httpsOptions, app).listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
