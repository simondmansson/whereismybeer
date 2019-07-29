import React, {useEffect, useState} from 'react';
import { StoreMarker } from './SiteMarker';
import {Site } from './Site';
import Loading from './Loading';
import {
    GoogleMapProvider,
    MapBox,
    Marker
  } from '@googlemap-react/core';

export type Coordinate = number;
export type GoogleMapProps = {
    sites: Site[]
};

const GoogleMap: React.FunctionComponent<GoogleMapProps> = ({sites}) => {
    console.log(sites);

    const [center, setCenter] = useState({lat: 55.794841, lng: 13.992352});
    useEffect(() => {
        if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition((position: Position) =>
            setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            }),
        )
    }, []);

    return(
        <GoogleMapProvider>
            <MapBox
                apiKey= "AIzaSyAPXl7MEUJcggKxsTSktz33El38jIWXjik"
                style={{
                    height: '100vh',
                    width: '100%',
                }}
                opts={{
                    center: center,
                    zoom: 14,
                }}
                LoadingComponent={<Loading />}
            />
            <Marker
                id="marker"
                opts={{
                    label: 'You',
                    position: center,
                }}
            />
        {sites.map((site) => <StoreMarker key={site.SiteId} {...site}/>)}

        </GoogleMapProvider>
    );
}

export default GoogleMap;