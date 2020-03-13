import React from 'react';

// Components

// Styles
import './card_dealer.css';

class CardDealer extends React.Component {

  render() {
    console.log(this.props.filteredDealers);
    return(
      <React.Fragment>
        {
          this.props.filteredDealers.map(element => {
            return (
              <div className="card_dealer" key={element.id}>
                <h2>{element.name}</h2>
              </div>
            );
          })
        }
      </React.Fragment>
    );
  }
}

export default CardDealer;