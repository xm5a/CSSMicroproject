import React from 'react';

const Inventory = () => {
  const stock = [
    { id: 1, item: 'Toiletries Kit', quantity: 45, min: 20 },
    { id: 2, item: 'Bed Linens', quantity: 8, min: 15 },
    { id: 3, item: 'Kitchen Coffee Beans (kg)', quantity: 2, min: 5 },
    { id: 4, item: 'Cleaning Supplies', quantity: 30, min: 10 }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Supply Chain & Inventory</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#333', color: 'white' }}>
            <th style={{ padding: '12px' }}>Item Name</th>
            <th style={{ padding: '12px' }}>Current Stock</th>
            <th style={{ padding: '12px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {stock.map(item => (
            <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px' }}>{item.item}</td>
              <td style={{ padding: '12px' }}>{item.quantity}</td>
              <td style={{ padding: '12px' }}>
                {item.quantity < item.min ? (
                  <span style={{ color: 'red', fontWeight: 'bold' }}>⚠️ LOW STOCK - REORDER</span>
                ) : (
                  <span style={{ color: 'green' }}>Good</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;