import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header2.css";
import rest from "./Rest1.png";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  let history = useHistory();

  const Action = () => {
    history.push("/action");
    window.location.reload(false);
  };
  const Adventure = () => {
    history.push("/adventure");
    window.location.reload(false);
  };
  const Horror = () => {
    history.push("/horror");
    window.location.reload(false);
  };
  const Comedy = () => {
    history.push("/comedy");
    window.location.reload(false);
  };
  const Drama = () => {
    history.push("/drama");
    window.location.reload(false);
  };
  const Crime = () => {
    history.push("/crime");
    window.location.reload(false);
  };
  const Cartoon = () => {
    history.push("/cartoon");
    window.location.reload(false);
  };
  const Fiction = () => {
    history.push("/fiction");
    window.location.reload(false);
  };
  const Romantic = () => {
    history.push("/romantic");
    window.location.reload(false);
  };
  const Fantasy = () => {
    history.push("/fantasy");
    window.location.reload(false);
  };
  const Family = () => {
    history.push("/family");
    window.location.reload(false);
  };
  const Excitement = () => {
    history.push("/excitement");
    window.location.reload(false);
  };
  const War = () => {
    history.push("/war");
    window.location.reload(false);
  };
  const Documentary = () => {
    history.push("/documentary");
    window.location.reload(false);
  };
  const Music = () => {
    history.push("/music");
    window.location.reload(false);
  };
  const Historical = () => {
    history.push("/historical");
    window.location.reload(false);
  };
  const Biography = () => {
    history.push("/biography");
    window.location.reload(false);
  };
  const Athlete = () => {
    history.push("/athlete");
    window.location.reload(false);
  };
  const Western = () => {
    history.push("/western");
    window.location.reload(false);
  };
  const Politician = () => {
    history.push("/politician");
    window.location.reload(false);
  };
  const Mystery = () => {
    history.push("/mystery");
    window.location.reload(false);
  };
  const Movie = () => {
    history.push("/");
    window.location.reload(false);
  };
  const Series = () => {
    history.push("/series");
    window.location.reload(false);
  };
  return (
    <>
      <nav className="searchBar2">
        <img className="logo1" src={rest} />
        <ul className="searchType">
          <Link className="sear2" onClick={Movie}>
            {" "}
            Movie
          </Link>
          <Link className="sear2" onClick={Series}>
            {" "}
            Series{" "}
          </Link>
        </ul>
        <div className="div-a">
          <ul
            className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => {
              setIsMobile(true);
            }}
          >
            <input className="searchInput2" placeholder="Search Rest" />
            <Link className="Subscribe" onClick={Action}>
              <span> Action</span>
            </Link>
            <Link className="Subscribe" onClick={Adventure}>
              <span> Adventure</span>
            </Link>
            <Link className="Subscribe" onClick={Horror}>
              {" "}
              <span> Horror</span>
            </Link>
            <Link className="Subscribe" onClick={Comedy}>
              {" "}
              <span> Comedy</span>{" "}
            </Link>
            <Link className="Subscribe" onClick={Drama}>
              <span> Drama</span>
            </Link>{" "}
            <Link className="Subscribe" onClick={Crime}>
              <span> Crime</span>
            </Link>{" "}
            <Link className="Subscribe" onClick={Cartoon}>
              <span> Cartoon</span>
            </Link>{" "}
            <Link className="Subscribe" onClick={Fiction}>
              <span> Fiction</span>
            </Link>{" "}
            <Link className="Subscribe" onClick={Romantic}>
              <span> Romantic</span>
            </Link>{" "}
            <Link className="Subscribe" onClick={Fantasy}>
              <span> Fantasy</span>
            </Link>{" "}
            <Link className="Subscribe" onClick={Family}>
              <span> Family</span>
            </Link>{" "}
            <Link className="Subscribe" onClick={Excitement}>
              <span> Excitement</span>
            </Link>{" "}
            <Link className="Subscribe" onClick={War}>
              <span> War</span>
            </Link>{" "}
            <Link className="Subscribe" onClick={Documentary}>
              <span> Documentary</span>
            </Link>{" "}
            <Link className="Subscribe" onClick={Music}>
              <span> Music</span>
            </Link>{" "}
            <Link className="Subscribe" onClick={Historical}>
              <span> Historical</span>
            </Link>{" "}
            <Link className="Subscribe" onClick={Biography}>
              <span> Biography</span>
            </Link>{" "}
            <Link className="Subscribe" onClick={Athlete}>
              <span> Athlete</span>
            </Link>{" "}
            <Link className="Subscribe" onClick={Western}>
              <span> Western</span>
            </Link>{" "}
            <Link className="Subscribe" onClick={Politician}>
              <span> Politician</span>
            </Link>{" "}
            <Link className="Subscribe" onClick={Mystery}>
              <span> Mystery</span>
            </Link>
          </ul>
        </div>
        <button
          className="mobile-menu-icon"
          onClick={() => {
            setIsMobile(!isMobile);
          }}
        >
          {isMobile ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-border-width"
              viewBox="0 0 16 16"
            >
              <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
            </svg>
          )}
        </button>
      </nav>
    </>
  );
};

export default Header;
