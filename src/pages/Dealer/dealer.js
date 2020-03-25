import React from 'react';
import api from '../../api';

// Styles
import './dealer.css';

class Dealer extends React.Component {
  constructor(props) {
    super(props);
    this.dealerId = this.props.match.params.dealerId;

    this.fetchData = this.fetchData.bind(this);
    this.state = {
      loading: true,
      error: null,
      data: undefined
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const data = await api.dealers.getDealer({id: 'merida'});
      console.log(data);
      this.setState({ 
        loading: false,
        data: data
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  }

  render() {
    if (this.state.loading) {
      return(
        <h1>Loading....</h1>
      )
    } else {
      return(
        <h1>it woorks</h1>
      )
    }
  }
}

export default Dealer;