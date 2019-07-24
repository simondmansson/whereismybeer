import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { FunctionComponent } from 'react';
import {SearchProps} from './CommonProps';
import MapContainer from './MapContainer';
import Loading from './Loading';

export const FETCH_SITES = gql`
    query sSearch($city: String!) {
        siteSearch(SearchQuery: $city){
          SiteId
          Name
          Address
          OpeningHours
          Position
        }
    }
`;

type Position = {
  Long: number,
  Lat: number
}

export interface Site {
  siteId: string,
  name: string,
  address: string
  openingHours: string,
  position: Position
};

export const FindSites:FunctionComponent<SearchProps> = ({ query }) => {
    const { data, error, loading } = useQuery(FETCH_SITES, {variables: { city: query }});

    if (loading) {
      return <Loading />
    };
    if (error) {
      return <div>Error! {error.message}</div>;
    };

    return (
      <MapContainer locations={data}/>
    );
}