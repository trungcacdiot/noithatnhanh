import React, { Component } from "react";
import "./son-of-navigation-bar.css";
import Picture1 from "./picture-1.jpg";

import Sanpham from "../../component/sanpham";
import Picture3 from "../../picture/picture-3.jpg";
class SonNavigation extends Component {
  constructor(props) {
    super(props);
    this.myfunction = this.myfunction.bind(this);
  }
  myfunction() {
    var popup = document.getElementById(this.props.myPop);
    popup.classList.toggle("show");
  }
  render() {
    if (this.props.isDisplay) {
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
              shape="circle"
              coords="270,235,20"
              alt="1"
              href="#"
            ></area>
            <area
              target=""
              onClick={this.myfunction}
              shape="circle"
              coords="242,358,20"
              alt="1"
              href="#"
            ></area>
            <area
              target=""
              onClick={this.myfunction}
              shape="circle"
              coords="362,650,20"
              alt="1"
              href="#"
            ></area>
          </map>

          <div className="sanpham-position" id={this.props.myPop}>
            <Sanpham
              picture={<img className="list-picture" src={Picture3} />}
              content="Nội thất bàn ăn sang trọng cổ điển"
            />
          </div>
        </div>
      );
    } else {
      return <p></p>;
    }
  }
}

export default SonNavigation;
