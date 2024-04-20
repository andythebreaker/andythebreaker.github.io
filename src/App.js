import React from 'react';
import BearCounter from './components/BearCounter';
import Controls from './components/Controls';
import { Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div>
      <Header as='h2'>林+霓</Header>
      <h1>Welcome to My Bear Kingdom</h1>
      <BearCounter />
      <Controls />
    </div>
  );
}

export default App;

