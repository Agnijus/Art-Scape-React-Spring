import "./App.css";
import Navigation from "./Navigation/Navigation";
import Hero from "./Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import FeaturedCreations from "./FeaturedCreations/FeaturedCreations";

function App() {
  return (
    <div id="home" className="App">
      <Navigation />
      <Hero />
      <AboutUs />
      <Services />
      <FeaturedCreations />
    </div>
  );
}

export default App;
