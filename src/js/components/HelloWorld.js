import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello, world');
  }

  handleClick() {
    console.log('Clicked!');
  }

  render() {
    return (
      <div>
        <h2>Hello, world!</h2>
        <button onClick={(e) =>{this.handleClick(e)}}>Click Me</button>
      </div>);
  }
}

module.exports = HelloWorld;
