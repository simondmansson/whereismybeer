import React from 'react';
import Search from './Search';
import {Drinks } from './FetchBeverage.js';
import './App.css';

const App: React.SFC = () => {
  return (
    <div className="App">
        <Search />
        <Drinks />
    </div>
  );
}

export default App;
