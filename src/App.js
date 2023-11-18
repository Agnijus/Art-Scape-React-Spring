import "./App.css";
import Navigation from "./Navigation/Navigation";
import Hero from "./Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <AboutUs />
      <Services />
    </div>
  );
}

export default App;
