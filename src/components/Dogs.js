import React, { Component } from 'react';
import Photos from './Photos';

class Dogs extends Component {    
  
  render() {
    console.log(this.props);
    return (
      <div className="main-content home">
        <h2>Here are some fun pictures of <em>Dogs!</em></h2>
        <p></p>
        <p>Dogs are fun but they are a lot of responsibility!</p>
        <p>Enjoy these photos and consider adopting a new friend from your local shelter or breed-specific rescue.</p>
        
        <Photos title="🐕 Dogs 🐩" pics={this.props.pics}/>
      </div>
    );
  }
}

export default Dogs;