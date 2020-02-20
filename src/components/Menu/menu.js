import React from 'react';

// Components
import { Link } from 'react-router-dom';

// Styles
import './menu.css';

// Images
import logoMotoplex from '../../images/logos/logo-motoplex-negro.png';

class Menu extends React.Component {
  render() {
    return (
      <header className="menu-container">
        <nav className="navbar">
          <img src={logoMotoplex} alt="Logo Motoplex"/>
          <ul>
            <li><Link to="distribuidores">Distribuidores</Link></li>
            <li><Link to="marcas">Nuestras Marcas</Link></li>
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
              <a href="https://twitter.com/">Twitter</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
export default Menu;