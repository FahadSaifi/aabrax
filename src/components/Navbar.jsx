import logo from "../assets/images/logo.webp";
import { NavLink } from "react-router-dom";
import "../assets/styles/Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  // State for navbar toggle
  const [nav, setNav] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div
          className={nav ? "nav-opac-layer active" : "nav-opac-layer"}
          onClick={() => {
            setNav(false);
          }}
        ></div>
        <div className="nav-wrapper">
          <div className="img-wrapper">
            <NavLink to="/" className="nav-route">
              <img src={logo} alt="logo" className="logo" />
            </NavLink>
          </div>
          <div className="bars">
            <FaBars className="nav-bars" onClick={() => setNav(true)} />
          </div>
          <div className={nav ? "layout active" : "layout"}>
            <FaTimes className="nav-close" onClick={() => setNav(false)} />
            <ul className="navlinks-wrapper">
              <li className="nav-links" onClick={() => setNav(false)}>
                <NavLink to="/" className="nav-route">
                  Home
                </NavLink>
              </li>
              <li className="nav-links submenu-parent">
                <span className="nav-route">Products</span>
                <ul className="submenu-wrapper">
                  <li className="dropdown-wrapper">
                    <NavLink
                      to="/product/1"
                      className="submenu-link"
                      onClick={() => setNav(false)}
                    >
                      I Beam Conveyor
                    </NavLink>
                  </li>
                  <li className="dropdown-wrapper second">
                    <NavLink
                      to="/product/2"
                      className="submenu-link"
                      onClick={() => setNav(false)}
                    >
                      4 Wheel Conveyor
                    </NavLink>
                  </li>
                  <li className="dropdown-wrapper">
                    <NavLink
                      to="/product/3"
                      className="submenu-link"
                      onClick={() => setNav(false)}
                    >
                      Enclosed Track Conveyor
                    </NavLink>
                  </li>
                  <li className="dropdown-wrapper">
                    <NavLink
                      to="/product/4"
                      className="submenu-link"
                      onClick={() => setNav(false)}
                    >
                      Garments Conveyor
                    </NavLink>
                  </li>
                  <li className="dropdown-wrapper">
                    <NavLink
                      to="/product/5"
                      className="submenu-link"
                      onClick={() => setNav(false)}
                    >
                      Heavy Duty Conveyor
                    </NavLink>
                  </li>
                  <li className="dropdown-wrapper">
                    <NavLink
                      to="/product/6"
                      className="submenu-link"
                      onClick={() => setNav(false)}
                    >
                      Floor Conveyor
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-links dropdown-2-wrapper">
                <span className="nav-route">Solutions</span>
                <ul className="dropdown-2">
                  <li className="nav-item">
                    <NavLink
                      to="/solution/1"
                      className="nav-item-link"
                      onClick={() => setNav(false)}
                    >
                      Automotive Conveyor Systems
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/solution/2"
                      className="nav-item-link"
                      onClick={() => setNav(false)}
                    >
                      Assembly Line
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/solution/3"
                      className="nav-item-link"
                      onClick={() => setNav(false)}
                    >
                      Cleaning and Pretreatment
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/solution/4"
                      className="nav-item-link"
                      onClick={() => setNav(false)}
                    >
                      Dip Lines
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/solution/5"
                      className="nav-item-link"
                      onClick={() => setNav(false)}
                    >
                      E-Coating and Plating
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/solution/6"
                      className="nav-item-link"
                      onClick={() => setNav(false)}
                    >
                      Cold Casting Conveyor
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/solution/7"
                      className="nav-item-link"
                      onClick={() => setNav(false)}
                    >
                      Fan Stator Varnish Conveyor
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/solution/8"
                      className="nav-item-link"
                      onClick={() => setNav(false)}
                    >
                      Fan Testing Conveyor
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/solution/9"
                      className="nav-item-link"
                      onClick={() => setNav(false)}
                    >
                      Finishing Doors and Windows
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/solution/10"
                      className="nav-item-link"
                      onClick={() => setNav(false)}
                    >
                      Garment Handling Systems
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/solution/11"
                      className="nav-item-link"
                      onClick={() => setNav(false)}
                    >
                      Paint Shop
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/solution/12"
                      className="nav-item-link"
                      onClick={() => setNav(false)}
                    >
                      Powder Coating Sub
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/solution/13"
                      className="nav-item-link"
                      onClick={() => setNav(false)}
                    >
                      Tank and Cylinder Finishing
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/solution/14"
                      className="nav-item-link"
                      onClick={() => setNav(false)}
                    >
                      Wet Spray Painting
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/solution/15"
                      className="nav-item-link"
                      onClick={() => setNav(false)}
                    >
                      Woodworking Operations
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-links">
                <NavLink
                  to="/about"
                  className="nav-route"
                  onClick={() => setNav(false)}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-links">
                <NavLink
                  to="/contact"
                  className="nav-route"
                  onClick={() => setNav(false)}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-links">
                <a
                  href="tel:+91 8766374874"
                  className="tel-btn"
                  onClick={() => setNav(false)}
                >
                  Call Us Now
                </a>
              </li>
            </ul>
          </div>
          <a
            href="tel:+91 9259860316"
            className="tel-btn-2"
            onClick={() => setNav(false)}
          >
            Call Us Now
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
