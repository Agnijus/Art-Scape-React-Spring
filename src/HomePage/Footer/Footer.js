import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer-container">
      <div class="footer-container-center">
        <div class="footer-internal-links">
          <a href="#home" class="scroll-link footer-link-home">
            Home
          </a>
          <a href="#about" class="scroll-link footer-link-about">
            About
          </a>
          <a href="#services" class="scroll-link footer-link-services">
            Services
          </a>
          <a href="#featured" class="scroll-link footer-link-featured">
            Featured
          </a>
          <a href="#gallery" class="scroll-link footer-link-gallery">
            Gallery
          </a>
        </div>
        <div class="footer-external-links">
          <a href="https://www.facebook.com" target="_blank">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="http://www.twitter.com" target="_blank">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a href="http://www.instagram.com" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div class="footer-copyright-text">
          Copyright &copy; 2023 <span>Art Scape Company</span>. All rights
          reserved
        </div>
      </div>
    </footer>
  );
};
export default Footer;
