import React from 'react';
import { Link } from 'react-router-dom';

// Components

// Styles
import './card_dealer.css';

// Images
import dealerDefault from '../../images/defaults/motoplex-distribuidor-default.jpg';

class CardDealer extends React.Component {

  render() {
    console.log(this.props.filteredDealers);
    return(
      <React.Fragment>
        {
          this.props.filteredDealers.map(element => {
            return (
              <div className="card_dealer" key={element.id}>
                <img src={( !element.miniature) ? dealerDefault : element.miniature} alt=""/>
                <div>
                  <h4>
                    {element.name} <br/>
                    <small>{element.location.address}</small>
                  </h4>
                  <span><b>{element.phone}</b></span>
                </div>
                <Link to={'/distribuidores/'+element.id}>CONÓCELA</Link>
              </div>
            );
          })
        }
      </React.Fragment>
    );
  }
}

export default CardDealer;