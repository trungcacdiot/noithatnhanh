import React, { Component } from "react";
import "./son-of-navigation-bar.css";
import Picture1 from "./picture-1.jpg";
import Left from "./chevron-left-solid.svg";
import Right from "./chevron-right-solid.svg";
import Sanpham from "../../component/sanpham";
import Picture3 from "../../picture/picture-3.jpg";
class SonNavigation extends Component {
  myfunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
  render() {
    return (
      <div className="son-of-navigation">
        <img
          className="picture1"
          src={Picture1}
          alt="Workplace"
          useMap="#workmap"
        />
        <map name="workmap">
          <area
            target=""
            onClick={this.myfunction}
            shape="rect"
            coords="0,0,500,500"
            alt="Computer"
            href="#"
          ></area>
        </map>

        <div className="sanpham-position" id="myPopup">
          <Sanpham
            picture={<img className="list-picture" src={Picture3} />}
            content="Nội thất bàn ăn sang trọng cổ điển"
          />
        </div>
        <div className="button-picture">
          <div className="content-picture">
            <p className="p1">Nội thất bàn ăn sang trọng cổ điển</p>
            <p className="p2">HYURE ARCHITECTS</p>
          </div>
          <div className="personal__like__icon">
            <img className="left-icon" src={Left} />
            <img className="right-icon" src={Right} />
          </div>
        </div>
      </div>
    );
  }
}

export default SonNavigation;
