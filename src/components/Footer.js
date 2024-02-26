import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <section className="info_section ">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_logo">
                <h5>Amvtc</h5>
                <p>
                  Nous sommes votre partenaire de confiance pour des
                  deplacements confortables et securisés en tant que prestataire
                </p>
              </div>
            </div>
            <div className="col-md-3">
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
            <div className="col-md-3">
              <div className="info_info">
                <h5>Contact Us</h5>
              </div>
              <div className="info_contact">
                <a Link to="/" className="">
                  <img
                    src="assets/images/am-vtc-high.png"
                    with="50px"
                    height="50px"
                  />
                </a>
                <a Link to="/" className="">
                  <i className="fa fa-phone" aria-hidden="true" />
                  <span>Tel:+33-0616372651</span>
                </a>
                <a Link to="/" className="">
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <span>amvtc13@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_form ">
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
                <form className="retour" action="#">
                  <button className="footerbutton">
                    <FontAwesomeIcon icon={faChevronCircleUp}></FontAwesomeIcon>{" "}
                    Revenir en haut
                  </button>
                </form>
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
};

export default Footer;
