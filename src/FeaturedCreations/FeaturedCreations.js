import "./FeaturedCreations.css";

import img1 from "../Images/stone.jpg";
import img2 from "../Images/digital.jpg";
import img3 from "../Images/urban skyline.jpg";
import img4 from "../Images/magical.jpg";

const data = [
  {
    img: img1,
    title: "elegence in stone",
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              animi veritatis fuga, est sapiente tempora autem nostrum eum dolor
              et.`,
    type: "marble",
    price: "600",
  },
  {
    img: img2,
    title: "digital symphony",
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              animi veritatis fuga, est sapiente tempora autem nostrum eum dolor
              et.`,
    type: "Digital Print",
    price: "100",
  },
  {
    img: img3,
    title: "urban elegance",
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              animi veritatis fuga, est sapiente tempora autem nostrum eum dolor
              et.`,
    type: "Acrylic",
    price: "300",
  },
  {
    img: img4,
    title: "fantasy realsm",
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              animi veritatis fuga, est sapiente tempora autem nostrum eum dolor
              et.`,
    type: "Acrylic",
    price: "300",
  },
];

const FeaturedCreations = () => {
  return (
    <section id="featured" className="creations-container">
      <h2 className="creations-title">
        <span>featured</span>
        <span className="creations-title-two">arts</span>
      </h2>
      <div className="creation-grid-container">
        {data.map((creation) => {
          return <Creation key={creation.id} {...creation} />;
        })}
      </div>
      <div className="creations-btn-container">
        <button className="creations-btn">all creations</button>
      </div>
    </section>
  );
};
export default FeaturedCreations;

const Creation = ({ img, title, text, type, price }) => {
  return (
    <div className="creation-card">
      <img src={img} className="creation-card-image"></img>
      <div className="creation-card-text">
        <h4 className="creation-card-title">{title}</h4>
        <p className="creation-card-p">{text}</p>
        <div className="creation-info">
          <div className="creation-type">{type}</div>
          <div className="creation-price">from &pound;{price}</div>
        </div>
      </div>
    </div>
  );
};
