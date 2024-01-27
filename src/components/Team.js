import React from 'react';

const Team = () => {
    return (
        <section className="team_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Notre Equipe</h2>
            <p>
            Notre équipe, bien que modeste, est guidée par un engagement inébranlable envers votre satisfaction. 
            Derrière le volant, c'est Mouss, notre chauffeur dévoué et passionné.
            incarne notre engagement envers un service de VTC exceptionnel. 
            Sa courtoisie, son professionnalisme et son sens aigu du service client font de chaque trajet une expérience mémorable.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 mx-auto ">
              <div className="box">
                <div className="img-box">
                  <img src="assets/images/mouss.jpg" height="430px" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Mouss</h5>
                  <h6 className="">Chauffeur</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mx-auto ">
              <div className="box">
                <div className="img-box">
                  <img src="https://images.unsplash.com/photo-1676288176918-232f7caadfee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="430px"  alt="gps_photo" />
                </div>
                <div className="detail-box">
                  <h5>Mouss </h5>
                  <h6 className="">Chauffeur</h6>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 col-sm-6 mx-auto ">
              <div className="box">
                <div className="img-box">
                  <img src="assets/images/t3.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Joe el hareb </h5>
                  <h6 className="">Chauffeur</h6>
                </div>
              </div>
            </div> */}
          </div>
          <div className="btn-box">
            <a href="">voir plus</a>
          </div>
        </div>
      </section>
      
    );
}

export default Team;
