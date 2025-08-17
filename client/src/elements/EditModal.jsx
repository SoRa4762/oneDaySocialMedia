import React, { useState } from "react";
import { updateApi } from "../apis";

const EditModal = ({ isUpOpen, setIsUpOpen, pid, title, content }) => {
  const [updatedPost, setUpdatedPost] = useState({
    title: title,
    content: content,
  });

  if (!isUpOpen) return null;

  //   const editChange(e) => {
  //     const [name, value] = e.target;
  //     setUpdatedPost((p) => ({...p, [name]: value}));
  //   }

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="flex flex-col gap-2 bg-white px-8 py-4 rounded-2xl border">
        <p className="font-semibold">Update Post</p>

        <form action="submit" className="flex flex-col gap-2">
          <p>Title</p>
          <input
            type="text"
            value={updatedPost.title}
            onChange={(e) =>
              setUpdatedPost({ ...updatedPost, title: e.target.value })
            }
            className="border rounded-lg p-2"
          />

          <p>Content</p>
          <input
            type="text"
            value={updatedPost.content}
            onChange={(e) =>
              setUpdatedPost({ ...updatedPost, content: e.target.value })
            }
            className="border rounded-lg p-2"
          />
        </form>

        <div className="flex gap-2">
          <button
            className="bg-green-500 text-white px-2 rounded-2xl"
            onClick={async () => {
              const data = await updateApi(pid, updatedPost);

              if (Object.keys(data).includes("title")) {
                setIsUpOpen(!isUpOpen);
              }

              //   data && setIsUpOpen(!isUpOpen);
              //   console.log("look at the data I got!: ", data);
            }}
          >
            Update
          </button>
          <button
            className="bg-blue-500 text-white px-2 rounded-2xl"
            onClick={() => setIsUpOpen(!isUpOpen)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
