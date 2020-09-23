import React, { Component } from "react";
import "./navigation-bar.css";

class Navigation extends Component {
  render() {
    return (
      <div className="navigation-container">
        <ul className="navigation">
          <li>CHUNG CƯ</li>
          <li>NHÀ Ở</li>
          <li>VĂN PHÒNG</li>
          <li>KHÁCH SẠN</li>
          <li>NHÀ HÀNG & CAFÉ</li>
          <li>ĐỒ TRANG TRÍ</li>
          <li>TRẺ EM</li>
          <li>CÔNG TRÌNH KHÁC</li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
