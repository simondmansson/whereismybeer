
import React from 'react';
import { useState } from 'react';

const Search: React.FC = () => {
  const [ beverage, setBeverage ] = useState<string>('');

  return (
    <form onSubmit={(e) => {e.preventDefault(); }}>
        <input type="text" onChange={(e) => setBeverage(e.target.value)}/>
        <button type="submit">Search</button>
    </form>
  );
}

export default Search;
