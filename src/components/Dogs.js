import React, { Component } from 'react';
import Photo from './Photo';

class Dogs extends Component {    
  
  render() {
    return (
      <div className="main-content home">
        <h2>Here are some fun pictures of <em>Dogs!</em></h2>
        <p></p>
        <p>Dogs are fun but they are a lot of responsibility!</p>
        <p>Enjoy these photos and consider adopting a new friend from your local shelter or breed-specific rescue.</p>
        
        <Photo title="🐕 Dogs 🐩"/>
      </div>
    );
  }
}

export default Dogs;