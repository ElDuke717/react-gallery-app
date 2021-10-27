import React, { Component } from 'react';
import Photos from './Photos';

class Results extends Component {    
  
  render() {
    console.log(this.props.pics);
    return (
      <div className="main-content home">    
        <Photos title = "Search Results" pics={this.props.pics} />
      </div>
    );
  }
}

export default Results;