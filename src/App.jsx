import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductCatalog from './components/ProductCatalog';
// import DeskVisualizer from './components/DeskVisualizer';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductCatalog />
        {/* <DeskVisualizer /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
