import React, { Component } from 'react';
import Photos from './Photos';

//displays results of searchTerm.  Not linked but can be accessed if URL is typed in directly.
class Results extends Component {    
  
  render() {
    console.log(this.props.pics);
    return (
      <div className="main-content home">    
        <Photos title = {`Search Results for ${this.props.title} `} pics={this.props.pics} />
      </div>
    );
  }
}

export default Results;