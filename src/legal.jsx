import React from 'react';
import ReactDOM from 'react-dom/client';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import './index.css';

const Page = window.location.pathname.replace(/\/$/, '') === '/terms.html'
  ? TermsOfService
  : PrivacyPolicy;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
