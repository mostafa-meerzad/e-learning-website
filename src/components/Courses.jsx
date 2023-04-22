import React from "react";
import course1 from "../assets/images/course1.png";
import course2 from "../assets/images/course2.png";
import author from "../assets/images/author.png";
import { Document, Dollar } from "../Icons";
function Courses() {
  const courses = [
    {
      name: "Native Mac Apps in Swift",
      desc: "Take your dev skills to the next level with this ground-up tutorial on native Mac apps",
      img: course1,
      lessonsNo: 3,
      cost: 79,
      field: "software",
      author: { name: "Annabelle Portar", img: author }
    },
    {
      name: "Fundamentals of Interior Design",
      desc: "A begginer;s guide to dsigning or renoating breathtalking interior spaces that pop",
      img: course2,
      lessonsNo: 3,
      cost: "free",
      field: "art & design",
      author: { name: "Annabelle Portar", img: author }
    }
  ];

  return (
    <div className="courses">
      <h2 className="courses__title">new courses</h2>
      <button className="courses__btn btn">explore courses</button>
      {courses.map(
        ({
          name,
          desc,
          img,
          lessonsNo,
          cost,
          field,
          author: { name: authorName, img: authorImg }
        }) => {
          return (
            <div className="course" key={name}>
              <div className="course__thumbnail-wrapper">
                <img src={img} alt={name} className="course__img" />
                <p className="course__field">{field}</p>
                <p className="course__cost">
                  {typeof cost === "number" && <Dollar />}
                  {typeof cost === "number" ? `${cost.toFixed(2)} USD` : cost}
                </p>
              </div>
              <div className="course__info-wrapper">
                <h3 className="course__title">{name}</h3>
                <p className="course__desc">{desc}</p>
                <div className="course__author">
                  <img src={authorImg} alt={authorName} />
                  <span>by {authorName}</span>
                </div>
                <div className="course__lesson">
                  <Document />
                  <span>{lessonsNo} lessons</span>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default Courses;
