import React from 'react';
import {
    GoogleMapProvider,
    InfoWindow,
    MapBox,
    Marker,
  } from '@googlemap-react/core'

export type Coordinate = number;
export type CoordinateProps = {
    Coordinates: {
        latitude: Coordinate,
        longitude: Coordinate
    }
};

const GoogleMap: React.FunctionComponent<CoordinateProps> = ({Coordinates}) => {
    return(
        <GoogleMapProvider>
            <MapBox
                apiKey= {process.env.MAPSAPIKEY}
                style={{
                    height: '100vh',
                    width: '100%',
                }}
                opts={{
                    center: {lat: Coordinates.latitude, lng: Coordinates.longitude},
                    zoom: 14,
                }}
                LoadingComponent={<p>Loading...</p>}
            />
            <Marker
                id="marker"
                opts={{
                    label: 'You',
                    position: {
                        lat: Coordinates.latitude,
                        lng: Coordinates.longitude
                    },
                }}
            />
        </GoogleMapProvider>
    );
}

export default GoogleMap;