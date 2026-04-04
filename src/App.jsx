import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import FeaturedNewsBlock from './components/FeaturedNewsBlock';
import MainGrid from './components/MainGrid';
import MediaBlock from './components/MediaBlock';
import InfoBar from './components/InfoBar';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <HeroCarousel />
      <FeaturedNewsBlock />
      <MainGrid />
      <MediaBlock />
      <InfoBar />
      <Footer />

      {/* Back to Top FAB */}
      {showTopBtn && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Lên đầu trang"
          title="Lên đầu trang"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
