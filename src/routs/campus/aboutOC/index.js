import React from "react";
import "./aboutOC.scss";
import aboutOCImage from "../../../assets/IMAGEs/aboutOCImage.webp";
export default function AboutOC() {
  return (
    <div className="aboutOC">
      <div className="container " style={{padding:"0"}}>
        <div className="aboutOC-title">
          <p>About our campus</p>
          <h2>
            We provide a supportive, fun environment where children can discover
            their potential and build a strong foundation for the future.
          </h2>
        </div>
        <div className="aboutOC-image">
          <img className="img-full" src={aboutOCImage} />
        </div>
      </div>
    </div>
  );
}
