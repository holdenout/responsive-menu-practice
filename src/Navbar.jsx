import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCookieBite} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="nav-container">
      <FontAwesomeIcon icon={faCookieBite} />
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#menu">Menu</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default Navbar;
