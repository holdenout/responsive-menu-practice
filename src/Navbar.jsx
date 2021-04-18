import {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCookieBite, faBars} from '@fortawesome/free-solid-svg-icons';
import {NavItems} from './NavItems.jsx';
import './Navbar.css';

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
      <div className="nav-item logo">
        <FontAwesomeIcon icon={faCookieBite} />
      </div>
      {width <= 600 && !menuOpen && (
        <div className="nav-item burger" role="button">
          <FontAwesomeIcon icon={faBars} />
        </div>
      )}
      {width > 600 && (
        <NavItems />
      )}
    </nav>
  );
};

export default Navbar;
