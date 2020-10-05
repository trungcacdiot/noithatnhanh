import React, { Component } from "react";
import Routera from "./router";
import Sanpham from "./component/sanpham";
import Picture2 from "./picture/picture-2.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <switch>
          <Route exact path="/" children={<Routera />} />
          <Route
            path="/sanpham"
            children={
              <Sanpham
                picture={<img className="list-picture" src={Picture2} />}
                content="Nội thất bàn ăn sang trọng cổ điển"
              />
            }
          />
        </switch>
      </Router>
    );
  }
}
export default App;
