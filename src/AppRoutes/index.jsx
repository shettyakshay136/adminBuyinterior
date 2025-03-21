import React , {useState, useEffect , useContext} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignIn from "../Pages/Sigin";
import DashBoard from "../Pages/Dashboard";
import { AuthContext } from "../AuthContext";

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <DashBoard /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default AppRoutes;
