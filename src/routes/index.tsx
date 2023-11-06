import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import Register from "../pages/RegisterPage/register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
