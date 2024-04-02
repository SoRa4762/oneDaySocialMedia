const postController = require("../controllers/postController");
const express = require("express");
const router = express.Router();

router.post("/", postController.CreatePost);
router.get("/:id", postController.GetPost);
router.get("/", postController.GetPosts);

module.exports = router;
