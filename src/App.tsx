import React from 'react';
import { Search, OnSubmit} from './Search';
import { useState } from 'react';
import { FindBeverage } from './FetchBeverage';
import { GeolocatedProps, geolocated } from 'react-geolocated';
import './App.css';

const App: React.FunctionComponent<GeolocatedProps> = ({isGeolocationAvailable, isGeolocationEnabled, coords}) => {
  const [query, setQuery] = useState<string>("");
  const [render, setRender] = useState<boolean>(false);

  const onClick: OnSubmit = (text:string) => {
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
