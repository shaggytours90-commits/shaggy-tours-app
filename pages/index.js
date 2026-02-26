import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function ProfessionalTours() {
  // هذه البيانات سيتم جلبها لاحقاً من Supabase، وضعناها هنا لتظهر فوراً
  const [tours, setTours] = useState([
    { id: 1, name: "LUXOR DAY TRIP", price: "110 €", image: "https://images.unsplash.com/photo-1572252009286-268caa9281f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Karnak, Valley of Kings" },
    { id: 2, name: "SUPER SAFARI", price: "37 €", image: "https://images.unsplash.com/photo-1547434440-9b4b0fb5a8e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Quad, Camel, BBQ Dinner" },
    { id: 3, name: "HAMATA ISLANDS", price: "57 €", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "2 Snorkeling Spots" },
    { id: 4, name: "DOLPHIN HOUSE", price: "53 €", image: "https://images.unsplash.com/photo-1600100397608-f010f4198f5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Samadai Reef" }
  ]);

  const siteConfig = {
    logoText: "SHAGGY TOURS",
    heroImage: "https://images.unsplash.com/photo-1600011689022-272cbee1e102?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    discount: "10% DISCOUNT ON ALL TOURS!"
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      <Head>
        <title>{siteConfig.logoText} | Marsa Alam</title>
      </Head>

      {/* الشريط العلوي (Navbar) - أسود وأنيق */}
      <nav style={{ backgroundColor: '#1a1a1a', padding: '15px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '28px', fontWeight: '900', color: '#f39c12', letterSpacing: '2px' }}>{siteConfig.logoText}</span>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Home</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Tours</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Contact</a>
          <button style={{ backgroundColor: '#f39c12', color: '#1a1a1a', border: 'none', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Book Now</button>
        </div>
      </nav>

      {/* صورة العرض الرئيسية (Hero Section) مثل معبد الأقصر في صورتك */}
      <div style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${siteConfig.heroImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '400px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: 'white' 
      }}>
        <h1 style={{ fontSize: '48px', margin: '0 0 10px 0', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>EXPLORE MARSA ALAM</h1>
        <div style={{ backgroundColor: '#e74c3c', padding: '10px 20px', borderRadius: '30px', fontWeight: 'bold', fontSize: '18px', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          {siteConfig.discount}
        </div>
      </div>

      {/* تقسيم الصفحة: قائمة جانبية (Sidebar) + شبكة الرحلات (Grid) */}
      <div style={{ display: 'flex', maxWidth: '1400px', margin: '40px auto', padding: '0 20px', gap: '30px' }}>
        
        {/* القائمة الجانبية (Sidebar) */}
        <div style={{ flex: '1', minWidth: '250px', maxWidth: '300px' }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
            <h3 style={{ borderBottom: '2px solid #f39c12', paddingBottom: '10px', marginTop: '0' }}>CONTACT US</h3>
            <p>📍 Marsa Alam, Egypt</p>
            <p>📞 +20 123 456 7890</p>
            <button style={{ width: '100%', backgroundColor: '#25D366', color: 'white', border: 'none', padding: '12px', borderRadius: '5px', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' }}>
              WhatsApp Us
            </button>
          </div>
          
          <div style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#f39c12', marginTop: '0' }}>SPECIAL OFFER</h3>
            <h1 style={{ fontSize: '40px', margin: '10px 0' }}>30%</h1>
            <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8' }}>
              <li>Free Snorkeling Equipment</li>
              <li>Hotel Transfer Included</li>
              <li>Professional Guides</li>
            </ul>
          </div>
        </div>

        {/* شبكة الرحلات (Tours Grid) */}
        <div style={{ flex: '3', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
          {tours.map((tour) => (
            <div key={tour.id} style={{ backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', transition: 'transform 0.3s' }}>
              <img src={tour.image} alt={tour.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#1a1a1a' }}>{tour.name}</h3>
                <p style={{ color: '#666', fontSize: '14px', margin: '0 0 20px 0', minHeight: '40px' }}>{tour.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '15px' }}>
                  <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#2c3e50' }}>{tour.price}</span>
                  <button style={{ backgroundColor: '#f39c12', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
