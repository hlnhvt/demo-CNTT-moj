import React from 'react';

import useScrollReveal from '../hooks/useScrollReveal';
import './MainGrid.css';

const MainGrid = () => {
  useScrollReveal();

  const announcements = [
    "Ra mắt hệ thống 3 nền tảng số phục vụ giám sát triển khai Nghị quyết 57-NQ-TW",
    "Thông báo triệu tập thí sinh kỳ thi thăng hạng viên chức hành chính từ KTV trung cấp lên KTV năm 2019",
    "Thông báo kết quả xét tuyển và trúng tuyển viên chức của Trung tâm ĐKGDT tại TP. Hà Nội",
    "Thông báo tuyển dụng viên chức năm 2019"
  ];

  const newsCategories = [
    {
      title: "HOẠT ĐỘNG CHUYỂN ĐỔI SỐ",
      featured: {
        title: "Giao ban Ban Chỉ đạo 57 của Bộ Tư pháp",
        date: "20/03/2026",
        summary: "Thứ trưởng Bộ Tư pháp Nguyễn Thanh Tịnh chủ trì cuộc họp về công tác phát triển khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số. Hội nghị tập trung tháo gỡ điểm nghẽn về hạ tầng số và tạo đột phá trong lĩnh vực CNTT năm 2026.",
        img: "/news_digital_meeting.png"
      },
      list: [
        { title: "Tập huấn Hệ thống quản trị nội dung CMS cho các đơn vị", date: "15/03/2026" },
        { title: "Hoàn thiện hệ thống IOC, hệ thống quản lý văn bản Bộ Tư pháp", date: "10/03/2026" },
        { title: "Gỡ vướng chuyển đổi số, lấy sự hài lòng của người dân làm đầu", date: "05/03/2026" }
      ]
    },
    {
      title: "AN NINH THÔNG TIN MẠNG",
      featured: {
        title: "Bảo vệ không gian mạng như chủ quyền quốc gia",
        date: "28/03/2026",
        summary: "Thủ tướng Phạm Minh Chính nhấn mạnh tầm quan trọng của an ninh mạng. Không gian mạng cần được bảo vệ vững chắc để đảm bảo an toàn cho chính phủ số, kinh tế số và xã hội số trong kỷ nguyên mới.",
        img: "/news_cybersecurity.png"
      },
      list: [
        { title: "Thủ tướng chỉ đạo phát triển AI & 5G gắn với hạ tầng số quốc gia", date: "31/03/2026" },
        { title: "Cảnh báo lỗ hổng Copilot mở đường cho tấn công phishing qua email", date: "25/03/2026" },
        { title: "Xu hướng bảo mật mạng năm 2026 và các thách thức mới", date: "22/03/2026" }
      ]
    }
  ];

  return (
    <main className="main-editorial container">
      <section className="news-content-col">
        {newsCategories.map((cat, idx) => (
          <div key={idx} className="news-editorial-section reveal-anim">
            <div className="section-header-editorial">
              <h2 className="section-title-editorial">{cat.title}</h2>
              <div className="line-accent"></div>
            </div>

            <div className="editorial-layout">
              {/* Featured Left */}
              <div className="editorial-featured">
                <div className="featured-img-wrap">
                  <img src={cat.featured.img} alt="Featured" />
                  <span className="featured-badge">TIÊU ĐIỂM</span>
                </div>
                <div className="featured-body">
                  <span className="news-date">{cat.featured.date}</span>
                  <a href="#" className="featured-title"><h3>{cat.featured.title}</h3></a>
                  <p className="featured-summary">{cat.featured.summary}</p>
                </div>
              </div>

              {/* Compact List Right */}
              <div className="editorial-list">
                {cat.list.map((item, i) => (
                  <div className="editorial-list-item" key={i}>
                    <span className="news-date">{item.date}</span>
                    <a href="#"><h4>{item.title}</h4></a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <aside className="sidebar-col">
        <div className="sidebar-widget announcements reveal-anim">
          <div className="widget-header">
            <h3 className="widget-title">THÔNG BÁO</h3>
          </div>
          <ul className="announcement-list">
            {announcements.map((item, idx) => (
              <li key={idx} className="announcement-item">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>



        <div className="sidebar-actions reveal-anim" style={{ marginTop: '14px' }}>
          <button className="side-btn-premium">
            <span className="motif"></span>
            <div className="btn-inner">
              Văn bản pháp luật mới về CNTT
            </div>
          </button>
          <button className="side-btn-premium">
            <span className="motif"></span>
            <div className="btn-inner">
              Thông tin công nghệ
            </div>
          </button>
          <button className="side-btn-premium">
            <span className="motif"></span>
            <div className="btn-inner">
              Tài liệu hướng dẫn sử dụng
            </div>
          </button>
          <button className="side-btn-premium">
            <span className="motif"></span>
            <div className="btn-inner">
              Danh bạ điện thoại
            </div>
          </button>
        </div>

        <div className="sidebar-banners-cinematic reveal-anim" style={{ marginTop: '14px' }}>
          <a href="#" className="banner-float"><img src="/frame-213-019cc21389857219a2e45138e42b949e-019d3c5fcae57ba388b3602bf1f9f98a.jpg" alt="Banner" /></a>
          <a href="#" className="banner-float"><img src="/banner-csdlphapluat-019d4d0e19a378689601151864b0c6a3.jpg" alt="Banner" /></a>
          <a href="#" className="banner-float"><img src="/banner-trungtamcongnghe-btp-v2-019d4d46f7947bddaddfe59c625c4f28.jpg" alt="Banner" /></a>
        </div>



      </aside>
    </main>
  );
};

export default MainGrid;
