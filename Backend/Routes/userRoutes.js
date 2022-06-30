const {
  signup,
  login,
  account,
  allUsers,
} = require("../Controller/userController");

const router = require("express").Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/account", account);
router.post("/allUsers", allUsers);

module.exports = router;
