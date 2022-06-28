const User = require("../Model/userModel");
const bcrypt = require("bcrypt");

module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username is already taken", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email is already in use", status: false });
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: passwordHash,
    });
    delete user.password;
    return res.json({ user, status: true });
  } catch (err) {
    next(err);
  }
};
