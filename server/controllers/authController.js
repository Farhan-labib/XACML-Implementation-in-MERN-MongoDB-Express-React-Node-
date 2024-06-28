const { User } = require("../models/user");

const loginUser = async (req, res) => {
    const token = req.user; // Modify as per your logic
    res.redirect(`http://localhost:3000/?token=${token}`);
};

module.exports = { loginUser };
