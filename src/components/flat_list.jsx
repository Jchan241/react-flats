import React from 'react';

import Flat from './flat';

const FlatList = ({ flats, selectFlat }) => {
  // console.log(flats);
  return (
    <div className="flat-list">
      {flats.map(flat => <Flat flat={flat} key={flat.name} selectFlat={selectFlat}/>)}
    </div>
  );
};

export default FlatList;
