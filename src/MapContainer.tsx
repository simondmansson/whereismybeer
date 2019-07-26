import React from 'react';
import GoogleMap from './GoogleMap';
import { geolocated, GeolocatedProps } from 'react-geolocated';
import { SiteMarkerArray } from './SiteMarker';

export interface MapContainerProps {
  sites: SiteMarkerArray
}

const MapContainer: React.FunctionComponent<GeolocatedProps & MapContainerProps> = ({coords, sites}) => {
  return(
      <div>
     {coords ? <GoogleMap coordinates={{latitude: coords.latitude, longitude: coords.longitude}} sites={sites} /> : <div></div>}
      </div>
  );
}

export default geolocated({
  userDecisionTimeout: 500
})(MapContainer);