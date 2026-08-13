import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.98]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '160px',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div
        style={{
          textAlign: 'center',
          zIndex: 10,
          opacity,
          marginBottom: '60px'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.1 }}
      >
        <h2 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '20px' }}>
          KOSMOSA Desk Collection
        </h2>
        <h1 style={{ 
          fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', 
          fontWeight: 600, 
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          marginBottom: '24px',
          color: 'var(--text-primary)'
        }}>
          orbit in your order.
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          color: 'var(--text-secondary)', 
          maxWidth: '650px', 
          margin: '0 auto',
          fontWeight: 400,
          lineHeight: 1.5
        }}>
          Minimalist deskterior essentials crafted for the modern professional. 
          Premium authentic leather and pure wool felt.
        </p>
      </motion.div>

      <motion.div 
        style={{ 
          width: '92%', 
          maxWidth: '1200px', 
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 20px 80px rgba(0,0,0,0.08)',
          y: y1,
          scale,
          backgroundColor: '#fff'
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.3 }}
      >
        <img 
          src="/images/kosmosa_hero_setup.jpg" 
          alt="KOSMOSA Hero Setup" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
      </motion.div>
    </section>
  );
}
