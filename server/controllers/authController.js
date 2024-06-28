app.post('/login/callback', passport.authenticate('saml', {
	failureRedirect: '/login',
	failureFlash: true
  }), function(req, res) {
	const token = req.user; // Modify as per your logic
	res.redirect(`http://localhost:3000/?token=${token}`);
  });
  