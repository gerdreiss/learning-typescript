import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [], total: 0 };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results, total: response.data.total });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '50px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
