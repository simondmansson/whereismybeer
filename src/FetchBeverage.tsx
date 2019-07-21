import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { FunctionComponent } from 'react';
import { SearchProps } from './CommonProps';

export const FETCH_BEVERAGE = gql`
    query pSearch($beverage: String!) {
        productSearch(SearchQuery: $beverage){
            ProductId
            ProductNameBold
            Price
            Volume
            AlcoholPercentage
        }
    }
`;

export interface Beverage {
    AlcoholPercentage: number,
    ProductId: number,
    ProductNameBold: string,
    Price: number,
    Volume: number
};

export const FindBeverage:FunctionComponent<SearchProps> = ({ query }) => {
    const { data, error, loading } = useQuery(FETCH_BEVERAGE, {variables: {beverage: query}});

    if (loading) {
      return <div>Loading...</div>;
    };
    if (error) {
      return <div>Error! {error.message}</div>;
    };

    return (
      <ul>
        {data.productSearch.map((product: Beverage) => (
          <li key={product.ProductId}>
          <p>{product.ProductNameBold}</p>
          <p>{ product.Price } kr </p>
          <p>{ product.Volume } ml </p>
          <p>{ product.AlcoholPercentage } % </p>
          </li>
        ))}
      </ul>
    );
}