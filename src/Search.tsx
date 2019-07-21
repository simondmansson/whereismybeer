import React, { useState } from 'react';

export type OnSubmit = (beverage:string, location:string) => void;
type SearchProps = {
  callback: OnSubmit
}

export const Search: React.FunctionComponent<SearchProps> = ({callback}) => {
  const [ beverage, setBeverage ] = useState<string>('');
  const [ location, setLocation ] = useState<string>('');

  return (
    <form onSubmit={(e) => {e.preventDefault(); callback(beverage, location); }}>
        <label htmlFor="beverage-input">wut drink u look 4</label>
        <input
          id="beverage-input"
          type="text"
          required
          onChange={(e) => setBeverage(e.target.value)}
          autoFocus
        />
        <label htmlFor="location-input">Where u wanna look?</label>
        <input
          id="location-input"
          type="text"
          required
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Search</button>
    </form>
  );
}

