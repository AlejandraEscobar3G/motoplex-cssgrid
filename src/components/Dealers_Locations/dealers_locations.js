import React from 'react';

// Styles
import './dealers_locations.css';

class DealersLocations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Todos los distribuidores',
      data: [
        {
          id: 1,
          state: 'Todos los distribuidores'
        },
        {
          id: 2,
          state: 'Mexico'
        },
        {
          id: 3,
          state: 'CDMX'
        },
        {
          id: 4,
          state: 'Queretaro'
        },
        {
          id: 5,
          state: 'San Luis'
        }
      ]
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return(
      <React.Fragment>
        <div className="dealer_select">
          <h2>Busca tu distribuidor</h2>
          <select value={this.state.value} name="dealer_select" id="dealer_select" onChange={this.handleChange} >
            {
              this.state.data.map(data => {
                return (
                <option value={data.state} key={data.id} >{data.state}</option>
                )
              })
            }
          </select>
        </div>
      </React.Fragment>
    )
  }
}
export default DealersLocations;