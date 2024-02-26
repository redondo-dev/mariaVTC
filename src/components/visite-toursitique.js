import React from "react";

const VisiteToursitique = () => {
  return (
    <section className="visite_client_section layout_padding">
      <div className="container ">
        <div className="heading_container heading_center">
          <h2 className="titre">Visites touristiques</h2>
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
                  <img
                    src="https://media.istockphoto.com/id/1596064998/fr/photo/la-cath%C3%A9drale-de-la-major-%C3%A0-marseille-au-cr%C3%A9puscule-france.jpg?s=612x612&w=0&k=20&c=8J-bKnh1HydqWnZRhFmY1hvdzvNB9-SIPl0ohzGMeoE="
                    alt=""
                  />
                </div>
                <div className="detail-box">
                  <h4>Cathedral de la Major</h4>
                  <p>
                    "Plongez dans l'histoire architecturale à la Cathédrale de
                    la Major, un chef-d'œuvre néo-byzantin au cœur de Marseille.
                    Laissez-vous impressionner par ses imposantes façades et ses
                    détails artistiques, une invitation à une exploration
                    fascinante du patrimoine religieux et culturel de la cité
                    phocéenne."
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="box">
                <div className="img-box">
                  <img
                    src="https://media.istockphoto.com/id/1318858956/fr/photo/mucem-mus%C3%A9e-des-civilisations-deurope-et-de-la-m%C3%A9diterran%C3%A9e-marseille-bouches-du-rh%C3%B4ne.jpg?s=612x612&w=0&k=20&c=tGiMEBV9QlMr_1LCeKFFEjGIw5MEQOso69h93MqHJow="
                    alt="Mucem"
                  />
                </div>
                <div className="detail-box">
                  <h4>Mucem </h4>
                  <p>
                    "Plongez dans l'histoire vibrante de Marseille au Mucem, où
                    chaque exposition est une porte ouverte sur les richesses
                    culturelles de la Méditerranée. Une aventure captivante vous
                    attend dans ce lieu emblématique qui raconte l'histoire
                    d'une ville à travers les siècles."
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="box">
                <div className="img-box">
                  <img
                    src="https://media.istockphoto.com/id/623436966/fr/photo/coucher-de-soleil-sur-le-stade-v%C3%A9lodrome.jpg?s=612x612&w=0&k=20&c=28-KBPyd1OtzBQ_nvqj9h_eaEQqHJoH7y_76X-p5NYQ="
                    alt=""
                  />
                </div>
                <div className="detail-box">
                  <h4>Marseille by night </h4>
                  <p>
                    "Vibrez au rythme envoûtant de Marseille by Night, une ville
                    qui s'illumine une fois le soleil couché. Découvrez la magie
                    nocturne de ses ruelles animées, de ses places éclairées et
                    des reflets scintillants du Vieux-Port. Une expérience
                    inoubliable au cœur de la vie nocturne méditerranéenne vous
                    attend."
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="box">
                <div className="img-box">
                  <img
                    src="https://media.istockphoto.com/id/507307114/fr/photo/notre-dame-de-la-garde-est-une-architecture-byzantine-basilique.jpg?s=612x612&w=0&k=20&c=VNd6UyUDpQT8I9eAKcQ0XIHGxdATMMW2DxdLkTuvqsQ="
                    alt="Mucem"
                  />
                </div>
                <div className="detail-box">
                  <h4>Notre dame de la garde </h4>
                  <p>
                    "Élevez-vous au sommet du joyau emblématique de Marseille et
                    de la vue panoramique à Notre-Dame de la Garde,Là-haut,
                    entre ciel et mer, découvrez une expérience unique et une
                    vue à couper le souffle sur la ville phocéenne et la
                    Méditerranée."
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
};

export default VisiteToursitique;
