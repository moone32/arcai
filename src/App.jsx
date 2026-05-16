import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingMenu from './components/layout/FloatingMenu';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Benefits from './pages/Benefits';
import Products from './pages/Products';
import Support from './pages/Support';
import Cases from './pages/Cases';
import Partners from './pages/Partners';
import Consult from './pages/Consult';

function App() {
  /*const isProductionUrl = window.location.hostname.includes('arcai.co.kr');*/
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    // Custom event to handle programmatic navigation
    window.addEventListener('pushstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate', handleLocationChange);
    };
  }, []);

  /*if (isProductionUrl) {
    return (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
        <img src="/soon.png" alt="Coming Soon" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
      </div>
    );
  }*/

  return (
    <div className="app-container">
      <Header />
      <FloatingMenu />
      <main className="main-content">
        {currentPath === '/solutions' ? <Solutions /> : currentPath === '/benefits' ? <Benefits /> : currentPath === '/products' ? <Products /> : currentPath === '/support' ? <Support /> : currentPath === '/cases' ? <Cases /> : currentPath === '/partners' ? <Partners /> : currentPath === '/consult' ? <Consult /> : <Home />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
