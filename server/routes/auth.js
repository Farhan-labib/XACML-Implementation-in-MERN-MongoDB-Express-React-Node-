// auth.js
const router = require("express").Router();
const passport = require('../passport'); // Import your modified passport configuration

// Initiate SAML authentication
router.get('/login', passport.authenticate('saml', { failureRedirect: '/', failureFlash: true }), function(req, res) {
  res.redirect('/');
});

// Callback after successful SAML authentication
router.post('/login/callback',
  passport.authenticate('saml', { failureRedirect: '/', failureFlash: true }),
  function(req, res) {
    res.redirect('/'); // Redirect after successful authentication
  }
);

module.exports = router;
