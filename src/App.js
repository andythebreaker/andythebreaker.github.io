import React from 'react';
import { Menu,MenuItem,activeItem ,Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import MainDisplay from './components/MainDisplay';
import { useBearStore } from './stores/useBearStore';

function App() {
  const bears = useBearStore(state => state.bears);
  const setBear=useBearStore(state => state.setBear);
  return (
    <div>
      <Container>
      <Menu fluid widths={3}>
        <MenuItem
          name='about me'
          active={bears === 0}
          onClick={()=>{setBear(0)}}
        />
        <MenuItem
          name='project'
          active={bears === 1}
          onClick={()=>{setBear(1)}}
        />
        <MenuItem
          name='blog'
          active={bears === 2}
          onClick={()=>{setBear(2)}}
        />
      </Menu>
      <MainDisplay></MainDisplay>
      </Container>
    </div>
  );
}

export default App;

