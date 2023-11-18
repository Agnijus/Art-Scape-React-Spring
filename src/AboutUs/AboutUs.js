import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section id="about" class="about-us-container">
      <div class="about-us-container-center">
        <h2 class="about-us-title">
          <span>about</span>
          <span class="about-us-title-two">us</span>
        </h2>
        <div class="about-us-image"></div>
        <div class="about-us-text">
          <h3 class="about-us-text-title">explore the difference</h3>
          <p class="about-us-text-p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis vitae, nisi ipsum quod quae quidem
          </p>
          <button class="about-us-text-btn">read more</button>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
