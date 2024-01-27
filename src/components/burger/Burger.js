import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './burger.css';


const Burger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <>
      <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="burger">
          <div className={`bar bar1 ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar bar2 ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar bar3 ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/acceuil">Acceuil</Link>
          </li>
            <li>
            <Link to="/apropos">Apropos</Link>
          </li>
         
           <li>
            <Link to="/client">Clients</Link>
          </li> 
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>
      </>
  );
}

export default Burger;
