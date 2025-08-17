import React from "react";
import { deleteApi } from "../apis";

const DeletePopUp = ({ isDelOpen, setIsDelOpen, pid }) => {
  console.log("what the helly pid: ", pid);

  if (!isDelOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="flex flex-col gap-2 bg-white px-8 py-4 rounded-2xl border">
        <p>Do you want to delete this post?</p>
        <div className="flex gap-2">
          <button
            className="bg-red-500 text-white px-2 rounded-2xl"
            onClick={async () => {
              const data = await deleteApi(pid);

              //   if (Object.keys(data).length !== 0) {
              //     setIsDelOpen(!isDelOpen);
              //   }

              data && setIsDelOpen(!isDelOpen);
            }}
          >
            Yes
          </button>
          <button
            className="bg-blue-500 text-white px-2 rounded-2xl"
            onClick={() => setIsDelOpen(!isDelOpen)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopUp;
