import React, { Component } from 'react';
import PortfolioFixed from './components/PortfolioFixed.js'
import {Switch, Route} from 'react-router-dom'
import CvView from './components/CvView.js'
import HomeView from './components/HomeView.js'
import ProjectsView from './components/ProjectsView.js'
import Nav from './components/Nav.js'


class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
        <Nav/>
        <PortfolioFixed/>
        <Switch>
          <Route exact path="/projects" component={ProjectsView}/>
          <Route exact path="/cv" component={CvView}/>
          <Route exact path="/" component={HomeView}/>
          <Route component={CvView}/>
        </Switch>
      </div>
    );
  }
}

export default App;
