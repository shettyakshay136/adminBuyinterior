import react, { useContext } from "react";
import { DataContext } from "../ContextApi";

import { IoIosAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";


import { IoPersonOutline } from "react-icons/io5";


import "./index.css";

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
    <div>
      {downloads.map((address) => (
        <div key={address.id} className="address-card">
          <div
            style={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <div className="details">
              <img
                style={{ width: 30, height: 30 }}
                src="./profile-user.png"
                alt="logo"
              />
              <div>
                <h3 className="address-name">{address.user_name}</h3>
              </div>
            </div>
            <div className="contact-item">
              <CiMail />
              <p className="company-name">{address.user_email}</p>
            </div>
            <div className="lead-id">
              <span className="lead-badge">Lead ID: {address.lead_id}</span>
              <div className="name">
                <CiTimer />
                {new Date(address.downloaded_at).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </div>
            </div>
            <div style={{ padding: 0, margin: 0 }}>
              <h2 className="h2">Lead Information</h2>
              <div className="name">
                <IoPersonOutline />
                <h3 className="text">{address.user_name}</h3>
              </div>
              <div className="name">
                <LuPhone />
                <h3 className="text">{address.lead_mobile}</h3>
              </div>
              <div className="name">
                <CiLocationOn />
                <h3 className="text">{address.lead_location}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
