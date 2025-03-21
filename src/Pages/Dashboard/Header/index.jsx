import React, {useContext} from 'react';
import './index.css';


const Header = ({ toggleDropdown, showDropdown }) => {

   const loading = 'true'

    return (
      <header className="header">

          <div>
            <h1>Welcome back, Admin</h1>
          </div>
        {/* <div className="header-actions">
            <button className="notification-button">
                <i className="ri-notification-line"></i>
            </button>
        </div> */}
      </header>
    );
};

export default Header;