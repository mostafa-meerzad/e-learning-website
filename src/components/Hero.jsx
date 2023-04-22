import React from "react";
import { LeftSidePattern } from "../Icons";
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
      <img src={hero} alt="" className="hero__img" />

      <LeftSidePattern />
    </div>
  );
}

export default Hero;
