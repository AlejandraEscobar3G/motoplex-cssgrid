import React from 'react';

// Styles
import './dealers_locations.css';

class DealersLocations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.availableStates
    }
  }

  render() {
    return(
      <React.Fragment>
        <div className="dealer_select">
          <h2>Busca tu distribuidor</h2>
          <select value={this.props.selectedState} name="dealer_select" id="dealer_select" onChange={this.props.onChange} >
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