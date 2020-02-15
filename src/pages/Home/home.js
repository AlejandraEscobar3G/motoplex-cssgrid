import React from 'react';

//Components
import Menu from '../../components/Menu/menu';
import CardBrand from '../../components/Card_Brand/card_brand';

// Styles
import './home.css';

// Images
import bannerHome from '../../images/defaults/home.jpg';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="Home_banner">
          <img src={bannerHome} alt="Motoplex Banner"/>
        </div>
        <div className="Home_text">
          <h2>
            ACERCA DE MOTOPLEX <br/>
            <small>Es la tienda concepto internacional de Grupo Piaggio diseñada para satisfacer tu emoción de recorrer los mejores caminos en motocicletas.</small>
          </h2>
        </div>
        <div className="Home_brands">
          <a href=""><CardBrand /></a>
          <a href=""><CardBrand /></a>
          <a href=""><CardBrand /></a>
          <a href=""><CardBrand /></a>
        </div>
      </div>
    )
  }
}
export default Home;