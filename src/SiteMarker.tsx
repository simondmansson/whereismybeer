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
                    content: `<div>
                                <h6> ${Name} </h6>
                                <p> <b>Address:</b> ${Address} </p>
                                <p> <b>Hours:</b> ${OpeningHours} </p>
                              </div>`
                }}
                visible
            />
        </>
    );
}
