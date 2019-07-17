import React, { useState } from 'react';
import './App.css';
import { FindBeverage } from './FetchBeverage';
import { OnSubmit, Search } from './Search';
import MapContainer from './MapContainer'

const App: React.FunctionComponent = () => {
  const [query, setQuery] = useState<string>("");
  const [render, setRender] = useState<boolean>(false);

  const onClick: OnSubmit = (text) => {
    setQuery(text);
    setRender(true);
  };

  return (
    <div className="App">
        <Search callback={onClick}/>
        {render ? <FindBeverage query={query}/> : <span></span> }
        <MapContainer />
    </div>
  );
}

export default App;
