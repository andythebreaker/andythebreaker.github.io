import React from 'react';
import { useBearStore } from '../stores/useBearStore';

function Controls() {
  // Using Zustand hook to access the increasePopulation action from the store
  const increasePopulation = useBearStore(state => state.increasePopulation);
  const removeAllBears = useBearStore(state => state.removeAllBears);
  const setBearNumber=useBearStore(state=>state.setBearNumber);
  return (
    <div>
      <button onClick={increasePopulation}>One up</button>
      <button onClick={removeAllBears}>zero</button>
      <button onClick={()=>{setBearNumber(48)}}>set48</button>
    </div>
  );
}

export default Controls;

