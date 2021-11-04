import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DogPaw from './DogPaw';

class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  //SearchForm renders 5x when the app is loaded because there are 5 API calls.
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
    //e.target.value updates searchText as each character is entered.  e.target.value is the same as this.query.value.
  }
  //handleSubmit sets the onSearch method to add this.query.value to the searchPics function in App.js.  seachPics is passed via props since it's set to the onSearch prop.
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    //code below causes the page to redirect to the search results when the search is entered. See https://gist.github.com/elitan/5e4cab413dc201e0598ee05287ee4338 for explanation.
    this.props.history.push(`/results/${this.query.value}`);
    e.currentTarget.reset();
  }
//componentDidUpdate runs each time SearchForm is rendered, which is 5x initially due to 5 API calls.
  componentDidUpdate(prevProps, prevState) {
   //path and prevPath both provide the paths for search terms using withRouter.
    let path = this.props.location.pathname;
    //using the substr method pulls the search term from the path and sets it to the pathName variable - the same applies to prevPathName
    let pathName = path.substr(9);
    //console.log(`pathname: ${pathName}`);
    let prevPath = prevProps.location.pathname;
    let prevPathName = prevPath.substr(9);
    //console.log(`prevPathName: ${prevPathName}`);
   // pathName === prevPathName ? console.log('paths match') : console.log('paths don\'t match');

    //This logic allows the page to be updated based on the current route and will allow the history to be used for the browser's forward and back button to be used
    //if the path name substrings don't match, then onSearch is called, which runs the searchPics axios query in App.js using the pathName as the search term.
    if (pathName !== prevPathName) {
      this.props.onSearch(pathName);
    }
  }
  
  render() {
    //The search bar is rendered here.  Note that onSubmit calls handleSubmit, which runs when the button is pushed. 
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               ref={(input) => this.query = input}
               placeholder="Type in your search and press the paw" />
        <button type="submit" id="submit" className="search-button">
        <DogPaw width={20} height={20} fill={'#eb8b0d'}/>
        </button>
      </form>      
    );
  }
  
}

//export is used here so withRouter can be used for SearchForm
export default withRouter(SearchForm);

