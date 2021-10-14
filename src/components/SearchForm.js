import React, { Component } from 'react';
import DogPaw from './DogPaw';

export default class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        {/* <label className="is-hidden" htmlFor="search">Search</label> */}
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               ref={(input) => this.query = input}
               placeholder="Type in your search here and press the paw to start" />
        <button type="submit" id="submit" className="search-button">
         <DogPaw width={20} height={20} fill={'#eb8b0d'}/>
        </button>
      </form>      
    );
  }
  
}



