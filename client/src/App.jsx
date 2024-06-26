import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AddPost from "./components/AddPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addpost" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;
