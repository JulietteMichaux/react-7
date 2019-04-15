import React, { Component } from 'react';
import './App.css';
import FormFilm from './Components/FormFilm/FormFilm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <FormFilm />
        </header>
      </div>
    );
  }
}

export default App;
