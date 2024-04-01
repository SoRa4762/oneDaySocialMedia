const userModel = require("../models/userModel");

const CreateUser = async (userData) => {
  const newUserModel = new userModel(userData);
  const savedUser = await newUserModel.save();
  return savedUser;
};

const GetUsers = async () => {
  return await userModel.find();
};

const GetUserById = async (userId) => {
  return await userModel.findById(userId);
};

const DeleteUser = async (userId) => {
  return await userModel.findByIdAndDelete(userId);
};

const UpdateUser = async (userId, newItemData) => {
  return await userModel.findByIdAndUpdate(userId, newItemData, {
    new: true,
  });
};

module.exports = { CreateUser, GetUsers, DeleteUser, GetUserById, UpdateUser };
