import React from 'react';

// Styles
import './card_brand.css';

// Images

class CardBrand extends React.Component {
  render() {
    const card_brand = this.props.cardData;
    return(
      card_brand.map(data => {
        return(
          <a href={data.redirection} key={data.id}>
            <div className="card_brand">
              <img className="card_brand_logo" src={data.logo} alt="logo"/>
              <img className="card_brand_model" src={data.model} alt="Model"/>
            </div>
          </a>
        )
      })
    )
  }
}

export default CardBrand;