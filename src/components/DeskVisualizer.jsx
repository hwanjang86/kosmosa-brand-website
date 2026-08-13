import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// SVG components for the base desk setup preset
const Keyboard = () => (
  <div style={{ position: 'absolute', top: '40%', left: '35%', transform: 'translate(-50%, -50%)', zIndex: 1, pointerEvents: 'none', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.08))' }}>
    <svg width="280" height="110" viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="280" height="110" rx="8" fill="#F5F5F7" stroke="#E5E5EA" strokeWidth="2"/>
      <rect x="10" y="10" width="260" height="90" rx="4" fill="#FFFFFF"/>
      <rect x="15" y="15" width="20" height="20" rx="4" fill="#F5F5F7"/>
      <rect x="40" y="15" width="20" height="20" rx="4" fill="#F5F5F7"/>
      <rect x="65" y="15" width="20" height="20" rx="4" fill="#F5F5F7"/>
      <rect x="90" y="15" width="20" height="20" rx="4" fill="#F5F5F7"/>
      <rect x="115" y="15" width="20" height="20" rx="4" fill="#F5F5F7"/>
      <rect x="140" y="15" width="20" height="20" rx="4" fill="#F5F5F7"/>
      <rect x="165" y="15" width="20" height="20" rx="4" fill="#F5F5F7"/>
      <rect x="190" y="15" width="20" height="20" rx="4" fill="#F5F5F7"/>
      <rect x="215" y="15" width="20" height="20" rx="4" fill="#F5F5F7"/>
      <rect x="240" y="15" width="25" height="20" rx="4" fill="#F5F5F7"/>
      {/* Spacebar row */}
      <rect x="75" y="75" width="130" height="20" rx="4" fill="#F5F5F7"/>
      <rect x="15" y="75" width="25" height="20" rx="4" fill="#F5F5F7"/>
      <rect x="45" y="75" width="25" height="20" rx="4" fill="#F5F5F7"/>
      <rect x="210" y="75" width="25" height="20" rx="4" fill="#F5F5F7"/>
      <rect x="240" y="75" width="25" height="20" rx="4" fill="#F5F5F7"/>
    </svg>
  </div>
);

const Mouse = () => (
  <div style={{ position: 'absolute', top: '40%', left: '55%', transform: 'translate(-50%, -50%)', zIndex: 1, pointerEvents: 'none', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.08))' }}>
    <svg width="60" height="100" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="60" height="100" rx="30" fill="#F5F5F7" stroke="#E5E5EA" strokeWidth="2"/>
      <path d="M30 10 L30 40" stroke="#E5E5EA" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </div>
);

const MonitorBase = () => (
  <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translate(-50%, 0)', zIndex: 0, pointerEvents: 'none', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))' }}>
    <svg width="240" height="80" viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M70 80 L170 80 L140 0 L100 0 Z" fill="#E5E5EA"/>
      <rect x="20" y="60" width="200" height="20" rx="4" fill="#D1D1D6"/>
    </svg>
  </div>
);

export default function DeskVisualizer() {
  const containerRef = useRef(null);

  return (
    <section id="visualizer" style={{ padding: '160px 5vw', background: 'var(--bg-secondary)' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '16px' }}>Design Your Space</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Drag and drop authentic KOSMOSA pieces onto the virtual desk.</p>
      </div>

      <div 
        ref={containerRef}
        style={{ 
          height: '75vh', 
          minHeight: '700px',
          maxWidth: '1300px',
          margin: '0 auto',
          position: 'relative', 
          overflow: 'hidden',
          backgroundColor: '#EAE7E0', /* Warm minimalist light wood/tan color */
          backgroundImage: 'radial-gradient(circle at center, #F4F1EB 0%, #EAE7E0 100%)',
          borderRadius: '24px',
          boxShadow: 'inset 0 10px 40px rgba(0,0,0,0.04), 0 20px 60px rgba(0,0,0,0.06)',
          border: '1px solid var(--chrome-border)'
        }}
      >
        <div style={{ position: 'absolute', top: '30px', left: '30px', color: '#999', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
          Interactive Canvas
        </div>

        {/* Base Desk Preset Items */}
        <MonitorBase />
        <Keyboard />
        <Mouse />

        {/* Deskmat Layer - Initially positioned behind keyboard/mouse visually by user dragging, but zIndex allows it to go under or over depending on setup */}
        <motion.img
          src="/Product/Deskmat/feltdeskmat2-KOSMOSA.png"
          alt="KOSMOSA Felt Deskmat"
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
          initial={{ x: -100, y: 150 }}
          whileDrag={{ scale: 1.02, cursor: 'grabbing', filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.15))' }}
          style={{
            position: 'absolute',
            width: '600px',
            height: 'auto',
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
            cursor: 'grab',
            zIndex: 2,
            top: '20%',
            left: '10%'
          }}
        />

        {/* Padfolio Layer */}
        <motion.img
          src="/Product/Padfolio/KOSMOSA_CL_A4_Black_Main.png"
          alt="KOSMOSA Padfolio"
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
          initial={{ x: 200, y: 100 }}
          whileDrag={{ scale: 1.05, cursor: 'grabbing', rotate: 2, filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.25))' }}
          style={{
            position: 'absolute',
            width: '240px',
            height: 'auto',
            filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.2))',
            cursor: 'grab',
            zIndex: 3,
            top: '30%',
            left: '60%'
          }}
        />
        
        {/* Detail Image Reference - Removed from the canvas to keep it strictly a top-down simulator */}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <p style={{ fontSize: '0.95rem', color: '#888' }}>* Images are 100% authentic representations of physical products.</p>
      </div>
    </section>
  );
}
