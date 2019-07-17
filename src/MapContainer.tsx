import React from 'react';
import GMap from './GMap';
import { geolocated, GeolocatedProps } from 'react-geolocated';

const MapContainer: React.FunctionComponent<GeolocatedProps> = ({coords}) => {
  return(
      coords ? <GMap /> : <div></div>
  );
}

export default geolocated({
  userDecisionTimeout: 5000
})(MapContainer);