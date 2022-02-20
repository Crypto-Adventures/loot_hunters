import React from 'react';
import './App.css';
import { Provider } from './providers/Provider';

function App() {
  let connected: boolean = false;
  const provider = new Provider();

  React.useEffect(() => {
    if(!connected) {
      provider.connect();
      connected = true;
    }
  }, [connected]);

  return (
    <div className="App">
      <button onClick={() => {provider.getItems()}}>Get Loot</button>
    </div>
  );
}

export default App;