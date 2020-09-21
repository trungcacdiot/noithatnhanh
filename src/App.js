import React from "react";
import OptionStart from "./Option-start/option-start";
import "./App.css";

import SearchAndPersonal from "./Search-and-personal/search-and-personal";

function App() {
  return (
    <div className="App">
      <div className="option-start-pages">
        <OptionStart />
      </div>
      <div className="search-and-personal">
        <SearchAndPersonal />
      </div>
    </div>
  );
}

export default App;
