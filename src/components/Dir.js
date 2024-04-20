import React from 'react';
import { usePathStore } from '../stores/usePathStore';

function Dir() {
  // Using Zustand hook to access the bears state from the store
  const bears = usePathStore(state => state.bears);

  return (
    <div>
      <h1>{bears} around here ...</h1>
    </div>
  );
}

export default Dir;