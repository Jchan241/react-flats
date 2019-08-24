import React, { Component } from 'react';

class Flat extends Component {
  handleClick = (event) => {
    const selectedFlat = {
      lat: parseFloat(event.target.dataset.lat, 10),
      lng: parseFloat(event.target.dataset.lng, 10)
    };
    this.props.selectFlat(selectedFlat);
    // const a = this;
    // console.log(this);
    // console.log(event.target.dataset.lat);
    // console.log(event.target.dataset.lng);
  }

  render() {
    const flat = this.props.flat;
    const coord = {
      lat: flat.lat,
      lng: flat.lng
    };
    // console.log(coord.lat);
    const style = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${flat.imageUrl}` };
    return (
      <div className="card" style={style}>
        <div className="card-category">{ flat.price + ' ' + flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{ flat.name }</h2>
        </div>
        <a href="#" className="card-link" data-lat={coord.lat} data-lng={coord.lng} onClick={this.handleClick}></a>
      </div>
    );
  }
}

export default Flat;
