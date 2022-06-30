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

module.exports.login = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
      return res.json({
        msg: "Username or Password is invalid",
        status: false,
      });

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck)
      return res.json({
        msg: "Username or Password is invalid",
        status: false,
      });
    delete user.password;
    return res.json({ user, status: true });
  } catch (err) {
    next(err);
  }
};

module.exports.account = async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await User.find({ username });
    res.json(username);
  } catch (error) {
    next(error);
  }
};

module.exports.allUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "username",
      "email",
      "_id",
    ]);
    res.json(users);
  } catch (error) {
    next(error);
  }
};
