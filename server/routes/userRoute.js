const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/", userController.CreateUser);
router.get("/", userController.GetUsers);
router.get("/:id", userController.GetUserById);
router.put("/:id", userController.UpdateUser);
router.delete("/", userController.DeleteUser);

module.exports = router;
