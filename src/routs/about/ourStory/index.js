import React from "react";
import "./ourStory.scss";
import ourStoryImage from '../../../assets/IMAGEs/ourStoryImage.webp';
export default function OurStory() {
  return (
    <div className="ourStory">
      <div className="container" style={{padding:"0"}}>
        <div className="ourStory-title">
          <p>Our story</p>
          <h2>
            Discovery's Journey: Building a School Where Kids Learn, Play, and
            Grow
          </h2>
        </div>
        <div className="ourStory-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div className="ourStory-image">
            <img className="img-full" src={ourStoryImage}/>
        </div>
      </div>
    </div>
  );
}
