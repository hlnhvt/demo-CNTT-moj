import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import FeaturedNewsBlock from './components/FeaturedNewsBlock';
import MainGrid from './components/MainGrid';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <HeroCarousel />
      <FeaturedNewsBlock />
      <MainGrid />
      <Footer />
    </div>
  );
}

export default App;
