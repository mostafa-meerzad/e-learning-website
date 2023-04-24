import React from "react";
import { LeftSidePattern, Play } from "../Icons";
import hero from "../assets/images/image7.png";
function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__title">Get The Best Online Learning Service</h1>
      <p className="hero__desc">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem.
      </p>

      <button className="hero__btn btn">start a course</button>
      <div className="hero__img">
      <img src={hero} alt=""  />
<Play/>
      </div>

      <LeftSidePattern />
    </div>
  );
}

export default Hero;
