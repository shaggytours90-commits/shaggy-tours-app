import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// الاتصال بقاعدة البيانات
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function HomeDynamic() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  // جلب البيانات من Supabase عند فتح الموقع
  useEffect(() => {
    async function fetchTours() {
      const { data, error } = await supabase
        .from('tours')
        .select('*')
        .order('created_at', { ascending: false }); // عرض الأحدث أولاً
      
      if (data) setTours(data);
      setLoading(false);
    }
    fetchTours();
  }, []);

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* الهيدر (Header) */}
      <div style={{ background: '#1a1a1a', padding: '20px', textAlign: 'center', color: 'white' }}>
        <h1 style={{ color: '#f39c12', margin: 0, letterSpacing: '2px' }}>SHAGGY TOURS</h1>
        <p style={{ margin: '5px 0 0 0' }}>Your Best Guide in Marsa Alam</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>🔥 Our Top Tours</h2>
        
        {loading ? (
          <p style={{ textAlign: 'center', fontSize: '20px' }}>⏳ Loading amazing tours...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
            {tours.map((tour) => (
              <div key={tour.id} style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                {/* عرض الصورة أو صورة افتراضية لو لم تضع رابط */}
                <img src={tour.image_url || 'https://via.placeholder.com/800x400?text=No+Image'} alt={tour.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                
                <div style={{ padding: '20px' }}>
                  <span style={{ fontSize: '12px', color: '#ff9800', fontWeight: 'bold', textTransform: 'uppercase' }}>{tour.category}</span>
                  <h3 style={{ margin: '5px 0 10px 0', fontSize: '22px', color: '#1a1a1a' }}>{tour.title || tour.category}</h3>
                  <p style={{ color: '#666', fontSize: '14px', minHeight: '40px' }}>{tour.description}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '15px', marginTop: '10px' }}>
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#2c3e50' }}>{tour.price_eur} €</span>
                    <a href={`https://wa.me/201000000000?text=I want to book ${tour.title}`} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', backgroundColor: '#25D366', color: 'white', padding: '10px 15px', borderRadius: '5px', fontWeight: 'bold' }}>
                      Book on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
