import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink className="navitem" activeClassName="navitem--selected" exact to="/">Home</NavLink>
        <NavLink className="navitem" activeClassName="navitem--selected" exact to="/cv">C.V.</NavLink>
        <NavLink className="navitem" activeClassName="navitem--selected" exact to="/projects">Projects</NavLink>
      </nav>
    )
  }
}

export default Nav
