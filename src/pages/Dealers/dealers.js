import React from 'react';
import api from '../../api';

// Components
import Menu from '../../components/Menu/menu';
import CardDealer from '../../components/Card_Dealer/card_dealer';

// Styles
import './dealers.css';

// Images
import dealerDefault from '../../images/defaults/motoplex-distribuidor-default.jpg';

class Dealers extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    });

    try {
      const data = await api.dealers.getDealers();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({
        loading: false,
        data: error
      });
    }
  }

  render() {
    let dealers_background = { backgroundImage: `url(${dealerDefault})` }
    if (this.state.loading) {
      return 'Loading...'
    }
    console.log(this.state.data);
    return(
      <React.Fragment>
        <Menu />
        <div className="Dealers_banner" style={ dealers_background }>
          <div className="Dealers_layout">
            <select name="dealer_select" id="dealer_select">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="Dealers_card">
          <CardDealer />
        </div>
      </React.Fragment>
    );
  };
}

export default Dealers;