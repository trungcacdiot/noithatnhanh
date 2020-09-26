import React, { Component } from "react";
import "./navigation-bar.css";

class Navigation extends Component {
  render() {
    return (
      <div className="navigation-container">
        <ul className="navigation">
          <li><a href="#">CHUNG CƯ</a></li>
          <li><a href="#">NHÀ Ở</a></li>
          <li><a href="#">VĂN PHÒNG</a></li>
          <li><a href="#">KHÁCH SẠN</a></li>
          <li><a href="#">NHÀ HÀNG & CAFÉ</a></li>
          <li><a href="#">ĐỒ TRANG TRÍ</a></li>
          <li><a href="#">TRẺ EM</a></li>
          <li><a href="#">CÔNG TRÌNH KHÁC</a></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
