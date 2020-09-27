import React, {Component, component} from "react";
import "./menufixed.css";
import Up from "./chevron-up-solid.svg";

class Menufied extends Component{
    render(){
        return(<div className="menufixed">
            <a href="#bo-suu-tap">MODEL NỘI THẤT</a>
            <a href="#phong-cach">PHONG CÁCH</a>
            <a href="#thuong-hieu">THƯƠNG HIỆU</a>
            <a href="#"><img className="up-icon" src={Up}></img></a>
        </div>);
    }
}

export default Menufied;