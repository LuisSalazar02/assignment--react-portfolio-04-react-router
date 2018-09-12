import React, { Component } from 'react';
import PortfolioFixed from './components/PortfolioFixed.js'

// b.1 Import the Switch, Route from react-router-dom


// b.2 Import the View Component Files

// b.3 Import the Nav file

class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
        {/* Configure Nav File */}
        <PortfolioFixed/>

        {/* Configure Switch + Route to render View Component files */}

      </div>
    );
  }
}

export default App;
