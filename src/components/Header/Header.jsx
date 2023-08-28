import { NavLink } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <div className='navbar'>
      <NavLink to='/' className='logo'>
        <FaReact /> logo
      </NavLink>

      <div className='links'>
        <NavLink to='/' className='link'>
          Home
        </NavLink>
        <NavLink to='contact' className='link'>
          Contact
        </NavLink>
        <NavLink to='about' className='link'>
          About us
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
