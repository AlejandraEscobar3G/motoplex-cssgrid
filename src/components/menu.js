import React from 'react';

// Styles
import './styles/menu.css';

// Images
import logoMotoplex from '../images/logos/logo-motoplex-negro.png';

class Menu extends React.Component {
  render() {
    return (
      <header className="menu-container">
        <nav className="navbar">
          <img src={logoMotoplex} alt="Logo Motoplex"/>
          <ul>
            <li><a href="">Distribuidores</a></li>
            <li><a href="">Nuestras Marcas</a></li>
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