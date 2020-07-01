import React from 'react';
import { Row } from "./misc/index";
import Top from "./components/Top";
import Matches from "./components/Matches";
import Playes from "./components/Players";
import Games from "./components/Games";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Row><Top /></Row>
      <Matches />
      <Playes />
      <Games />
    </div>
  );
}

export default App;
