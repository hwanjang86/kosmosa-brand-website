import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Footer from './Footer';
import './LegalLayout.css';

export default function LegalLayout({ title, updated, children }) {
  return (
    <div className="legal-page">
      <a className="legal-skip" href="#legal-content">Skip to content</a>
      <header className="legal-header">
        <a className="legal-brand" href="/">KOSMOSA</a>
        <a className="legal-back" href="/">
          <ArrowLeft size={16} aria-hidden="true" /> Back to home
        </a>
      </header>
      <main id="legal-content" className="legal-content" tabIndex={-1}>
        <p className="legal-eyebrow">KOSMOSA / Legal</p>
        <h1>{title}</h1>
        <p className="legal-updated">Last updated: <time dateTime={updated}>{new Date(`${updated}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time></p>
        <nav className="legal-nav" aria-label="Legal pages">
          <a href="/privacy.html" aria-current={title === 'Privacy Policy' ? 'page' : undefined}>Privacy Policy</a>
          <a href="/terms.html" aria-current={title === 'Terms of Service' ? 'page' : undefined}>Terms of Service</a>
        </nav>
        <article>{children}</article>
      </main>
      <Footer />
    </div>
  );
}
