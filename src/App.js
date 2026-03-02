import React, { useState } from 'react';
import Login from './Login'; 
import Dashboard from './Dashboard';
import Rooms from './Rooms';
import POS from './POS';
import Inventory from './Inventory';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  
  // Master Room Data
  const [rooms, setRooms] = useState([
    { id: 101, type: 'Deluxe', status: 'Available', guest: '' },
    { id: 102, type: 'Suite', status: 'Available', guest: '' },
    { id: 103, type: 'Standard', status: 'Available', guest: '' },
    { id: 104, type: 'Deluxe', status: 'Available', guest: '' },
  ]);

  // Logic to Check-in
  const checkInGuest = (roomId, guestName) => {
    setRooms(prevRooms => prevRooms.map(room => 
      room.id === parseInt(roomId) 
        ? { ...room, status: 'Occupied', guest: guestName } 
        : room
    ));
    alert(`Guest ${guestName} checked into Room ${roomId}`);
  };

  // Logic to Check-out
  const checkOutGuest = (roomId) => {
    setRooms(prevRooms => prevRooms.map(room => 
      room.id === roomId 
        ? { ...room, status: 'Available', guest: '' } 
        : room
    ));
    alert(`Room ${roomId} is now vacant.`);
  };

  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

  return (
    <div>
      <nav style={{ padding: '15px', backgroundColor: '#222', color: '#fff', display: 'flex', gap: '15px' }}>
        <b onClick={() => setCurrentPage('dashboard')} style={{ cursor: 'pointer', color: currentPage === 'dashboard' ? '#4CAF50' : 'white' }}>Dashboard</b>
        <span onClick={() => setCurrentPage('rooms')} style={{ cursor: 'pointer', color: currentPage === 'rooms' ? '#4CAF50' : 'white' }}>Rooms</span>
        <span onClick={() => setCurrentPage('pos')} style={{ cursor: 'pointer', color: currentPage === 'pos' ? '#4CAF50' : 'white' }}>POS</span>
        <span onClick={() => setCurrentPage('inventory')} style={{ cursor: 'pointer', color: currentPage === 'inventory' ? '#4CAF50' : 'white' }}>Inventory</span>
        <button onClick={() => setIsLoggedIn(false)} style={{ marginLeft: 'auto' }}>Logout</button>
      </nav>

      <div style={{ padding: '20px' }}>
        {currentPage === 'dashboard' && (
          <Dashboard onCheckIn={checkInGuest} rooms={rooms} />
        )}
        
        {/* FIXED: The onCheckOut prop is now properly passed inside the return block */}
        {currentPage === 'rooms' && (
          <Rooms rooms={rooms} onCheckOut={checkOutGuest} />
        )}
        
        {currentPage === 'pos' && <POS />}
        {currentPage === 'inventory' && <Inventory />}
      </div>
    </div>
  );
}

export default App;