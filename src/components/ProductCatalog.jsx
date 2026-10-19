import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PRODUCTS = [
  {
    id: 'padfolio-cl-a4',
    name: 'Classic A4 Padfolio',
    amazonUrl: 'https://www.amazon.com/dp/B0HFRR9JNK?th=1',
    description: 'Premium leather classic padfolio designed for A4 documents, featuring refined stitching and functional pockets.',
    images: {
      black: '/Product/Padfolio/KOSMOSA_CL_A4_Black_Main.png',
      brown: '/Product/Padfolio/KOSMOSA_CL_A4_Brown_Main.png',
    },
    colors: ['black', 'brown'],
    price: '$38.9'
  },
  {
    id: 'padfolio-cl-mini',
    name: 'Classic Mini Padfolio',
    amazonUrl: 'https://www.amazon.com/dp/B0HFRSDDGK?th=1',
    description: 'Compact and elegant leather padfolio for on-the-go professionals.',
    images: {
      black: '/Product/Padfolio/KOSMOSA_CL_Mini_Black_Main.png',
      navy: '/Product/Padfolio/KOSMOSA_CL_Mini_Navy_Main.png',
    },
    colors: ['black', 'navy'],
    price: '$26.9'
  },
  {
    id: 'deskmat',
    name: 'Premium Felt Desk Mat',
    description: 'Ultra-soft dark grey wool felt desk mat providing a warm, anti-slip surface for your setup.',
    images: {
      darkgrey: '/Product/Deskmat/feltdeskmat2-KOSMOSA.png',
    },
    colors: ['darkgrey'],
    price: '$24.99'
  }
];

export default function ProductCatalog() {
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0]);
  const [activeColor, setActiveColor] = useState(PRODUCTS[0].colors[0]);

  const handleProductChange = (prod) => {
    setActiveProduct(prod);
    setActiveColor(prod.colors[0]);
  };

  return (
    <section id="collection" style={{ padding: '160px 5vw', background: 'var(--bg-primary)' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '16px' }}>Shop the Collection</h2>
        <p style={{ fontSize: '1.1rem' }}>Authentic, high-quality materials.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '60px', flexWrap: 'wrap' }}>
        {PRODUCTS.map(prod => (
          <button
            key={prod.id}
            onClick={() => handleProductChange(prod)}
            style={{
              padding: '12px 24px',
              borderRadius: '30px',
              border: activeProduct.id === prod.id ? '1px solid #111' : '1px solid var(--chrome-border)',
              background: activeProduct.id === prod.id ? '#111' : '#fff',
              color: activeProduct.id === prod.id ? '#fff' : '#111',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '0.95rem',
              transition: 'all 0.2s ease',
              boxShadow: activeProduct.id === prod.id ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            {prod.name}
          </button>
        ))}
      </div>

      <div className="glass-card" style={{ display: 'flex', flexDirection: 'row', padding: '60px', gap: '60px', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '500px', background: 'var(--bg-secondary)', borderRadius: '20px', padding: '40px', position: 'relative' }}>
          <span style={{ position: 'absolute', top: '20px', left: '20px', fontSize: '0.8rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Interact to view</span>
          <AnimatePresence mode='wait'>
            <motion.img
              key={`${activeProduct.id}-${activeColor}`}
              src={activeProduct.images[activeColor]}
              alt={activeProduct.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{ maxWidth: '100%', maxHeight: '450px', objectFit: 'contain', cursor: 'grab', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.1}
              whileDrag={{ cursor: 'grabbing', scale: 1.05 }}
            />
          </AnimatePresence>
        </div>

        <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.h3 
            key={`title-${activeProduct.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '2.5rem', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '20px' }}
          >
            {activeProduct.name}
          </motion.h3>
          <p style={{ marginBottom: '40px', fontSize: '1.15rem' }}>{activeProduct.description}</p>
          
          <div style={{ marginBottom: '40px' }}>
            <h4 style={{ marginBottom: '16px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888' }}>Select Color</h4>
            <div style={{ display: 'flex', gap: '16px' }}>
              {activeProduct.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setActiveColor(color)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: activeColor === color ? '2px solid #111' : '2px solid transparent',
                    background: color === 'black' ? '#222' : color === 'brown' ? '#6b4c3a' : color === 'navy' ? '#253454' : '#555',
                    cursor: 'pointer',
                    boxShadow: activeColor === color ? '0 0 0 4px #fff, 0 4px 12px rgba(0,0,0,0.2)' : '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'all 0.2s ease'
                  }}
                  aria-label={color}
                />
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '40px', borderTop: '1px solid var(--chrome-border)' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: 600 }}>{activeProduct.price}</span>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={activeProduct.amazonUrl || 'https://amazon.com'}
              target="_blank"
              style={{
                background: '#111',
                color: '#fff',
                padding: '16px 32px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1rem'
              }}
            >
              Add to Cart
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
