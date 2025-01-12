import React from "react";
import "./heroBanner.scss";
import heroHome from "../../../assets/ICONs/heroHome.webp";
export default function HeroBanner() {
  return (
    <div className="hb">
      <div className="container">
        <div className="hb-title">
          <h1>Where Bright Futures Begin</h1>
        </div>
        <div className="hb-text ">
          <img src={heroHome} />
          <p>
            Discovery is a school where young minds are encouraged to explore.
          </p>
        </div>
      </div>
    </div>
  );
}
