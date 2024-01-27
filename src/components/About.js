import React from 'react';

const About = () => {
    return (
        <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="img_container">
                <div className="img-box">
                  <img src="assets/images/toyota-car.jpg" height={360} width={480}  alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="detail-box">
                <div className="heading_container ">
                  <h2>Qui Somme Nous?</h2>
                </div>
                <p>
                Chez AMVTC, nous sommes bien plus qu'une simple société de VTC. 
                Nous sommes votre partenaire de confiance pour des déplacements personnalisés,
                 confortables et sécurisés. En tant que prestataire de Véhicules de Tourisme avec Chauffeur, nous nous engageons à offrir une expérience de transport exceptionnelle à chacun de nos clients.
                </p>
                <div className="btn-box">
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
}

export default About;
