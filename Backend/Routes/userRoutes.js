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
router.get("/allUsers/:id", allUsers);

module.exports = router;
