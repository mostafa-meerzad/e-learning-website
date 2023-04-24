import React from "react";
import { Comma, Stars, ThreeDots } from "../Icons";
import img from "../assets/images/image3.png";
function Opinions() {
  return (
    <div className="opinions">
      <h2 className="opinions__title">What Our Student Says</h2>

      <img className="opinions__img" src={img} alt="Dianne Russell" />
      <div className="opinions__container">
      <Comma />
      <p className="opinions__opinion">
        How much will it cost the target audience is makes and famles aged zero
        and up, for i'll pay you in a week we don't need to pay upfront i hope
        you understand yet i'll know it when i see it there are more projects
        lined up charge extra the next time,
      </p>
      <Stars />
      <p className="opinions__name">Dianne Russell</p>
      <p className="opinions__country">Poland</p>
      <ThreeDots />
      </div>
    </div>
  );
}

export default Opinions;
