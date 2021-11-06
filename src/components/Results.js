import React, { Component } from 'react';
import Photos from './Photos';

//displays results of searchTerm.  Not linked but can be accessed if URL is typed in directly.
class Results extends Component {    
  
  render() {
      
    return (
      <div className="main-content home">
          {/*The unDefined prop is used to determine if the title is undefined, if it is, then it's used for the logic of the loading page.  */}
        <Photos title = {this.props.title === undefined ? 'Trying to get your photos' :`Here are some photos of ${this.props.title}. `} pics={this.props.pics} unDefined = {this.props.title === undefined} />
      </div>
    );
  }
}

export default Results;