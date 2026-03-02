import React from 'react';

const Rooms = ({ rooms, onCheckOut }) => {
  const getStatusColor = (status) => {
    if (status === 'Available') return '#4CAF50'; // Green
    if (status === 'Occupied') return '#F44336';  // Red
    return '#FFC107'; // Yellow
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Room Status Grid</h2>
        <p>Total Rooms: {rooms.length}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {rooms.map((room) => (
          <div key={room.id} style={{
            padding: '20px', 
            border: '1px solid #ddd', 
            borderRadius: '12px',
            backgroundColor: getStatusColor(room.status), 
            color: 'white', 
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0' }}>Room {room.id}</h3>
            <p style={{ fontSize: '14px', opacity: 0.9 }}>{room.type}</p>
            <hr style={{ border: '0.5px solid rgba(255,255,255,0.3)' }} />
            
            <div style={{ minHeight: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <strong>{room.status}</strong>
              {room.guest && (
                <p style={{ fontSize: '14px', marginTop: '5px' }}>
                  👤 {room.guest}
                </p>
              )}
            </div>

            {/* Check-out Button - Only shows if Occupied */}
            {room.status === 'Occupied' && (
              <button 
                onClick={() => onCheckOut(room.id)}
                style={{
                  marginTop: '10px',
                  padding: '8px 12px',
                  backgroundColor: 'white',
                  color: '#F44336',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Check-out
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;