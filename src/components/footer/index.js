import React from "react";
import "./footer.css";
import { useHistory } from "react-router-dom";

const Footer = () => {
	let history = useHistory();

  const Action = ()=>{
    history.push("/action")
  } 
   const Adventure = ()=>{
    history.push("/adventure")
  } 
   const Horror = ()=>{
    history.push("/horror")
  }
    const Comedy = ()=>{
    history.push("/comedy")
  }  
  const Drama = ()=>{
    history.push("/drama")
  }  
  const Crime = ()=>{
    history.push("/crime")
  } 
   const Cartoon = ()=>{
    history.push("/cartoon")
  } 
   const Fiction = ()=>{
    history.push("/fiction")
  } 
   const Romantic = ()=>{
    history.push("/romantic")
  } 
   const Fantasy = ()=>{
    history.push("/fantasy")
  } 
   const Family = ()=>{
    history.push("/family")
  }
    const Excitement = ()=>{
    history.push("/excitement")
  }
    const War = ()=>{
    history.push("/war")
  } 
   const Documentary = ()=>{
    history.push("/documentary")
  } 
   const Music = ()=>{
    history.push("/music")
  } 
   const Historical = ()=>{
    history.push("/historical")
  }
    const Biography = ()=>{
    history.push("/biography")
  } 
   const Athlete = ()=>{
    history.push("/athlete")
  } 
   const Western = ()=>{
    history.push("/western")
  } 
   const Politician = ()=>{
    history.push("/politician")
  } 
   const Mystery = ()=>{
    history.push("/mystery")
  }
  return (
    <>
      <div class="main-footer__copyright">
        <a class="main-footer__copyright-content"  onClick={Action}>Action</a>
        <a class="main-footer__copyright-content"  onClick={Adventure}>Adventure</a>
        <a class="main-footer__copyright-content" onClick={Horror}>Horror</a>
        <a class="main-footer__copyright-content" onClick={Comedy}>Comedy</a>
        <a class="main-footer__copyright-content" onClick={Drama}>Drama</a>
        <a class="main-footer__copyright-content" onClick={Crime}>Crime</a>
        <a class="main-footer__copyright-content" onClick={Cartoon}>Cartoon</a>
        <a class="main-footer__copyright-content" onClick={Fiction}>Fiction</a>
        <a class="main-footer__copyright-content" onClick={Romantic}>Romantic</a>
        <a class="main-footer__copyright-content" onClick={Fantasy}>Fantasy</a>
        <a class="main-footer__copyright-content" onClick={Family}>Family</a>
        <a class="main-footer__copyright-content" onClick={Excitement}>Excitement</a>	
        <a class="main-footer__copyright-content" onClick={War}>War</a>
        <a class="main-footer__copyright-content" onClick={Documentary}>Documentary</a>
        <a class="main-footer__copyright-content" onClick={Music}>Music</a>
        <a class="main-footer__copyright-content" onClick={Historical}>Historical</a>
        <a class="main-footer__copyright-content" onClick={Biography}>Biography</a>
        <a class="main-footer__copyright-content" onClick={Athlete}>Athlete</a>
        <a class="main-footer__copyright-content" onClick={Western}>Western</a>
        <a class="main-footer__copyright-content" onClick={Politician}>Politician</a>
        <a class="main-footer__copyright-content" onClick={Mystery}>Mystery</a>
      </div>
    </>
  );
};

export default Footer;
