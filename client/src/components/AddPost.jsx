import { useState } from "react";
import axios from "axios";
import Header from "../elements/Header";

const AddPost = () => {
  const [postData, setPostData] = useState({});

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
    // console.log({ ...postData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/post", postData).then(
      (res) => {
        console.log(res);
      },
      (error) => console.log(error)
    );
  };

  return (
    <>
      <Header />
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="h-full w-full flex flex-col justify-center items-center py-8 gap-2"
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handlePostChange}
          className="border border-blue-600 rounded-lg"
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows="4"
          cols="50"
          className="border border-blue-600 rounded-lg"
          onChange={handlePostChange}
        />

        {/* <div className="flex gap-4 py-4"> */}
        <button className="bg-green-600 rounded-lg py-2 px-4">Add Post</button>
        {/* </div> */}
        {/* <p className={`${resData !== "" ? "flex" : "hidden"} text-green-500`}>
            {resData}
          </p> */}
      </form>
    </>
  );
};

export default AddPost;
