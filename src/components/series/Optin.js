import React, { Component } from "react";
import "./Optin.css";
import { useHistory } from "react-router-dom";


const Optin =() => {

  let history = useHistory();

  const handleClick=()=> {
    history.push("/");
  }

    return (
      <div className="optin">
        <p >Back To Movie Page</p>
        <button onClick={handleClick}>Click Me</button>
     
      </div>
    );
}

export default Optin;
