const router = require("express").Router();
const { loginUser } = require("../controllers/authController");

router.post("/", loginUser);

module.exports = router;
