import React, { useState } from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import Stats from './Stats';
import RecentActions from './RecentActions'
import LeadForm from './LeadForm'

import { DataProvider } from './ContextApi';


import { IoIosAdd } from "react-icons/io";
// import Orders from './Orders';
// import Address from './Address';
// import WishList from './Wishlist';
import Downloads from './Downloads'
import './index.css';


const App = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [activePage, setActivePage] = useState('dashboard');
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleClose = () => {
      setIsFormOpen(false);
    };



    const handleSubmit = () => {
      console.log('submited')
    }



    const renderContent = () => {
        switch (activePage) {
          case "Downloads":
            return <Downloads />;
          // case "Addresses":
          //   return <Address />;
          // case "Wishlist":
          //   return <WishList />;
          // case "ATC":
          //   return <ATC />;
          case "dashboard":
          default:
            return (
              <>
                <Stats />
                <div style={{display:'flex',justifyContent:'flex-end'}}>
                  <button onClick={() => setIsFormOpen(true)} className="add-button">
                    <IoIosAdd size={27} />
                    <span className="button-text">New Lead</span>
                  </button>
                </div>
                <div className="grid-container">
                  <RecentActions />
                </div>
                {isFormOpen && (
                  <LeadForm
                    onClose={handleClose} 
                    onSubmit={handleSubmit} 
                  />
                )}
              </>
            );
        }
    };

    return (
      <DataProvider>
        <div className="profile-grid">
            <Sidebar setActivePage={setActivePage} activePage={activePage} />
            <main className="main-content-Profile ">
                <Header toggleDropdown={toggleDropdown} showDropdown={showDropdown} />
                {renderContent()}
            </main>
        </div>
      </DataProvider>
    );
};

export default App;