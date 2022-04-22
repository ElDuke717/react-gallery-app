import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';



//App component imports
import './App.css';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import config from './components/config';
import Home from './components/Home';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Puppies from './components/Puppies';
import Results from './components/Results';
import FourOFour from './components/FourOFour';
import flickrLogoBW from './components/flickr-logo-bnw.png'


//App component is responsible for storing and updating state, running queries 
export default class App extends Component {

  constructor(props) {
    super(props);
    //I need to explain why this is necessary.
    this.searchPics = this.searchPics.bind(this);

    //State contains empty arrays that are updated when Flickr API queries are run.  It also contains logic for the loading display.
    this.state = {
      pics: [],
      puppyPics: [],
      dogPics: [],
      catPics: [],
      searchPics: [],
      loading: true,
      searchLoading: false,
    };
  }

  //Ensures all queries run when app refreshes
  componentDidMount() {
    this.getPics('pets');
    this.getPuppies('puppies');
    this.getDogs('dogs');
    this.getCats('cats');
    //Should only get run when searchForm is run.
    //this.searchPics('pets' );
  }
  //getPics for Home route initially - default set to 'pets'
  getPics(query = 'pets') {
    this.setState(({
      petsLoading: true,
    }))
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pics: response.data.photos.photo,
          loading: false,
          defaultTerm: 'pets'
        });
        this.setState(({
          petsLoading: false
        }))
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  //getPuppies route query
  getPuppies(query = 'puppies') {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          puppyPics: response.data.photos.photo,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  //getDogs gets dog photos
  getDogs(query = 'dogs') {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          dogPics: response.data.photos.photo,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  //get cat photos for Cats route.
  getCats(query = 'cats') {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          catPics: response.data.photos.photo,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  //searchPics is called when the search term is entered into and run in the searchForm.  State is updated so that both pics and searchPics are updated to reflect the photos from the query of searchForm.
  //searchTerm is set to query so that it can be saved in state and used to update the title of Photos.

  searchPics(query = 'pets') {
    this.setState(({
      searchLoading: true,
    }))
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          //pics: response.data.photos.photo,
          searchPics: response.data.photos.photo,
          loading: false,
          searchTerm: query,
        });
        this.setState(({
          searchLoading: false
        }))
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    //When the history API is logged to the console, it gives you an object that gives information - the length and a bunch of other things I don't understand. 
    //render is called 5x when the app loads because there are 5 API calls.  This means that SearchForm will run 5x when the app is rendered.

    return (
      <BrowserRouter>
        <h1 className="main-title"><a href={`https://www.flickr.com`} target="_blank " rel="noopener noreferrer"><img src={flickrLogoBW} className="flickr-logo-bnw" alt="Flickr logo" /></a> Pet Picture Finder</h1>
        <div className="App">

          {/* SearchForm component adds search and calls searchPics when query term is entered */}
          <SearchForm onSearch={this.searchPics} />

          {/* Nav element contains links to different routes Puppies, Dogs and Cats */}
          <Nav />

          {
            //Logic for loading page - initial state is loading, as is any time that the searchTerm is undefined, otherwise, the appropriate route is rendered.   This is not usually used due to the Loading component functionality.
            (this.state.loading)
              && (this.state.searchPics.length === 0) && (this.state.searchLoading)
              ?
              <p className="loading">Loading...</p>
              :

              <Switch>
                {/* The home route "/" renders the home view and dynamically updates the title based on the search term */}
                <Route exact path="/react-gallery-app" render={() => <Home pics={this.state.pics} title={this.state.defaultTerm} petPics={this.state.petsLoading} />} />
                <Route exact path="/" render={() => <Home pics={this.state.pics} title={this.state.defaultTerm} petPics={this.state.petsLoading} />} />
                <Route path="/puppies" render={() => <Puppies pics={this.state.puppyPics} />} />
                <Route path="/dogs" render={() => <Dogs pics={this.state.dogPics} />} />
                <Route path="/cats" render={() => <Cats pics={this.state.catPics} />} />
                {/* exact path to /results is necessary in case the user hits submit in search without providing a search term */}
                <Route exact path="/results" render={() => <Results pics={this.state.searchPics} title={this.state.searchTerm} searching={this.state.searchLoading} />} />
                <Route path="/results/:query" render={() => <Results pics={this.state.searchPics} title={this.state.searchTerm} searching={this.state.searchLoading} />} />
                {/* FourOFour is for URLs that do not match a route */}
                <Route component={FourOFour} />
              </Switch>
          }
        </div>
      </BrowserRouter>
    );
  }
}


