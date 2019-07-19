import React from 'react';
import GoogleMap from './GoogleMap';
import { geolocated, GeolocatedProps } from 'react-geolocated';

const MapContainer: React.FunctionComponent<GeolocatedProps> = ({coords}) => {
  return(
      <div>
      { coords ? <p>{coords.latitude} {coords.longitude}</p> : <p></p> }
      {coords ? <GoogleMap Coordinates={{latitude: coords.latitude, longitude: coords.longitude}}  /> : <div></div>}
      </div>
  );
}

export default geolocated({
  userDecisionTimeout: 500
})(MapContainer);