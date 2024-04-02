const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: "String",
    requried: true,
  },
  content: {
    type: "String",
    // requried: true,
  },
  image: {
    type: "String",
    // requried: true,
  },
});

module.exports = mongoose.model("Post", PostSchema);
