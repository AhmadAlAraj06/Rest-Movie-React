import React from "react";
import ReactDOM from "react-dom";
import Timer from "./Timer";
import Optin from "./Optin";

import "./series.css";

const Series = () => {
    return (
    <div className="App">
        <br/>
      <div className="container">
        <h1 className="hhh">
          Series
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Optin />
      </div>
    </div>
  );
}
export default Series;

