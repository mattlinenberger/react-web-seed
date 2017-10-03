import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello, world');
  }

  render() {
    return <h2>Hello, world!</h2>;
  }
}

module.exports = HelloWorld;
