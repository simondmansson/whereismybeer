import React, { useState } from 'react';

export type OnSubmit = (text:string) => void;
type SearchProps = {
  callback: OnSubmit
}

export const Search: React.FunctionComponent<SearchProps> = ({callback}) => {
  const [ text, setText ] = useState<string>('');

  return (
    <form onSubmit={(e) => {e.preventDefault(); callback(text); }}>
        <input type="text" onChange={(e) => setText(e.target.value)}/>
        <button type="submit">Search</button>
    </form>
  );
}

