import faker from '@faker-js/faker';
import React from 'react';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    this.setState({ lat: faker.address.latitude() });
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
