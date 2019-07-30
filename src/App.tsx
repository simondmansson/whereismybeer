import React, { useState } from 'react';
import './App.css';
import { FindBeverage } from './FetchBeverage';
import { FindSites } from './FetchSite'
import { OnSubmit, Search } from './Search';

const App: React.FunctionComponent = () => {
  const [beverage, setBeverage] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [render, setRender] = useState<boolean>(false);

  const onClick: OnSubmit = (beverage, location) => {
    setBeverage(beverage);
    setLocation(location);
    setRender(true);
  };

  return (
    <div className="App" id="grid">
        <Search callback={onClick}/>
        { render ?
            <section>
              <FindBeverage query={beverage} />
              <FindSites query={location} />
            </section>
          :
            <div></div>
        }
    </div>
  );
}

export default App;
