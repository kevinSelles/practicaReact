import "./App.css";

import React, { useState } from "react";
import ShowCount from "./components/showCount/showCount";

function App() {
  const [clicks, setClicks] = useState(0);

  const sum = () => setClicks(clicks + 1);
  const subtract = () => setClicks(clicks - 1);

  return (
    <div className="app-container">
      <ShowCount count={clicks} />

      <div className="buttons-container">
        <button onClick={sum}>Sumar</button>
        <button onClick={subtract}>Restar</button>
      </div>
    </div>
  );
}

export default App;