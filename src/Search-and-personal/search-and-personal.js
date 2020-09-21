import React, { Component } from "react";
import "./search-and-personal.css";
import Picture11 from "../picture/picture-11.jpg";
class SearchAndPersonal extends Component {
  render() {
    return (
      <div className="SearchAndPersonal">
        <div className="logo">
          <img src={Picture11} />
          <p>Nội thất nhanh</p>
        </div>
        <div className="search">
          <input></input>
        </div>
        <div className="personal">
          <div className="personal__name">
            <div className="personal__name__icon"></div>
            <div className="personal__name__name"> Phiu Thì Anh</div>
            <div className="personal__name__login"> Đăng xuất</div>
          </div>
          <div className="personal__like">
            <div className="personal__like__icon"></div>
            <div className="personal__like__number">01</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAndPersonal;
