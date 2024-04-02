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

module.exports = { GetPost, GetPosts, CreatePost };
