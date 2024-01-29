import React from 'react';

const Avisclients = () => {
    return (
        <section className="avis_client_section layout_padding ">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2>Avis de nos clients</h2>
          </div>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="box">
                  {/* <div className="img-box">
                    <img src="assets/images/client.png" alt="" />
                  </div> */}
                  <div className="detail-box">
                    <h4>Marie</h4>
                    <p>
                    "Une expérience de VTC exceptionnelle! Le chauffeur était très attentif à mes besoins, m'a aidé avec mes bagages et a été très professionnel. 
                    La voiture était spacieuse et bien entretenue. Le trajet s'est déroulé sans problème, et j'ai été impressionné par le professionnalisme du chauffeur. 
                    Je le recommande vivement!"
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="box">
                  {/* <div className="img-box">
                    <img src="assets/images/client.png" alt="" />
                  </div> */}
                  <div className="detail-box">
                    <h4> Walid</h4>
                    <p>
                    "Excellent service de VTC! Le chauffeur était très professionnel et courtois. 
                    La voiture était propre et confortable. Arrivé à l'heure et m'a déposé à ma destination en toute sécurité. 
                    Je recommande vivement ce chauffeur VTC. Merci pour cette expérience agréable!
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="box">
                  {/* <div className="img-box">
                    <img src="assets/images/client.png" alt="" />
                  </div> */}
                  <div className="detail-box">
                    <h4>Angelique</h4>
                    <p>
                    "Service de VTC de qualité supérieure! Le chauffeur était ponctuel et m'a accueilli avec politesse. 
                    La conduite était sûre et confortable, et la voiture était impeccable. 
                    J'ai vraiment apprécié la conversation agréable pendant le trajet.
                     Je choisirai certainement ce chauffeur VTC pour mes déplacements futurs."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn-box">
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
    );
}

export default Avisclients;
