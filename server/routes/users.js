const router = require("express").Router();
const { registerUser } = require("../controllers/userController");

router.post("/", registerUser);

module.exports = router;
