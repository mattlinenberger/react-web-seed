import React from 'react';
import FormComponent from '../FormComponent';

require('./Survey.scss');

class Survey extends FormComponent {
  constructor(props) {
    super(props);
    /* init component */
    console.log('Survey Constructed!');
  }

  submit(event) {
    console.log('Form submitted! %O', event);
    const validationResult = this.validateInputs();

    if (validationResult.hasErrors === true) {
      return;
    }

    this.setState({
      isSubmitted: true,
    });
  }

  validateInputs() {
    /* create a var for holding errors */
    let hasErrors;

    const hasName =
    this.state &&
    this.state.userName &&
    this.state.userName.length > 0;

    if (!hasName) {
      hasErrors = true;
    }

    const result = {
      hasErrors,
      hasName,
    };

    return result;
  }

  render() {
    const isSubmitted =
      this.state &&
      this.state.isSubmitted;

    const validation = this.validateInputs();
    const { hasName } = validation;

    return (
      <div className='survey'>
        <h2>Survey</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <input type='text' name='userName' value={this.state.userName} onChange={this.onChange} />
            {!hasName &&
              <span className='error'> *</span>
            }
          </div>
          <div>
            <button onClick={this.onSubmit}>Submit</button>
          </div>
        </form>
        {isSubmitted === true &&
          <div>
            <h2>Submitted!</h2>
            <div>
              <b>User name: </b> <span>{this.state.userName}</span>
            </div>
          </div>
        }
      </div>
    );
  }
}

module.exports = Survey;
