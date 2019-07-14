import React from 'react';
import { Map,
    InfoWindow,
    Marker,
    GoogleApiWrapper,
    MapProps,
    InfoWindowProps,
    MarkerProps  } from 'google-maps-react';
import { geolocated, GeolocatedProps } from 'react-geolocated';

const GMap: React.FunctionComponent<GeolocatedProps & MapProps & InfoWindowProps & MarkerProps> = ({google, coords}) => {
    return(
        coords ?
            <Map
                google={google}
                initialCenter={{
                    lat: coords.latitude,
                    lng: coords.longitude
                }}
            />
        : <Map google={google}/>
    );
}

export default GoogleApiWrapper({
    apiKey: ""
})
geolocated({
  userDecisionTimeout: 5000
})(GMap);