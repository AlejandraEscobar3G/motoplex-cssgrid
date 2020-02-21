import React from 'react';

//Components

//Styles
import './footer.css';

// Images
import logoPiaggio from '../../images/logos/logo-rectangulo-piaggio-negro.png';
import logoVespa from '../../images/logos/logo-rectangulo-vespa-negro.png';
import logoAprilia from '../../images/logos/logo-rectangulo-aprilia-negro.png';
import logoGuzzi from '../../images/logos/logo-rectangulo-guzzi-negro.png';

class Footer extends React.Component {
  render() {
    const logosFooter = [
      {
        id: 1,
        src:`${logoPiaggio}`,
        alt:'Piaggio Logo'
      },
      {
        id: 2,
        src:`${logoVespa}`,
        alt:'Vespa Logo'
      },
      {
        id: 3,
        src:`${logoAprilia}`,
        alt:'Aprilia Logo'
      },
      {
        id: 4,
        src:`${logoGuzzi}`,
        alt:'Moto Guzzi Logo'
      },
    ]
    return(
      <footer className="footer_container">
        <p>SITIOS OFICIALES DE LAS MARCAS</p>
        <div className="footer_brands">
          {
            logosFooter.map(data => {
              return(
                <img src={data.src} key={data.id} alt={data.alt}/>
              )
            })
          }
        </div>
      </footer>
    )
  }
}

export default Footer;