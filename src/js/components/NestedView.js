import React from 'react';

import {
  Link,
  Switch,
  Route,
} from 'react-router-dom';

import SubView from './SubView';

class NestedView extends React.Component {
  constructor(props) {
    super(props);
    /* init component */
    console.log('Constructed with props: %O', props);
  }

  render(params) {
    console.log('rendered with props: %O', params);
    const { match } = params;

    return (
      <div>
        <h1>Nested View</h1>
        <nav className='sub-nav'>
          <div>
            <Link to={`${match.url}/1`}>View 1</Link>
          </div>
          <div>
            <Link to={`${match.url}/2`}>View 2</Link>
          </div>
        </nav>
        <Switch>
          <Route path={`${match.url}/:viewId`} component={new SubView().render} />
        </Switch>
      </div>
    );
  }
}

module.exports = NestedView;
