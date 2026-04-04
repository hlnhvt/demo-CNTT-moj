import React, { useState, useEffect, useRef, useCallback } from 'react';
import './HeroCarousel.css';

const slides = [
  {
    type: 'brand',
    bg: '/bright_tech_pattern_bg.png',
    title: 'CỤC CÔNG NGHỆ THÔNG TIN',
    subtitle: 'Bộ Tư pháp',
    description:
      'Đơn vị tiên phong trong đổi mới sáng tạo, thúc đẩy chuyển đổi số sâu rộng và toàn diện ngành Tư pháp, hướng tới Chính phủ số, Kinh tế số và Xã hội số, phục vụ đắc lực người dân và doanh nghiệp.',
    cta: { label: 'Về chúng tôi', href: '/gioi-thieu', icon: '🏛️' },
  },
  {
    type: 'news',
    bg: '/news_legal_hammer.png',
    category: 'PHÁP LUẬT & TÒA ÁN',
    title: 'Hướng tới đại biểu Quốc hội khóa XVI: Đặt công tác bảo đảm an ninh, trật tự lên hàng đầu',
    description:
      'Chiều 10/3, Đoàn công tác của Hội đồng bầu cử quốc gia do Phó Chủ tịch Quốc hội Nguyễn Khắc Định làm Trưởng đoàn đã có buổi làm việc với Ủy ban bầu cử tỉnh về công tác chuẩn bị bầu cử.',
    date: '11/03/2026',
    cta: { label: 'Đọc tiếp', href: '#', icon: '→' },
  },
  {
    type: 'news',
    bg: '/news_cybersecurity.png',
    category: 'AN NINH MẠNG',
    title: 'Bảo vệ không gian mạng như bảo vệ chủ quyền quốc gia trong kỷ nguyên số',
    description:
      'Thủ tướng Phạm Minh Chính nhấn mạnh tầm quan trọng của an ninh mạng. Không gian mạng cần được bảo vệ vững chắc để đảm bảo an toàn cho chính phủ số, kinh tế số và xã hội số.',
    date: '28/03/2026',
    cta: { label: 'Đọc tiếp', href: '#', icon: '→' },
  },
  {
    type: 'news',
    bg: '/news_digital_meeting.png',
    category: 'CHUYỂN ĐỔI SỐ',
    title: 'Giao ban Ban Chỉ đạo 57 về phát triển khoa học và công nghệ số năm 2026',
    description:
      'Thứ trưởng Bộ Tư pháp chủ trì cuộc họp lớn về công tác đổi mới sáng tạo và chuyển đổi số toàn diện ngành Tư pháp năm 2026, tháo gỡ những điểm nghẽn về hạ tầng số.',
    date: '20/03/2026',
    cta: { label: 'Đọc tiếp', href: '#', icon: '→' },
  },
];

const INTERVAL = 10000;

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const scrollToContent = () => {
    const target = document.getElementById('featured-news-section');
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + slides.length) % slides.length);
  }, []);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, INTERVAL);
  };

  useEffect(() => {
    timerRef.current = setInterval(next, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const handlePrev = () => { resetTimer(); prev(); };
  const handleNext = () => { resetTimer(); next(); };
  const handleDot = (i) => { if (i !== current) { resetTimer(); setCurrent(i); } };

  return (
    <section className="hero-carousel-wrap">
      {/* Slide Track — horizontal strip, translateX to slide */}
      <div
        className="hero-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className={`hero-slide-item ${slide.type === 'brand' ? 'brand-item' : 'news-item'}`}>
            {/* BG */}
            <div
              className={`hero-slide-bg ${slide.type === 'brand' ? 'brand-bg' : 'news-bg'}`}
              style={{ backgroundImage: `url('${slide.bg}')` }}
            />

            {/* Content */}
            <div className={`hero-slide-content ${slide.type === 'brand' ? 'container' : 'news-container'}`}>
              {slide.type === 'brand' ? (
                <div className="hero-brand-content">
                  <h1 className="hero-main-title">{slide.title}</h1>
                  <h2 className="hero-sub-title">{slide.subtitle}</h2>
                  <div className="hero-divider-center" />
                  <p className="hero-description">{slide.description}</p>
                  <div className="hero-cta-group">
                    <a href={slide.cta.href} className="hero-btn-ghost">
                      <span className="btn-ghost-icon">{slide.cta.icon}</span>
                      {slide.cta.label}
                    </a>
                  </div>
                </div>
              ) : (
                <div className="hero-news-content">
                  <span className="hero-news-category">{slide.category}</span>
                  <h2 className="hero-news-title">{slide.title}</h2>
                  <p className="hero-news-desc">{slide.description}</p>
                  <div className="hero-news-meta">
                    <span className="hero-news-date">🕒 {slide.date}</span>
                    <a href={slide.cta.href} className="hero-btn-ghost hero-news-btn">
                      {slide.cta.label} {slide.cta.icon}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button className="hero-arrow hero-arrow-prev" onClick={handlePrev} aria-label="Slide trước">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="hero-arrow hero-arrow-next" onClick={handleNext} aria-label="Slide tiếp">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button key={i} className={`hero-dot ${i === current ? 'active' : ''}`} onClick={() => handleDot(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>

      {/* Progress bar (restart on slide change via key) */}
      <div className="hero-progress-bar">
        <div key={current} className="hero-progress-fill" style={{ animationDuration: `${INTERVAL}ms` }} />
      </div>

      {/* Scroll FAB */}
      <button className="hero-scroll-fab" onClick={scrollToContent} aria-label="Cuộn xuống nội dung">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </section>
  );
};

export default HeroCarousel;
