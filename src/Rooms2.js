import React from 'react';

const Rooms = () => {
  const roomData = [
    { id: 101, type: 'Deluxe', status: 'Available' },
    { id: 102, type: 'Suite', status: 'Occupied' },
    { id: 103, type: 'Standard', status: 'Cleaning' },
    { id: 104, type: 'Deluxe', status: 'Maintenance' },
  ];

  const getStatusColor = (status) => {
    if (status === 'Available') return '#4CAF50'; // Green
    if (status === 'Occupied') return '#F44336';  // Red
    if (status === 'Cleaning') return '#2196F3';  // Blue
    return '#FFC107'; // Yellow for Maintenance
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Room Management Grid</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px' }}>
        {roomData.map((room) => (
          <div key={room.id} style={{
            padding: '20px', border: '2px solid #ddd', borderRadius: '10px',
            backgroundColor: getStatusColor(room.status), color: 'white', textAlign: 'center'
          }}>
            <strong>Room {room.id}</strong>
            <p>{room.type}</p>
            <small>{room.status}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;