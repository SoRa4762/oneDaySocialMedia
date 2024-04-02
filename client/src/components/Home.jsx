import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../elements/Header";

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();

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
      <div>
        <Header />
        {/* posts */}
        <div className="h-full w-full">
          {allPosts.map((post) => (
            <div key={post._id} className="h-48 w-48">
              <div className="h-18 w-full">
                <h3>{post.title}</h3>
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
