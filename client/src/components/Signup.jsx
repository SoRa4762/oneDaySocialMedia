import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../elements/Header";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [resData, setResData] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(`${name}: ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/user", formData).then(
      (res) => {
        console.log(res);
        setResData(res.data);
        navigate("/signin");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <>
      <Header />
      <div className="h-full w-full">
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="h-full w-full flex flex-col justify-center items-center py-8 gap-2"
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleFormChange}
            className="border border-blue-600 rounded-lg"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleFormChange}
            className="border border-blue-600 rounded-lg"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleFormChange}
            className="border border-blue-600 rounded-lg"
          />
          {/* <div className="flex gap-4 py-4"> */}
          <button className="bg-green-600 rounded-lg py-2 px-4">Signup</button>
          {/* </div> */}
          <p className={`${resData !== "" ? "flex" : "hidden"} text-green-500`}>
            {resData}
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
