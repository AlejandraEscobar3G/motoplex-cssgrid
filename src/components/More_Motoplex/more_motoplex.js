import React from 'react';

// Styles
import './more_motoplex.css';

// Images

class MoreMotoplex extends React.Component {
  render() {
    const more_motoplex = this.props.infoMotoplex;
    let motoplex_background = {}
    return(
      more_motoplex.map(data => {
        motoplex_background = { backgroundImage: `url(${data.background})` }
        return(
          <div className="more_motoplex" style={motoplex_background} key={data.id}>
            <div className="more_layout">
              <div className="more_text">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <div className="link"><a href={data.redirection} >{data.anchor}</a></div>
              </div>
            </div>
          </div>  
        )
      })
    )
  }
}

export default MoreMotoplex;