import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
<>
<section className="info_section ">
  <div className="container">
    <div className="row">
      {/* <div className="col-md-4">
        <div className="info_logo">
          <a className="navbar-brand" href="index.html">
            <span>Guarder</span>
          </a>
          <p>
            dolor sit amet, consectetur magna aliqua. Ut enim ad minim veniam,
            quisdotempor incididunt r
          </p>
        </div>
      </div> */}
      <div className="col-md-4">
        <div className="info_links">
          <h5>Liens importants</h5>
          <ul>
          <li>
            <Link to="/acceuil">Acceuil</Link>
          </li>
            <li>
            <Link to="/apropos">Apropos</Link>
          </li>
         
           <li>
            <Link to="/client">Client</Link>
          </li> 
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div className="info_info">
          <h5>Contact Us</h5>
        </div>
        <div className="info_contact">
          <a Link to="/" className="">
          <img src="assets/images/am-vtc-high.png" with="50px" height="50px"/>
          </a>
          <a Link to="/" className="">
            <i className="fa fa-phone" aria-hidden="true" />
            <span>Tel: +0033-616372651</span>
          </a>
          <a Link to="/" className="">
            <i className="fa fa-envelope" aria-hidden="true" />
            <span>amvtc13@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="col-md-4">
        <div className="info_form ">
         
          <form action="#">
          
            <button>Subscribe</button>
          </form>
          <div className="social_box">
            <a Link to="/">
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
            <a Link to="/">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
            <a Link to="/">
              <i className="fa fa-youtube" aria-hidden="true" />
            </a>
            <a Link to="/">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



        <footer className="container-fluid footer_section">
          
        <p>
          &copy; <span id="currentYear"></span> All Rights Reserved AMVTC 2024
        
        </p>
      </footer>
      </>
    );
}

export default Footer;
