import React from 'react';
import { Map,
    InfoWindow,
    Marker,
    GoogleApiWrapper,
    MapProps,
    InfoWindowProps,
    MarkerProps  } from 'google-maps-react';

type Coords = {
    latitude: number,
    longitude: number
}
const GMap: React.FunctionComponent<MapProps> = ({google}) => {
    return(
            <Map
                google={google}
                initialCenter={{
                    lat: 55,
                    lng: 55
                }}
            />
    );
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDiptHqalHCAQN9u3xveB855L58uIDQKUg"
})(GMap);