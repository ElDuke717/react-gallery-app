import React, { Component } from 'react';
import Photo from './Photo';

class Cats extends Component {    
  
  render() {
    return (
      <div className="main-content home">
        <h2>Here are some fun pictures of <em>Cats!</em></h2>
        <p>Cats are fun but you have to clean their litterbox regularly!</p>
        <p>Enjoy these photos and consider adopting a new friend from your local shelter or breed-specific rescue.</p>
        
        <Photo title = "🐈 Cats 🙀" pics={this.props.pics}/>
      </div>
      
    );
  }
}



export default Cats;