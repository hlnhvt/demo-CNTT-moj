import React from 'react';
import newsImg from '../assets/news.png';
import useScrollReveal from '../hooks/useScrollReveal';
import './FeaturedNewsBlock.css';

const FeaturedNewsBlock = () => {
  useScrollReveal();

  return (
    <section id="featured-news-section" className="featured-news-block container reveal-anim">
      <div className="featured-news-header">
        <h2 className="featured-news-title">TIN TỨC NỔI BẬT</h2>
        <div className="featured-news-line"></div>
      </div>

      <div className="featured-news-grid">
        {/* Column 1: Small list items (Left) — 5 items */}
        <div className="fn-col-left">
          <div className="fn-small-card">
            <div className="fn-small-img"><img src={newsImg} alt="News thumbnail" /></div>
            <div className="fn-small-text">
              <h4>Bộ Tư pháp đề nghị mang tới các giải pháp tháo gỡ khó khăn cho doanh nghiệp...</h4>
              <span className="fn-date">🕒 12/03/2026</span>
            </div>
          </div>
          <div className="fn-small-card">
            <div className="fn-small-img"><img src={newsImg} alt="News thumbnail" /></div>
            <div className="fn-small-text">
              <h4>Hệ thống CMS Bộ Tư pháp ra mắt phiên bản mới hỗ trợ quản lý đa nền tảng...</h4>
              <span className="fn-date">🕒 11/03/2026</span>
            </div>
          </div>
          <div className="fn-small-card">
            <div className="fn-small-img"><img src={newsImg} alt="News thumbnail" /></div>
            <div className="fn-small-text">
              <h4>Triển khai Đề án 06 về phát triển ứng dụng dữ liệu dân cư năm 2026...</h4>
              <span className="fn-date">🕒 10/03/2026</span>
            </div>
          </div>
          <div className="fn-small-card">
            <div className="fn-small-img"><img src="/news_digital_meeting.png" alt="News thumbnail" /></div>
            <div className="fn-small-text">
              <h4>Cục CNTT tổ chức tập huấn hệ thống quản trị nội dung CMS cho các đơn vị trực thuộc...</h4>
              <span className="fn-date">🕒 08/03/2026</span>
            </div>
          </div>
          <div className="fn-small-card">
            <div className="fn-small-img"><img src="/news_cybersecurity.png" alt="News thumbnail" /></div>
            <div className="fn-small-text">
              <h4>Tăng cường bảo mật hệ thống thông tin phục vụ công tác chuyển đổi số ngành Tư pháp...</h4>
              <span className="fn-date">🕒 06/03/2026</span>
            </div>
          </div>
        </div>

        {/* Column 2: Massive Featured (Middle) */}
        <div className="fn-col-center">
          <div className="fn-massive-card">
            <div className="fn-massive-img">
              <img src="/news_legal_hammer.png" alt="Massive Featured" />
            </div>
            <div className="fn-massive-content">
              <h3>Hướng tới đại biểu Quốc hội khóa XVI và đại biểu HĐND các cấp nhiệm kỳ 2026-2031: Đặt công tác bảo đảm an ninh, trật tự lên hàng đầu</h3>
              <p>Chiều 10/3, Đoàn công tác của Hội đồng bầu cử quốc gia do Phó Chủ tịch Quốc hội Nguyễn Khắc Định làm Trưởng đoàn đã có buổi làm việc với Ủy ban bầu cử tỉnh...</p>
              <span className="fn-date">🕒 11/03/2026</span>
            </div>
          </div>
        </div>

        {/* Column 3: Medium Stacked (Right) */}
        <div className="fn-col-right">
          <div className="fn-medium-card">
            <div className="fn-medium-img"><img src="/news_cybersecurity.png" alt="News thumbnail" /></div>
            <div className="fn-medium-content">
              <h4>Xây dựng đội ngũ luật sư và bàn thảo chính sách nâng cao kỷ nguyên...</h4>
              <span className="fn-date">🕒 11/03/2026</span>
            </div>
          </div>
          <div className="fn-medium-card">
            <div className="fn-medium-img"><img src="/news_digital_meeting.png" alt="News thumbnail" /></div>
            <div className="fn-medium-content">
              <h4>Đẩy mạnh cải cách tư pháp và nâng cao năng lực hệ thống thi hành án dân sự...</h4>
              <span className="fn-date">🕒 11/03/2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNewsBlock;
