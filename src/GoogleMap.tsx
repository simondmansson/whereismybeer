import React from 'react';
import { SiteMarkerArray } from './SiteMarker';
import Loading from './Loading';
import {
    GoogleMapProvider,
    MapBox,
    Marker
  } from '@googlemap-react/core';

export type Coordinate = number;
export type GoogleMapProps = {
    sites: SiteMarkerArray
    coordinates: {
        latitude: Coordinate,
        longitude: Coordinate
    }
};

const GoogleMap: React.FunctionComponent<GoogleMapProps> = ({coordinates, sites}) => {
    return(
        <GoogleMapProvider>
            <MapBox
                apiKey= {process.env.MAPSAPIKEY}
                style={{
                    height: '100vh',
                    width: '100%',
                }}
                opts={{
                    center: {lat: coordinates.latitude, lng: coordinates.longitude},
                    zoom: 14,
                }}
                LoadingComponent={<Loading />}
            />
            <Marker
                id="marker"
                opts={{
                    label: 'You',
                    position: {
                        lat: coordinates.latitude,
                        lng: coordinates.longitude
                    },
                }}
            />
            sites
        </GoogleMapProvider>
    );
}

export default GoogleMap;