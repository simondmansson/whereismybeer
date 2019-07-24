import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export type OnSubmit = (beverage:string, location:string) => void;
type SearchProps = {
  callback: OnSubmit
}

export const Search: React.FunctionComponent<SearchProps> = ({callback}) => {
  const [ beverage, setBeverage ] = useState<string>('');
  const [ location, setLocation ] = useState<string>('');

  return (
    <Form onSubmit={(e) => {e.preventDefault(); callback(beverage, location); }}>
      <Row>
        <Col md={{size: 'auto'}}>
          <FormGroup>
            <Label htmlFor="beverage-input">Beverage</Label>
            <Input
              id="beverage-input"
              type="text"
              required
              onChange={(e) => setBeverage(e.target.value)}
              autoFocus
            />
          </FormGroup>
        </Col>
        <Col md={{size: 'auto'}}>
          <FormGroup>
            <Label htmlFor="location-input">Location</Label>
            <Input
              id="location-input"
              type="text"
              required
              onChange={(e) => setLocation(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button outline color="secondary" size="lg" type="submit">Search</Button>
    </Form>
  );
}
