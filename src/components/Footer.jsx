import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-top-links">
           <a href="#">Liên hệ</a>
           <a href="#">Sơ đồ cổng</a>
        </div>
        
        <div className="footer-main">
          <div className="footer-contact">
            <h4>CỔNG THÔNG TIN ĐIỆN TỬ BỘ TƯ PHÁP</h4>
            <p>Địa chỉ: 58-60 Trần Phú, Ba Đình Hà Nội.</p>
            <p>Điện thoại: 02462739719</p>
            <p>Email: ttcnvdvstatp@moj.gov.vn</p>
            <p>Trưởng Ban biên tập: Phạm Quang Hiếu, Cục trưởng Cục Công nghệ thông tin.</p>
            <p className="note">Khi sử dụng lại thông tin, đề nghị ghi rõ nguồn "Cổng Thông tin điện tử Bộ Tư pháp"</p>
          </div>
          
          <div className="footer-seal-container">
            <img src="/handle_cert.png" alt="NCA Tín nhiệm mạng" className="footer-seal" />
          </div>
        </div>
        
        <div className="footer-bottom-line"></div>
      </div>
    </footer>
  );
};

export default Footer;
