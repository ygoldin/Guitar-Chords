import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChordDropdown } from "./app/ChordDropdown";
import { GuitarOutline } from "./app/GuitarOutline/GuitarOutline";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChordDropdown />
        <GuitarOutline numFrets={6} />
      </header>
    </div>
  );
}

export default App;
