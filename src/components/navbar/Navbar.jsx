import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const showMenu = () => {
    const navItems = document.querySelectorAll(".nav-menu li a");
    navItems.forEach((item) => item.classList.toggle("show-menu"));
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <AnchorLink href="#home" className="anchor-link logo-text">
          Nescafe
        </AnchorLink>
      </div>

      <ul className="nav-menu">
        <div className="burger-menu">
          <i className="bi bi-list" onClick={showMenu}></i>
        </div>
        <li><AnchorLink className="anchor-link" href="#home">Acasă</AnchorLink></li>
        <li><AnchorLink className="anchor-link" href="#about">Despre noi</AnchorLink></li>
        <li><AnchorLink className="anchor-link" href="#produse">Produsele</AnchorLink></li>
        <li><AnchorLink className="anchor-link" href="#contact">Contact</AnchorLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
