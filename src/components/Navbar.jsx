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
                <NavLink
                  to="/product"
                  className="nav-route"
                  onClick={() => navigate("/product/beam")}
                >
                  Products
                </NavLink>
                <ul className="submenu-wrapper">
                  <li className="dropdown-wrapper">
                    <NavLink to="/products/ibeam" className="submenu-link">
                      I Beam Conveyor
                    </NavLink>
                  </li>
                  <li className="dropdown-wrapper second">
                    <NavLink to="/products/wheel" className="submenu-link">
                      4 Wheel Conveyor
                    </NavLink>
                  </li>
                  <li className="dropdown-wrapper">
                    <NavLink to="" className="submenu-link">
                      Enclosed Track Conveyor
                    </NavLink>
                  </li>
                  <li className="dropdown-wrapper">
                    <NavLink to="" className="submenu-link">
                      Garments Conveyor
                    </NavLink>
                  </li>
                  <li className="dropdown-wrapper">
                    <NavLink to="" className="submenu-link">
                      Heavy Duty Conveyor
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-links dropdown-2-wrapper">
                <NavLink to="/solution" className="nav-route ">
                  Solutions
                </NavLink>
                <ul className="dropdown-2">
                  <li className="nav-item">
                    <NavLink to="" className="nav-item-link">
                      Hello World
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="" className="nav-item-link">
                      Hello World
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="" className="nav-item-link">
                      Hello World
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="" className="nav-item-link">
                      Hello World
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
