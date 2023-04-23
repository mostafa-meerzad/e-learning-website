import React from "react";
import { DownsidePattern, UpsidePattern } from "../Icons";

function Roadmap() {
  const steps = [
    { step: 1, desc: "Browse course from our expert contributor" },
    { step: 2, desc: "Purchase quickly and securely" },
    { step: 3, desc: "That’s Start learning right away" }
  ];
  return (
    <div className="roadmap">
      <h2 className="roadmap__title">How does Educate work?</h2>
      <div className="roadmap__steps">
        {steps.map(({ step, desc }) => {
          return (
            <div key={step} className="roadmap__step">
              <div className="roadmap__step-num">{step}</div>
              <div className="roadmap__step-desc">{desc}</div>
            </div>
          );
        })}
        <UpsidePattern />
        <DownsidePattern />
      </div>
      <p className="roadmap__desc">Join over 1,000 satisfied learners today.</p>
      <button className="roadmap__btn btn">explore course</button>
    </div>
  );
}

export default Roadmap;
