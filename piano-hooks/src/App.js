// import React, { useEffect, useState } from "react";
import "./App.css";
import Piano from "./core/Piano";
import mainPicture from "./img/background.png";
import secretPicture from "./img/secret.gif"

function App() {
  return (
      <div className="app-container">
          <div className="secret-gif">
              <img src={secretPicture} alt="small secret"/>
          </div>
          <div className="main-image">
              <img src={mainPicture} alt='super earth'/>
          </div>
        <Piano />
      </div>
  );
}

export default App;