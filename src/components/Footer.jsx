import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-primary)',
      padding: '80px 5vw 40px',
      color: 'var(--text-primary)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '80px' }}>
          
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '24px', letterSpacing: '0.05em' }}>KOSMOSA</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              orbit in your order.<br/><br/>
              Minimalist deskterior and workspace essentials crafted for the modern professional.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '24px' }}>Shop</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#padfolio" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={e=>e.target.style.color='#111'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>Leather Padfolios</a></li>
              <li><a href="#deskmat" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={e=>e.target.style.color='#111'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>Felt Deskmats</a></li>
              <li><a href="https://amazon.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={e=>e.target.style.color='#111'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>Amazon Storefront</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '24px' }}>Brand</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={e=>e.target.style.color='#111'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>Our Story</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={e=>e.target.style.color='#111'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>Materials</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={e=>e.target.style.color='#111'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>Contact Us</a></li>
            </ul>
          </div>

        </div>

        <div style={{ 
          borderTop: '1px solid var(--chrome-border)', 
          paddingTop: '30px', 
          display: 'flex', 
          justifyContent: 'space-between',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p>&copy; {new Date().getFullYear()} timbee Co., Ltd. All rights reserved. | Proudly based in South Korea.</p>
          <div style={{ display: 'flex', gap: '30px' }}>
            <a href="/privacy.html" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/terms.html" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
