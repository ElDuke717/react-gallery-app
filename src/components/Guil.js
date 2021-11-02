import React, { Component } from 'react';
import Photos from './Photos';
import { withRouter } from 'react-router-dom';

//displays results of searchTerm.  Not linked but can be accessed if URL is typed in directly.
class Guil extends Component {    
  
  render() {
     console.log(this.props.match.params.query);
     let query = this.props.match.params.query;
     console.log(query)
    return (
      <div className="main-content home">    
        <Photos title = {`This is the Guil view of ${query}. `} pics={this.props.pics} />
      </div>
    );
  }
}

export default withRouter(Guil);