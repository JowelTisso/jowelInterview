import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login/Login";
import Signup from "../pages/auth/Signup/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
