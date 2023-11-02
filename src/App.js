import React, { useState } from 'react';

const CenteredBox = () => {
  const [inputName, setInputName] = useState('');
  const [output, setOutput] = useState('');

  const characterToNumberMap = [
    { characters: 'aijqy', number: '1' },
    { characters: 'bkr', number: '2' },
    { characters: 'cgls', number: '3' },
    { characters: 'dmt', number: '4' },
    { characters: 'ehnx', number: '5' },
    { characters: 'uvw', number: '6' },
    { characters: 'oz', number: '7' },
    { characters: 'fp', number: '8' },
  ];

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const reset = ()=>{
    setInputName("");
    setOutput("");
  }
  const calculateOutput = () => {
    const name = inputName.toLowerCase();
    let result = '';

    for (let i = 0; i < name.length; i++) {
      const char = name[i];
      const mapping = characterToNumberMap.find(item => item.characters.includes(char));
      if (mapping) {
        result += mapping.number;
      }
    }

    setOutput(result);
  };

  const centeredBoxStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const buttonContainerStyles = {
    display: 'flex',
    flexDirection: 'row', 
    gap: '10px',
  };

  const buttonStyles = {
    backgroundColor: '#0074cc',
    color: '#fff',
    border: 'none',
    padding: '5px 5px',
    cursor: 'pointer',
  };

  return (
    <div style={centeredBoxStyles}>
      <h1>Name Calculator</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputName}
        onChange={handleNameChange}
        style={{ margin: '10px', padding: '5px' }}
      />
      <div style={buttonContainerStyles}>
        <button onClick={calculateOutput} style={buttonStyles}>
          Calculate
        </button>
        <button onClick={reset} style={buttonStyles}>
          Reset
        </button>
      </div>
      <p>Output: {output}</p>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <CenteredBox />
    </div>
  );
}

export default App;
