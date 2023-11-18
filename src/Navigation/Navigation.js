import React, { useState } from "react";
import "./navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav>
      <div class="nav-container-center">
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
    <div class="nav-title">
      <span class="nav-title-one">Art</span>
      <span class="nav-title-two">Scape</span>
    </div>
  );
};

const MenuButton = ({ toggleMenu }) => {
  return (
    <button onClick={toggleMenu} class="nav-drop-down-menu-btn">
      <i class="fa-solid fa-bars"></i>
    </button>
  );
};

const InternalLinks = () => {
  return (
    <>
      <a href="#home" class="nav-internal-home scroll-link">
        home
      </a>
      <a href="#about" class="scroll-link nav-internal-about">
        about
      </a>
      <a href="#services" class="nav-internal-services scroll-link">
        services
      </a>
      <a href="#featured" class="nav-internal-featured scroll-link">
        featured
      </a>
      <a href="#gallery" class="nav-internal-gallery scroll-link">
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
        class="nav-external-facebook"
      >
        <i class="fa-brands fa-facebook"></i>
      </a>
      <a href="https://www.twitter.com" target="_blank" class="external-x">
        <i class="fa-brands fa-x-twitter"></i>
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        class="external-instagram"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>
    </>
  );
};

const DropDownMenu = ({ toggleMenu }) => {
  return (
    <div id="drop-down-menu" class="nav-drop-down-menu-container">
      <ul>
        <li>
          <a
            on
            onClick={toggleMenu}
            href="#home"
            class="nav-internal-home scroll-link"
          >
            home
          </a>
        </li>
        <li>
          <a
            onClick={toggleMenu}
            href="#about"
            class="nav-internal-about scroll-link"
          >
            about
          </a>
        </li>
        <li>
          <a
            onClick={toggleMenu}
            href="#services"
            class="nav-internal-services scroll-link"
          >
            services
          </a>
        </li>
        <li>
          <a
            onClick={toggleMenu}
            href="#featured"
            class="nav-internal-featured scroll-link"
          >
            featured
          </a>
        </li>
        <li>
          <a
            onClick={toggleMenu}
            href="#gallery"
            class="nav-internal-gallery scroll-link"
          >
            gallery
          </a>
        </li>
      </ul>
    </div>
  );
};
