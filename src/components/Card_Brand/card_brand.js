import React from 'react';

// Styles
import './card_brand.css';

// Images

class CardBrand extends React.Component {
  render() {
    return(
      <div className="card_brand">
        <img className="card_brand_logo" src={this.props.cardLogo} alt="logo"/>
        <img className="card_brand_model" src={this.props.cardModel} alt="Model"/>
      </div>
    )
  }
}

export default CardBrand;