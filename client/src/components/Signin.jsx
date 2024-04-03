import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../elements/Header";

const Signin = () => {
  const navigate = useNavigate();
  const [signinData, setSigninData] = useState({});
  const [resData, setResData] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninData({ ...signinData, [name]: value });
    console.log(signinData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/signin", signinData).then(
      (res) => {
        console.log(res);
        setResData(res.data);
        navigate("/home");
      },
      (error) => {
        console.log(error);
        // setResData(error.data);
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="border border-blue-600 rounded-lg"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="border border-blue-600 rounded-lg"
          />
          {/* <div className="flex gap-4 py-4"> */}
          <button className="bg-green-600 rounded-lg py-2 px-4">Sigin</button>
          {/* </div> */}
          <p className={`${resData !== "" ? "flex" : "hidden"} text-green-500`}>
            {resData}
          </p>
        </form>
      </div>
    </>
  );
};

export default Signin;
