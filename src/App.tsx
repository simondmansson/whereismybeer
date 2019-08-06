import React, { useState } from 'react';
import './App.css';
import { FindBeverage } from './FetchBeverage';
import { FindSites } from './FetchSite'
import { OnSubmit, Search } from './Search';
import githubIcon from './GitHub-Mark-Light-64px.png'

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
        <section id="header">
          <h1>
            Bolaget Drink Finder
          </h1>
          <Search callback={onClick}/>
        </section>
        { render ?
            <section>
              <FindBeverage query={beverage} />
              <FindSites query={location} />
            </section>
          :
            <div className="no-content"></div>
        }
        <section className="bottom" id="footer">
          <a className="github-icon" href="https://github.com/Kalk88/whereismybeer">
            <img src={githubIcon} title="github icon" alt="github icon white"/>
          </a>
        </section>
    </div>
  );
}

export default App;
