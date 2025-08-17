const postService = require("../services/postService");

const CreatePost = async (req, res) => {
  try {
    const createPost = await postService.CreatePost(req.body);
    res.status(201).json(createPost);
  } catch (error) {
    res.status(403).json(error);
  }
};

const GetPosts = async (req, res) => {
  try {
    const getPosts = await postService.GetPosts();
    res.status(201).json(getPosts);
  } catch (error) {
    res.status(403).json(error);
  }
};

const GetPost = async (req, res) => {
  try {
    const getPost = await postService.GetPostById(req.params.id);
    res.status(201).json(getPost);
  } catch (error) {
    res.status(403).json(error);
  }
};

const UpdatePost = async (req, res) => {
  try {
    const updatePost = await postService.UpdatePost(req.params.id, req.body);
    res.status(200).json(updatePost);
  } catch (err) {
    res.status(403).json(err);
  }
};

const DeletePost = async (req, res) => {
  try {
    const deletePost = await postService.DeletePost(req.params.id);
    res.status(404).json(deletePost);
  } catch (err) {
    res.status(403).json(err);
  }
};

module.exports = { GetPost, GetPosts, CreatePost, UpdatePost, DeletePost };
