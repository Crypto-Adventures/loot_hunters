import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from './providers/Provider';


function App() {

  const provider = new Provider();


  return (
    <div className="App">
      <button onClick={() => {provider.getItems()}}>Get Loot</button>
      <button onClick={() => {provider.getItems()}}>Get Todos</button>
    </div>
  );
}

export default App;
