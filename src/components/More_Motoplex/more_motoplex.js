import React from 'react';

// Styles
import './more_motoplex.css';

// Images

class MoreMotoplex extends React.Component {
  render() {
    let motoplex_background = {
      backgroundImage: `url(${this.props.motoplexBackground})`
    }
    return(
      <div className="more_motoplex" style={motoplex_background}>
        <div className="more_layout">
          <div className="more_text">
            <h3>{this.props.infoMotoplex.title}</h3>
            <p>{this.props.infoMotoplex.description}</p>
            <div className="link"><a href={this.props.infoMotoplex.redirection} >{this.props.infoMotoplex.anchor}</a></div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoreMotoplex;