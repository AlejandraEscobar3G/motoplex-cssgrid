import React from 'react';
import api from '../../api';

// Components
import Menu from '../../components/Menu/menu';
import CardDealer from '../../components/Card_Dealer/card_dealer';
import DealersLocations from '../../components/Dealers_Locations/dealers_locations';

// Styles
import './dealers.css';

// Images
import dealerDefault from '../../images/defaults/motoplex-distribuidor-default.jpg';

class Dealers extends React.Component {
  constructor(props) {
    super(props);
    this.backgroundImage = { backgroundImage: `url(${dealerDefault})` };
    this.state = {
      loading: true,
      error: null,
      data: undefined,
      states: undefined
    }
  }

  componentDidMount() {
    this.setState({
      loading: true,
      error: null
    });
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const data = await api.dealers.getDealers();
      this.getStates(data);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({
        loading: false,
        data: error
      });
    }
  }

  getStates = (data) => {
    let statesList = data.map(element => element.state);
    //statesList.unique();
    console.log(statesList);
  }

  render() {
    if (this.state.loading) {
      return 'Loading...'
    }
    console.log(this.state.data);
    return(
      <React.Fragment>
        <Menu />
        <div className="Dealers_banner" style={ this.backgroundImage }>
          <div className="Dealers_layout">
            <DealersLocations />
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