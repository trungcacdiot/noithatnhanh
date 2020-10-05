import React, { Component } from "react";
import Sanpham from "../component/sanpham";
import "./bo-suu-tap.css";
import Picture2 from "../picture/picture-2.jpg";
import Picture3 from "../picture/picture-3.jpg";
import Picture4 from "../picture/picture-4.jpg";
import Picture5 from "../picture/picture-5.jpg";
import Picture6 from "../picture/picture-6.jpg";
import Picture7 from "../picture/picture-7.jpg";
import Picture8 from "../picture/picture-8.jpg";
import Picture9 from "../picture/picture-3jpg.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class BoSuuTap extends Component {
  render() {
    return (
      <div className="bo-suu-tap">
        <p>Bộ sưu tập</p>
        <ul className="navigation-small">
          <li>
            <a href="#">TẤT CẢ</a>
          </li>
          <li>
            <a href="#">CHUNG CƯ</a>
          </li>
          <li>
            <a href="#">NHÀ Ở</a>
          </li>
          <li>
            <a href="#">VĂN PHÒNG</a>
          </li>
          <li>
            <a href="#">KHÁCH SẠN</a>
          </li>
          <li>
            <a href="#">NHÀ HÀNG & CAFÉ</a>
          </li>
          <li>
            <a href="#">ĐỒ TRANG TRÍ</a>
          </li>
          <li>
            <a href="#">TRẺ EM</a>
          </li>
          <li>
            <a href="#">CÔNG TRÌNH KHÁC</a>
          </li>
        </ul>
        <div className="list-sanpham">
          <Link to="/sanpham">
            <Sanpham
              picture={<img className="list-picture" src={Picture2} />}
              content="Nội thất bàn ăn sang trọng cổ điển"
            />
          </Link>

          <Link to="/sanpham">
            <Sanpham
              picture={<img className="list-picture" src={Picture3} />}
              content="Nội thất bàn ăn sang trọng cổ điển"
            />
          </Link>
          <Link to="/sanpham">
            <Sanpham
              picture={<img className="list-picture" src={Picture4} />}
              content="Nội thất bàn ăn sang trọng cổ điển"
            />
          </Link>
          <Link to="/sanpham">
            <Sanpham
              picture={<img className="list-picture" src={Picture5} />}
              content="Nội thất bàn ăn sang trọng cổ điển"
            />
          </Link>
          <Link to="/sanpham">
            <Sanpham
              picture={<img className="list-picture" src={Picture6} />}
              content="Nội thất bàn ăn sang trọng cổ điển"
            />
          </Link>
          <Link to="/sanpham">
            <Sanpham
              picture={<img className="list-picture" src={Picture7} />}
              content="Nội thất bàn ăn sang trọng cổ điển"
            />
          </Link>
          <Link to="/sanpham">
            <Sanpham
              picture={<img className="list-picture" src={Picture8} />}
              content="Nội thất bàn ăn sang trọng cổ điển"
            />
          </Link>
          <Link to="/sanpham">
            <Sanpham
              picture={<img className="list-picture" src={Picture9} />}
              content="Nội thất bàn ăn sang trọng cổ điển"
            />
          </Link>
        </div>
        <button className="button-xem-tat-ca">Xem tất cả</button>
      </div>
    );
  }
}

export default BoSuuTap;
