import React from "react";
import img1 from "../assets/images/image4.png";
import img2 from "../assets/images/image5.png";
import img3 from "../assets/images/image6.png";

function Resources() {
  const resourcesData = [
    {
      date: "December2,2020",
      title: "Engendering a culture of professionall development",
      desc: "Eget dictums id acru accuman.Diam phatra dignissim libero montes",
      img: img1
    },
    {
      date: "December2,2020",
      title: "Increasing engagement with instagram",
      desc: "Erat gravida hac nec in. Tristique justo id non vitae egestas.",
      img: img2
    },
    {
      date: "December2,2020",
      title: "Why the workplace will never be the same",
      desc: "Lorem id diam fringilla imperdiet. Id consequat, diam aliquam porttitor.",
      img: img3
    }
  ];
  return (
    <div className="resources">
      <h2 className="resources__title">Recourse & Insight</h2>
      <button className="resources__btn btn">visit blog</button>
<div className="resources__container">
  
{resourcesData.map(({ date, desc, img, title }) => {
        return (
          <div className="resources__resource" key={title}>
            <img src={img} alt={title} />
            <p className="resource__date">{date}</p>
            <h3 className="resource__title">{title}</h3>
            <p className="resource__desc">{desc}</p>
          </div>
        );
      })}
</div>
    </div>
  );
}

export default Resources;
