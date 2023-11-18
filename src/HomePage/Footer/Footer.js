import "./Footer.css";

const Footer = ({ refs, onScroll }) => {
  return (
    <footer className="footer-container">
      <div className="footer-container-center">
        <div className="footer-internal-links">
          <a
            onClick={(e) => {
              e.preventDefault();
              onScroll(refs.home);
            }}
            href="#home"
            className="scroll-link footer-link-home"
          >
            Home
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              onScroll(refs.about);
            }}
            href="#about"
            className="scroll-link footer-link-about"
          >
            About
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              onScroll(refs.services);
            }}
            href="#services"
            className="scroll-link footer-link-services"
          >
            Services
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              onScroll(refs.featured);
            }}
            href="#featured"
            className="scroll-link footer-link-featured"
          >
            Featured
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              onScroll(refs.gallery);
            }}
            href="#gallery"
            className="scroll-link footer-link-gallery"
          >
            Gallery
          </a>
        </div>
        <div className="footer-external-links">
          <a href="https://www.facebook.com" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="http://www.twitter.com" target="_blank">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="http://www.instagram.com" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="footer-copyright-text">
          Copyright &copy; 2023 <span>Art Scape Company</span>. All rights
          reserved
        </div>
      </div>
    </footer>
  );
};
export default Footer;
