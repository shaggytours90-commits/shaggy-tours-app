import { useState } from 'react';

export default function AdminDashboard() {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', direction: 'ltr' }}>
      <h1>🛠️ Shaggy Tours Admin</h1>
      <div style={{ background: '#f4f4f4', padding: '20px', borderRadius: '8px' }}>
        <h3>Add New Trip (Buggy, etc.)</h3>
        <input placeholder="Trip Name" style={{ width: '100%', marginBottom: '10px' }} />
        <input placeholder="Price in EUR" type="number" style={{ width: '100%', marginBottom: '10px' }} />
        <button style={{ background: '#28a745', color: '#fff', padding: '10px 20px', border: 'none' }}>Add Trip</button>
      </div>
    </div>
  );
  }
