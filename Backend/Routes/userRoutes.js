const { signup } = require("../Controller/userController");

const router = require("express").Router();

router.post("/signup", signup);

module.exports = router;
