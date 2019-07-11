import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const FETCH_BEVERAGE = gql`
    query pSearch($beverage: String!) {
        productSearch(SearchQuery: $beverage){
            ProductId
            ProductNameBold
            Price
        }
    }
`;
/*
export interface Beverage {
    ProductId: number,
    ProductNameBold: string,
    Price: number
};
*/
export const Drinks = () => {
    const { data, error, loading } = useQuery(FETCH_BEVERAGE, {variables: {beverage: "Tuborg"}});
    if (loading) {
      return <div>Loading...</div>;
    };
    if (error) {
      return <div>Error! {error.message}</div>;
    };

    return (
      <ul>
        {data.productSearch.map(product => (
          <li key={product.ProductId}>
          <p>{product.ProductNameBold}</p>
          <p>{ product.Price } kr </p>
          </li>
        ))}
      </ul>
    );
}