import React from "react";
import "./aboutHb.scss";
import about_hb_card1 from '../../../assets/IMAGEs/aboutHb1.webp';
import about_hb_card2 from '../../../assets/IMAGEs/aboutHb2.webp';
import about_hb_card3 from '../../../assets/IMAGEs/aboutHb3.webp';
export default function AboutHB() {
  return (
    <div className="about-hb">
      <div className="container">
        <div className="about-hb-title">
          <p>About us</p>
          <h2>What make us the best choice</h2>
        </div>
        <div className="about-hb-cards">
          <div className="about-hb-cards-item">
            <img className="img-full" src={about_hb_card1} />
          </div>
          <div className="about-hb-cards-item">
            <img className="img-full" src={about_hb_card2} />
          </div>
          <div className="about-hb-cards-item">
            <img className="img-full" src={about_hb_card3} />
          </div>
        </div>
      </div>
    </div>
  );
}
