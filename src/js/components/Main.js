import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import React from 'react';

import Nav from './Nav';
import Home from './Home';
import About from './About';
import NestedView from './NestedView';

class Main extends React.Component {
  constructor(props) {
    super(props);
    console.log('Rendering main!');
  }

  render() {
    return (
      <div>
        <Nav />
        <main>
          <Switch>
            <Route exact path='/' component={new Home().render} />
            <Route exact path='/about' component={new About().render} />
            <Route path='/view' component={new NestedView().render} />
          </Switch>
        </main>
      </div>
    );
  }
}

module.exports = Main;