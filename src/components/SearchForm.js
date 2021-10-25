import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
    this.props.onSearch(this.state.searchText);
    e.currentTarget.reset();
  }
  
  render() {
    console.log(this.state)  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               ref={(input) => this.query = input}
               placeholder="Type in your search and press the paw" />
        <button type="submit" id="submit" className="search-button">
         <NavLink to="/Results"><DogPaw width={20} height={20} fill={'#eb8b0d'}/></NavLink>
        </button>
      </form>      
    );
  }
  
}



