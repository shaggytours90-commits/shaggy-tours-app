import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// ربط الموقع بقاعدة البيانات
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function AdminDashboard() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Sea');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  // دالة إرسال البيانات إلى Supabase
  const handleAddTour = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const { data, error } = await supabase
      .from('tours')
      .insert([
        { title: title, price_eur: price, category: category, description: desc, image_url: image }
      ]);

    setLoading(false);

    if (error) {
      alert("❌ حدث خطأ: " + error.message);
    } else {
      alert("✅ تم إضافة الرحلة للموقع بنجاح!");
      setTitle(''); setPrice(''); setDesc(''); setImage(''); // تفريغ الخانات
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', backgroundColor: '#f5f5f5', minHeight: '100vh', direction: 'ltr' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        <h2 style={{ borderBottom: '2px solid #f39c12', paddingBottom: '10px' }}>⚙️ Add New Tour directly to Website</h2>
        
        <form onSubmit={handleAddTour} style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
          <input required placeholder="Tour Title (e.g. BUGGY SAFARI)" value={title} onChange={(e) => setTitle(e.target.value)} style={inputStyle} />
          
          <input required type="number" placeholder="Price in EUR (e.g. 50)" value={price} onChange={(e) => setPrice(e.target.value)} style={inputStyle} />
          
          <select value={category} onChange={(e) => setCategory(e.target.value)} style={inputStyle}>
            <option value="Sea">Sea Tour</option>
            <option value="Desert">Desert Safari</option>
            <option value="Cultural">Cultural Tour</option>
          </select>

          <input required placeholder="Short Description (e.g. 2 Hours of Adrenaline)" value={desc} onChange={(e) => setDesc(e.target.value)} style={inputStyle} />
          
          <input required placeholder="Image URL (Paste Link Here)" value={image} onChange={(e) => setImage(e.target.value)} style={inputStyle} />
          
          <button type="submit" disabled={loading} style={{ backgroundColor: loading ? '#ccc' : '#25D366', color: 'white', padding: '15px', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
            {loading ? '⏳ Publishing...' : '➕ Publish Tour Now'}
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = { padding: '12px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '16px', width: '100%', boxSizing: 'border-box' };
