import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import rest from "./Rest1.png";
import { useHistory } from "react-router-dom";

const Header2 = () => {
  let history = useHistory();

  const movie = () => {
    history.push("/");
    window.location.reload(false);
  };
  const series = () => {
    history.push("/series");
    window.location.reload(false);
  };
  const favorite = () => {
    history.push("/favorite");
    window.location.reload(false);
  };

  return (
    <>
      <nav className="searchBar">
        <img className="logo1" src={rest} />
        <ul className="searchType">
          <Link className="sear" onClick={movie}>
            {" "}
            Movie
          </Link>
          <Link className="sear" onClick={series}>
            {" "}
            Series{" "}
          </Link>
          <Link className="sear" onClick={favorite}>
            {" "}
            Favorite
          </Link>
        </ul>
        <input className="searchInput" placeholder="Search Rest" />
      </nav>
    </>
  );
};

export default Header2;
