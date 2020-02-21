import React from 'react';
import api from '../../api';

// Components
import Menu from '../../components/Menu/menu';

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
    if (this.state.loading) {
      return 'Loading...'
    }
    console.log(this.state.data);
    return(
      <React.Fragment>
        <Menu />
        <div className="Dealers_banner">
          <img src={dealerDefault} alt="Motoplex Banner"/>
        </div>
      </React.Fragment>
    );
  };
}

export default Dealers;