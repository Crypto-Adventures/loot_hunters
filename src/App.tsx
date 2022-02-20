import React from 'react';
import './App.scss';
import { CharacterSheet } from './components/CharacterSheet/CharacterSheet';
import { Character } from './models/Character';
import { Item } from './models/Item';
import { Provider } from './providers/Provider';

function App() {
  let connected: boolean = false;
  // const provider = new Provider();

  React.useEffect(() => {
    if(!connected) {
      // provider.connect();
      connected = true;
    }
  }, [connected]);

  const equipped: Item[] = [
    {
        "Name": "Barbarian Helmet",
        "Stats": {
            "Strength": 2,
            "Dexterity": 3,
            "Charm": -1,
            "Speed": 1
        },
        "Id": 0
    }
  ]

  const inventory: Item[] = [
    {
        "Name": "Falchion",
        "Stats": {
            "Strength": 1,
            "Dexterity": -1,
            "Charm": 3,
            "Speed": 3
        },
        "Id": 6
    },
    {
        "Name": "Scimitar",
        "Stats": {
            "Strength": 1,
            "Dexterity": -1,
            "Charm": 1,
            "Speed": 2
        },
        "Id": 7
    },
    {
        "Name": "Long Sword",
        "Stats": {
            "Strength": -1,
            "Dexterity": -1,
            "Charm": -2,
            "Speed": -2
        },
        "Id": 8
    },
    {
        "Name": "Short Sword",
        "Stats": {
            "Strength": 0,
            "Dexterity": 0,
            "Charm": -1,
            "Speed": 0
        },
        "Id": 9
    },
    {
        "Name": "Ghost Wand",
        "Stats": {
            "Strength": -2,
            "Dexterity": -1,
            "Charm": -2,
            "Speed": 1
        },
        "Id": 10
    },
    {
        "Name": "Grave Wand",
        "Stats": {
            "Strength": 3,
            "Dexterity": -1,
            "Charm": 3,
            "Speed": -2
        },
        "Id": 11
    },
    {
        "Name": "Bone Wand",
        "Stats": {
            "Strength": -1,
            "Dexterity": -2,
            "Charm": 2,
            "Speed": 0
        },
        "Id": 12
    },
    {
        "Name": "Wand",
        "Stats": {
            "Strength": 2,
            "Dexterity": -1,
            "Charm": 3,
            "Speed": 1
        },
        "Id": 13
    },
    {
        "Name": "Grimoire",
        "Stats": {
            "Strength": 0,
            "Dexterity": 3,
            "Charm": -2,
            "Speed": 0
        },
        "Id": 14
    },
    {
        "Name": "Chronicle",
        "Stats": {
            "Strength": 3,
            "Dexterity": 2,
            "Charm": 1,
            "Speed": -2
        },
        "Id": 15
    },
    {
        "Name": "Tome",
        "Stats": {
            "Strength": 1,
            "Dexterity": -2,
            "Charm": 0,
            "Speed": 1
        },
        "Id": 16
    },
    {
        "Name": "Book",
        "Stats": {
            "Strength": -2,
            "Dexterity": 2,
            "Charm": 1,
            "Speed": 3
        },
        "Id": 17
    },
    {
        "Name": "Divine Robe",
        "Stats": {
            "Strength": 3,
            "Dexterity": -2,
            "Charm": 0,
            "Speed": 1
        },
        "Id": 18
    },
    {
        "Name": "Silk Robe",
        "Stats": {
            "Strength": 0,
            "Dexterity": -2,
            "Charm": -2,
            "Speed": -1
        },
        "Id": 19
    }
  ]

  const temp_character: Character = {
    Name: 'Zac Efron in a Basketball Jersey',
    Stats: {
      Strength: 3,
      Dexterity: 8,
      Charm: 2,
      Speed: 5
    },
    Inventory: inventory,
    Equipped: equipped,
    Health: 100
  }

  return (
    <div className="App">
      <div className="Title">Crypto Adventures</div>
      {/* <button onClick={() => {provider.getItems()}}>click me</button> */}
        <CharacterSheet Character={temp_character}/>
    </div>
  );
}

export default App;