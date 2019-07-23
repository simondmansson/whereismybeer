import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { FunctionComponent } from 'react';
import { SearchProps } from './CommonProps';
import {
  Card,
  CardText,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button } from 'reactstrap';
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
      <Row>
        {data.productSearch.map((product: Beverage) => (
          <Col sm={{size: 'auto'}} key={product.ProductId}>
          <Card>
              <CardHeader>{product.ProductNameBold}</CardHeader>
            <CardBody>
              <CardText>{ product.Price } kr </CardText>
              <CardText>{ product.Volume } ml </CardText>
              <CardText>{ product.AlcoholPercentage } % </CardText>
            </CardBody>
          </Card>
          </Col>
        ))}
      </Row>
    );
}