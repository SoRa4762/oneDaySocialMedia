const userModel = require("../models/userModel");

const SigninService = async (email, password) => {
  const user = await userModel.findOne({ email });
  return user;
};

module.exports = { SigninService };
