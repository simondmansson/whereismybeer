import React, { useState } from 'react';
import { geolocated, GeolocatedProps } from 'react-geolocated';
import './App.css';
import { FindBeverage } from './FetchBeverage';
import { OnSubmit, Search } from './Search';

const App: React.FunctionComponent<GeolocatedProps> = ({isGeolocationAvailable, isGeolocationEnabled, coords}) => {
  const [query, setQuery] = useState<string>("");
  const [render, setRender] = useState<boolean>(false);

  const onClick: OnSubmit = (text) => {
    setQuery(text);
    setRender(true);
  };

  return (
    <div className="App">
        {
          coords ? <p>{coords.latitude }</p> : <p></p>
        }
        <Search callback={onClick}/>
        {render ? <FindBeverage query={query}/> : <span></span> }
    </div>
  );
}

export default geolocated({
  userDecisionTimeout: 5000
})(App);
