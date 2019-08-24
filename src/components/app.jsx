import React, { Component } from 'react';

import FlatList from './flat_list';
import Map from './map';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: {
        lat: 48.885312,
        lng: 2.341225
      }
    };
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: {
        lat: flat.lat,
        lng: flat.lng
      }
    });
  }

  render() {
    return (
      <div>
        <FlatList flats={flats} selectFlat={this.selectFlat} />
        <div className="map-container">
          <Map coord={this.state.selectedFlat} />
        </div>
      </div>
    );
  }
}

export default App;
