import { createClient } from '@supabase/supabase-js'

export default function ShaggyTours() {
  const tours = [
    { id: 1, name: "Luxor Day Trip", price: "110 €", icon: "🏛️", details: "Karnak, Valley of Kings" },
    { id: 2, name: "Hamata Islands", price: "57 €", icon: "🐬", details: "Sun, Tue, Thu - Snorkeling" },
    { id: 3, name: "Super Safari", price: "37 €", icon: "🏜️", details: "Quad, Camel, BBQ Dinner" },
    { id: 4, name: "Dolphin House", price: "53 €", icon: "🚢", details: "Samadai Reef" }
  ];

  return (
    <div style={{ direction: 'rtl', fontFamily: 'Arial', padding: '20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <header style={{ backgroundColor: '#ff9800', color: 'white', padding: '20px', borderRadius: '10px' }}>
        <h1>🌴 Shaggy Tours Marsa Alam 🌴</h1>
        <p>خصم 10% على جميع الرحلات لفترة محدودة!</p>
      </header>
      
      <div style={{ marginTop: '30px' }}>
        {tours.map(tour => (
          <div key={tour.id} style={{ backgroundColor: 'white', margin: '15px auto', padding: '15px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxWidth: '400px' }}>
            <h2>{tour.icon} {tour.name}</h2>
            <p style={{ color: '#ff5722', fontSize: '20px', fontWeight: 'bold' }}>{tour.price}</p>
            <p>{tour.details}</p>
            <button style={{ backgroundColor: '#25D366', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>احجز الآن عبر واتساب</button>
          </div>
        ))}
      </div>
    </div>
  );
}
