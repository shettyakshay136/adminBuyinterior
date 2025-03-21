import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

import DashBoard from './Pages/Dashboard'


import AppRoutes from './AppRoutes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
