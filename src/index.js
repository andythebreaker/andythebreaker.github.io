import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Header,Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container>
      <Header as='h1'>andythebreaker's website</Header>
    </Container>
    <App />
  </React.StrictMode>
);
