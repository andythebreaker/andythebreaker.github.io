import React from 'react';
import { Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import MainDisplay from './components/MainDisplay';

function App() {
  return (
    <div>
      <Header as='h2'>林+霓</Header>
      <MainDisplay></MainDisplay>
    </div>
  );
}

export default App;

