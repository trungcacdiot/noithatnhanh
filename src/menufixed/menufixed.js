import React, {Component, component} from "react";
import "./menufixed.css";
import Up from "./chevron-up-solid.svg";

class Menufied extends Component{
    render(){
        return(<div className="menufixed">
            <a href="#">MODEL NỘI THẤT</a>
            <a href="#">PHONG CÁCH</a>
            <a href="#">THƯƠNG HIỆU</a>
            <a href="#"><img className="up-icon" src={Up}></img></a>
        </div>);
    }
}

export default Menufied;