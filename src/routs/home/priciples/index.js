import React from "react";
import "./principles.scss";
import heroImage from "../../../assets/IMAGEs/heroImage.webp";
import { useNavigate } from "react-router-dom";
export default function Principles() {
  const navigate = useNavigate();
  return (
    <div className="pri">
      <div className="container">
        <div className="pri-title">
          <p>Our principles</p>
          <h2>A school based on strong values</h2>
          <button onClick={()=>navigate("/about")}>About us</button>
        </div>
        <div className="pri-img ">
          <img className="img-full" src={heroImage} />
        </div>
      </div>
    </div>
  );
}
