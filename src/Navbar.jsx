import {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCookieBite, faBars} from '@fortawesome/free-solid-svg-icons';
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
      <div className="nav-item logo"><FontAwesomeIcon icon={faCookieBite} /></div>
      <div className="nav-item" role="button">Home</div>
      <div className="nav-item" role="button">About</div>
      <div className="nav-item" role="button">Menu</div>
      <div className="nav-item" role="button">Instagram</div>
      <div className="nav-item" role="button">Contact</div>
      {(width < 1024 && !menuOpen) &&
        <div className="nav-item burger" role="button">
          <FontAwesomeIcon icon={faBars} />
        </div>
      }
    </nav>
  );
};

export default Navbar;
