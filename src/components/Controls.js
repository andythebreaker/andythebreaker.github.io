import React from 'react';
import { useBearStore } from '../stores/useBearStore';

function Controls() {
  // Using Zustand hook to access the increasePopulation action from the store
  const increasePopulation = useBearStore(state => state.increasePopulation);

  return (
    <div>
      <button onClick={increasePopulation}>One up</button>
    </div>
  );
}

export default Controls;

