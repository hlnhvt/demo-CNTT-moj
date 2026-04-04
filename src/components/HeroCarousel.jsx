import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './HeroCarousel.css';

const HeroCarousel = () => {
  useScrollReveal();

  const scrollToContent = () => {
    const target = document.getElementById('featured-news-section');
    if (target) {
      const navbarHeight = 70;
      const extraPadding = 20;
      const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight - extraPadding;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-full-width centered-hero">
      <div className="hero-bg-layer-tech"></div>

      <div className="container hero-content-grid-single">
        <div className="hero-intro reveal-anim">
          <h1 className="hero-main-title">
            CỤC CÔNG NGHỆ THÔNG TIN
          </h1>
          <h2 className="hero-sub-title">Bộ Tư pháp</h2>

          <div className="hero-divider-center"></div>

          <p className="hero-description">
            Đơn vị tiên phong trong đổi mới sáng tạo, thúc đẩy chuyển đổi số sâu rộng và toàn diện ngành Tư pháp, hướng tới Chính phủ số, Kinh tế số và Xã hội số, phục vụ đắc lực người dân và doanh nghiệp.
          </p>

          <div className="hero-cta-group">
            <a href="/gioi-thieu" className="hero-btn-ghost">
              <span className="btn-ghost-icon">🏛️</span>
              Về chúng tôi
            </a>
          </div>
        </div>
      </div>

      {/* Floating scroll-down arrow at bottom of hero */}
      <button className="hero-scroll-fab" onClick={scrollToContent} aria-label="Cuộn xuống nội dung">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </section>
  );
};

export default HeroCarousel;
