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

    this.handleChange = this.handleChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.getAvailableStates = this.getAvailableStates.bind(this);
    this.filterStates = this.filterStates.bind(this);

    this.state = {
      loading: true,
      error: null,
      data: undefined,
      filteredData: undefined,
      availableStates: undefined,
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
      this.setState({ 
        loading: false,
        data: data,
        filteredData: data,
        availableStates: this.getAvailableStates(data)
      });
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

  filterStates = (event) => {
    return(
      this.state.data.filter(element => {
        return element.state === event;
      })
    );
  }

  handleChange = (event) => {
    let filteredStates = (event.target.value === 'Todos los distribuidores') ? this.state.data : this.filterStates(event.target.value);

    this.setState({
      selectedState: event.target.value,
      filteredData: filteredStates
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
            <DealersLocations availableStates={this.state.availableStates} selectedState={this.state.selectedState} onChange={this.handleChange} />
          </div>
        </div>
        <div className="Dealers_card">
          <CardDealer filteredDealers={this.state.filteredData} />
        </div>
      </React.Fragment>
    );
  };
}

export default Dealers;