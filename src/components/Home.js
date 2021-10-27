import React, { Component } from 'react';
import Photos from './Photos';
import flickrLogo from './flickr-logo-color.png'

class Home extends Component {    
  
  render() {
    return (
      <div className="main-content home">
        <h3>This is a fun tool for looking up pet pictures on the photo-sharing site,</h3>
        <img src={flickrLogo} className ="flickr-logo" alt="Flickr logo"/>
        <p>It uses the Flickr API to find photos of pets or whatever you put in the search box above.</p>
        <Photos title={`🐟🐢🦎 Results for: ${this.props.title} 🐇🐈🐕`} pics={this.props.pics} />

      </div>
    );
  }
}

export default Home;