import React from 'react';

//Components
import Menu from '../../components/Menu/menu';
import CardBrand from '../../components/Card_Brand/card_brand';
import MoreMotoplex from '../../components/More_Motoplex/more_motoplex';
import Footer from '../../components/Footer/footer';

// Styles
import './home.css';

// Images
import bannerHome from '../../images/defaults/home.jpg';
import cardLogoPiaggio from '../../images/logos/logo-rectangulo-piaggio.jpg';
import cardLogoVespa from '../../images/logos/logo-rectangulo-vespa.jpg';
import cardLogoAprilia from '../../images/logos/logo-rectangulo-aprilia.jpg';
import cardLogoGuzzi from '../../images/logos/logo-rectangulo-guzzi.jpg';
import cardModelPiaggio from '../../images/brands/motoplex-piaggio.jpg';
import cardModelVespa from '../../images/brands/motoplex-vespa.jpg';
import cardModelAprilia from '../../images/brands/motoplex-aprilia.jpg';
import cardModelGuzzi from '../../images/brands/motoplex-guzzi.jpg';
import experienciaMotoplex from '../../images/defaults/experiencia-motoplex.jpg';
import distribuidor from '../../images/defaults/busca-distribuidor.jpg';

class Home extends React.Component {
  render() {
    const card_brand = [
      {
        id: 1,
        model: `${cardModelPiaggio}`,
        logo: `${cardLogoPiaggio}`,
        redirection: '#'
      },
      {
        id: 2,
        model: `${cardModelVespa}`,
        logo: `${cardLogoVespa}`,
        redirection: '#'
      },
      {
        id: 3,
        model: `${cardModelAprilia}`,
        logo: `${cardLogoAprilia}`,
        redirection: '#'
      },
      {
        id: 4,
        model: `${cardModelGuzzi}`,
        logo: `${cardLogoGuzzi}`,
        redirection: '#'
      }
    ];
    const more_motoplex = [
      {
        id: 1,
        title: 'EXPERIENCIA MOTOPLEX',
        description: 'Lo que nos mueve es generar en cada uno de nuestros clientes, la satisfacción de haber llegado al mejor lugar para vivir su pasión por el motociclismo. Por eso, nuestra meta de cada día es ofrecer un servicio innovador,profesional y auténtico.',
        anchor: 'MÁS DE MOTOPLEX',
        redirection: '#',
        background: `${experienciaMotoplex}`
      },
      {
        id: 2,
        title: 'NUESTROS DISTRIBUIDORES',
        description: 'Tu camino comienza en Motoplex. Por eso, ponemos a tu disposición nuestras sucursales con cobertura nacional en México. Encuentra la tuya y visítanos para que nunca dejes que algo detenga tu pasión por el motociclismo.',
        anchor: 'NUESTROS DISTRIBUIDORES',
        redirection: '#',
        background: `${distribuidor}`
      }
    ];
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
          <CardBrand cardData={card_brand} />
        </div>
        <div className="Home_motoplex">
          <MoreMotoplex infoMotoplex={more_motoplex} />
        </div>
        <Footer />
      </div>
    )
  }
}
export default Home;