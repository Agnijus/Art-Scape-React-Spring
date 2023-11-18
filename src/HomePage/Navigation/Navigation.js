import React, { useState } from "react";
import "./navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="nav-container">
      <div className="nav-container-center">
        <Title />
        <InternalLinks />
        <ExternalLinks />
        <MenuButton toggleMenu={toggleMenu} />
      </div>
      {isMenuOpen && <DropDownMenu toggleMenu={toggleMenu} />}
    </nav>
  );
};
export default Navigation;

const Title = () => {
  return (
    <div className="nav-title">
      <span className="nav-title-one">Art</span>
      <span className="nav-title-two">Scape</span>
    </div>
  );
};

const MenuButton = ({ toggleMenu }) => {
  return (
    <button onClick={toggleMenu} className="nav-drop-down-menu-btn">
      <i className="fa-solid fa-bars"></i>
    </button>
  );
};

const InternalLinks = () => {
  return (
    <>
      <a href="#home" className="nav-internal-home scroll-link">
        home
      </a>
      <a href="#about" className="scroll-link nav-internal-about">
        about
      </a>
      <a href="#services" className="nav-internal-services scroll-link">
        services
      </a>
      <a href="#featured" className="nav-internal-featured scroll-link">
        featured
      </a>
      <a href="#gallery" className="nav-internal-gallery scroll-link">
        gallery
      </a>
    </>
  );
};

const ExternalLinks = () => {
  return (
    <>
      <a
        href="https://www.facebook.com"
        target="_blank"
        className="nav-external-facebook"
      >
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a href="https://www.twitter.com" target="_blank" className="external-x">
        <i className="fa-brands fa-x-twitter"></i>
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        className="external-instagram"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
    </>
  );
};

const DropDownMenu = ({ toggleMenu }) => {
  return (
    <div id="drop-down-menu" className="nav-drop-down-menu-container">
      <ul>
        <li>
          <a
            on
            onClick={toggleMenu}
            href="#home"
            className="nav-internal-home scroll-link"
          >
            home
          </a>
        </li>
        <li>
          <a
            onClick={toggleMenu}
            href="#about"
            className="nav-internal-about scroll-link"
          >
            about
          </a>
        </li>
        <li>
          <a
            onClick={toggleMenu}
            href="#services"
            className="nav-internal-services scroll-link"
          >
            services
          </a>
        </li>
        <li>
          <a
            onClick={toggleMenu}
            href="#featured"
            className="nav-internal-featured scroll-link"
          >
            featured
          </a>
        </li>
        <li>
          <a
            onClick={toggleMenu}
            href="#gallery"
            className="nav-internal-gallery scroll-link"
          >
            gallery
          </a>
        </li>
      </ul>
    </div>
  );
};
