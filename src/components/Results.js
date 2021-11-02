import React, { Component } from 'react';
import Photos from './Photos';

//displays results of searchTerm.  Not linked but can be accessed if URL is typed in directly.
class Results extends Component {    
  
  render() {
      
    return (
      <div className="main-content home">    
        <Photos title = {`Here are some photos of ${this.props.title}. `} pics={this.props.pics} />
      </div>
    );
  }
}

export default Results;