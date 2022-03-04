import React from "react";
import "../styles/App.css";
import AddTask from "./AddTask";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hauze</h2>
        <AddTask />
      </header>
    </div>
  );
};

export default App;
