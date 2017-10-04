import React from 'react';

class SubView extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructing view 1');
  }
  render(data) {
    console.log('rendered with props: %O', data);
    const { match } = data;

    return (
      <div>
        <h2>SubView {match.params.viewId}</h2>
        <p>
          Nullam gravida, neque et elementum congue, magna massa aliquam mi, eget tincidunt lacus leo ut ante. Vestibulum vitae diam justo. Fusce porttitor massa tortor, eu pharetra lacus porta id. Sed consequat, ipsum aliquet pretium pellentesque, odio lacus porta neque, eu egestas ex purus vel nisl. Donec commodo eget felis a ornare. Phasellus eu aliquam justo, non tempor urna. Ut in erat tortor. Etiam vitae nisi lacus. Nunc velit sem, ultrices non pellentesque id, bibendum sit amet dolor.
        </p>
      </div>
    );
  }
}

module.exports = SubView;