import React, { useState } from 'react';

export default function AdminPro() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', backgroundColor: '#f5f5f5', minHeight: '100vh', direction: 'ltr' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#1a1a1a', borderBottom: '3px solid #f39c12', paddingBottom: '10px' }}>⚙️ Shaggy Tours - Control Panel</h1>
        
        {/* إضافة رحلة جديدة مع صورة */}
        <section style={{ marginTop: '30px' }}>
          <h3>Add New Tour (With Image)</h3>
          <div style={{ display: 'grid', gap: '15px' }}>
            <input placeholder="Tour Name (e.g. BUGGY SAFARI)" style={inputStyle} />
            <input placeholder="Price (e.g. 50 €)" style={inputStyle} />
            <input placeholder="Short Description" style={inputStyle} />
            <input placeholder="Image URL (Paste image link here)" style={inputStyle} />
            <button style={{ backgroundColor: '#25D366', color: 'white', padding: '15px', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
              ➕ Publish Tour to Website
            </button>
          </div>
        </section>

        {/* إعدادات الموقع العامة */}
        <section style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <h3>Website Settings</h3>
          <div style={{ display: 'grid', gap: '15px' }}>
            <input placeholder="Change Logo Text" defaultValue="SHAGGY TOURS" style={inputStyle} />
            <input placeholder="Main Hero Image URL" style={inputStyle} />
            <button style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '15px', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
              💾 Save Settings
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '12px',
  borderRadius: '5px',
  border: '1px solid #ddd',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box'
};
          
