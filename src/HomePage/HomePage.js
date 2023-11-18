import Navigation from "./Navigation/Navigation";
import Hero from "./Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import FeaturedCreations from "./FeaturedCreations/FeaturedCreations";
import NewsLetter from "./NewsLetter/NewsLetter";

const HomePage = () => {
  return (
    <div id="home">
      <Navigation />
      <Hero />
      <AboutUs />
      <Services />
      <FeaturedCreations />
      <NewsLetter />
    </div>
  );
};
export default HomePage;
