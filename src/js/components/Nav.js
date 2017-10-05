import React from 'react';

import {
  Link,
} from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/about'>About</Link>
        </div>
        <div>
          <Link to='/view'>Nested View</Link>
        </div>
      </nav>
    );
  }
}

module.exports = Nav;
