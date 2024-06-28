const passport = require('passport');
const SamlStrategy = require('passport-saml').Strategy;
const fs = require('fs');
const { User } = require('./models/user'); // Adjust path as per your project structure

passport.use(new SamlStrategy(
    {
      path: '/api/auth/login/callback', // Callback URL after authentication
      entryPoint: 'https://localhost:9443/samlsso', // WSO2 IS SSO URL
      issuer: 'https://localhost:8080', // Issuer URL (note the https)
      cert: fs.readFileSync('./secuirity/wso2carbon.pem', 'utf-8') // Path to your PEM file
    },
    function(profile, done) {
      // Find or create user based on the SAML assertion attributes
      User.findOne({ email: profile.email }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          // Create new user if not found
          user = new User({
            email: profile.email,
            firstName: profile.firstName,
            lastName: profile.lastName,
            role: 'user' // Set default role or derive from SAML attributes
          });
          user.save(function(err) {
            if (err) console.error(err);
            return done(err, user);
          });
        } else {
          // User found, return user object
          return done(null, user);
        }
      });
    }
  ));
  

passport.serializeUser(function(user, done) {
  done(null, user.id); // Serialize user into session
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user); // Deserialize user from session
  });
});

module.exports = passport;
