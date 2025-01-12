import React from "react";
import "./feedbackOC.scss";
import doubleQouteImg from "../../../assets/ICONs/doubleQoute.svg";
import feedbackProfile from "../../../assets/ICONs/feedBackProfile.webp";
export default function FeedbackOC() {
  return (
    <div className="feedbackOC">
      <div className="container">
        <div className="doubleQoute">
          <img className="img-full" src={doubleQouteImg} />
        </div>
        <p>
          “As a father, I couldn’t be happier with our experience at Discovery.
          From the moment my daughter started, the teachers made her feel
          welcomed and excited to learn.”
        </p>
        <div className="feedbackOC-profile">
          <img className="feedbackOC-profile-img" src={feedbackProfile} />
          <div className="feedbackOC-profile-text">
            <p>Jhonatan Meaky</p>
            <span>Father of Carolina</span>
          </div>
        </div>
      </div>
    </div>
  );
}
