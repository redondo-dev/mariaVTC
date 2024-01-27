import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture,faMapMarkerAlt, faShip } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

const Section = () => {
    return (
        <section className="service_section layout_padding ">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                       Nos services
                    </h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="box ">
                            <div className="img-box">
                                {/* ... SVG ... */}
                            </div>
                            <div className="detail-box">
                                <h6>
                                <FontAwesomeIcon icon={faPlaneDeparture} /> Transferts Aéroportuaires
                                </h6>
                                <p>
                                Commencez ou terminez votre voyage en toute sérénité avec nos services de transferts aéroportuaires
                                </p>
                                <Link to="/transfert">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box ">
                            <div className="img-box">
                                {/* ... SVG ... */}
                            </div>
                            <div className="detail-box">
                                <h6>
                                <FontAwesomeIcon icon={faShip} /> Déplacements d'Affaires
                                </h6>
                                <p>
                                 Optez pour un transport professionnel et discret pour tous vos déplacements liés aux affaires.
                                                                 </p>
                                <Link to="/transfert">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box ">
                            <div className="img-box">
                                {/* ... SVG ... */}
                            </div>
                            <div className="detail-box">
                                <h6>
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> Visites Touristiques
                                </h6>
                                <p>
                               Explorez votre destination avec nos chauffeurs expérimentés qui vous guideront à travers les sites touristiques locaux.
                                </p>
                                <Link to="/transfert">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;
