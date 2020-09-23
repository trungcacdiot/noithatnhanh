import React, { Component } from "react";
import "./sanpham.css";

class Sanpham extends Component {
  render() {
    return (
      <div className="sanpham">
        <div>{this.props.picture}</div>
        <div className="p1p2">
          <p className="p1">NEW</p>
          <p className="p2">HAND MADE</p>
        </div>
        <div className="architects">HYURA ARCHITECTS</div>
        <div className="sanpham__content">{this.props.content}</div>
      </div>
    );
  }
}

export default Sanpham;
