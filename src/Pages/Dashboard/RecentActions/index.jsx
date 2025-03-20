import React , {useContext , useState} from "react";
import "./index.css";
import { MdDeleteOutline } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import {DataContext} from '../ContextApi'
import Editform from '../EditForm'

const RecentLeads = () => {
      const { leads , fetchData } = useContext(DataContext);
      const [selectedLead, setSelectedLead] = useState(null);
      const [modalOpen, setModalOpen] = useState(false);

      const handleEditClick = (lead) => {
        setSelectedLead(lead);
        setModalOpen(true);
      };

      const handleLeadUpdate = (updatedLead) => {
        const updatedLeads = leads.map((lead) => (lead.id === updatedLead.id ? updatedLead : lead));
        console.log("Updated Leads:", updatedLeads); 
      };

      const accessToken = localStorage.getItem("accessToken");

      const handleDelete = async (leadId) => {
        try {
          const response = await fetch(
            `https://buyinteriorapp-ed1e9e8d81f4.herokuapp.com/api/leads/${leadId}/`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
      
          if (response.ok) {
            alert("Lead deleted successfully")
            console.log("Lead deleted successfully");
            fetchData()
          } else {
            console.error("Failed to delete lead");
          }
        } catch (error) {
          console.error("Error deleting lead:", error);
        }
      };
      
  

  return (
    <div className="recent-leads-container">
      <div className="recent-leads-content">
        <div className="recent-leads-header">
          <h3>Recent Leads</h3>
          <div className="recent-leads-controls">
            <div className="search-input">
              <input type="text" placeholder="Search leads..." />
              <i className="ri-search-line"></i>
            </div>
            <button className="filter-button">
              <i className="ri-filter-line"></i>
              Filter
            </button>
          </div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Property Type</th>
                <th>Status</th>
                <th>Budget</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr key={index}>
                  <td>{lead.name}</td>
                  <td>{lead.location}</td>
                  <td>{lead.property_type}</td>
                  <td className='status'>
                    <span className={lead.property_status === "For Sale" ? "status-sale" : "status-rent"}>
                      {lead.property_status}
                    </span>
                  </td>
                  <td>${Number(lead.budget).toLocaleString()}</td>
                  <td>{new Date(lead.created_at).toLocaleDateString()}</td>
                  <td className="actions">
                    <button onClick={() => handleDelete(lead.id)}>
                      <MdDeleteOutline size={20} color="red"/>
                    </button>
                    <button onClick={() => handleEditClick(lead)}>
                      <MdModeEdit size={20}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {modalOpen && selectedLead && (
            <Editform
              lead={selectedLead}
              onClose={() => setModalOpen(false)}
              onUpdate={handleLeadUpdate}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentLeads;
