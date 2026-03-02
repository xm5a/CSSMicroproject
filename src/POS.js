import React, { useState } from 'react';

const POS = () => {
  const services = [
    { id: 1, name: 'Breakfast Buffet', price: 500 },
    { id: 2, name: 'Full Body Spa', price: 2000 },
    { id: 3, name: 'Laundry Service', price: 300 }
  ];

  const [roomNumber, setRoomNumber] = useState('');

const handlePostToRoom = (serviceName, price) => {
  if (!roomNumber) return alert("Please enter a Room Number first");
  
  // Use backticks (`) instead of quotes (') or (")
  alert(`Posted ${serviceName} (₹${price}) to Room ${roomNumber}`);
};

  return (
    <div style={{ padding: '20px' }}>
      <h2>Service Point of Sale (POS)</h2>
      <input 
        type="number" 
        placeholder="Guest Room Number" 
        style={{ padding: '10px', marginBottom: '20px' }}
        onChange={(e) => setRoomNumber(e.target.value)}
      />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Service</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Price</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map(s => (
            <tr key={s.id}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{s.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>₹{s.price}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <button onClick={() => handlePostToRoom(s.name, s.price)}>Post to Room</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default POS;