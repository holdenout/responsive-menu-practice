import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCookieBite,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { NavItems } from "./NavItems.jsx";
import "./Navbar.css";

const NavBarMainIcons = ({ width, menuOpen, setMenuOpen }) => {
  return (
    <div className="nav-item nav-main-icons">
      <div className="nav-item logo">
        <FontAwesomeIcon className="logo" icon={faCookieBite} />
      </div>

      {width <= 600 && !menuOpen && (
        <div className="nav-item burger" role="button">
          <FontAwesomeIcon
            className="burger"
            onClick={() => setMenuOpen(!menuOpen)}
            icon={faBars}
          />
        </div>
      )}

      {width <= 600 && menuOpen && (
        <div
          className="nav-item close"
          role="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon className="close" icon={faTimes} />
        </div>
      )}
    </div>
  );
};

export const Navbar = () => {
  const [width, setWidth] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const updateViewWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    updateViewWidth();

    window.addEventListener("resize", updateViewWidth);

    return () => window.removeEventListener("resize", updateViewWidth);
  });

  return (
    <nav className="nav-container">
      <NavBarMainIcons
        width={width}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      {(width > 600 || menuOpen) && <NavItems />}
    </nav>
  );
};

export default Navbar;
