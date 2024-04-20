import React from 'react';
import { useBearStore } from '../stores/useBearStore';

function BearCounter() {
  // Using Zustand hook to access the bears state from the store
  const bears = useBearStore(state => state.bears);

  return (
    <div>
      <h1>{bears} around here ...</h1>
    </div>
  );
}

export default BearCounter;

