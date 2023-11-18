import React, { forwardRef } from "react";

import "./Gallery.css";
import img1 from "../Images/gallery-one.jpg";
import img2 from "../Images/gallery-two.jpg";
import img3 from "../Images/gallery-three.jpg";
import img4 from "../Images/gallery-four.jpg";
import img5 from "../Images/gallery-five.jpg";
import img6 from "../Images/gallery-six.jpg";
import img7 from "../Images/gallery-seven.jpg";
import img8 from "../Images/gallery-eight.jpg";

const data = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
  { img: img7 },
  { img: img8 },
];

const Gallery = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="gallery" className="gallery-container">
      {data.map((image) => {
        return <Image {...image} />;
      })}
    </section>
  );
});
export default Gallery;

const Image = ({ img }) => {
  return (
    <div className="gallery-image">
      <a href="#">
        <i className="fa-solid fa-magnifying-glass"></i>
      </a>
      <img className="image" src={img} alt="" />
    </div>
  );
};
