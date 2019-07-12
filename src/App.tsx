import React from 'react';
import { Search, OnSubmit} from './Search';
import { useState } from 'react';
import { FindBeverage } from './FetchBeverage';
import './App.css';

const App: React.SFC = () => {
  const [query, setQuery] = useState<string>("");
  const [render, setRender] = useState<boolean>(false);

  const onClick: OnSubmit = (text:string) => {
    setQuery(text);
    setRender(true);
  };

  return (
    <div className="App">
        <Search callback={onClick}/>
        {render ? <FindBeverage query={query}/> :<span></span> }
    </div>
  );
}

export default App;
