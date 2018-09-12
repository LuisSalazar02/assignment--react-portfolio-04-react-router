import React, { Component } from 'react';
// c.1 Import + Configure the NavLink


class Nav extends Component {
  render() {
    return (
      <nav>
        {/* c.2 instantiate nav links to '/', '/cv', '/projects' routes
            - navlink has activeClassName 'navitem--selected'
        */}

        <a href="#">Route-1</a>
        <a href="#">Route-2</a>
        <a className='navitem--selected' href="#">Route-3</a>
      </nav>
    )
  }
}

export default Nav
