import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <br />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
