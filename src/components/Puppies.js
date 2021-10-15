import React, { Component } from 'react';
import Photos from './Photos';

class Puppies extends Component {    
  
  render() {
    console.log(this.props);
    return (
      <div className="main-content home">
        <h2>Here are some pictures of <em>Puppies!</em></h2>
        <p>Puppies are a ton of fun and very lovalble but they are also a lot of responsibility!</p>
        <p>Enjoy these photos and consider adopting a new friend from your local shelter or breed-specific rescue.</p>
    
        <Photos title = "🐶 Puppies 💗" pics={this.props.pics} tags={this.props.tags}/>
      </div>
    );
  }
}

export default Puppies;