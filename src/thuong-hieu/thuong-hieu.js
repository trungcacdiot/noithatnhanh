import React, { Component } from "react";
import "./thuong-hieu.css";
import Picture10 from "../picture/picture-10.jpg";
class Thuonghieu extends Component {
  render() {
    return (
      <div className="phongcach">
        <p className="p-phongcach">Thương hiệu</p>
        <p className="p-content">
          Top những đơn vị tư vấn, thiết kế & thi công chất lượng được nhiều
          khách hàng tin tưởng, quan tâm, theo dõi và ủng hộ
        </p>
        <img className="picture99" src={Picture10} />
        <button className="button-xem-tat-ca">Xem tất cả</button>
      </div>
    );
  }
}

export default Thuonghieu;
