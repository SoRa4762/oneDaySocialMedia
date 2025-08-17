import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../elements/Header";
import DeletePopUp from "../elements/DeletePopUp";
import { useAuth } from "../context/useAuth";
import EditModal from "../elements/EditModal";

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isUpOpen, setIsUpOpen] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();

  console.log("User:", user);

  useEffect(() => {
    axios.get("http://localhost:8000/post").then(
      (res) => {
        setAllPosts(res.data);
        console.log(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      <Header />
      <div className="h-full w-full">
        {/* posts */}
        <div className="h-full w-full flex flex-col justify-center items-center">
          {isDelOpen && (
            <DeletePopUp
              pid={selectedPost._id}
              isDelOpen={isDelOpen}
              setIsDelOpen={setIsDelOpen}
            />
          )}

          {isUpOpen && (
            <EditModal
              pid={selectedPost._id}
              title={selectedPost.title}
              content={selectedPost.content}
              isUpOpen={isUpOpen}
              setIsUpOpen={setIsUpOpen}
            />
          )}

          {allPosts.map((post) => (
            <div key={post._id} className="h-48 w-96 border rounded-2xl mt-2">
              <div
                className="h-12 bg-blue-500 w-full flex justify-around items-center text-white font-semibold"
                onClick={() => {
                  setSelectedPost(post);
                }}
              >
                <h3>{post.title}</h3>
                {/* {user.user._id === post.userId && ( logic works, it's just I don't have post with userId on them, so yeah... */}
                <div className="flex gap-2">
                  <button onClick={() => setIsUpOpen(!isUpOpen)}>Edit</button>
                  <button onClick={() => setIsDelOpen(!isDelOpen)}>
                    Delete
                  </button>
                </div>
                {/* )} */}
              </div>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
