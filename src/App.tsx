import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import MouseTracker from './components/MouseTracker';
import TankMovePosition from './hook/TankMovePosition';

const App: React.FC = () => {
  const [ show, setShow ] = useState(false)
  const positions = TankMovePosition()

  return (
    <div className="App">
      <Counter />

      <br /><br />
      <button
        onClick={ () => { setShow(!show) }}
      >
        Toggle Tracker
      </button>
      { show && <MouseTracker /> }

      <h2>x: {positions.x} y:{positions.y}</h2>
    </div>
  );
}

export default App;
