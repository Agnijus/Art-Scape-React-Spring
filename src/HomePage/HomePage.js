import React, { useRef } from "react";

import Navigation from "./Navigation/Navigation";
import Hero from "./Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import FeaturedCreations from "./FeaturedCreations/FeaturedCreations";
import NewsLetter from "./NewsLetter/NewsLetter";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer/Footer";

const HomePage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const featuredRef = useRef(null);
  const galleryRef = useRef(null);

  const refs = {
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    featured: featuredRef,
    gallery: galleryRef,
  };

  const onScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={homeRef} id="home">
      <Navigation onScroll={onScroll} refs={refs} />
      <Hero />
      <AboutUs ref={aboutRef} />
      <Services ref={servicesRef} />
      <FeaturedCreations ref={featuredRef} />
      <NewsLetter />
      <Gallery ref={galleryRef} />
      <Footer onScroll={onScroll} refs={refs} />
    </div>
  );
};
export default HomePage;
