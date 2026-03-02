import React, { useState } from 'react';

const Dashboard = () => {
  // Local state to make the buttons "live"
  const [bookings, setBookings] = useState(124);
  const [showReport, setShowReport] = useState(false);

  const handleNewCheckIn = () => {
    setBookings(prev => prev + 1);
    alert("New Guest Checked In! Total bookings updated.");
  };

  const handleGenerateReport = () => {
    setShowReport(!showReport);
  };

  const stats = [
    { label: 'Total Bookings', value: bookings, color: '#e3f2fd' },
    { label: 'Occupancy Rate', value: '78%', color: '#f1f8e9' },
    { label: 'Daily Revenue', value: '₹45,000', color: '#fff3e0' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Operational Overview</h2>
      
      {/* Stats Cards */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        {stats.map((item, index) => (
          <div key={index} style={{ 
            padding: '20px', backgroundColor: item.color, 
            borderRadius: '8px', flex: 1, textAlign: 'center', border: '1px solid #ddd' 
          }}>
            <h4>{item.label}</h4>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{item.value}</p>
          </div>
        ))}
      </div>

      <h3>Quick Actions</h3>
      <button 
        onClick={handleNewCheckIn}
        style={{ marginRight: '10px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        New Check-in
      </button>
      
      <button 
        onClick={handleGenerateReport}
        style={{ padding: '10px 20px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        {showReport ? "Hide Report" : "Generate Report"}
      </button>

      {/* Conditional Rendering for the Report */}
      {showReport && (
        <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', backgroundColor: '#fff' }}>
          <h4>Shift Summary Report</h4>
          <p>Date: {new Date().toLocaleDateString()}</p>
          <p>Status: All systems operational. 5 rooms pending cleaning.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;