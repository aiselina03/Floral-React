import React from "react";
import "./style.scss"

function OurTeam() {
  return (
    <>
      <div className="ourTeam">
      <div className="headerTeam">
      <p>Contacts</p>
      <h1>Our Team</h1>
    </div>
    <div className="cardsContainerPhoto">
      <div className="cardsPhoto">
  <div className="photoCard">
    <div className="image">
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
    </div>

    <div className="text">
        <h3>Velva Kopf</h3>
        <p>Biologist</p>
    </div>
  </div>
  <div className="photoCard">
    <div className="image">
        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
    </div>

<div className="text">
        <h3>Velva Kopf</h3>
        <p>Biologist</p>
    </div>
  </div>
  <div className="photoCard">
    <div className="image">
      <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />  
    </div>

<div className="text">
        <h3>Velva Kopf</h3>
        <p>Biologist</p>
    </div>
  </div>
      </div>
    </div>
      </div>
    </>
  );
}

export default OurTeam;
