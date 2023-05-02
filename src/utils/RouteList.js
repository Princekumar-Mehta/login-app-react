import React from "react";
import { Route, Routes } from "react-router-dom";
import AllUsers from "../components/AllUsers";
import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile";
const RoutesList = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />

      <Route path="login" element={<Login />} />

      <Route path="allUsers" element={<AllUsers />} />
    </Routes>
  );
};

export default RoutesList;
