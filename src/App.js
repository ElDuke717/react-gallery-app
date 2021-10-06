import './App.css';
import Photo from './components/Photo';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          App.js is the container component for the other apps.
        </a>
      </header>
      <SearchForm />
      <Photo />
    </div>
  );
}



export default App;
