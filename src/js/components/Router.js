import {
  BrowserRouter,
} from 'react-router-dom';

import React from 'react';
import Main from './Main';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter
        basename='/#'>
        <Main />
      </BrowserRouter>
    );
  }
}

module.exports = Router;
