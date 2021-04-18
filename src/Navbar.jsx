import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCookieBite, faBars} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-item logo"><FontAwesomeIcon icon={faCookieBite} /></div>
      <div className="nav-item" role="button">Home</div>
      <div className="nav-item" role="button">About</div>
      <div className="nav-item" role="button">Menu</div>
      <div className="nav-item" role="button">Contact</div>
      <div className="nav-item burger" role="button">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;
