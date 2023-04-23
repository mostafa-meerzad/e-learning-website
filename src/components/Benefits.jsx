import React from "react";
import { DoubleComma, Tick } from "../Icons";
import img1 from "../assets/images/image1.png";
import img2 from "../assets/images/image2.png";

function Benefits() {
  const benefits = [
    {
      title: "world class",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      title: "affordable",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    }
  ];
  return (
    <div className="benefits">
      <h2 className="benefits__title">Why Should You take our course</h2>
      <p className="benefits__desc">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>

      <ul>
        {benefits.map(({ title, desc }) => {
          return (
            <div className={"benefits__benefit"} key={title}>
              <Tick />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          );
        })}
      </ul>

      <a href="#" className="benefits__more">learn more</a>
      <img src={img1} className="benefits__img" alt="" />
      <img src={img2} className="benefits__img" alt="" />
      <DoubleComma />
    </div>
  );
}

export default Benefits;
