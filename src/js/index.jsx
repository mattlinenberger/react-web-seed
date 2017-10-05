import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';

const style = require('../style/index.scss');

render(<Router />, document.getElementById('root'));

export default {
  style,
};
