import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
    //code below causes the page to redirect when the search is entered.
    this.props.history.push('/results');
    e.currentTarget.reset();
  }
  
  render() {
    console.log(this.state.searchText) ;
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

