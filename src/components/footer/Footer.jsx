import "./Footer.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <footer className="footer" id="home">
      <div className="footer-top">
        <div className="footer-brand">
          <h1>Nescafe</h1>
          <p>Energia care prinde viață în fiecare ceașcă.</p>
        </div>
        
        <div className="footer-scroll">
          <AnchorLink className="anchor-link" href="#home" title="Back to top">
            <i className="bi bi-arrow-up-circle-fill"></i>
          </AnchorLink>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>&#169; 2025 Todddy Group. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
};

export default Footer;
