import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="logo-container">
          <AnchorLink href="#home" className="anchor-link logo-text">
            Nescafe
          </AnchorLink>
        </div>

        <div className="burger-menu" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </div>

        {/* Meniu pe desktop */}
        <ul className="nav-menu desktop-menu">
          <li><AnchorLink className="anchor-link" href="#home">Acasă</AnchorLink></li>
          <li><AnchorLink className="anchor-link" href="#about">Despre noi</AnchorLink></li>
          <li><AnchorLink className="anchor-link" href="#produse">Produse</AnchorLink></li>
          <li><AnchorLink className="anchor-link" href="#contact">Contact</AnchorLink></li>
        </ul>
      </div>

      {/* Meniu pe mobil/tabletă sub navbar */}
      {menuOpen && (
        <ul className="nav-menu mobile-menu">
          <li><AnchorLink className="anchor-link" href="#home" onClick={closeMenu}>Acasă</AnchorLink></li>
          <li><AnchorLink className="anchor-link" href="#about" onClick={closeMenu}>Despre noi</AnchorLink></li>
          <li><AnchorLink className="anchor-link" href="#produse" onClick={closeMenu}>Produsele</AnchorLink></li>
          <li><AnchorLink className="anchor-link" href="#contact" onClick={closeMenu}>Contact</AnchorLink></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
