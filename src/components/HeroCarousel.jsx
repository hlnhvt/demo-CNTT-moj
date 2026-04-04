import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './HeroCarousel.css';

const HeroCarousel = () => {
  useScrollReveal();

  const scrollToContent = () => {
    const target = document.getElementById('featured-news-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-full-width centered-hero">
      <div className="hero-bg-layer-tech"></div>

      <div className="container hero-content-grid-single">
        <div className="hero-intro reveal-anim">
          <h1 className="hero-main-title">
            CỔNG THÔNG TIN ĐIỆN TỬ<br/>
            CỤC CÔNG NGHỆ THÔNG TIN
          </h1>
          <h2 className="hero-sub-title">Bộ Tư pháp</h2>

          <div className="hero-divider-center"></div>

          <p className="hero-description">
            Đơn vị tiên phong trong đổi mới sáng tạo, thúc đẩy chuyển đổi số sâu rộng và toàn diện ngành Tư pháp, hướng tới Chính phủ số, Kinh tế số và Xã hội số, phục vụ đắc lực người dân và doanh nghiệp.
          </p>

          <div className="hero-cta-group">
            <a href="/gioi-thieu" className="hero-btn-primary">
              Tìm hiểu về Cục CNTT
            </a>
            <button className="hero-btn-scroll" onClick={scrollToContent} aria-label="Cuộn xuống nội dung">
              <span className="scroll-arrow">↓</span>
              <span>Xem nội dung</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
