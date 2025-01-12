import React from "react";
import "./campusHb.scss";
import yellowRound from '../../../assets/ICONs/yellowRound.svg';
export default function CampusHb() {
  return (
    <div className="campusHb">
      <div className="container">
        <div className="campusHb-title">
          <p>LEARN MORE ABOUT</p>
          <h2>
            Our campus
            <img src={yellowRound}/>
          </h2>
        </div>
      </div>
    </div>
  );
}
