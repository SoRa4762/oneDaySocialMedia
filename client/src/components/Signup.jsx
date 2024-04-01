import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({});
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
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <>
      <div className="h-full w-full">
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="h-full w-full flex flex-col justify-center items-center py-8"
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
          <div className="flex gap-4 py-4">
            <button className="bg-green-600 rounded-lg py-2 px-4">
              Submit
            </button>
            <button className="bg-red-600 rounded-lg px-4">Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
