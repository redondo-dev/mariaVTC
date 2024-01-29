import React from 'react';

const TransfertAero = () => {
    return (
        <section className="aero_client_section layout_padding">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2>transfert Aeroportuaire</h2>
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
                    <img src="https://media.istockphoto.com/id/1131426341/fr/photo/avion-et-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=tVtVxQXpbjBwI_PgMDAVuUW1c8mCUyz_6--ICVu4iVQ=" alt="mucem" />
                  </div>
                  <div className="detail-box">
                    <h4>Aeroport marignane</h4>
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
                    <img src="https://media.istockphoto.com/id/1254973568/fr/photo/salon-vide-de-terminal-da%C3%A9roport-avec-lavion-sur-larri%C3%A8re-plan.jpg?s=612x612&w=0&k=20&c=H3Lq5_RibnPkMSXa4oE3SA5FCGvj5gNMdlo8oIPV0oM=" alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>vol</h4>
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
                    <img src="https://media.istockphoto.com/id/1153101440/fr/photo/salle-dattente-da%C3%A9roport-avion-de-vol.jpg?s=612x612&w=0&k=20&c=5KFk93gtUHDrr23wJNjnL_Sd9kXXaIplXYvIqnK8mMc=" alt="salle-attente" />
                  </div>
                  <div className="detail-box">
                    <h4>Salle d'attente</h4>
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

export default TransfertAero;
