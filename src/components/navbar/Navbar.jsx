import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const showMenu = () => {
    const navlist = document.querySelectorAll(".nav-menu li a");
    navlist.forEach((i) => i.classList.toggle("show-menu"));
  };

  return (
    <div className="navbar">
      <AnchorLink className="anchor-link" href="#home">
        <img src={logo} alt="Tody Group Logo" />
      </AnchorLink>

      <ul className="nav-menu">
        <div className="burger-menu">
          <i className="bi bi-list" onClick={showMenu}></i>
        </div>
        <li>
          <AnchorLink className="anchor-link" href="#home">
            Acasă
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#about">
            Despre noi
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#education">
            Produsele
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#contact">
            Contact
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
