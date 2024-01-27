import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Entete = () => {
  return (
 
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="contact_link-container">
            <a href="" className="contact_link1">
             <img src="assets/images/am-vtc-high.png" with="50px" height="50px"/>
            </a>
            <a href="" className="contact_link2">
              <i className="fa fa-phone" aria-hidden="true" />
              <span>Call : +33-0616372651</span>
            </a>
            <a href="" className="contact_link3">
              <i className="fa fa-envelope" aria-hidden="true" />
              <span>amvtc13@gmail.com</span>
            </a>
          </div>
        </div>
        </div>
        </header>
             
  );
};

export default Entete;



