const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter full name."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter e-mail id."],
    unique: [
      true,
      "This e-mail id has already been registered. Please use another e-mail id.",
    ],
    trim: true,
  },
  mobile: {
    type: String,
    required: [true, "Please enter 10 digit mobile number."],
    unique: [
      true,
      "This mobile number has already been registered. Please use another mobile number.",
    ],
    trim: true,
    length: [10, "Please enter 10 digit mobile number."],
  },
  username: {
    type: String,
    required: [true, "Please enter username."],
    unique: [
      true,
      "This username already exists. Please enter another username.",
    ],
    trim: true,
    maxlength: [30, "Please restrict username to 30 characters."],
  },
  password: {
    type: String,
    required: [true, "Please enter password."],
    minlength: [7, "Password should be at least 7 characters long."],
  },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
