import React from 'react';
import api from '../../api';

// Styles
import './dealers.css';

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
    if (this.state.loading) {
      return 'Loading...'
    }
    console.log(this.state.data);
    return(
      <h1>Hola mundo</h1>
    );
  };
}

export default Dealers;