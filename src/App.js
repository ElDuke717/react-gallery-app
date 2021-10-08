import React from 'react';
import {
  BrowserRouter
} from 'react-router-dom';


import './App.css';
import Photo from './components/Photo';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';

const App = () => (
  
  <BrowserRouter>
    <h1>The Pet Picture Finder</h1>
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <SearchForm />
      <Nav />
      {/* <hr className="divider"/> */}
      <Photo />
      
      
    </div>
    </BrowserRouter>
  );




export default App;
