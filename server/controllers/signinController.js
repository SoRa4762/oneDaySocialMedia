const SigninService = require("../services/signinService");

const SigninController = async (req, res) => {
  const { email, password } = req.body;
  const user = await SigninService.SigninService(email, password);
  if (!user) {
    res.status(404).json("User not found!");
  } else {
    if (user.password === password) {
      res.status(200).json({ user, message: "User Signed In Succesfully!" });
    } else {
      res.status(400).json("Incorrect password!");
    }
  }
};

module.exports = { SigninController };
