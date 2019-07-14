import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { geolocated, GeolocatedProps } from 'react-geolocated';

const GMap: React.FunctionComponent<GeolocatedProps> = () => {
    return(
        <div>h</div>
    );
}

export default geolocated({
  userDecisionTimeout: 5000
})(GMap);