import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { FunctionComponent } from 'react';
import { SearchProps } from './CommonProps';
import MapContainer from './MapContainer';
import Loading from './Loading';
import { Site } from './Site';

export const FETCH_SITES = gql`
    query sSearch($city: String!) {
        siteSearch(SearchQuery: $city) {
          SiteId
          Name
          Address
          OpeningHours
          Position {
            Lat
            Long
          }
        }
    }
`;



export const FetchSites:FunctionComponent<SearchProps> = ({ query }) => {
    const { data, error, loading } = useQuery(FETCH_SITES, {variables: { city: query }});

    if (loading) {
      return <Loading />
    };
    if (error) {
      return <div>Error! {error.message}</div>;
    };

    let sites:Site[] = data.siteSearch;
    return (
      <MapContainer sites={sites} />
    );
}