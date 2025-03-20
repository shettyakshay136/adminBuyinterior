import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import "./index.css";

const AddressForm = ({ onClose }) => {



  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    property_type: "",
    property_status: "",
    service_required_on: "",
    budget: "",
    image: null,
    requirement: "",
    tags: "",
    price: "",
    discount_price: "",
  });

  const userId = localStorage.getItem("userId");
  const accessToken = localStorage.getItem("accessToken");


  console.log('check data' , userId , accessToken)

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 const handleSubmit = async (e) => {
   e.preventDefault();

   if (!userId || !accessToken) {
     alert("User is not authenticated. Please log in.");
     return;
   }

   const formDataToSend = new FormData();
   formDataToSend.append("user_id", userId);

   // Append all form fields
   Object.entries(formData).forEach(([key, value]) => {
     if (value !== null && value !== "") {
       formDataToSend.append(key, value);
     }
   });

   console.log([...formDataToSend.entries()]); // Debugging log

   try {
     const response = await fetch(
       "https://buyinteriorapp-ed1e9e8d81f4.herokuapp.com/api/leads/",
       {
         method: "POST",
         headers: {
           Authorization: `Bearer ${accessToken}`, // DO NOT set "Content-Type" manually
         },
         body: formDataToSend,
       }
     );

     if (response.ok) {
       alert("Address created successfully!");
       onClose();
     } else {
       const errorData = await response.json();
       alert(
         `Failed to save address (Error ${response.status}): ${
           errorData.message || "Unknown error"
         }`
       );
     }
   } catch (error) {
     alert("Error: " + error.message);
   }
 };


  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Add New Lead</h2>
          <button onClick={onClose} className="close-button">
            <RiCloseLine size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Enter Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Enter Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group md:col-span-2">
              <label className="form-label">Enter property Type</label>
              <input
                type="text"
                name="property_type"
                value={formData.property_type}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group md:col-span-2">
              <label className="form-label">Enter property Status</label>
              <input
                type="text"
                name="property_status"
                value={formData.property_status}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Enter service Required On</label>
              <input
                type="text"
                name="service_required_on"
                value={formData.service_required_on}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Enter Budget</label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Enter Image url</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Enter Requirement</label>
              <input
                type="tel"
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Enter Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Enter Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Enter Discount Price</label>
              <input
                type="number"
                name="discount_price"
                value={formData.discount_price}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Enter Address Type</label>
              <select
                name="address_type"
                value={formData.address_type}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="btn-container-address">
            <button
              type="button"
              onClick={onClose}
              className="button button-cancel"
            >
              Cancel
            </button>
            <button type="submit" className="button button-primary">
              Save Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
