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
class BoSuuTap extends Component {
  render() {
    return (
      <div className="bo-suu-tap">
        <p>Bộ sưu tập</p>
        <ul className="navigation-small">
          <li>TẤT CẢ</li>
          <li>CHUNG CƯ</li>
          <li>NHÀ Ở</li>
          <li>VĂN PHÒNG</li>
          <li>KHÁCH SẠN</li>
          <li>NHÀ HÀNG & CAFÉ</li>
          <li>ĐỒ TRANG TRÍ</li>
          <li>TRẺ EM</li>
          <li>CÔNG TRÌNH KHÁC</li>
        </ul>
        <div className="list-sanpham">
          <Sanpham
            picture={<img className="list-picture" src={Picture2} />}
            content="Nội thất bàn ăn sang trọng cổ điển"
          />
          <Sanpham
            picture={<img className="list-picture" src={Picture3} />}
            content="Nội thất bàn ăn sang trọng cổ điển"
          />
          <Sanpham
            picture={<img className="list-picture" src={Picture4} />}
            content="Nội thất bàn ăn sang trọng cổ điển"
          />
          <Sanpham
            picture={<img className="list-picture" src={Picture5} />}
            content="Nội thất bàn ăn sang trọng cổ điển"
          />
          <Sanpham
            picture={<img className="list-picture" src={Picture6} />}
            content="Nội thất bàn ăn sang trọng cổ điển"
          />
          <Sanpham
            picture={<img className="list-picture" src={Picture7} />}
            content="Nội thất bàn ăn sang trọng cổ điển"
          />
          <Sanpham
            picture={<img className="list-picture" src={Picture8} />}
            content="Nội thất bàn ăn sang trọng cổ điển"
          />
          <Sanpham
            picture={<img className="list-picture" src={Picture9} />}
            content="Nội thất bàn ăn sang trọng cổ điển"
          />
        </div>
        <button className="button-xem-tat-ca">Xem tất cả</button>
      </div>
    );
  }
}

export default BoSuuTap;
