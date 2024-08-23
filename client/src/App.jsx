import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* public routes */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          {/* protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/addpost" element={<AddPost />} />
          </Route>

          {/* not found route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
