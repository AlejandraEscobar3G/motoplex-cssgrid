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
        src:`${logoPiaggio}`,
        alt:'Piaggio Logo'
      },
      {
        src:`${logoVespa}`,
        alt:'Vespa Logo'
      },
      {
        src:`${logoAprilia}`,
        alt:'Aprilia Logo'
      },
      {
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
                <img src={data.src} alt={data.alt}/>
              )
            })
          }
        </div>
      </footer>
    )
  }
}

export default Footer;