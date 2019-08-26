import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ marker }) => <div className="marker">{ marker }</div>;

class Map extends Component {

  render() {
    // console.log(this.props);
    // console.log(this.props);
    const coord = {lat: 48.885312,
        lng: 2.341225};
    return (
      <div style={{ height: '100vh', width: '100vh' }}>
        <GoogleMapReact
          boostrapURLKeys={{ key: 'AIzaSyBbB4_nEn3yt473-qV1RjuyGrDblto2ieo' }}
          defaultCenter={coord}
          defaultZoom={11}
        >
          <Marker
            lat={this.props.coord.lat}
            lng={this.props.coord.lng}
            marker="my marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}


export default Map;
//AIzaSyBbB4_nEn3yt473-qV1RjuyGrDblto2ieo
