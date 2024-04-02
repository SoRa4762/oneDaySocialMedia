const postModel = require("../models/postModel.js");

const CreatePost = async (postContent) => {
  const newPostModel = new postModel(postContent);
  const savedPost = await newPostModel.save();
  return savedPost;
};

const GetPosts = async () => {
  return await postModel.find();
};

const GetPostById = async (postId) => {
  return await postModel.findById(postId);
};

const DeletePost = async (postId) => {
  return await postModel.findByIdAndDelete(postId);
};

const UpdatePost = async (postId, newPostContent) => {
  return await (postModel.findByIdAndUpdate(postId, newPostContent),
  {
    new: true,
  });
};

module.exports = { CreatePost, GetPosts, DeletePost, UpdatePost, GetPostById };
