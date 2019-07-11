
import React from 'react';
import { useState } from 'react';

const Search: React.SFC = () => {
  const [ beverage, setBeverage ] = useState<string>('');
  return (
    <form onSubmit={() => alert(beverage)}>
        <input onChange={(e) => setBeverage(e.target.value)}/>
        <button type="submit">Search</button>
    </form>
  );
}

export default Search;
