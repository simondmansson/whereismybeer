import React from 'react';
import { Site } from './Site';
import {
    Marker,
    InfoWindow
  } from '@googlemap-react/core';

export const StoreMarker: React.FunctionComponent<Site> = ({SiteId, Name, Address, OpeningHours, Position}) => {
    return(
        <>
            <Marker
                id={SiteId}
                opts={{
                    position: {
                        lat: Position.Lat,
                        lng: Position.Long
                    }
                }}
            />
            <InfoWindow
                anchorId={SiteId}
                opts={{
                    content: `${Name}\nAddress: ${Address}\nHours:${OpeningHours}`
                }}
                visible
            />
        </>
    );
}
