import React, { useState } from 'react';

const Dashboard = ({ onCheckIn, rooms }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [formData, setFormData] = useState({ roomId: '', guestName: '' });

  // Live Logic for Stats
  const occupiedRooms = rooms.filter(r => r.status === 'Occupied');
  const occupiedCount = occupiedRooms.length;
  const occupancyRate = ((occupiedCount / rooms.length) * 100).toFixed(0);
  const totalRevenue = occupiedCount * 2500; 

  const stats = [
    { label: 'Occupied Rooms', value: occupiedCount, color: '#e3f2fd' },
    { label: 'Occupancy Rate', value: `${occupancyRate}%`, color: '#f1f8e9' },
    { label: 'Est. Revenue', value: `₹${totalRevenue}`, color: '#fff3e0' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckIn(formData.roomId, formData.guestName);
    setShowModal(false);
    setFormData({ roomId: '', guestName: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Operational Overview</h2>

      {/* 1. The 3 Status Boxes */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        {stats.map((item, index) => (
          <div key={index} style={{ 
            padding: '20px', backgroundColor: item.color, 
            borderRadius: '8px', flex: 1, textAlign: 'center', border: '1px solid #ddd'
          }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#555' }}>{item.label}</h4>
            <p style={{ fontSize: '28px', fontWeight: 'bold', margin: '0' }}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* 2. Action Buttons */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
        <button 
          onClick={() => setShowModal(true)} 
          style={{ padding: '12px 24px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          + New Guest Check-in
        </button>

        <button 
          onClick={() => setShowSummary(!showSummary)} 
          style={{ padding: '12px 24px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {showSummary ? "Hide Summary" : "Generate Summary"}
        </button>
      </div>

      {/* 3. Conditional Summary Report */}
      {showSummary && (
        <div style={{ padding: '20px', backgroundColor: '#fff', border: '1px solid #2196F3', borderRadius: '8px', marginBottom: '20px' }}>
          <h3>Hotel Occupancy Report</h3>
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
          <hr />
          {occupiedCount > 0 ? (
            <ul>
              {occupiedRooms.map(r => (
                <li key={r.id}>Room {r.id}: Occupied by <b>{r.guest}</b></li>
              ))}
            </ul>
          ) : (
            <p>No rooms are currently occupied.</p>
          )}
          <p><i>Report generated successfully for MSBTE Microproject.</i></p>
        </div>
      )}

      {/* 4. Check-in Dialog Modal */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', width: '350px' }}>
            <h3 style={{ marginTop: 0 }}>Guest Registration</h3>
            <form onSubmit={handleSubmit}>
              <select 
                required 
                style={{ width: '100%', marginBottom: '15px', padding: '10px' }}
                onChange={(e) => setFormData({...formData, roomId: e.target.value})}
              >
                <option value="">-- Select Room --</option>
                {rooms.filter(r => r.status === 'Available').map(r => (
                  <option key={r.id} value={r.id}>Room {r.id} ({r.type})</option>
                ))}
              </select>
              <input 
                type="text" 
                placeholder="Guest Name" 
                required 
                style={{ width: '100%', marginBottom: '20px', padding: '10px', boxSizing: 'border-box' }}
                onChange={(e) => setFormData({...formData, guestName: e.target.value})}
              />
              <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>Confirm</button>
              <button type="button" onClick={() => setShowModal(false)} style={{ width: '100%', marginTop: '10px', background: 'none', border: 'none', color: '#888' }}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;