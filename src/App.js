import React from 'react';
import BearCounter from './components/BearCounter';
import Controls from './components/Controls';
import { Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import MainDisplay from './components/MainDisplay';

function App() {
  return (
    <div>
      <Header as='h2'>林+霓</Header>
      <h1>Welcome to My Bear Kingdom</h1>
      <BearCounter />
      <Controls />
      <MainDisplay></MainDisplay>
    </div>
  );
}

export default App;

