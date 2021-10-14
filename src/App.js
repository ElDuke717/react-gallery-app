import React, { Component } from 'react';
import {
  BrowserRouter, 
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';


//App components
import './App.css';
// import Photo from './components/Photo';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import config from './components/config';
import Home from './components/Home';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Puppies from './components/Puppies';
import flickrLogoBW from './components/flickr-logo-bnw.png'

export default class App extends Component {

    constructor() {
      super();
      this.state = {
        pics: [],
        tags: 'pets'
      };
    }

    componentDidMount() {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${this.state.tags}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ 
           pics: response.data.photos.photo,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }
  
  render() {
    console.log(this.state);
    console.log(this.state.pics);
    //console.log(this.state.pics[0]);
    // console.log(Object.values(this.state.pics[0]));
    //console.log(`https://farm${this.state.pics[0].farm}.staticflickr.com/${this.state.pics[0].server}/${this.state.pics[0].id}_${this.state.pics[0].secret}.jpg`)
    //console.log(this.state.pics[0].farm);
    return (
    <BrowserRouter>
      <h1 className = "main-title"><a href="www.flickr.com" target="_blank " rel="noopener noreferrer"><img src={flickrLogoBW} className ="flickr-logo-bnw" alt="Flickr logo"/></a> Pet Picture Finder</h1>
      <div className="App">
     
        <SearchForm />
        
        <Nav />
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/puppies" render={ () => <Puppies pics={this.state.pics} /> } />
            <Route path="/dogs" render={ () => <Dogs pics={this.state.pics}/>} />
            <Route path="/cats" render={ () => <Cats pics = {this.state.pics}/> } />
            
          </Switch>
      </div>
      </BrowserRouter>
    );
   }
}


