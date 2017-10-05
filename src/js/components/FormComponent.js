
import React from 'react';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    /* init component */

    /* bind events */
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    console.log('Submitted! State: %O', this.state);
    this.submit(event);

    /* prevent the default submit action */
    event.preventDefault();
  }

  onChange(event) {
    const { target } = event;
    const { name, value } = target;

    console.log('Change detected!:[%O][%O]', name, value);
    this.setState({
      [name]: value,
    });
  }
}

module.exports = FormComponent;
