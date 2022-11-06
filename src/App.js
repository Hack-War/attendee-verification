import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Form from "./pages/Form";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

//firebase
import firebase from "firebase/compat/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import FirebaseConfig from "./config/firebase";
import Events from "./pages/Events";
import Users from "./pages/Users";
//init firebas`e
const application = initializeApp(FirebaseConfig);

const App = () => {
  const auth = getAuth();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className={`font-Poppins ${location.pathname === '/events' && 'bg-gray-50'}`} >
      {location.pathname === "/login" || location.pathname === '/' || location.pathname === "/signup" ? (
        <></>
      ) : (
        <Header />
      )}
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/events" element={<Events />} />

        <Route path="/events/new" element={<Form />} />
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        {/* Signup Route */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
