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
      states: undefined,
      selectedState: 'Todos los distribuidores'
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
      this.setState({ loading: false, data: data, states: this.getAvailableStates(data) });
    } catch (error) {
      this.setState({
        loading: false,
        data: error
      });
    }
  }

  getAvailableStates = (data) => {
    let statesList = data.map(element => element.state);
    statesList = Array.from(new Set(statesList));
    statesList.unshift('Todos los distribuidores');
    return(
      statesList.map((element, index) => {
        return({id: ++index, state: element});
      })
    );
  }

  handleChange = (event) => {
    this.setState({
      selectedState: event.target.value
    })
  }

  render() {
    if (this.state.loading) {
      return 'Loading...'
    }
    return(
      <React.Fragment>
        <Menu />
        <div className="Dealers_banner" style={ this.backgroundImage }>
          <div className="Dealers_layout">
            <DealersLocations availableStates={this.state.states} selectedState={this.state.selectedState} onChange={this.handleChange} />
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