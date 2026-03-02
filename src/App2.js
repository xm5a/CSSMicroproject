import React, { useState } from 'react';
import Login from './Login'; 
import Dashboard from './Dashboard';
import Rooms from './Rooms';
import POS from './POS';
import Inventory from './Inventory';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

  return (
    <div>
      <nav style={{ padding: '15px', backgroundColor: '#222', color: '#fff', display: 'flex', gap: '15px' }}>
        <span onClick={() => setCurrentPage('dashboard')} style={{ cursor: 'pointer' }}>Dashboard</span>
        <span onClick={() => setCurrentPage('rooms')} style={{ cursor: 'pointer' }}>Rooms</span>
        <span onClick={() => setCurrentPage('pos')} style={{ cursor: 'pointer' }}>POS</span>
        <span onClick={() => setCurrentPage('inventory')} style={{ cursor: 'pointer' }}>Inventory</span>
        <button onClick={() => setIsLoggedIn(false)} style={{ marginLeft: 'auto' }}>Logout</button>
      </nav>
      {currentPage === 'dashboard' && <Dashboard />}
      {currentPage === 'rooms' && <Rooms />}
      {currentPage === 'pos' && <POS />}
      {currentPage === 'inventory' && <Inventory />}
    </div>
  );
}

export default App;