import React from 'react';
import { Site } from './FetchSite';
import {
    Marker,
    InfoWindow
  } from '@googlemap-react/core';

export interface SiteMarker {};
export type SiteMarkerArray = Array<SiteMarker>;

export const StoreMarker: React.FunctionComponent<Site> & SiteMarker = ({siteId, name, address, openingHours, position}) => {
    return(
        <div id={siteId}>
            <Marker
                id={siteId}
                opts={{
                    position: {
                        lat: position.lat,
                        lng: position.long
                    }
                }}
            />
            <InfoWindow
                anchorId={siteId}
                opts={{
                    content: `${name}\nAddress: ${address}\nHours:${openingHours}`
                }}
                visible
            />
        </div>
    );
}
