import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from "react-router-dom";

import DashBoard from './Pages/Dashboard'


import AppRoutes from './AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
