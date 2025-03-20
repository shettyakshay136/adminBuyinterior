import react , {useContext} from 'react';
import { DataContext } from "../ContextApi";

import { IoIosAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";

import './index.css'


const Index = () => {

    const { leads, fetchData, downloads } = useContext(DataContext);

      if (downloads.length === 0) {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40%",
            }}
          >
            <h2>No Downloads Found</h2>
          </div>
        );
      }
    return (
        <div style={{ width: "100%", justifyContent: "center" }}>
            {downloads.map((address) => (
                    <div
                    key={address.id}
                    className="address-card"
                    // onClick={() => handleSelectAddress(address)}
                    >
                    <div className="address-header">
                        <div>
                        <h3 className="address-name">{address.user_name}</h3>
                        {address.company_name && (
                            <p className="company-name">{address.user_email}</p>
                        )}
                        </div>
                    </div>

                    <div className="address-details">
                        <p className="address-street">{address.street_address}</p>
                        <p className="address-city-state">{address.lead_name}</p>
                    </div>

                    <div className="contact-details">
                        <div className="contact-item">
                        <LuPhone />
                        <span>{address.lead_mobile}</span>
                        </div>
                        <div className="contact-item">
                        <CiMail />
                        {/* <span>
                            {editingAddressId === address.id ? (
                            <input
                                type="text"
                                name="email"
                                value={editedAddress.email}
                                onChange={handleInputChange}
                                className="input-address"
                            />
                            ) : (
                            address.email
                            )}
                        </span> */}
                        </div>
                    </div>
                    </div>
            ))}
        </div>
    );
}

export default Index;