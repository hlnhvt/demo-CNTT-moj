import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './InfoBar.css';

const InfoBar = () => {
  useScrollReveal();
  const [selectedLink, setSelectedLink] = useState('');

  const handleLinkChange = (e) => {
    const url = e.target.value;
    if (url) window.open(url, '_blank');
    setSelectedLink('');
  };

  return (
    <div className="info-bar-section reveal-anim">
      <div className="container info-bar-inner">

        {/* Liên kết Website */}
        <div className="info-bar-block">
          <div className="info-bar-label">
            <span className="info-bar-icon">🔗</span>
            <span>LIÊN KẾT WEBSITE</span>
          </div>
          <select
            className="info-bar-dropdown"
            value={selectedLink}
            onChange={handleLinkChange}
          >
            <option value="">-- Chọn liên kết --</option>
            <option value="https://moj.gov.vn">Cổng TTĐT Bộ Tư pháp</option>
            <option value="https://vbpl.vn">Cơ sở dữ liệu Pháp luật</option>
            <option value="https://stp.gov.vn">Sở Tư pháp các tỉnh</option>
            <option value="https://luatvietnam.vn">Luật Việt Nam</option>
          </select>
        </div>

        <div className="info-bar-divider"></div>

        {/* Thống kê truy cập */}
        <div className="info-bar-block">
          <div className="info-bar-label">
            <span className="info-bar-icon">📊</span>
            <span>THỐNG KÊ TRUY CẬP</span>
          </div>
          <div className="info-bar-stats">
            <div className="stat-item">
              <span className="stat-label">Hôm nay</span>
              <span className="stat-value">1.248</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Tháng này</span>
              <span className="stat-value">38.540</span>
            </div>
            <div className="stat-item highlight">
              <span className="stat-label">Tổng lượt truy cập</span>
              <span className="stat-value">504.256</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfoBar;
