import React, { createContext, useState, useEffect } from "react";

// Create a context
export const DataContext = createContext();

// Data Provider Component
export const DataProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);
  const [leadStats, setLeadStats] = useState([]);
  const [downloads, setdownloads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  const fetchData = async () => {

      const accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzczNzk4MjE1LCJpYXQiOjE3NDIyNjIyMTUsImp0aSI6Ijk2YTUxMTc3NTJjNDQ3ZDg4NzE5MGE4MDE0ODMxZjExIiwidXNlcl9pZCI6MX0.eFstkg-ML4V24crg_Grh7gMpzS5JDwB89nhJdz-fCSU";
        
    try {
      const LeadsResponse = await fetch(
        "https://buyinteriorapp-ed1e9e8d81f4.herokuapp.com/api/leads/"
      );
      const LeadsData = await LeadsResponse.json();
      const reversedLeads = LeadsData.reverse();
      setLeads(reversedLeads);

      const LeadStatsResponse = await fetch(
        "https://buyinteriorapp-ed1e9e8d81f4.herokuapp.com/api/admin/lead-stats/"
      );
      const LeadStatsData = await LeadStatsResponse.json();
      setLeadStats(LeadStatsData);

      const DownloadsResponse = await fetch(
        "https://buyinteriorapp-ed1e9e8d81f4.herokuapp.com/api/lead/download-history/",
        {
           headers: {
           Authorization: `Bearer ${accessToken}`,
         },
        }
      );
      const DownloadsData = await DownloadsResponse.json();
      setdownloads(DownloadsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{ loading, error, leads, fetchData, leadStats, downloads }}
    >
      {children}
    </DataContext.Provider>
  );
};
