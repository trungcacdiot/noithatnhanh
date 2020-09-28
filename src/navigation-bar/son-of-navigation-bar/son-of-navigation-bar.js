import React, { Component } from "react";
import "./son-of-navigation-bar.css";
import Picture1 from "./picture-1.jpg";
import Left from "./chevron-left-solid.svg";
import Right from "./chevron-right-solid.svg";
class SonNavigation extends Component {
  render() {
    return (
      <div className="son-of-navigation">
        <img
          className="picture1"
          src={Picture1}
          usemap="#workmap"
          alt="Workplace"
        />
        <map name="workmap">
          <area
            className="area"
            shape="circle"
            coords="337,300,100"
            alt="Cup of coffee"
            href={Picture1}
          ></area>
        </map>
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
