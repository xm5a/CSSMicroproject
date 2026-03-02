import React from 'react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Bookings', value: '124', color: '#e3f2fd' },
    { label: 'Occupancy Rate', value: '78%', color: '#f1f8e9' },
    { label: 'Daily Revenue', value: '₹45,000', color: '#fff3e0' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Operational Overview</h2>
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
      <button style={{ marginRight: '10px' }}>New Check-in</button>
      <button>Generate Report</button>
    </div>
  );
};

export default Dashboard;