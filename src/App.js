import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login"

function App() {
  return (
    <div className="font-Poppins">
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
