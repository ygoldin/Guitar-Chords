import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GuitarChords } from "./app/GuitarChords";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GuitarChords />
      </header>
    </div>
  );
}

export default App;
