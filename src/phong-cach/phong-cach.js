import React, { Component } from "react";
import "./phong-cach.css";
import Picture99 from "../picture/picture-9.jpg";
class Phongcach extends Component {
  render() {
    return (
      <div className="phongcach">
        <p className="p-phongcach">Phong cách</p>
        <p className="p-content">
          Tổng hợp bài viết của chuyên gia về kiến trúc, nội thất, đời sống dự
          đoán về xu hướng nội thất trong tương lai
        </p>
        <img className="picture99" src={Picture99} />
        <button className="button-xem-tat-ca">Xem tất cả</button>
      </div>
    );
  }
}

export default Phongcach;
