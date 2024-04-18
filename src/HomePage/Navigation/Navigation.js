import React, { useState } from "react";
import "./navigation.css";

const Navigation = ({ onScroll, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="nav-container">
      <div className="nav-container-center">
        <Title />
        <InternalLinks onScroll={onScroll} refs={refs} />
        <ExternalLinks />
        <MenuButton toggleMenu={toggleMenu} />
      </div>
      {isMenuOpen && (
        <DropDownMenu onScroll={onScroll} refs={refs} toggleMenu={toggleMenu} />
      )}
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

const InternalLinks = ({ onScroll, refs }) => {
  return (
    <>
      <a
        onClick={(e) => {
          e.preventDefault();
          onScroll(refs.home);
        }}
        href="#home"
        className="nav-internal-home scroll-link"
      >
        home
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          onScroll(refs.about);
        }}
        href="#about"
        className="scroll-link nav-internal-about"
      >
        about
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          onScroll(refs.services);
        }}
        href="#services"
        className="nav-internal-services scroll-link"
      >
        services
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          onScroll(refs.featured);
        }}
        href="#featured"
        className="nav-internal-featured scroll-link"
      >
        featured
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          onScroll(refs.gallery);
        }}
        href="#gallery"
        className="nav-internal-gallery scroll-link"
      >
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

const DropDownMenu = ({ onScroll, refs, toggleMenu }) => {
  return (
    <div id="drop-down-menu" className="nav-drop-down-menu-container">
      <ul>
        <li>
          <a
            on
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
              onScroll(refs.home);
            }}
            href="#home"
            className="nav-internal-home scroll-link"
          >
            home
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
              onScroll(refs.about);
            }}
            href="#about"
            className="nav-internal-about scroll-link"
          >
            about
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
              onScroll(refs.services);
            }}
            href="#services"
            className="nav-internal-services scroll-link"
          >
            services
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
              onScroll(refs.featured);
            }}
            href="#featured"
            className="nav-internal-featured scroll-link"
          >
            featured
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
              onScroll(refs.gallery);
            }}
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
