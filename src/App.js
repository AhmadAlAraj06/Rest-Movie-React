import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/header/index";
import Header2 from "./components/header2/index";
import Main from "./components/main/index";
import Footer from "./components/footer/index";
import Series from "./components/series/index";
import Erorr from "./components/404";
import { Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Route  path="/" component={Header} />
      <Route  path="/" component={Header2} />
	  <Route exact path="/" component={Footer} />      
      <Switch>
        <Route exact path="/" component={Main} />       
        <Route path="/Series" component={Series} />

        <Route component={Erorr} />
      </Switch>
    </div>
  );
};

export default App;
