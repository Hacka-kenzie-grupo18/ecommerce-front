import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import Register from "../pages/RegisterPage/register";
import Login from "../pages/Login/login";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
