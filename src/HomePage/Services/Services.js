import "./Services.css";

const data = [
  {
    id: 1,
    icon: "fa-tools",
    title: "guided workshops",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            sunt?`,
  },
  {
    id: 2,
    icon: "fa-graduation-cap",
    title: "inspiring courses",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            sunt?`,
  },
  {
    id: 3,
    icon: "fa-gem",
    title: "premium supplies",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            sunt?`,
  },
];

const Services = () => {
  return (
    <section id="services" className="services-container">
      <div className="services-container-center">
        <h2 className="services-title">
          <span>our</span>{" "}
          <span className="services-title-two"> services </span>
        </h2>
        {data &&
          data.map((service) => {
            return <Service key={service.id} {...service} />;
          })}
      </div>
    </section>
  );
};
export default Services;

const Service = (props) => {
  const { icon, title, text } = props;
  return (
    <div className="service">
      <div className="service-square">
        <i className={"fas " + icon}></i>
      </div>
      <h4 className="service-title">{title}</h4>
      <p className="service-p">{text}</p>
    </div>
  );
};
