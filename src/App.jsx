import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingMenu from './components/layout/FloatingMenu';
import Home from './pages/Home';

function App() {
  const isProductionUrl = window.location.hostname.includes('arcai.co.kr');

  if (isProductionUrl) {
    return (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
        <img src="/soon.png" alt="Coming Soon" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header />
      <FloatingMenu />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
