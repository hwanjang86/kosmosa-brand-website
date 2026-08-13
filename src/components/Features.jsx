import React from 'react';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" style={{ backgroundColor: 'var(--bg-secondary)', padding: '160px 5vw', color: 'var(--text-primary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Lifestyle Feature */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '160px' 
        }}>
          <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '700px' }}>
            <h2 style={{ fontSize: '3.2rem', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '24px' }}>
              The Ultimate Executive Workspace.
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Experience the perfect synergy of form and function. Our premium leather padfolio seamlessly integrates into modern setups, commanding attention without compromising on utility.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: '100%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}
          >
            <img 
              src="/images/kosmosa_desk_lifestyle.jpg" 
              alt="Executive Lifestyle Workspace" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </motion.div>
        </div>

        {/* Detail Feature */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '80px',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}
          >
            <img 
              src="/images/kosmosa_padfolio_detail.jpg" 
              alt="Padfolio Detail Close-up" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '24px' }}>
              Precision in every detail.
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '40px' }}>
              We obsessed over the placement of the pen loop, the symmetry of the pockets, and the exact dimensions to hold your most important tools. Completely flush. Zero compromises.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-primary)', fontSize: '1.1rem' }}>
              <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', background: '#000', color: '#fff', borderRadius: '50%', fontSize: '0.8rem' }}>✓</span> 
                Exact pocket symmetry
              </li>
              <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', background: '#000', color: '#fff', borderRadius: '50%', fontSize: '0.8rem' }}>✓</span> 
                Flush top-right pen loop
              </li>
              <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', background: '#000', color: '#fff', borderRadius: '50%', fontSize: '0.8rem' }}>✓</span> 
                Premium edge finishing
              </li>
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
