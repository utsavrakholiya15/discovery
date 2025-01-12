import React from "react";
import "./wedo.scss";
import wedoImage from "../../../assets/IMAGEs/wedoImage.webp";
export default function Wedo() {
  return (
    <div className="wedo">
      <div className="container">
        <div className="wedo-title">
          <p>What we do</p>
          <h2>
            With a commitment to nurturing curiosity and fostering growth, our
            educators use creative approaches to make learning fun and engaging.
          </h2>
        </div>
      </div>
      <div className="wedo-img">
        <img className="img-full" src={wedoImage} />
      </div>
    </div>
  );
}
