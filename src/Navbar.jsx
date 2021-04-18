import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCookieBite} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-item icon"><FontAwesomeIcon icon={faCookieBite} /></div>
      <div className="nav-item">Home</div>
      <div className="nav-item">About</div>
      <div className="nav-item">Menu</div>
      <div className="nav-item">Contact</div>
    </nav>
  );
};

export default Navbar;
