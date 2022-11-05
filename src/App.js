import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="font-Poppins">
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        {/* Signup Route */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
