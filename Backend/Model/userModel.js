const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  isAvatarSet: {
    type: Boolean,
    default: false,
  },
  userAvatar: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("User", userSchema);
