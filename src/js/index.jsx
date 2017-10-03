import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './components/helloWorld.jsx';

const style = require('../style/index.scss');

render(<HelloWorld />, document.getElementById('root'));

export default {
  style,
};
