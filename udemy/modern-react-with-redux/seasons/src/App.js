import faker from '@faker-js/faker';
import React from 'react';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: faker.address.latitude() };
  }

  render() {
    return (
      <div className="ui container">
        <SeasonDisplay latitude={this.state.lat} />
      </div>
    );
  }
}

export default App;
