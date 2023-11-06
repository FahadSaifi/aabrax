import { FiPhoneCall } from "react-icons/fi";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "../assets/styles/Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <div className="nav-wrapper">
          <div className="img-wrapper">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="layout">
            <ul className="navlinks-wrapper">
              <li className="nav-links">
                <NavLink to="/" className="nav-route">
                  Home
                </NavLink>
              </li>
              <li className="nav-links submenu-parent">
                <NavLink to="/product/1" className="nav-route">
                  Products
                </NavLink>
                <ul className="submenu-wrapper">
                  <li className="dropdown-wrapper">
                    <NavLink to="/product/1" className="submenu-link">
                      I Beam Conveyor
                    </NavLink>
                  </li>
                  <li className="dropdown-wrapper second">
                    <NavLink to="/product/2" className="submenu-link">
                      4 Wheel Conveyor
                    </NavLink>
                  </li>
                  <li className="dropdown-wrapper">
                    <NavLink to="/product/3" className="submenu-link">
                      Enclosed Track Conveyor
                    </NavLink>
                  </li>
                  <li className="dropdown-wrapper">
                    <NavLink to="/product/4" className="submenu-link">
                      Garments Conveyor
                    </NavLink>
                  </li>
                  <li className="dropdown-wrapper">
                    <NavLink to="/product/5" className="submenu-link">
                      Heavy Duty Conveyor
                    </NavLink>
                  </li>
                  <li className="dropdown-wrapper">
                    <NavLink to="/product/6" className="submenu-link">
                      Floor Conveyor
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-links dropdown-2-wrapper">
                <NavLink to="/solution/1" className="nav-route ">
                  Solutions
                </NavLink>
                <ul className="dropdown-2">
                  <li className="nav-item">
                    <NavLink to="/solution/1" className="nav-item-link">
                      Automotive Conveyor Systems
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/solution/2" className="nav-item-link">
                      Assembly Line
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/solution/3" className="nav-item-link">
                      Cleaning and Pretreatment
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/solution/4" className="nav-item-link">
                      Dip Lines
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/solution/5" className="nav-item-link">
                      E-Coating and Plating
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/solution/6" className="nav-item-link">
                      Cold Casting Conveyor
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/solution/7" className="nav-item-link">
                      Fan Stator Varnish Conveyor
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/solution/8" className="nav-item-link">
                      Fan Testing Conveyor
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/solution/9" className="nav-item-link">
                      Finishing Doors and Windows
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/solution/10" className="nav-item-link">
                      Garment Handling Systems
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/solution/11" className="nav-item-link">
                      Paint Shop
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/solution/12" className="nav-item-link">
                      Powder Coating Sub
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/solution/13" className="nav-item-link">
                      Tank and Cylinder Finishing
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/solution/14" className="nav-item-link">
                      Wet Spray Painting
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/solution/15" className="nav-item-link">
                      Woodworking Operations
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-links">
                <NavLink to="/about" className="nav-route">
                  About
                </NavLink>
              </li>
              <li className="nav-links">
                <NavLink to="/contact" className="nav-route">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <button className="tel-btn">Call us now!</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
