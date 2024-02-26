import React from 'react';

const TransfertAffaire = () => {
    return (
        <section className="affaire_client_section layout_padding">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2>Transfert d'affaires</h2>
          </div>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="box">
                  <div className="img-box">
                    <img src="https://media.istockphoto.com/id/1449538590/fr/photo/le-gratte-ciel-de-verre-cma-cgm-mesure-147-m%C3%A8tres-de-haut-et-est-situ%C3%A9-au-c%C5%93ur-du.jpg?s=612x612&w=0&k=20&c=Cg_5Awa6wz83wTEb5PZY7WNsXgXiR0GGSriIslvMssM=" alt="" height ="350px" width={500} />
                  </div>
                 
                   <div className="detail-box">
                    <h4>Quartier d'affaires Euroméditerranée </h4>
                    <p>
                    Euroméditerranée est l'un des plus grands projets de développement urbain en Europe et vise à revitaliser le centre-ville de Marseille. Ce quartier d'affaires moderne offre des espaces de bureaux, des infrastructures de qualité, 
                    ainsi que des services dédiés aux entreprises.
                    </p>
                  </div> 
                </div>
              </div>
              <div className="carousel-item ">
                <div className="box">
                  <div className="img-box">
                    <img src="https://media.istockphoto.com/id/1346311288/fr/photo/photo-a%C3%A9rienne-de-marseille-sud-de-la-france-au-cr%C3%A9puscule.jpg?s=612x612&w=0&k=20&c=coghNCM_CxjU5Oymfs-xo1pLx1rlGvEnRi27_r3aSxY=" alt="vieux-port" />
                  </div>
                   <div className="detail-box">
                    <h4>Chambre de commerce Marseille Canebiere vieux port</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip
                    </p>
                  </div> 
                </div>
              </div>
              <div className="carousel-item ">
                <div className="box">
                  <div className="img-box">
                    <img src="https://media.istockphoto.com/id/521705216/fr/photo/basilique-notre-dame-de-la-garde-le-port-de-marseille-france.jpg?s=612x612&w=0&k=20&c=7uPZAOLWL50CjvHyUStyYrqI0zo5I4yDPNwh689E4N0=" alt="notre-dame" />
                  </div>
                  <div className="detail-box">
                    <h4>Cours pierre puget banque de france </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip
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

export default TransfertAffaire;
