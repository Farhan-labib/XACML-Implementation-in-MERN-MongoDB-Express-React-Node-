// auth.js
const router = require("express").Router();
const passport = require('../passport'); // Import your passport configuration

// Initiate SAML authentication
router.get('/login', passport.authenticate('saml', { failureRedirect: '/', failureFlash: true }), (req, res) => {
  res.redirect('/'); // Redirect after initiating authentication
});

// Callback after successful SAML authentication
router.post('/login/callback', passport.authenticate('saml', { failureRedirect: '/', failureFlash: true }), (req, res) => {
  res.send('hello'); // Successful authentication response
});

module.exports = router;
