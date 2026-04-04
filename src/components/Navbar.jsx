import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const menuItems = [
    { name: 'CỔNG THÔNG TIN ĐIỆN TỬ', link: '#' },
    { name: 'TRANG CHỦ', link: '#', active: true },
    { name: 'GIỚI THIỆU', link: '#' },
    { name: 'THƯ ĐIỆN TỬ', link: '#' },
    { name: 'TÀI LIỆU NỘI BỘ', link: '#' }
  ];

  return (
    <nav className="main-nav glass">
      <div className="container nav-container">
        <ul className="nav-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className={item.active ? 'active' : ''}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button className="icon-btn search-btn" title="Tìm kiếm">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
          <button className="icon-btn user-btn" title="Tài khoản">
             <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
               <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
             </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
