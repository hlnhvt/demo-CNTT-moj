import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './MediaBlock.css';

const photoItems = [
  { id: 1, img: '/news_digital_meeting.png', category: 'CHUYỂN ĐỔI SỐ', title: 'Giao ban Ban Chỉ đạo 57 về phát triển khoa học và công nghệ số năm 2026', sapo: 'Thứ trưởng Bộ Tư pháp chủ trì cuộc họp lớn về công tác đổi mới sáng tạo và chuyển đổi số toàn diện ngành Tư pháp năm 2026, tháo gỡ những điểm nghẽn về hạ tầng số.', date: '20/03/2026', views: 1250, featured: true },
  { id: 2, img: '/news_cybersecurity.png', category: 'AN NINH MẠNG', title: 'Tập huấn hệ thống bảo mật nền tảng số cho các đơn vị trong Bộ', sapo: 'Cục Công nghệ thông tin tổ chức buổi tập huấn về an toàn thông tin.', date: '15/03/2026', views: 980 },
  { id: 3, img: '/news_legal_hammer.png', category: 'PHÁP LUẬT', title: 'Phổ biến các quy định mới về ứng dụng CNTT trong ngành Tư pháp', sapo: 'Hội nghị đã tổng kết công tác triển khai quyết định 06 về dữ liệu dân cư.', date: '10/03/2026', views: 764 },
  { id: 4, img: '/news_digital_meeting.png', category: 'CHUYỂN ĐỔI SỐ', title: 'Hội thảo chuyên đề về ứng dụng AI trong quản lý tư pháp điện tử', sapo: 'Các chuyên gia trình bày giải pháp tích hợp trí tuệ nhân tạo vào hệ thống tư pháp số.', date: '05/03/2026', views: 622 },
];

const videoItems = [
  { id: 1, img: '/news_cybersecurity.png', category: 'ĐỢT TẬP HUẤN', title: 'Phim tư liệu: Chuyển đổi số ngành Tư pháp — Hành trình lịch sử giai đoạn 2024-2026', sapo: 'Bộ phim tư liệu ghi lại toàn bộ hành trình chuyển đổi số sâu rộng, toàn diện của Bộ Tư pháp trong 2 năm qua với nhiều dấu ấn đặc biệt.', date: '01/03/2026', views: 3400, featured: true },
  { id: 2, img: '/news_legal_hammer.png', category: 'HỘI NGHỊ', title: 'Video toàn cảnh Hội nghị tổng kết CNTT năm 2025 của Bộ Tư pháp', sapo: 'Hội nghị tổng kết có sự tham gia của lãnh đạo Bộ.', date: '20/02/2026', views: 2150 },
  { id: 3, img: '/news_digital_meeting.png', category: 'ĐÀO TẠO', title: 'Video hướng dẫn sử dụng Hệ thống IOC Bộ Tư pháp phiên bản mới', sapo: 'Hướng dẫn chi tiết các tính năng mới nhất của hệ thống IOC.', date: '15/02/2026', views: 1876 },
  { id: 4, img: '/news_cybersecurity.png', category: 'AN NINH MẠNG', title: 'Clip tuyên truyền bảo mật thông tin và an toàn không gian mạng 2026', sapo: 'Nội dung nâng cao nhận thức về bảo mật thông tin cho cán bộ.', date: '10/02/2026', views: 1420 },
];

const MediaBlock = () => {
  const [activeTab, setActiveTab] = useState('photo');
  useScrollReveal();

  const items = activeTab === 'photo' ? photoItems : videoItems;
  const featured = items.find(i => i.featured);
  const rest = items.filter(i => !i.featured);

  return (
    <section className="media-block container reveal-anim">
      {/* Section header */}
      <div className="media-block-header">
        <div className="media-block-title-wrap">
          <h2 className="media-block-title">ĐA PHƯƠNG TIỆN</h2>
          <div className="media-line-accent"></div>
        </div>
        <div className="media-tabs">
          <button className={`media-tab ${activeTab === 'photo' ? 'active' : ''}`} onClick={() => setActiveTab('photo')}>
            📷 Ảnh
          </button>
          <button className={`media-tab ${activeTab === 'video' ? 'active' : ''}`} onClick={() => setActiveTab('video')}>
            🎬 Video
          </button>
        </div>
      </div>

      {/* White card wrapper */}
      <div className="media-white-card">
        {/* Featured card */}
        {featured && (
          <div className="media-featured-row">
            <div className="media-featured-img-wrap">
              <img src={featured.img} alt={featured.title} />
              <span className="media-cat-badge">{featured.category}</span>
            </div>
            <div className="media-featured-content">
              <a href="#"><h3 className="media-featured-title">{featured.title}</h3></a>
              <p className="media-featured-sapo">{featured.sapo}</p>
              <div className="media-card-meta">
                <span>🕒 {featured.date}</span>
                <span>👁 {featured.views.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="media-inner-divider"></div>

        {/* Remaining cards 3-column */}
        <div className="media-grid">
          {rest.map(item => (
            <div className="media-card" key={item.id}>
              <div className="media-card-img-wrap">
                <img src={item.img} alt={item.title} />
                <span className="media-cat-badge">{item.category}</span>
              </div>
              <div className="media-card-body">
                <a href="#"><h4 className="media-card-title">{item.title}</h4></a>
                <p className="media-card-sapo">{item.sapo}</p>
                <div className="media-card-meta">
                  <span>🕒 {item.date}</span>
                  <span>👁 {item.views.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaBlock;
