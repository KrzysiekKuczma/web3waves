import React, { useState } from 'react';
import './App.css';

function App() {
  const [authObject, setAuthObject] = useState<any>({});

  const authData = { data: "This is vawes demo website" }
  const keeperAuth = () => {
    if (WavesKeeper) {
      WavesKeeper.auth(authData)
        .then(auth => {
          setAuthObject(auth)
          console.log(authObject)
        })
        .catch(err => console.log(err))
    } else {
      alert("Please install WavesKeeper to operate on this website");
    }
  }
  const displayAuthData = () => {
    if (authObject) {
      return Object.keys(authObject).map(key => {
        return `${key}: ${authObject[key]}`
      }).join('\n');
    }
    return '';
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">This is a waves initial application</h1>
        <button className="App-button" onClick={keeperAuth}>Click here to use WavesKeeper</button>
        <div className="App-authData">
          {displayAuthData()}
        </div>
      </header>
    </div>
  );
}

export default App;
