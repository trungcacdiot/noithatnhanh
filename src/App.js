import React from "react";
import OptionStart from "./Option-start/option-start";
import "./App.css";

import SearchAndPersonal from "./Search-and-personal/search-and-personal";
import Navigation from "./navigation-bar/navigation-bar";
import SonNavigation from "./navigation-bar/son-of-navigation-bar/son-of-navigation-bar";
import BoSuuTap from "./bo-suu-tap/bo-suu-tap";
import Phongcach from "./phong-cach/phong-cach";
import Thuonghieu from "./thuong-hieu/thuong-hieu";
import Contact from "./contact/contact";
function App() {
  return (
    <div className="App">
      <div className="option-start-pages">
        <OptionStart />
      </div>
      <div className="search-and-personal">
        <SearchAndPersonal />
      </div>
      <div className="navigation-bar">
        <Navigation />
      </div>
      <div className="son-of-navigation-bar">
        <SonNavigation />
      </div>
      <div className="bo-suu-tap">
        <BoSuuTap />
      </div>
      <div>
        <Phongcach />
      </div>
      <div>
        <Thuonghieu />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
