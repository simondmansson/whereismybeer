import React from 'react';
import GoogleMap from './GoogleMap';
import { Site } from './Site';

export interface MapContainerProps {
  sites: Site[]
}

const MapContainer: React.FunctionComponent<MapContainerProps> = ({sites}) => {
  return(
      <div id="map-container">
        <GoogleMap sites={sites} />
      </div>
  );
}

export default MapContainer;