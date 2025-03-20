import React , {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignIn from "../Pages/Sigin";
import DashBoard from "../Pages/Dashboard";

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

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
