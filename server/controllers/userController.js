const UserService = require("../services/userService");

const CreateUser = async (req, res) => {
  try {
    const createUser = await UserService.CreateUser(req.body);
    res.status(201).json(createUser);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const GetUsers = async (req, res) => {
  try {
    const getUsers = await UserService.GetUsers();
    res.status(201).json(getUsers);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const GetUserById = async (req, res) => {
  try {
    const getUserById = await UserService.GetUserById(req.body);
    if (!getUserById) {
      res.status(500).json({ err: "User not found!" });
    } else {
      res.status(201).json(getUserById);
    }
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const updateUser = await UserService.UpdateUser(req.params.id, req.body);
    if (!updateUser) {
      res.status(500).json({ err: "User not found!" });
    } else {
      res.status(200).json(updateUser);
    }
    res.status(201).json(updateUser);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const deleteUser = await UserService.DeleteUser(req.body);
    if (!deleteUser) {
      res.status(500).json({ err: "User not found" });
    } else {
      res.status(201).json(deleteUser);
    }
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = { CreateUser, DeleteUser, GetUsers, GetUserById, UpdateUser };
