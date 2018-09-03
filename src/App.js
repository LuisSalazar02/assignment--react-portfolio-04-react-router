import React, { Component } from 'react';
import FilterProjects from './components/FilterProjects.js'
import ShowHideTech from './components/ShowHideTech.js'


class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
        <ShowHideTech/>
        <FilterProjects/>
      </div>
    );
  }
}

export default App;
