import React, { Component } from 'react';
import Photos from './Photos';

class Puppies extends Component {    
  
  render() {
    return (
      <div className="main-content home">
        <h2>Here are some pictures of <em>Puppies!</em></h2>
        <p>Puppies are a ton of fun and very lovable but they are also a lot of responsibility!</p>
        <p>Enjoy these photos and consider adopting a new friend from your local shelter or rescue.</p>
      {/*  pics props is based on this.state.puppyPics passed via props in App.js*/}
        <Photos title = "🐶 Puppies 💗" pics={this.props.pics} />
      </div>
    );
  }
}

export default Puppies;