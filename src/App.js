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
import Results from './components/Results'
import flickrLogoBW from './components/flickr-logo-bnw.png'



export default class App extends Component {

    constructor(props) {
      super(props);
      this.searchPics = this.searchPics.bind(this);

      this.state = {
        pics: [],
        puppyPics: [],
        dogPics: [],
        catPics: [],
        searchPics: [],
        loading: true
      };
    }


    componentDidMount() {
      this.getPics('pets');
      this.getPuppies( 'puppies' );
      this.getDogs('dogs');
      this.getCats('cats');
      this.searchPics( );
    }

    getPics( query ='pets'  ) {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ 
           pics: response.data.photos.photo,
           loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }

    getPuppies( query = 'puppies' ) {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ 
           puppyPics: response.data.photos.photo,
           loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }

    getDogs( query = 'dogs' ) {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ 
           dogPics: response.data.photos.photo,
           loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }

    getCats( query = 'cats') {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ 
           catPics: response.data.photos.photo,
           loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }

    searchPics( query ) {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ 
           searchPics: response.data.photos.photo,
           loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }
  
  render() {
    console.log(this.state.searchPics);
    return (
    <BrowserRouter>
      <h1 className = "main-title"><a href="www.flickr.com" target="_blank " rel="noopener noreferrer"><img src={flickrLogoBW} className ="flickr-logo-bnw" alt="Flickr logo"/></a> Pet Picture Finder</h1>
      <div className="App">
     
        <SearchForm onSearch={this.searchPics}/>
        
        <Nav />
        {
          (this.state.loading)
          ? <p className="loading">Loading...</p>
          :
          <Switch>
            <Route exact path="/" render={ () => <Home pics={this.state.pics}   /> } />
            <Route path="/puppies" render={ () => <Puppies pics={this.state.puppyPics} /> } />
            <Route path="/dogs" render={ () => <Dogs pics={this.state.dogPics}/>} />
            <Route path="/cats" render={ () => <Cats pics = {this.state.catPics}/> } />
            <Route path="/results" render={ () => <Results pics = {this.state.searchPics}  searchTerm = {this.searchPics}/> } />
          </Switch>
        }
      </div>
      </BrowserRouter>
    );
   }
}


