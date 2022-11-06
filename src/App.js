import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Form from "./pages/Form";
import Login from "./pages/Login"
import Signup from "./pages/Signup";

function App() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div className="font-Poppins">
      {location.pathname === '/login' || location.pathname === '/signup' ? <></> : <Header />}
      <Routes>
        <Route path="/event/new" element={<Form />} />
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        {/* Signup Route */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
