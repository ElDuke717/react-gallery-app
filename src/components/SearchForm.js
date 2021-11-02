import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import history from 'history/browser';
import DogPaw from './DogPaw';

class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    //console.log(this.query.value);
    //This will give the pathname of the search result - need to figure out how to make this work with the history.
    console.log(this.props.location.pathname);
    //code below causes the page to redirect when the search is entered. See https://gist.github.com/elitan/5e4cab413dc201e0598ee05287ee4338 for explanation.
    this.props.history.push(`/results/${this.query.value}`);
    //Not sure what the history import does yet.
    console.log(history);
    console.log(history.forward);
    console.log(history.back);
    //console.log(window.history)
    e.currentTarget.reset();
  }
  
  render() {
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

